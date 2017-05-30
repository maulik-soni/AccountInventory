<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Sales;


class salesConroller extends Controller
{
    public function newSalesEntry(){
        print_r(Request::all());
    }   

    public function salesReport($lastid='',$limit=''){
        $sales = \App\Sales::all();
        print_r($sales);
    }

    public function editSales(){
        $oldsales = Request::all();
        $oldsales_data = \App\Sales::find($oldsales['id']);
        print_r($oldsales_data);
    }

    public function delSales(){
        $data = Request::all(); 
        \App\Sales::where('id', '=', $data['id'])->delete();
    }

}