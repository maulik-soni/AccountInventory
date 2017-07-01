<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Purchase;
use \App\PurchaseReturn;

class purchaseConroller extends Controller
{
    public function newPurchaseEntry(){
        $new_purchase = Request::all();
        //print_r($new_purchase);
        $purchase = new \App\Purchase;
        foreach ($new_purchase as $fields=>$value) {
            // var_dump($fields);
            // echo "<br>";
            // var_dump($value);
            if($fields != "sr_no" && $fields != "brokerName" && $fields != "brokerType" && $fields != "brokerage" && $fields != "taxes"){            
                $purchase->$fields = $new_purchase[$fields];                   
            }
        }
        $purchase->save();
    }   

    public function purchaseReport(Request $request){
        if($request->has('staticdata')){
             $alldata=Purchase::getData();
            $title=['PCS_ID','invoice_number','due_date','payment_terms'];
            $data=Purchase::select($title)->get();
            return response()->json(['titles'=>$title,'data'=>$data],201);

        }
        // $params = Request::all();
        // $purchase = new \App\Purchase;
        // if(!empty($params['limit']) && !empty($params['lastid'])){
        //     $purchase_data = Purchase::all()->where('sr_no','>',$params['lastid'])->take($params['limit']);
        // }else if(!empty($params['limit'])){
        //     $purchase_data = Purchase::all()->take($params['limit']);
        // }else if(!empty($params['lastid'])){
        //     $purchase_data = Purchase::all()->where('sr_no','>',$params['lastid']);
        // }else if(!empty($params['pcsid'])){
        //     $purchase_data = Purchase::all()->where('PCS_ID','=',$params['pcsid']);
        // }else{
        //     $purchase_data = Purchase::all();
        // }
        // return $purchase_data;
        
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
        // print_r(Request::all()[0]);
        $PR_pcsid = Request::all()[0];
        $purchase = new \App\Purchase;
        $purchase_return = new \App\PurchaseReturn;
        $PR_data = Purchase::where('PCS_ID','=',$PR_pcsid)->get()->toArray();
        foreach ($PR_data[0] as $fields => $value) {
            $purchase_return->$fields = $PR_data[0][$fields];
        }
        $purchase_return->save();
        Purchase::where('PCS_ID','=',$PR_pcsid)->delete();
    }

     public function purchaseReturnReport(){
        $params = Request::all();
        $purchase_return = new \App\PurchaseReturn;
        $purchase_data = PurchaseReturn::all();
        return $purchase_data;
    }

}