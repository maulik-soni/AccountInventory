<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Purchase;
use App\SalesReturn;
use App\LabIssue;
use DB;

class Inventory extends Model
{

    public static function collection(){
        $purchase=DB::table('purchase')->get();
        $sales=SalesReturn::all();
        $huj=$purchase->merge($sales);
        $loc=$huj->map(function($item){
            $lab=LabIssue::select('Stock_ID')->pluck('Stock_ID');
            if($lab->contains($item->Stock_ID)){
               return array($item,'status'=>$collect); 

            }
            return $item; 
    });
    return $loc;
    }

    public static function getfields($item){
        $purchase=Purchase::select($item)->distinct()->pluck($item);
        // $memo=MemoIn::select($item)->distinct()->pluck($item);
        // return $memo->merge($purchase);
        return $purchase;
    }
}