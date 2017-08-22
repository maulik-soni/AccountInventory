<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentRecieptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_reciepts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('invoice_number');
            $table->double('invoice_value');
            $table->date('transaction_date');
            $table->string('transaction_mode');
            $table->json('transaction_details')->nullable();
            $table->string('account_name');
            $table->string('transaction_currency');
            $table->enum('transaction_status',['full','part']);
            $table->double('credit_INR')->nullable();
            $table->double('debit_INR')->nullable();
            $table->double('transaction_conversion_rate')->nullable();
            $table->double('balance');
            $table->double('received');
            $table->date('date');
            $table->date('due_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_reciepts');
    }
}
