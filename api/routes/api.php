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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'UserController@authenticate');

/*Route::middleware('auth:api')->get('/user', function (Request $request) {*/
    /*return $request->user();*/

// Route::group(['prefix'=>'/user','middleware'=>'auth:api'],function(){
// 	Route::group(['middleware'=>'is:admin'],function(){
// 		Route::put('/{user}','UserController@update');
// 		Route::delete('/{user}','UserController@delete');
// 		Route::post('/','UserController@make');	
// 	});
// 	Route::get('/{user}','UserController@show');
// });



/*});*/

/*Route::resource('user','UserController');*/






Route::post('/newpurchase', 'purchaseConroller@newPurchaseEntry');
Route::post('/purchasereturn', 'purchaseConroller@purchaseReturn');
Route::post('/newsales', 'salesConroller@newSalesEntry');
Route::post('/salesreturn', 'salesConroller@salesReturn');

Route::put('/editpurchase', 'purchaseConroller@editPurchase');
Route::put('/editsales', 'salesConroller@editSales');

Route::delete('/delsales', 'salesConroller@delSales');
Route::delete('/delpurchase', 'purchaseConroller@delPurchase');

Route::get('/purchasereport', 'purchaseConroller@purchaseReport');
Route::middleware('cors')->get('/salesreport', 'salesConroller@salesReport');

Route::post('/memoin', "memoinController@memoinEntry");
Route::get('/memoinreport', "memoinController@memoinReport");
Route::put('/editmemoin', "memoinController@editMemoin");
Route::delete('/deletememoin', "memoinController@deleteMemoin");
Route::post('/memoout', "memooutController@memooutEntry");
Route::get('/memooutreport', "memooutController@memooutReport");
Route::put('/editmemoout', "memooutController@editMemoout");
Route::delete('/deletememoout', "memooutController@deleteMemoout");

Route::get('/payablebill','purchaseConroller@purchaseReport');
Route::get('/recievablebill','salesConroller@salesReport');
