<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bills;
use App\Vendors;
use App\Purchase;
use App\Sales;
use DB;


class LedgerController extends Controller
{
    ////////////////////////////////////////////
    ///// Showing Results with Filter
    ///////////////////////////////////////////
    public function show(Request $request){
        $query=$request->all();

        if($request->has('showledger')){
            
            $cname=$query['company_name'];
            $aname=$query['account_name'];
            $openingbal=Vendors::select('opening_bal')->where('v_name',$aname)->sum('opening_bal');
            $purchase=DB::table('purchase')->select('purchase_date as transaction_date','invoice_number','amount_INR as credit_INR','Stock_ID')->where([['company_name',$cname],['account_name',$aname]])->get();
            $sales=DB::table('sales')->select('sales_date as transaction_date','invoice_number','sales_amount_INR as debit_INR','Stock_ID')->where([['company_name',$cname],['account_name',$aname]])->get();
            // $totc=Bills::where([['company_name',$cname],['account_name',$aname]])->sum('credit_INR');
            // $totd=Bills::where([['company_name',$cname],['account_name',$aname]])->sum('debit_INR');
            $ledgers=DB::table('bills')->where([['company_name',$cname],['account_name',$aname]])->get();
            $datas=($ledgers->merge($purchase))->merge($sales);
            $data=$datas->sortBy('transaction_date')->values();
            $totd=$datas->sum('debit_INR');
            $totc=$datas->sum('credit_INR');
            $clos_totd=$openingbal+$totd;
            return response()->json(['response'=>[
                'ledger'=>$data,
                'obal'=>$openingbal,
                'tot_cred'=>$totc,
                'tot_deb'=>$totd,
                'tot_clos_deb'=>$clos_totd
                ]],201);
        }

       if($request->has('company_name')){
           $purchasedata=Purchase::select('account_name')->where('company_name',$query['company_name'])->distinct()->pluck('account_name');
           $salesdata=Sales::select('account_name')->where('company_name',$query['company_name'])->distinct()->pluck('account_name');
           $data=$purchasedata->merge($salesdata)->unique()->values()->all();
           return response()->json(['accounts'=>$data],201);
       }

        // if($request->has('account_name')){
        //     $purchase=Bills::select('credit_INR','debit_INR','invoice_number','invoice_value','transaction_date')->where([['account_name',$query['account_name']],['credit_INR',null]])->get();
        //     $sale=Bills::select('credit_INR','debit_INR','invoice_number','invoice_value','transaction_date')->where([['account_name',$query['account_name']],['debit_INR',null]])->get();
        //     $purchasesum=$purchase->sum('debit_INR');
        //     $salesum=$sale->sum('credit_INR');

        //     return response()
        //        ->json(['purchase'=>$purchase,'purchasesum'=>$purchasesum,'sales'=>$sale,'salesum'=>$salesum],201);
        // }
    
    
    }

        
        

        
    
}
