<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use \App\Purchase;

class purchaseConroller extends Controller
{
    public function newPurchaseEntry(){
        print_r(Request::all());
    }   

    public function purchaseReport($lastid='',$limit=''){
        $purchase = \App\Purchase::all();
        print_r($purchase);
    }

    public function editPurchase(){
        $oldpurchase = Request::all();
        $oldpurchase_data = \App\Purchase::find($oldpurchase['id']);
        print_r($oldpurchase_data);
    }

    public function delPurchase(){
        $data = Request::all(); 
        \App\Purchase::where('id', '=', $data['id'])->delete();
    }

}
