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

        if($request->has('inventory')){

            if($query['inventory']!='filter'){
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
                                        
									    return array('item'=>$item,'items'=>$collect);
                                        
								});

                return response()
					   ->json([
						'response'=>[
								'filters'=>$filtervalues
								]
						],201);
            }

            
     
        }

        if($request->has('filtering')){
             $query=collect($request->all());
             $as=$query->transform(function($quer,$key){
                                        $a=collect($quer);
                                        $b=$a->keys();
                                         $c=collect([]);
                                       foreach ($b as $p) {
                                           if($a[$p]===true){ 
                                               $c->push($p);
                                           }
                                        }
                                        if($c->isNotEmpty()){
									    return $c;
                                        }   
								    });

                                if($as){
                                     $op=$as->keys();
                                     $bo=null;
                                     
                    $tresuk=Purchase::select('diamond_shape',
                    'diamond_color',
                    'diamond_clarity',
                    'stock_status_group',
                    'kapan',
                    'LAB_type',
                    'polishing_type');
                                     $result=Purchase::all();
                                     foreach($op as $k){
                                         if($as[$k]){
                                             $result=$result->whereIn($k,$as[$k]);
                                             $tresuk=$tresuk->whereIn($k,$as[$k]);
                                         }
                                     }
                                }
            
            // return $result->all();
            $f=$result->all();
           return $tresuk->distinct()->get();

            

                // $filters = collect([
                //     'diamond_shape',
                //     'diamond_color',
                //     'diamond_clarity',
                //     'stock_status_group',
                //     'kapan',
                //     'LAB_type',
                //     'polishing_type']);

                // $filtervalues = $filters
                //                 ->map(function($item){
                //                         $collect = Purchase::select($item)->distinct()->pluck($item);
                                        
				// 					    return array('item'=>$item,'items'=>$collect);
                                        
				// 				});

                                $filtervalues = 
                    collect($f)->only(['diamond_clarity'])->all();
                    
            
                    return $filtervalues;
        }

        
    }
}
