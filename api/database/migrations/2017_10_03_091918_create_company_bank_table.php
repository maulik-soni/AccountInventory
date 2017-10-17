<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyBankTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_bank', function (Blueprint $table) {
            $table->increments('id');
            $table->string('bank_name');
            $table->string('bank_address');
            $table->string('bank_branch');
            $table->string('account_number');
            $table->string('IFSC_code');
            $table->integer('c_id')->unsigned();
            $table->double('opening_balance',20,2);
            $table->double('amount',20,2)->nullable();
            $table->double('amount_USD',20,2)->nullable();
           
            $table->foreign('c_id')
            ->references('id')
            ->on('company_profile')
            ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_bank');
    }
}
