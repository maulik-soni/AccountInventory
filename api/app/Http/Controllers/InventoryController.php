<?php

namespace App\Http\Controllers;
use App\Purchase;
use App\MemoIn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InventoryController extends Controller
{
    public function show(Request $request){
        $query=$request->all();
        // $purchase=Purchase::select(['invoice_number','PCS_ID','account_name']);
        // $memo=MemoIn::select(['memo_invoice_number as invoice_number','PCS_ID','account_name']);

        // if($request->has('staticdata')){
        //     $title=['invoice_number','PCS_ID','account_name','amount'];
        //     $data=$purchase->union($memo)->get();
        //     //  $sum=$data->sum('amount');
        //     return response()->json(['titles'=>$title,'data'=>$data],201);
        // }

        // if($request->has('filter')&&($query['filter']=='all')){
        //     $response=$purchase->union($memo)->get();
        //     // $sum=$response->sum('amount');
        //     return response()->json(['data'=>$response],201);
        // }

        if($request->has('inventory')){

            if($request->has('filter')){
                $kaun=$query['filter'];
                return response()->json($kaun,201);
            }
            if($query['inventory']=='filter'){

                $filters = collect([
                    'diamond_shape',
                    'diamond_color',
                    'diamond_clarity',
                    'stock_status_group',
                    'kapan',
                    'LAB_type',
                    'polishing_type']);

                $filtervalues = $filters
                                ->map(function($item){
                                        $collect = Purchase::select($item)->distinct()->pluck($item);
									    return array($item=>$collect);
								});

                return response()
					   ->json([
						'response'=>[
								// 'sum'=>$sum,
								'filters'=>$filtervalues
								]
						],201);
            }

            
        //    if($query['filterby']=='purchase'){
        //     $response=$purchase->get();
        //     // $sum=$response->sum('amount');
        //     return response()->json(['data'=>$response],201);
        //    }
        //    if($query['filterby']=='jangad'){
        //     $response=$memo->get();
        //     // $sum=$response->sum('amount');
        //     return response()->json(['data'=>$response],201);
        //    }
        
        }

        
    }
}
