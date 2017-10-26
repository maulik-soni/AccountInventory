<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyBankDetails extends Model
{
    protected $table = 'company_bank';
    public $timestamps = false;
    protected $fillable=[
    'bank_name',
    'bank_address',
    'bank_branch',
    'account_number',
    'IFSC_code',
    'amount',
    'c_id',
    'opening_balance',
    'amount_USD',
    ];

}
