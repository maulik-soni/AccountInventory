<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class CashBook extends Model
{
    protected $table = 'cashbook';

     protected $fillable = ['amount', 'voucher', 'type'];
}
