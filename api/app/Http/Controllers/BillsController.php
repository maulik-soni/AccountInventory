<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payable;
use App\Receivable;
use App\Bills;


class BillsController extends Controller
{
    ////////////////////////////////////////////
    ///// Creating a new payment or reciept data
    ///////////////////////////////////////////

    public function create(Request $request){
        $query=$request->all();
        $this
        ->validate($request,[
            'transaction_details'=>'nullable',
            'transaction_conversion_rate'=>'nullable',
            'credit_INR'=>'nullable',
            'debit_INR'=>'nullable',
        ]);


        if($query['transaction_type']=='payment'){


        $data = new Bills([
            'invoice_number'=>$request->input('invoice_number'),
            'invoice_value'=>$request->input('invoice_value'),
            'date'=>$request->input('date'),
            'transaction_date'=>$request->input('transaction_date'),
            'transaction_mode'=>$request->input('transaction_mode'),
            'transaction_details'=>$request->input('transaction_details'),
            'account_name'=>$request->input('account_name'),
            'transaction_currency'=>$request->input('transaction_currency'),
            'transaction_status'=>$request->input('transaction_status'),
            'credit_INR'=>$request->input('credit'),
            'debit_INR'=>$request->input('amount'),
            'due_date'=>$request->input('due_date'),
            'transaction_conversion_rate'=>$request->input('transaction_conversion_rate'),
            'received'=>($request->input('amount'))+($request->input('received')),
            'balance'=>($request->input('balance'))-($request->input('amount')),
        ]);

        $data->save();

        return response()
               ->json(['message'=>'successfully created user'],201);
        }

        if($query['transaction_type']=='receive'){


        $data = new Bills([
            'invoice_number'=>$request->input('invoice_number'),
            'invoice_value'=>$request->input('invoice_value'),
            'date'=>$request->input('date'),
            'transaction_date'=>$request->input('transaction_date'),
            'transaction_mode'=>$request->input('transaction_mode'),
            'transaction_details'=>$request->input('transaction_details'),
            'account_name'=>$request->input('account_name'),
            'transaction_currency'=>$request->input('transaction_currency'),
            'transaction_status'=>$request->input('transaction_status'),
            'credit_INR'=>$request->input('amount'),
            'debit_INR'=>$request->input('debit'),
            'due_date'=>$request->input('due_date'),
            'transaction_conversion_rate'=>$request->input('transaction_conversion_rate'),
            'received'=>($request->input('amount'))+($request->input('received')),
            'balance'=>($request->input('balance'))-($request->input('amount')),
        ]);

        $data->save();

        return response()
               ->json(['message'=>'successfully created user'],201);
        }
    }








    ////////////////////////////////////////////
    ///// Showing Results with Filter
    ///////////////////////////////////////////
    public function show(Request $request){
        $query=$request->all();

        if($request->has('account_name')){
            if($query['billtype']=='receive'){
                $collection = Receivable::collection()
                            ->where('account_name',$query['account_name']);

                $accounts = $collection
                            ->unique('account_name')
                            ->pluck('account_name')
                            ->map(function($item){
                            $collect = Receivable::collection()
                                    ->where('account_name',$item);
                            $sum = $collect
                                    ->sum('balance');
                            $invoices = $collect
                                        ->values();
                            return array('account_name'=>$item,'account_sum'=>$sum,'account_invoices'=>$invoices);
                            
                        });

                $sum = $collection->values()->sum('balance');

                return response()->json(['response'=>[
                    'sum'=>$sum,
                    'accounts'=>$accounts
                    ]],201);
                }

            if($query['billtype']=='payment'){
                $collection = Payable::collection()
                            ->where('account_name',$query['account_name']);

                $accounts = $collection
                            ->unique('account_name')
                            ->pluck('account_name')
                            ->map(function($item){
                            $collect = Payable::collection()
                                    ->where('account_name',$item);
                            $sum = $collect
                                    ->sum('balance');
                            $invoices = $collect
                                        ->values();
                            return array('account_name'=>$item,'account_sum'=>$sum,'account_invoices'=>$invoices);
                            
                        });

                $sum = $collection->values()->sum('balance');

                return response()->json(['response'=>[
                    'sum'=>$sum,
                    'accounts'=>$accounts
                    ]],201);
                }
        }

        if($request->has('billtype')){
            if($query['billtype']=='receive'){

                $account_names = Receivable::collection()
                                 ->unique('account_name')
							     ->pluck('account_name');

                return response()
					   ->json([
						'response'=>[
								'account_names'=>$account_names
								]
						],201);
            }

            if($query['billtype']=='payment'){
                $account_names = Payable::collection()
                                 ->unique('account_name')
							     ->pluck('account_name');
                                 
                return response()
					   ->json([
						'response'=>[
								'account_names'=>$account_names
								]
						],201);
            }
        }

        
        

        
    }
}
