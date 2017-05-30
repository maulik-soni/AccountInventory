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
Route::post('/editpurchase', 'purchaseConroller@editPurchase');
Route::post('/delpurchase', 'purchaseConroller@delPurchase');

Route::post('/newsales', 'salesConroller@newSalesEntry');
Route::post('/editsales', 'salesConroller@editSales');
Route::post('/delsales', 'salesConroller@delSaless');


Route::get('/purchasereport/{lastid?}/{limit?}', 'purchaseConroller@purchaseReport');
Route::get('/salesreport/{lastid?}/{limit?}', 'salesConroller@salesReport');

