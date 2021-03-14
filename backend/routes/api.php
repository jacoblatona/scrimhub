<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/register', 'Auth\\RegisterController@register');
Route::post('/login', 'Auth\\LoginController@login');
Route::get('/logout', 'Auth\\LogoutController@logout')->middleware('auth:api');

Route::get('/games/all', 'GameController@all');
Route::get('/platforms/all', 'PlatformController@all');
Route::get('/regions/all', 'RegionController@all');
Route::get('/scrims/all', 'ScrimController@all');
Route::post('/scrim/create', 'ScrimController@create')->middleware('auth:api');


