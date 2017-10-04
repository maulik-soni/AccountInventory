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
            $table->longtext('description');
            $table->string('type');
            $table->string('transaction_currency');
            $table->string('transaction_id')->nullable();
            $table->string('cheque_no')->nullable();
            $table->string('bank')->nullable();
            $table->double('transaction_conversion_rate')->nullable();
            $table->string('bank_branch')->nullable();
            $table->double('amount');

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
