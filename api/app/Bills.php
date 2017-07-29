<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bills extends Model
{


    protected $table = 'payment_reciepts';
    protected $fillable = [
        'invoice_number',
        'invoice_value',
        'transaction_date',
        'transaction_mode',
        'transaction_details',
        'account_name',
        'transaction_currency',
        'transaction_status',
        'credit_INR',
        'debit_INR',
        'transaction_conversion_rate',
        'balance',
        'received',
        'date',
        'due_date'
    ];
}
