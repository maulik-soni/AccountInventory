<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
			$table->integer('String_ID')->unique();
			$table->increments('invoice_number');
			$table->date('sales_date')->nullable();
			$table->date('due_date')->nullable();
			$table->string('account_name')->nullable();
			$table->integer('payment_terms')->nullable();
			$table->string('polishing_type')->nullable();
			$table->float('currency_conversion_rate')->nullable();
			$table->string('notes')->nullable();
			$table->float('less')->nullable();
			$table->string('country')->nullable();
			$table->string('bill_type')->nullable();
			$table->float('comission')->nullable();
			$table->string('stock_status_group')->nullable();
			$table->string('item')->nullable();
			$table->string('kapan')->nullable();
			$table->string('diamond_shape')->nullable();
			$table->string('diamond_lot_number')->nullable()->unique('diamond_lot_number');
			$table->string('diamond_size')->nullable();
			$table->string('diamond_color')->nullable();
			$table->string('diamond_clarity')->nullable();
			$table->integer('total_diamond_pcs')->nullable();
			$table->float('total_diamond_carat')->nullable();
			$table->float('cost_discount')->nullable();
			$table->float('cost_rate_per_carat')->nullable();
			$table->double('RAP_price',20,2)->nullable();
			$table->float('wd_rate')->nullable();
			$table->float('wd_rate_carat')->nullable();
			$table->float('rate_INR')->nullable();
			$table->float('amount_INR')->nullable();
			$table->float('rate_dolar')->nullable();
			$table->float('amount_dolar')->nullable();
			$table->string('LAB_type')->nullable();
			$table->string('certificate_number')->unique()->nullable();
			$table->float('avg_INR')->nullable();
            $table->float('avg_dolar')->nullable();
            $table->float('sale_disc')->nullable();
            $table->float('sale_rate')->nullable();
            $table->float('freight')->nullable();
            $table->double('purchase_amount_INR',20,2)->nullable();
            $table->double('purchase_amount_dolar',20,2)->nullable();
            $table->double('sales_amount_INR',20,2)->nullable();
            $table->double('sales_amount_dolar',20,2)->nullable();
            $table->double('diff_amount_INR',20,2)->nullable();
            $table->double('diff_amount_dolar',20,2)->nullable();
			$table->string('broker_details')->nullable();
			$table->float('length')->nullable();
			$table->float('width')->nullable();
			$table->float('depth')->nullable();
			$table->string('message')->nullable();
			$table->float('weight')->nullable();
			$table->float('reportNo')->nullable();
			$table->string('colorDesc')->nullable();
			$table->string('finalCut')->nullable();
			$table->float('depthPct')->nullable();
			$table->float('tablePct')->nullable();
			$table->float('crnAg')->nullable();
			$table->float('pavAg')->nullable();
			$table->float('pavDp')->nullable();
			$table->float('starLn')->nullable();
			$table->float('IrHalf')->nullable();
			$table->string('girdle')->nullable();
			$table->string('girdleCondition')->nullable();
			$table->string('girdlePct')->nullable();
			$table->string('culetSize')->nullable();
			$table->string('symmetry')->nullable();
			$table->string('fluorescenceIntensity')->nullable();
			$table->string('fluorescenceColor')->nullable();
			$table->string('keyToSymbols')->nullable();
			$table->string('reportType')->nullable();
			$table->string('reportDt')->nullable();
			$table->string('inscription')->nullable();
			$table->string('infoMsg')->nullable();
			$table->string('fullShapeDescription')->nullable();
			$table->string('company_name')->nullable();
			$table->float('askedPrice')->nullable();
			$table->float('additional_expenses')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
