<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLabIssueTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('lab_issue', function(Blueprint $table)
		{
			$table->integer('Sr_no', true);
			$table->integer('PCS_ID')->primary();
			$table->integer('invoice_number')->unique('invoice_number');
			$table->string('date', 256)->nullable();
			$table->string('client_ref_num', 256)->nullable();
			$table->string('shape', 256)->nullable();
			$table->string('service', 256)->nullable();
			$table->float('carat', 10, 0)->nullable();
			$table->string('diameter', 256)->nullable();
			$table->string('height', 256)->nullable();
			$table->string('color', 256)->nullable();
			$table->string('clarity', 256)->nullable();
			$table->string('rate', 256)->nullable();
			$table->string('amount', 256)->nullable();
			$table->string('return_date', 256)->nullable();
			$table->string('status', 256)->nullable();
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
		Schema::drop('lab_issue');
	}

}
