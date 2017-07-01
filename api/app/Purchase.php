<?php

namespace App;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    public $timestamps = false;
    protected $table = 'purchase';
    protected $primaryKey = 'PCS_ID';

    public static function getData(){
        return Purchase::all();
     }

    //  public static function getColumns(columnlist){
    //      $allcolumns= Schema::getColumnListing('purchase');
         
    //  }
}
