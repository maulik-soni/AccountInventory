<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Request;
use \App\Sales;
use \App\SalesReturn;

class salesConroller extends Controller
{
    public function newSalesEntry(){
        $new_sales = Request::all();
        $sales = new \App\Sales;
        foreach ($new_sales as $fields=>$value) {
            if($fields != "sr_no" && $fields != "brokerName" && $fields != "brokerType" && $fields != "brokerage" && $fields != "taxes"){                 
                $sales->$fields = $new_sales[$fields];
            }
        }
        $sales->save();
    }   

    public function salesReport(){
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
        $SR_pcsid = Request('PCS_ID');
        $sales = new \App\Sales;
        $sales_return = new \App\SalesReturn;
        $SR_data = Sales::where('PCS_ID','=',$SR_pcsid)->get()->toArray();
        foreach ($SR_data[0] as $fields => $value) {
            $sales_return->$fields = $SR_data[0][$fields];
        }
        $sales_return->save();
        Sales::where('PCS_ID','=',$SR_pcsid)->delete();
    }

}