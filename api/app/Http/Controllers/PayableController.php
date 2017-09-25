<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payable;



class PayableController extends Controller
{

	////////////////////////////////////////////
	///// Searching a Data
	///////////////////////////////////////////

	public function search(Request $request){
		$term = $request->all();
		$response=Payable::search($term);
		 return response()
				   ->json($response,201);
	}

	////////////////////////////////////////////
	///// Showing Results with Filter
	///////////////////////////////////////////
	public function show(Request $request){
		$query=$request->all();
		$collect=Payable::collection();

		if($request->has('payable')){
			/// ALL
			if($query['payable']=='all'){
				$accounts = $collect
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
				$sum = $collect->sum('balance');

				return response()
					   ->json([
						'response'=>[
								'sum'=>$sum,
								'accounts'=>$accounts
								]
						],201);
			}

			/// FILTERS
			if($request->has('filterby')){
				if($request->has('search')){
					if($query['filterby']=='invoice_number'){
						$account = $collect
								   ->where('invoice_number',$query['search'])
								   ->pluck('account_name');

						$collection = $collect
									  ->where('account_name',$account[0]);
						
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

					if($query['filterby']=='account_name'){
						$collection = $collect
								  ->where('account_name',$query['search']);

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
			if($query['filterby']=='date')
			    {
			        $collection=Payable::betweenDates($query['fromdate'],$query['todate']);
					$accounts=collect($collection)
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
			         $sum = collect($collection)->values()->sum('balance');

					return response()->json(['response'=>[
							 'sum'=>$sum,
							'accounts'=>$accounts
							]],201);
			    }
			
			}

			
		}
	}
}
