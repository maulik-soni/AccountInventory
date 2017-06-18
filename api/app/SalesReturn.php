<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesReturn extends Model
{
    public $timestamps = false;
    protected $table = 'sales_return';
    protected $primaryKey = 'PCS_ID';
}
