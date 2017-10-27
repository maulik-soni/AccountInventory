<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->increments('transaction_id');
            $table->string('invoice_number');
            $table->double('invoice_value');
            $table->date('transaction_date');
            $table->string('transaction_mode');
            $table->enum('transaction_status',['full','part']);
            $table->string('account_name');
            $table->string('transaction_currency');
            $table->double('usd_amount')->nullable();
            $table->date('date');
            $table->date('due_date');
            $table->double('balance',20,2);
            $table->double('received',20,2);
            $table->string('cheque_no')->nullable();
            $table->string('bank')->nullable();
            $table->string('bank_branch')->nullable();
            $table->string('account_number')->nullable();
            $table->double('credit_INR',20,2)->nullable();
            $table->double('debit_INR',20,2)->nullable();
            $table->string('company_name'); 
            $table->double('transaction_conversion_rate')->nullable();
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
        Schema::dropIfExists('bills');
    }
}
