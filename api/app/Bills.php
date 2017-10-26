<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bills extends Model
{
    protected $table = 'bills';
    protected $fillable = [
        'invoice_number',
        'invoice_value',
        'transaction_date',
        'transaction_mode',
        'transaction_status',
        'account_name',
        'transaction_currency',
        'date',
        'due_date',
        'balance',
        'received',
        'credit_INR',
        'debit_INR',
        'transaction_conversion_rate',
        'cheque_no',
        'account_number',
        'company_name',
        'bank',
        'usd_amount',
        'company_name',
        'transaction_id',
        'bank_branch'
    ];
}
