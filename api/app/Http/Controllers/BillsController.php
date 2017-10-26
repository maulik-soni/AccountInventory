<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payable;
use App\Receivable;
use App\Bills;
use Carbon\Carbon;


class BillsController extends Controller
{
    ////////////////////////////////////////////
    ///// Creating a new payment or reciept data
    ///////////////////////////////////////////

    public function create(Request $request){
        $query=$request->all();
        $this
        ->validate($request,[
            'cheque_no'=>'nullable',
            'bank'=>'nullable',
            'transaction_id'=>'nullable',
            'bank_branch'=>'nullable',
            'transaction_conversion_rate'=>'nullable',
            'credit_INR'=>'nullable',
            'debit_INR'=>'nullable',
            'amount'=>'required'
        ]);


        if($query['transaction_type']=='payment'){


        $data = new Bills([
            'invoice_number'=>$request->input('invoice_number'),
            'invoice_value'=>$request->input('invoice_value'),
            'transaction_date'=>Carbon::parse($request->input('transaction_date'))->addDays(1)->toDateString(),
            'transaction_mode'=>$request->input('transaction_mode'),
            'transaction_status'=>$request->input('transaction_status'),
            'account_name'=>$request->input('account_name'),
            'transaction_currency'=>$request->input('transaction_currency'),
            'date'=>$request->input('date'),
            'due_date'=>$request->input('due_date'),
            'balance'=>($request->input('balance'))-($request->input('amount')),
            'received'=>($request->input('amount'))+($request->input('received')),
            'credit_INR'=>$request->input('credit_INR'),
            'debit_INR'=>$request->input('amount'),
            'transaction_conversion_rate'=>$request->input('transaction_conversion_rate'),
            'cheque_no'=>$request->input('cheque_no'),
            'bank'=>$request->input('bank'),
            'transaction_id'=>$request->input('transaction_id'),
            'usd_amount'=>$request->input('usd_amount'),
            'company_name'=>$request->input('company_name'),
            'bank_branch'=>$request->input('bank_branch')
        ]);

        $data->save();

        return response()
               ->json(['message'=>'successfully created user'],201);
        }

        if($query['transaction_type']=='receive'){


        $data = new Bills([
             'invoice_number'=>$request->input('invoice_number'),
            'invoice_value'=>$request->input('invoice_value'),
            'transaction_date'=>$request->input('transaction_date'),
            'transaction_mode'=>$request->input('transaction_mode'),
            'transaction_status'=>$request->input('transaction_status'),
            'account_name'=>$request->input('account_name'),
            'transaction_currency'=>$request->input('transaction_currency'),
            'date'=>$request->input('date'),
            'due_date'=>$request->input('due_date'),
            'balance'=>($request->input('balance'))-($request->input('amount')),
            'received'=>($request->input('amount'))+($request->input('received')),
            'credit_INR'=>$request->input('amount'),
            'debit_INR'=>$request->input('debit'),
            'transaction_conversion_rate'=>$request->input('transaction_conversion_rate'),
            'cheque_no'=>$request->input('cheque_no'),
            'bank'=>$request->input('bank'),
            'transaction_id'=>$request->input('transaction_id'),
            'usd_amount'=>$request->input('usd_amount'),
            'company_name'=>$request->input('company_name'),
            'bank_branch'=>$request->input('bank_branch')
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
