<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSalesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sales', function(Blueprint $table)
		{
			$table->integer('Stock_ID')->nullable()->unique('Stock_ID');
			$table->integer('sr_no', true);
			$table->string('invoice_number', 256);
			$table->string('sales_date', 256)->nullable();
			$table->string('due_date', 256)->nullable();
			$table->string('account_name', 256)->nullable();
			$table->string('payment_terms', 256)->nullable();
			$table->string('polishing_type', 256)->nullable();
			$table->float('currency_convrsion_rate', 10, 0)->nullable();
			$table->string('notes', 256)->nullable();
			$table->string('less', 256)->nullable();
			$table->string('country', 256)->nullable();
			$table->string('bill_type', 256)->nullable();
			$table->string('comission', 256)->nullable();
			$table->string('stock_status_group', 256)->nullable();
			$table->string('item', 256)->nullable();
			$table->string('kapan', 256)->nullable();
			$table->string('diamond_shape', 256)->nullable();
			$table->string('diamond_lot_number', 256)->nullable()->unique('diamond_lot_number');
			$table->string('diamond_size', 256)->nullable();
			$table->string('diamond_color', 256)->nullable();
			$table->string('diamond_clarity', 256)->nullable();
			$table->integer('total_diamond_pcs')->nullable();
			$table->float('total_diamond_carat', 10, 0)->nullable();
			$table->float('cost_discount', 10, 0)->nullable();
			$table->float('cost_rate_per_carat', 10, 0)->nullable();
			$table->float('RAP_price', 10, 0)->nullable();
			$table->float('wd_rate', 10, 0)->nullable();
			$table->float('wd_rate_carat', 10, 0)->nullable();
			$table->float('rate_INR', 10, 0)->nullable();
			$table->float('amount_INR', 10, 0)->nullable();
			$table->float('rate_dolar', 10, 0)->nullable();
			$table->float('amount_dolar', 10, 0)->nullable();
			$table->string('LAB_type', 256)->nullable();
			$table->string('certificate_number', 256)->nullable();
			$table->float('avg_INR', 10, 0)->nullable();
			$table->float('avg_dolar', 10, 0)->nullable();
			$table->float('sale_disc', 10, 0)->nullable();
			$table->float('sale_rate', 10, 0)->nullable();
			$table->float('freight', 10, 0)->nullable();
			$table->float('purchase_amount_INR', 10, 0)->nullable();
			$table->float('purchase_amount_dolar', 10, 0)->nullable();
			$table->float('sales_amount_INR', 10, 0)->nullable();
			$table->float('sales_amount_dolar', 10, 0)->nullable();
			$table->float('diff_amount_INR', 10, 0)->nullable();
			$table->float('diff_amount_dolar', 10, 0)->nullable();
			$table->string('broker_details', 256)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('sales');
	}

}
