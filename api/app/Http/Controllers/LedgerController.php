<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Purchase;
use App\Sales;
use App\Bills;


class LedgerController extends Controller
{









    ////////////////////////////////////////////
    ///// Showing Results with Filter
    ///////////////////////////////////////////
    public function show(Request $request){
        $query=$request->all();

        if($request->has('static_data')){
            $names=Bills::select('account_name')->distinct()->get()->pluck('account_name');
            return response()->json(['names'=>$names],201);
        }

        if($request->has('account_name')){
            $purchase=Bills::select('credit_INR','debit_INR','invoice_number','invoice_value','transaction_date')->where([['account_name',$query['account_name']],['credit_INR',null]])->get();
            $sale=Bills::select('credit_INR','debit_INR','invoice_number','invoice_value','transaction_date')->where([['account_name',$query['account_name']],['debit_INR',null]])->get();
            $purchasesum=$purchase->sum('debit_INR');
            $salesum=$sale->sum('credit_INR');

            return response()
               ->json(['purchase'=>$purchase,'purchasesum'=>$purchasesum,'sales'=>$sale,'salesum'=>$salesum],201);
        }
    
    
    }

        
        

        
    
}
