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
            $table->date('date');
            $table->string('mod');
            $table->string('type');
            $table->string('account_name');
            $table->string('currency');
            $table->enum('f/p',['full','part']);
            $table->double('credit_INR')->nullable();
            $table->double('debit_INR')->nullable();
            $table->double('credit_dollar')->nullable();
            $table->double('debit_dollar')->nullable();
            $table->double('balance');
            $table->double('recieved');
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
