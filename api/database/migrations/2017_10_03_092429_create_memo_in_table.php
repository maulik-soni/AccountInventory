<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemoInTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memo_in', function (Blueprint $table) {
            $table->increments('Stock_ID');
			$table->integer('Lot_Number')->nullable()->unique('Lot_Number');
			$table->string('memo_invoice_number');
			$table->date('date')->nullable();
			$table->string('account_name')->nullable();
			$table->string('broker')->nullable();
			$table->string('reference')->nullable();
			$table->float('carats')->nullable();
			$table->string('stone_type')->nullable();
			$table->integer('no_of_days')->nullable();
			$table->date('due_date')->nullable();
			$table->string('status')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memo_in');
    }
}
