<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDealersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('dealers', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('dealer_name', 256);
			$table->string('dealer_status', 256);
			$table->text('dealer_details', 65535);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('dealers');
	}

}
