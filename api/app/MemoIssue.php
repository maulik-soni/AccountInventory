<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MemoIssue extends Model
{
    public $timestamps = false;
    protected $table = 'memo_issue';
    protected $primaryKey = 'Stock_ID';
}