<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSalesReturnTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sales_return', function(Blueprint $table)
		{
			$table->integer('PCS_ID')->primary();
			$table->integer('sr_no', true);
			$table->string('invoice_number', 256);
			$table->string('sales_date', 256);
			$table->string('due_date', 256);
			$table->string('account_name', 256);
			$table->string('payment_terms', 256);
			$table->string('polishing_type', 256);
			$table->float('currency_convrsion_rate', 10, 0);
			$table->string('notes', 256);
			$table->string('less', 256);
			$table->string('country', 256);
			$table->string('bill_type', 256);
			$table->string('comission', 256);
			$table->string('stock_status_group', 256);
			$table->string('item', 256);
			$table->string('kapan', 256);
			$table->string('diamond_shape', 256);
			$table->string('diamond_lot_number', 256);
			$table->string('diamond_size', 256);
			$table->string('diamond_color', 256);
			$table->string('diamond_clarity', 256);
			$table->integer('total_diamond_pcs');
			$table->float('total_diamond_carat', 10, 0);
			$table->float('cost_discount', 10, 0);
			$table->float('cost_rate_per_carat', 10, 0);
			$table->float('RAP_price', 10, 0);
			$table->float('wd_rate', 10, 0);
			$table->float('wd_rate_carat', 10, 0);
			$table->float('rate_INR', 10, 0);
			$table->float('amount_INR', 10, 0);
			$table->float('rate_dolar', 10, 0);
			$table->float('amount_dolar', 10, 0);
			$table->string('LAB_type', 256);
			$table->string('certificate_number', 256);
			$table->float('avg_INR', 10, 0);
			$table->float('avg_dolar', 10, 0);
			$table->float('sale_disc', 10, 0);
			$table->float('sale_rate', 10, 0);
			$table->float('freight', 10, 0);
			$table->float('purchase_amount_INR', 10, 0);
			$table->float('purchase_amount_dolar', 10, 0);
			$table->float('sales_amount_INR', 10, 0);
			$table->float('sales_amount_dolar', 10, 0);
			$table->float('diff_amount_INR', 10, 0);
			$table->float('diff_amount_dolar', 10, 0);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('sales_return');
	}

}
