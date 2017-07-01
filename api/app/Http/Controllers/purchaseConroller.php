<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use \App\Purchase;
use \App\PurchaseReturn;
use Illuminate\Support\Facades\DB;

class purchaseConroller extends Controller
{
    public function newPurchaseEntry(){
        $new_purchase = Request::all();
        $purchase = new \App\Purchase;
        DB::table('purchase')->insert($new_purchase);
    }

    public function purchaseReport(Request $request){
        $params = Request::all();
        $purchase = new \App\Purchase;
        if(!empty($params['limit']) && !empty($params['lastid'])){
            $purchase_data = Purchase::all()->where('sr_no','>',$params['lastid'])->take($params['limit']);
        }else if(!empty($params['limit'])){
            $purchase_data = Purchase::all()->take($params['limit']);
        }else if(!empty($params['lastid'])){
            $purchase_data = Purchase::all()->where('sr_no','>',$params['lastid']);
        }else if(!empty($params['pcsid'])){
            $purchase_data = Purchase::all()->where('PCS_ID','=',$params['pcsid']);
        }else if(!empty($params['lot_number'])){
            $purchase_data = Purchase::all()->where('diamond_lot_number','=',$params['lot_number']);
        }else{
            $purchase_data = Purchase::all();
        }
        return $purchase_data;
        
    }

    public function editPurchase(){
        $newpurchase = Request::all();
        $purchase = new \App\Purchase;
        $purchase = Purchase::find($newpurchase['PCS_ID']);
        foreach ($newpurchase as $fields) {
            if($fields != "PCS_ID"){
                $purchase->$fields = $newpurchase[$fields];
            }
        }
        $purchase->save();
    }

    public function delPurchase(){
        $data = Request::all(); 
        $purchase = new \App\Purchase;
        Purchase::where('PCS_ID', '=', $data['PCS_ID'])->delete();
    }

    public function purchaseReturn(){
        print_r(Request::all());
        $PR_pcsid = Request::all()[0];
        $purchase = new \App\Purchase;
        $purchase_return = new \App\PurchaseReturn;
        $PR_data = Purchase::where(function($query) use($PR_pcsid){
            $query->where('PCS_ID', '=', $PR_pcsid)
                  ->orWhere('diamond_lot_number', '=', $PR_pcsid);
        })->first()->toArray();
        
        foreach ($PR_data as $fields => $value) {
            $purchase_return->$fields = $PR_data[$fields];
        }
        $purchase_return->save();
        Purchase::where(function($query) use($PR_pcsid){
            $query->where('PCS_ID', '=', $PR_pcsid)
                  ->orWhere('diamond_lot_number', '=', $PR_pcsid);
        })->first()->delete();
    }

     public function purchaseReturnReport(){
        $params = Request::all();
        $purchase_return = new \App\PurchaseReturn;
        $purchase_data = PurchaseReturn::all();
        return $purchase_data;
    }

}