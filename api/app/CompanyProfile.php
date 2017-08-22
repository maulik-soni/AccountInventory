<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    protected $fillable = [
        'c_name', 'address','mobile','from','to','phone','email','GST','PAN','IEC','QBC'
    ];
}
