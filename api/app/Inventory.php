<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Purchase;
use App\SalesReturn;
use App\LabIssue;
use App\MemoIssue;
use DB;

class Inventory extends Model
{

    public static function collection($collectiontype){
        if($collectiontype=='all'){
            $purchase=DB::table('purchase')->get();
            $sales=SalesReturn::all();
            $merge=$purchase->merge($sales);
            $data=$merge->map(function($item){
                $labin=LabIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $labout=LabIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                $memoissuein=MemoIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $memoissueout=MemoIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                if($labin->contains($item->Stock_ID)){
                    $item['status'] = 'labin';
                    return $item;
                }
                elseif($labout->contains($item->Stock_ID)){
                    $item['status'] = 'labout';
                    return $item;
                }
                elseif($memoissuein->contains($item->Stock_ID)){
                    $item['status'] = 'memoissuein';
                    return $item;
                }
                elseif($memoissueout->contains($item->Stock_ID)){
                    $item['status'] = 'memoissueout';
                    return $item;
                }
                else{
                    return $item;
                }
            });
            return $data;
        }

        if($collectiontype=='stock in hand'){
            $purchase=DB::table('purchase')->get();
            $sales=SalesReturn::all();
            $merge=$purchase->merge($sales);
            $data=$merge->map(function($item){
                $labin=LabIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $labout=LabIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                $memoissuein=MemoIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $memoissueout=MemoIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                if(!($labin->contains($item->Stock_ID))&&!($labout->contains($item->Stock_ID))&&!($memoissuein->contains($item->Stock_ID))&&!($memoissueout->contains($item->Stock_ID))){
                    return $item;
                }
            });
            $filtered=[];
            foreach($data as $log){
                if($log!=null){
                    array_push($filtered,$log);
                }
            }
            return $data;
        }
    }

    public static function datecollection($from,$to){
        $purchase=DB::table('purchase')->whereBetween('purchase_date',[$from,$to])->get();
        $sales=SalesReturn::whereBetween('sales_date',[$from,$to])->get();
        $merge=$purchase->merge($sales);
        $data=$merge->map(function($item){
            $lab=LabIssue::select('Stock_ID')->pluck('Stock_ID');
            $memo=MemoIssue::select('Stock_ID')->pluck('Stock_ID');
            if($lab->contains($item->Stock_ID)){
                $item['status'] = 'lab';
                return $item;
            }

            if($memo->contains($item->Stock_ID)){
                $item['status'] = 'memoout';
                return $item;
            }

            return $item;

            
    });
    return $data;
    }

    public static function getfields($item){
        $purchase=Purchase::select($item)->distinct()->pluck($item);
        // $memo=MemoIn::select($item)->distinct()->pluck($item);
        // return $memo->merge($purchase);
        return $purchase;
    }
}