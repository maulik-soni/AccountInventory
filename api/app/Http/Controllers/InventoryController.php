<?php

namespace App\Http\Controllers;
use App\Inventory;
use App\MemoIssue;
use App\LabIssue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InventoryController extends Controller
{
    public function show(Request $request){
        $query=$request->all();
        $collect=Inventory::collection($query['filterby'],$query['date']);
        ////////////////////////////////////////////
        ///// Showing all Result
        ///////////////////////////////////////////
        
        // if(($request->has('inventory')) && ($query['inventory']=='all')){
            //     return response()->json([
                // 				'response'=>[
                    //                         'inventory'=>$collect,
                    // 						]
                    // 				],201);
                    // }
                    
                    // if(($request->has('searchby'))){
                        
                        // }
                        
                        
                        ////////////////////////////////////////////
                        /////  Filters
                        ///////////////////////////////////////////
                        
                        $filterables = collect([
                                'diamond_shape'=>[],
                                'diamond_color'=>[],
                                'diamond_clarity'=>[],
                                'stock_status_group'=>[],
                                'LAB_type'=>[],
                                'polishing_type'=>[],
                                'finalCut'=>[],
                                'symmetry'=>[],
                                'fluorescenceIntensity'=>[],
                                'account_name'=>[],
                                ]);
                                if($query['filter']=='filteroptions'){
                    
                                    $filtervalues = $filterables->keys()
                                                    ->map(function($item){
                                                            $collection = Inventory::getfields($item);
                                                            return array('item'=>$item,'items'=>$collection);  
                                                    });
                    
                                    return response()->json([
                                            'response'=>[
                                                    'filters'=>$filtervalues
                                                    ]
                                            ],201);
                    
                                }
                        if($request->has('filter')){
                           
            

            ////////////////////////////////////////////
            ///// All Filters
            ///////////////////////////////////////////

            ////////////////////////////////////////////
            /////  Filter options
            ///////////////////////////////////////////

            // if($query['inventory']=='filter'){
                $querycollection=collect($query['filter']);
               
                $filtered=$querycollection->transform(
                            function($value,$key){
                                $valueobject=collect($value);
                                $valuekeys=$valueobject->keys();
                                $result=collect([]);
                                foreach($valuekeys as $key){
                                    if($valueobject[$key]===true){
                                        $result->push($key);
                                    }
                                } 
                                if($result->isNotEmpty()){
		 							    return $result;
                                } 
                                
                            }
                        );
                if($filtered){
                    $filterkeys=$filtered->keys();
                    $results=$collect;
                    foreach($filterkeys as $key){
                        if($filtered[$key]){
                            $results=$results->whereIn($key,$filtered[$key]);
                        }
                    }
                }

                 $inventories=collect($results->all())->values();

                 ////////////////////////////////////////////
                /////  Filter Results
                ///////////////////////////////////////////

                 
                    return response()->json([
                            'response'=>[
                                    'inventory'=>$inventories,
                                    'searches'=>sizeof($inventories),
                                    'total_carats'=>$inventories->pluck('total_diamond_carat')->avg(),
                                    ]
                            ],201);
                 

                ////////////////////////////////////////////
                /////  Dynamic Filter options
                ///////////////////////////////////////////

                // if($request->has('getoption')){
                //     return $inventories;

                // }

            // }

        }


    }
}
