<?php

namespace App\Http\Controllers;
use App\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InventoryController extends Controller
{
    public function show(Request $request){
        $query=$request->all();
        $collect=Inventory::collection();


	////////////////////////////////////////////
	///// Showing all Result
	///////////////////////////////////////////

        if(($request->has('inventory')) && ($query['inventory']=='all')){
            return response()->json([
						'response'=>[
								'inventory'=>$collect
								]
						],201);
        }


	////////////////////////////////////////////
	/////  Filters
	///////////////////////////////////////////

        if($request->has('filter')){
            $filterables = collect([
                    'diamond_shape'=>[],
                    'diamond_color'=>[],
                    'diamond_clarity'=>[],
                    'stock_status_group'=>[],
                    'kapan'=>[],
                    'LAB_type'=>[],
                    'polishing_type'=>[]
                    ]);
            

            ////////////////////////////////////////////
            ///// All Filters
            ///////////////////////////////////////////

            if($query['filter']=='filteroptions'){

                $filtervalues = $filterables->keys()
                                ->map(function($item){
                                        $collect = Inventory::getfields($item);
									    return array('item'=>$item,'items'=>$collect);  
								});

                return response()->json([
						'response'=>[
								'filters'=>$filtervalues
								]
						],201);

            }
            ////////////////////////////////////////////
            /////  Filter options
            ///////////////////////////////////////////

            if($query['inventory']=='filter'){
                $querycollection=collect($query);
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

                 if($request->has('filterresult')){
                    return response()->json([
                            'response'=>[
                                    'inventory'=>$inventories
                                    ]
                            ],201);
                 }

                ////////////////////////////////////////////
                /////  Dynamic Filter options
                ///////////////////////////////////////////

                if($request->has('getoption')){
                    $filtervalues=collect([]);

                    foreach($filterables as $key=>$value){
                        foreach($inventories as $inventory){
                            if(!(collect($value)->contains($inventory[$key]))){
                                array_push($value,$inventory[$key]);
                            }
                        }
                        $filtervalues=$filtervalues->push(array('item'=>$key,'items'=>$value))->values();
                    }

                    return response()->json([
                    'response'=>[
                            'filters'=>$filtervalues
                            ]
                    ],201);

                }

            }

        }


    }
}
