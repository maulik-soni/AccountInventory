<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/newpurchase', 'purchaseConroller@newPurchaseEntry');
Route::post('/purchasereturn', 'purchaseConroller@purchaseReturn');
Route::post('/newsales', 'salesConroller@newSalesEntry');
Route::post('/salesreturn', 'salesConroller@salesReturn');

Route::put('/editpurchase', 'purchaseConroller@editPurchase');
Route::put('/editsales', 'salesConroller@editSales');

Route::delete('/delsales', 'salesConroller@delSales');
Route::delete('/delpurchase', 'purchaseConroller@delPurchase');

Route::get('/purchasereport', 'purchaseConroller@purchaseReport');
Route::get('/salesreport', 'salesConroller@salesReport');

