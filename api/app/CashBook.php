<?php

namespace App;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;


class CashBook extends Model
{
    protected $table = 'journal_entry';
    public $timestamps = false;
     protected $fillable = ['amount', 'voucher', 'type','description','date','company_name','transaction_mode','bank','bank_branch','account_number','cheque_no','transaction_id'];

     public static function getData(){
        return CashBook::all();
     }

     public static function getColumns(){
         return Schema::getColumnListing('journal_entry');
     }

}
