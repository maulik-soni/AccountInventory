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

Route::post('/memoin', "memoinController@memoinEntry");
Route::post('/memoinreport', "memoinController@memoinReport");
Route::post('/editmemoin', "memoinController@editMemoin");
Route::post('/deletememoin', "memoinController@deleteMemoin");
Route::post('/memoout', "memooutController@memooutEntry");
Route::post('/memooutreport', "memooutController@memooutReport");
Route::post('/editmemoout', "memooutController@editMemoout");
Route::post('/deletememoout', "memooutController@deleteMemoout");

/*Route::middleware('auth:api')->get('/user', function (Request $request) {*/
    /*return $request->user();*/

/*Route::group(['prefix'=>'/user','middleware'=>'auth:api'],function(){
	Route::group(['middleware'=>'is:admin'],function(){
		Route::put('/{user}','UserController@update');
		Route::delete('/{user}','UserController@delete');
		Route::post('/','UserController@make');	
	});
	Route::get('/{user}','UserController@show');
});*/



/*});*/

/*Route::resource('user','UserController');*/





