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
Route::post('/newuser','UserController@make');

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
Route::get('/purchaseretrunreport','purchaseConroller@purchaseReturnReport');
Route::get('/salesretrunreport','salesConroller@salesReturnReport');


Route::put('/editpurchase', 'purchaseConroller@editPurchase');
Route::put('/editsales', 'salesConroller@editSales');

Route::delete('/delsales', 'salesConroller@delSales');
Route::delete('/delpurchase', 'purchaseConroller@delPurchase');

Route::get('/purchasereport', 'purchaseConroller@purchaseReport');
Route::get('/salesreport', 'salesConroller@salesReport');

Route::post('/memoinchangestatus','memoinController@changeStatus');
Route::post('/memoissuechangestatus','memoissueController@changeStatus');
Route::post('/memoin', "memoinController@memoinEntry");
Route::get('/memoinreport', "memoinController@memoinReport");
Route::put('/editmemoin', "memoinController@editMemoin");
Route::delete('/deletememoin', "memoinController@deleteMemoin");

Route::post('/memoissue', "memoissueController@memoissueEntry");
Route::get('/memoissuereport', "memoissueController@memoissueReport");
Route::put('/editmemoissue', "memoissueController@editmemoissue");
Route::delete('/deletememoissue', "memoissueController@deletememoissue");


Route::get('/payablebill','purchaseConroller@purchaseReport');
Route::get('/recievablebill','salesConroller@salesReport');

Route::post('/newuser','UserController@make');
Route::post('/newcashbbok','CashbookController@create');	

Route::post('/createlabissue','LabIssueController@create');
Route::put('/editlabissue','LabIssueController@editlab');
Route::delete('/dellab','LabIssueController@delLabissue');
Route::get('/reportlab','LabIssueController@repoLabissue');
Route::get('/changestatus','LabIssueController@changestatus');	