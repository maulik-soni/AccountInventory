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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



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





Route::group(['middleware'=>'setdatabase'],function(){
		Route::put('/{user}','UserController@update');
		Route::delete('/{user}','UserController@delete');
		Route::post('/','UserController@make');	
	});
Route::group(['middleware'=>'setdatabase'],function(){
Route::group(['middleware'=>'auth:api'],function(){
Route::post('/newpurchase', 'PurchaseController@newPurchaseEntry');
Route::post('/purchasereturn', 'PurchaseController@purchaseReturn');
Route::post('/newsales', 'salesConroller@newSalesEntry');
Route::post('/salesreturn', 'salesConroller@salesReturn');
Route::get('/purchaseretrunreport','PurchaseController@purchaseReturnReport');
Route::get('/salesretrunreport','salesConroller@salesReturnReport');


Route::put('/editpurchase', 'PurchaseController@editPurchase');
Route::put('/editsales', 'salesConroller@editSales');

Route::delete('/delsales', 'salesConroller@delSales');
Route::delete('/delpurchase', 'PurchaseController@delPurchase');

Route::get('/purchasereport', 'PurchaseController@purchaseReport');
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

Route::post('/createlabissue','LabIssueController@create');
Route::put('/editlabissue','LabIssueController@editlab');
Route::delete('/dellab','LabIssueController@delLabissue');
Route::get('/reportlab','LabIssueController@repoLabissue');
Route::post('/changestatus','LabIssueController@changestatus');

Route::get('/searchpurchase','PurchaseController@search');
Route::post('/showpurchase','PurchaseController@show');

Route::get('/searchuser','UserController@search');
Route::get('/edituser/{id}','UserController@edit');
Route::post('/showuser','UserController@show');
Route::post('/newuser','UserController@create');
Route::put('/updateuser/{id}','UserController@update');
Route::delete('/deleteuser/{id}','UserController@destroy');
	



Route::get('/searchbill','BillsController@search');
Route::post('/showbills','BillsController@show');
Route::post('/newbill','BillsController@create');

Route::post('/showledger','LedgerController@show');

Route::get('/searchpayable','PayableController@search');
Route::post('/showpayable','PayableController@show');

Route::get('/searchreceivable','ReceivableController@search');
Route::post('/showreceivable','ReceivableController@show');

Route::post('/showinventory','InventoryController@show');

Route::post('/newvendor','VendorsController@create');
Route::get('/editvendor/{id}','VendorsController@edit');
Route::post('/showvendor','VendorsController@show');
Route::post('/updatevendor','VendorsController@update');
Route::delete('/deletevendor/{id}','VendorsController@destroy');

Route::post('/newcompanybank','CompanyBankDetailsController@create');
Route::get('/editcompanybank/{id}','CompanyBankDetailsController@edit');
Route::post('/showcompanybank','CompanyBankDetailsController@show');
Route::post('/updatecompanybank','CompanyBankDetailsController@update');
Route::delete('/deletecompanybank/{id}','CompanyBankDetailsController@destroy');

Route::post('/newvendorbank','VendorBankDetailsController@create');
Route::get('/editvendorbank/{id}','VendorBankDetailsController@edit');
Route::post('/showvendorbank','VendorBankDetailsController@show');
Route::post('/updatevendorbank','VendorBankDetailsController@update');
Route::delete('/deletevendorbank/{id}','VendorBankDetailsController@destroy');

Route::post('/newcompanyprofile','CompanyProfileController@create');
Route::get('/editcompanyprofile/{id}','CompanyProfileController@edit');
Route::post('/showcompanyprofile','CompanyProfileController@show');
Route::put('/updatecompanyprofile/{id}','CompanyProfileController@update');


Route::post('/showcashbook','CashbookController@show');	
Route::get('/searchcashbook','CashbookController@search');
Route::get('/editcashbook','CashbookController@edit');
Route::post('/newcashbook','CashbookController@create');
Route::put('/updatecashbook','CashbookController@update');
Route::delete('/deletecashbook','CashbookController@delete');

Route::post('/showpurchase','PurchaseController@show');
Route::get('/searchpurchase','PurchaseController@search');

Route::post('/showsales','salesConroller@show');
Route::get('/searchsales','salesConroller@search');

Route::post('/showlabissue','LabIssueController@show');
Route::get('/searchlabissue','LabIssueController@search');

Route::post('/showmemoin','memoinController@show');
Route::get('/searchmemoin','memoinController@search');

Route::post('/showmemoissue','memoissueController@show');
Route::get('/searchmemoissue','memoissueController@search');


	});
Route::post('/login','UserController@authenticate');
Route::post('password/email', 'Auth\ForgotPasswordController@getResetToken');
Route::post('password/email/{token}', 'Auth\ResetPasswordController@reset');
});