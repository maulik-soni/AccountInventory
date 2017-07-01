<?php

namespace App;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;


class CashBook extends Model
{
    protected $table = 'cashbook';

     protected $fillable = ['amount', 'voucher', 'type','description','date'];

     public static function getData(){
        return CashBook::all();
     }

     public static function getColumns(){
         return Schema::getColumnListing('cashbook');
     }

}
