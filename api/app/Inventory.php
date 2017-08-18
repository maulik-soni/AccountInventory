<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Purchase;
use App\MemoIn;
use DB;

class Inventory extends Model
{

    public static function collection(){
        $purchase=Purchase::all();
        $memo=MemoIn::all();
        return $purchase->merge($memo);
    }

    public static function getfields($item){
        $purchase=Purchase::select($item)->distinct()->pluck($item);
        // $memo=MemoIn::select($item)->distinct()->pluck($item);
        // return $memo->merge($purchase);
        return $purchase;
    }
}