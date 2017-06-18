<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    public $timestamps = false;
    protected $table = 'sales';
    protected $primaryKey = 'PCS_ID';
}
