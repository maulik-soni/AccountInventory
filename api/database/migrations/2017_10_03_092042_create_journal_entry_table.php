<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJournalEntryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journal_entry', function (Blueprint $table) {
            $table->increments('id');
            $table->string('voucher');
            $table->date('date');
            $table->longtext('description')->nullable();
            $table->string('type');
            $table->string('transaction_mode');
            $table->string('company_name');
            $table->string('account_number')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('cheque_no')->nullable();
            $table->string('bank')->nullable();
            $table->string('bank_branch')->nullable();
            $table->double('amount',20,2);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journal_entry');
    }
}
