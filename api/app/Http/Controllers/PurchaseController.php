<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use \App\Purchase;
use \App\PurchaseReturn;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function newPurchaseEntry(){
        $new_purchase = Request::all();
        $purchase = new \App\Purchase;
        DB::table('purchase')->insert($new_purchase);
    }

    public function purchaseReport(Request $request){
        $params = Request::all();
        // print_r($params);exit;
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

    public function purchaseReturnFromDB($pcsID){
        
        $PR_pcsid = $pcsID;
        
        $purchase = new \App\Purchase;
        $purchase_return = new \App\PurchaseReturn;
        $PR_data = Purchase::where(function($query) use($PR_pcsid){
            $query->where('PCS_ID', '=', $PR_pcsid)
                  ->orWhere('diamond_lot_number', '=', $PR_pcsid);
        })->first()->toArray();
        
        foreach ($PR_data as $fields => $value) {
            if($fields != "sr_no")
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

    public function show(){
        $params = Request::all();
        $purchase = new \App\Purchase;
        if(!empty($params['staticdata'])){
            if($params['reportType'] == "report"){
                $purchase_data = Purchase::all();
            }else
                $purchase_data = PurchaseReturn::all();
            return response()->json($purchase_data,200);
        }
        if(!empty($params['filterby'])){

            if(!empty($params['search'])){
                if($params['filterby']=='PCS ID'){
                    if($params['reportType'] == "report"){
                        $response=Purchase::where('PCS_ID',$params['search'])->get();
                    }else
                        $response=PurchaseReturn::where('PCS_ID',$params['search'])->get();
                    return response()->json($response,200);
                }
                if($params['filterby']=='Invoice Number'){
                    if($params['reportType'] == "report"){
                        $response=Purchase::where('invoice_number',$params['search'])->get();
                    }else
                        $response=PurchaseReturn::where('invoice_number',$params['search'])->get();
                   return response()->json($response,200);
                }
                if($params['filterby']=='Party Name'){
                    if($params['reportType'] == "report"){
                        $response=Purchase::where('account_name',$params['search'])->get();
                    }else
                        $response=PurchaseReturn::where('account_name',$params['search'])->get();
                   return response()->json($response,200);
                }
            }

            if($params['fromdate'] || $params['todate']){
                if($params['reportType'] == "report"){
                    $response=Purchase::whereBetween('purchase_date',[$params['fromdate'],$params['todate']])->get();
                }else
                    $response=PurchaseReturn::whereBetween('purchase_date',[$params['fromdate'],$params['todate']])->get();
                    return response()->json($response,200);
            }
            
        }
        if(!empty($params['filter'])){
            if($params['filter']=='all'){
                if($params['reportType'] == "report"){
                    $purchase_data = Purchase::all();
                }else
                    $purchase_data = PurchaseReturn::all();
                return response()->json($purchase_data,200);
            }
        }
        
    }

    public function search(Request $request){
        $query=Request::all();
        
        foreach($query as $key=>$value){            
            if($key != 'reportType'){
                $q = $key; 
            }
        }
        
        if(!empty($q)){
            if($query['reportType'] == "report"){
                $store=Purchase::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            }else
                $store=Purchase::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            return response()->json($store,200);
        }
        return response()->json([],200);
    }

    public function purchaseReturn(){
        $PR_pcsid = Request::all();
        // print_r($PR_pcsid);
        for($i = 0; $i<count($PR_pcsid); $i++){
            $this->purchaseReturnFromDB($PR_pcsid[$i]);
        }
    }

}