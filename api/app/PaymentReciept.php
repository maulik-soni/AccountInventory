<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentReciept extends Model
{
    protected $fillable = [
        'invoice_number', 'date', 'mod',
        'type',
        'account_name',
        'currency',
        'f/p',
        'credit_INR',
        'debit_INR',
        'credit_dollar',
        'debit_dollar',
        'balance',
        'recieved'
    ];
}
