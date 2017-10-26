<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MemoIn extends Model
{
    public $timestamps = false;
    protected $table = 'memo_in';
    protected $primaryKey = 'Stock_ID';
}