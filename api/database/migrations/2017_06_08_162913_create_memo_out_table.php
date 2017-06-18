<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMemoOutTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('memo_out', function(Blueprint $table)
		{
			$table->integer('PCS_ID')->primary();
			$table->string('memo_invoice_number', 256)->nullable();
			$table->string('date', 256)->nullable();
			$table->string('account_name', 256)->nullable();
			$table->string('broker', 256)->nullable();
			$table->string('reference', 256)->nullable();
			$table->float('carats', 10, 0);
			$table->integer('pending_pcs');
			$table->float('pending_carats', 10, 0);
			$table->float('amount', 10, 0);
			$table->string('stone_type', 256)->nullable();
			$table->integer('no_of_days');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('memo_out');
	}

}
