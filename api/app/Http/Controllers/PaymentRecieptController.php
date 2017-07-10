<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Purchase;
use App\Sales;
use App\PaymentReciept;
use DB;


class PaymentRecieptController extends Controller
{
        public function create(Request $request){
             $this->validate($request,[
            'credit_doll'=>'nullable',
            'debit_doll'=>'nullable',
            'credit_INR'=>'nullable',
            'debit_INR'=>'nullable',
            ]);


            $data = new PaymentReciept([
                'invoice_number'=>$request->input('bill'),
                'date'=>$request->input('date'),
                'mod'=>$request->input('by'),
                'type'=>$request->input('type'),
                'account_name'=>$request->input('to'),
                'currency'=>$request->input('currency'),
                'f/p'=>$request->input('payment'),
                'credit_INR'=>$request->input('credit'),
                'debit_INR'=>$request->input('debit'),
                'credit_dollar'=>$request->input('credit_doll'),
                'debit_dollar'=>$request->input('debit_doll'),
                'balance'=>($request->input('balance'))-($request->input('amount')),
                'recieved'=>$request->input('amount'),

            ]);

            $data->save();
        return response()->json(['message'=>'successfully created user'],201);
        }


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
            $response=PaymentReciept::select(['credit_INR as credit','debit_INR as debit','balance'])->where('invoice_number','=',$query['invoice_number'])->orderBy('balance', 'asc')->first();
            $recieved=PaymentReciept::select('recieved')->where('invoice_number','=',$query['invoice_number'])->sum('recieved');
            // $response->put('recieve',$recieved);
            return response()->json(['data'=>$response,'recieved'=>$recieved],201);
        }
        elseif(Purchase::where('invoice_number','=',$query['invoice_number'])->exists()){
            $credit=Purchase::select('amount_INR')->where('invoice_number',$query['invoice_number'])->pluck('amount_INR');
            $debit=$recieved=0;
            $balance=$credit[0];
            $response=['credit'=>$credit[0],'debit'=>$debit,'recieved'=>$recieved,'balance'=>$balance];
            return response()->json(['data'=>$response],201);
           
        }
        elseif(Sales::where('invoice_number','=',$query['invoice_number'])->exists()){
             $debit=Sales::select('sales_amount_INR')->where('invoice_number',$query['invoice_number'])->pluck('sales_amount_INR');
            $credit=$recieved=0;
            $balance=$debit[0];
             $response=['credit'=>$credit,'debit'=>$debit[0],'recieved'=>$recieved,'balance'=>$balance];
            return response()->json(['data'=>$response],201);
            
        }
        else{
            return response()->json('notfound',201);
        }
        }

        if($request->has('payable')){
            $purchase = DB::table('purchase')
            ->leftjoin('payment_reciepts', 'purchase.invoice_number', '=', 'payment_reciepts.invoice_number')
            ->where('payment_reciepts.invoice_number','=',null)
            ->select('purchase.invoice_number','purchase.account_name','purchase.amount_INR as balance')
            ->get();

            $reciept = PaymentReciept::select('invoice_number','account_name','balance')->where(
                'balance','>=',0
            )->latest()->get()->unique('invoice_number')->values()->where(
                'balance','!=',0
            )->values()->all();

            $response=$reciept;

            return response()->json(['data'=>$response],201);
        }

        
    }
}
