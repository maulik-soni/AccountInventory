<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Purchase;
use App\SalesReturn;
use DB;

class Inventory extends Model
{

    public static function collection(){
        $purchase=DB::table('purchase')->get();
        $sales=SalesReturn::all();
        return $purchase->merge($sales);
    }

    public static function getfields($item){
        $purchase=Purchase::select($item)->distinct()->pluck($item);
        // $memo=MemoIn::select($item)->distinct()->pluck($item);
        // return $memo->merge($purchase);
        return $purchase;
    }
}