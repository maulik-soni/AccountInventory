<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Purchase;
use App\SalesReturn;
use App\LabIssue;
use App\MemoIssue;
use App\Sales;
use DB;

use Carbon\Carbon;

class Inventory extends Model
{ 
    public static $ru;
    

    public static function collection($collectiontype,$date){
        if($date){
            if($date['fromDate'] && $date['toDate']){
            $date['fromDate']=Carbon::parse($date['fromDate'])->addDays(1)->toDateString();
            $date['toDate']=Carbon::parse($date['toDate'])->addDays(1)->toDateString();
            }
            else{
                 $date=null;
            }
        }
        if($collectiontype=='all'){
            $purchase=DB::table('purchase')->get();
            $sales=SalesReturn::all();
            if($date!=null){
                 $purchase=DB::table('purchase')->whereBetween('purchase_date',[$date['fromDate'],$date['toDate']])->get();
                 $sales=SalesReturn::whereBetween('sales_date',[$date['fromDate'],$date['toDate']])->get();
            }
            $merge=$purchase->merge($sales);
            $data=$merge->map(function($item){
                $labin=LabIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $labout=LabIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                $memoissuein=MemoIssue::select('Stock_ID')->where('status','issued')->pluck('Stock_ID');
                $memoissueout=MemoIssue::select('Stock_ID')->where('status','return')->pluck('Stock_ID');
                if($labin->contains($item->Stock_ID)){
                    $item=(array)$item;
                    $item['status'] = 'labin';
                    $item=(object)$item;
                    return $item;
                }
                elseif($labout->contains($item->Stock_ID)){
                     $item=(array)$item;
                    $item['status'] = 'labout';
                    $item=(object)$item;
                    return $item;
                }
                elseif($memoissuein->contains($item->Stock_ID)){
                     $item=(array)$item;
                    $item['status'] = 'memoissuein';
                    $item=(object)$item;
                    return $item;
                }
                elseif($memoissueout->contains($item->Stock_ID)){
                     $item=(array)$item;
                    $item['status'] = 'memoissueout';
                    $item=(object)$item;
                    return $item;
                }
                else{
                    return $item;
                }
            });
            self::$ru=$data;
            return self::$ru;
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
            $filter=collect($filtered);
            // $filtered=(object)$filtered;
            self::$ru=$filter;
            return self::$ru;
        }


        if($collectiontype=='stock on memo-issue'){
            $data=MemoIssue::where('status','issued')->get();
            self::$ru=$data;
            return self::$ru;
        }

        if($collectiontype=='stock on memo-in'){
            $data=MemoIn::all();
            self::$ru=$data;
            return self::$ru;
        }

        if($collectiontype=='sold stones'){
            $data=Sales::all();
            self::$ru=$data;
            return self::$ru;
        }

        if($collectiontype=='lab issue'){
            $data=LabIssue::all();
            self::$ru=$data;
            return self::$ru;
        }



    }

    // public static function datecollection($from,$to){
    //     $purchase=DB::table('purchase')->whereBetween('purchase_date',[$from,$to])->get();
    //     $sales=SalesReturn::whereBetween('sales_date',[$from,$to])->get();
    //     $merge=$purchase->merge($sales);
    //     $data=$merge->map(function($item){
    //         $lab=LabIssue::select('Stock_ID')->pluck('Stock_ID');
    //         $memo=MemoIssue::select('Stock_ID')->pluck('Stock_ID');
    //         if($lab->contains($item->Stock_ID)){
    //             $item['status'] = 'lab';
    //             return $item;
    //         }

    //         if($memo->contains($item->Stock_ID)){
    //             $item['status'] = 'memoout';
    //             return $item;
    //         }

    //         return $item;

            
    // });
    // return $data;
    // }

    public static function getfields($item){
        $purchase=self::$ru->pluck($item)->unique()->all();
        // $memo=MemoIn::select($item)->distinct()->pluck($item);
        // return $memo->merge($purchase);
        return $purchase;
    }
}