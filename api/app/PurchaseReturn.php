<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseReturn extends Model
{
    public $timestamps = false;
    protected $table = 'purchase_return';
    protected $primaryKey = 'Stock_ID';
}
