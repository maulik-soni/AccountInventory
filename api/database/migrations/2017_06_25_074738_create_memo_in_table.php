<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMemoInTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('memo_in', function(Blueprint $table)
		{
			$table->integer('PCS_ID')->primary();
			$table->string('memo_invoice_number', 256)->unique('memo_invoice_number');
			$table->string('date', 256)->nullable();
			$table->string('account_name', 256)->nullable();
			$table->string('broker', 256)->nullable();
			$table->string('reference', 256)->nullable();
			$table->float('carats', 10, 0)->nullable();
			$table->integer('pending_pcs')->nullable();
			$table->float('pending_carats', 10, 0)->nullable();
			$table->float('amount', 10, 0)->nullable();
			$table->string('stone_type', 256)->nullable();
			$table->integer('no_of_days')->nullable();
			$table->string('return_date', 256)->nullable();
			$table->string('status', 256)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('memo_in');
	}

}
