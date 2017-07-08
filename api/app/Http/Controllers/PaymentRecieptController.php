<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Purchase;
use App\Sales;
use App\PaymentReciept;


class PaymentRecieptController extends Controller
{
       public function search(Request $request){
        $query=$request->all();
        if($query[key($query)]){
        $purchase=Purchase::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%');
        $sales=Sales::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%');
        $response=$purchase->union($sales)->distinct()->pluck(key($query));
        return response()->json($response,201);
        }
        return response()->json([],201);
    }

    public function show(Request $request){
        $query=$request->all();

        if($request->has('getoptions')){
            $purchase=Purchase::select('invoice_number')->where('account_name',$query['getoptions']);
            $sales=Sales::select('invoice_number')->where('account_name',$query['getoptions']);
             $response=$sales->union($purchase)->pluck('invoice_number');
                   return response()->json(['data'=>$response],201);
        }

        if($request->has('invoice_number')){
        if(PaymentReciept::where('invoice_number','=',$query['invoice_number'])->exists()){
            $response=PaymentReciept::where('invoice_number','=',$query['invoice_number'])->first();
            return response()->json(['data'=>$response],201);
        }
        elseif(Purchase::where('invoice_number','=',$query['invoice_number'])->exists()){
            $credit=Purchase::select('amount_INR')->where('invoice_number',$query['invoice_number'])->pluck('amount_INR');
            $debit=$recieved=0;
            $balance=$credit;
            return response()->json(['credit'=>$credit,'debit'=>$debit,'recieved'=>$recieved,'balance'=>$balance],201);
           
        }
        elseif(Sales::where('invoice_number','=',$query['invoice_number'])->exists()){
             $debit=Purchase::select('amount_INR')->where('invoice_number',$query['invoice_number'])->pluck('amount_INR');
            $credit=$recieved=0;
            $balance=$debit;
            return response()->json(['credit'=>$credit,'debit'=>$debit,'recieved'=>$recieved,'balance'=>$balance],201);
        }
        else{
            return response()->json('notfound',201);
        }
        }

        
    }
}
