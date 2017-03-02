<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// @TODO: For testing purposes:
Route::get('/home', 'HomeController@index')->name('home');

/**
 * User Wall
 */

// Posts
Route::get('/users/{id}/posts', 'PostController@index')->name('posts.index');
Route::get('/posts/{id}', 'PostController@show')->name('posts.show');
Route::group(['middleware' => 'auth'], function () {
    Route::post('/posts', 'PostController@store')->name('posts.store');
    Route::put('/posts/{id}', 'PostController@update')->name('posts.update');
    Route::delete('/posts/{id}', 'PostController@destroy')->name('posts.destroy');
});

// Comments
Route::get('/posts/{id}/comments', 'CommentController@index')->name('comments.index');
Route::get('/comments/{id}', 'CommentController@show')->name('comments.show');
Route::group(['middleware' => 'auth'], function () {
    Route::post('/comments', 'CommentController@store')->name('comments.store');
    Route::put('/comments/{id}', 'CommentController@update')->name('comments.update');
    Route::delete('/comments/{id}', 'CommentController@destroy')->name('comments.destroy');
});



// Authentication Views
// @TODO: Replace with our own views.
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

// Default Laravel Authentication Routes
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('register', 'Auth\RegisterController@register');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');



