<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VendorBankDetails extends Model
{
    protected $fillable=[
    'bank_name',
    'bank_address',
    'bank_branch',
    'account_number',
    'IFSC_code',
    'amount',
    'amount_USD',
    ];
}
