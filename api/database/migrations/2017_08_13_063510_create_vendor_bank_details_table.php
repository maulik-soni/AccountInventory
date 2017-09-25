<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendorBankDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendor_bank_details', function (Blueprint $table) {
             $table->increments('id');
            $table->string('bank_name');
            $table->string('bank_address');
            $table->string('bank_branch');
            $table->string('account_number');
            $table->string('IFSC_code');
            $table->string('v_id');
            $table->string('amount')->nullable();
            $table->string('amount_USD')->nullable();
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
        Schema::dropIfExists('vendor_bank_details');
    }
}
