<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabIssueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_issue', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Stock_ID');
			$table->string('invoice_number')->unique();
			$table->date('date')->nullable();
			$table->string('client_ref_num')->nullable();
			$table->string('shape')->nullable();
			$table->string('service')->nullable();
			$table->float('carat')->nullable();
			$table->float('diameter')->nullable();
			$table->float('height')->nullable();
			$table->string('color')->nullable();
			$table->string('clarity')->nullable();
			$table->double('rate')->nullable();
            $table->double('amount',20,2)->nullable();
			$table->date('return_date')->nullable();
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
        Schema::dropIfExists('lab_issue');
    }
}
