<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Request;
use \App\Sales;
use \App\Purchase;
use \App\SalesReturn;
use Illuminate\Support\Facades\DB;

class salesConroller extends Controller
{
    public function newSalesEntry(){
        $new_sales = Request::all();
        // print_r($new_sales);
        $sales = new \App\Sales;
        $purchase = new \App\Purchase;
        // foreach ($new_sales as $fields=>$value) {
        //     if($fields != "sr_no" && $fields != "brokerName" && $fields != "brokerType" && $fields != "brokerage" && $fields != "taxes"){                 
        //         $sales->$fields = $new_sales[$fields];
        //     }
        // }        
        // $sales->save();
        DB::table('sales')->insert($new_sales);
        for($i=0; $i<count($new_sales); $i++){
            Purchase::where('PCS_ID','=',$new_sales[$i]['PCS_ID'])->delete();
        }
        

    }   

    public function salesReport(Request $request){
        $params = Request::all();
        $sales = new \App\Sales;
        if(!empty($params['limit']) && !empty($params['lastid'])){
            $sales_data = Sales::all()->where('sr_no','>',$params['lastid'])->take($params['limit']);
        }else if(!empty($params['limit'])){
            $sales_data = Sales::all()->take($params['limit']);
        }else if(!empty($params['lastid'])){
            $sales_data = Sales::all()->where('sr_no','>',$params['lastid']);
        }else if(!empty($params['pcsid'])){
            $sales_data = Sales::all()->where('PCS_ID','=',$params['pcsid']);
        }else{
            $sales_data = Sales::all();
        }
        return $sales_data;
    }

    public function editSales(){
        $newsales = Request::all();
        $sales = new \App\Sales;
        $sales = Sales::find($newsales['PCS_ID']);
        foreach ($newsales as $fields) {            
            if($fields != "PCS_ID"){
                $sales->$fields = $newsales[$fields];       
            }
        }
        $sales->save();
    }

    public function delSales(){
        $data = Request::all(); 
        $sales = new \App\Sales;
        Sales::where('PCS_ID', '=', $data['PCS_ID'])->delete();
    }

    public function salesReturn(){
        print_r(Request::all()[0]);
        $SR_pcsid = Request::all()[0];
        $sales = new \App\Sales;
        $sales_return = new \App\SalesReturn;
        $SR_data = Sales::where(function($query) use($SR_pcsid){
            $query->where('PCS_ID', '=', $SR_pcsid)
                  ->orWhere('diamond_lot_number', '=', $SR_pcsid);
        })->first()->toArray();
        foreach ($SR_data as $fields => $value) {
            $sales_return->$fields = $SR_data[$fields];
        }
        $sales_return->save();
        Sales::where(function($query) use($SR_pcsid){
            $query->where('PCS_ID', '=', $SR_pcsid)
                  ->orWhere('diamond_lot_number', '=', $SR_pcsid);
        })->first()->delete();
    }

    public function salesReturnReport(){
        $params = Request::all();
        $purchase_return = new \App\SalesReturn;
        $purchase_data = SalesReturn::all();
        return $purchase_data;
    }

    public function show(){
        $params = Request::all();
        $sales = new \App\Sales;
        if(!empty($params['staticdata'])){
            if($params['reportType'] == "report"){
                $sales_data = Sales::all();
            }else
                $sales_data = SalesReturn::all();
            return response()->json($sales_data,200);
        }
        if(!empty($params['filterby'])){

            if(!empty($params['search'])){
                if($params['filterby']=='PCS ID'){
                    if($params['reportType'] == "report"){
                        $response=Sales::where('PCS_ID',$params['search'])->get();
                    }else
                        $response=SalesReturn::where('PCS_ID',$params['search'])->get();
                    return response()->json($response,200);
                }
                if($params['filterby']=='Invoice Number'){
                    if($params['reportType'] == "report"){
                        $response=Sales::where('invoice_number',$params['search'])->get();
                    }else
                        $response=SalesReturn::where('invoice_number',$params['search'])->get();
                   return response()->json($response,200);
                }
                if($params['filterby']=='Party Name'){
                    if($params['reportType'] == "report"){
                        $response=Sales::where('account_name',$params['search'])->get();
                    }else
                        $response=SalesReturn::where('account_name',$params['search'])->get();
                   return response()->json($response,200);
                }
            }

            if($params['fromdate'] || $params['todate']){
                if($params['reportType'] == "report"){
                    $response=Sales::whereBetween('purchase_date',[$params['fromdate'],$params['todate']])->get();
                }else
                    $response=SalesReturn::whereBetween('purchase_date',[$params['fromdate'],$params['todate']])->get();
                    return response()->json($response,200);
            }
            
        }
        if(!empty($params['filter'])){
            if($params['filter']=='all'){
                if($params['reportType'] == "report"){
                    $sales_data = Sales::all();
                }else
                    $sales_data = SalesReturn::all();
                return response()->json($sales_data,200);
            }
        }
        
    }

    public function search(Request $request){
        $query=Request::all();
        $sales = new \App\Sales;
        if($query[key($query)]){
            if($query['reportType'] == "report"){
                $store=Sales::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%')->distinct()->pluck(key($query));
            }else
                $store=SalesReturn::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%')->distinct()->pluck(key($query));
            return response()->json($store,200);
        }
        return response()->json([],200);
    }

}