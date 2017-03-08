<?php

use Illuminate\Support\Facades\Auth;
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

// Pages
Route::get('/', 'PagesController@welcome')->name('welcome');
Route::get('/information', 'PagesController@information')->name('information');

// Private Section
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', 'PagesController@dashboard')->name('dashboard');
    Route::get('/profile', function() {
        return redirect()->route('users.show', ['id' => Auth::id()]);
    })->name('profile');
    Route::get('/users/{id}', 'PagesController@showUser')->name('users.show');
    Route::get('/companies/{id]', 'PagesController@showCompany')->name('companies.show');
    Route::get('/users', 'PagesController@users')->name('users.index');
    Route::get('/companies', 'PagesController@companies')->name('companies.index');
//    Route::get('/dashboard', function() {
//        return redirect()->route('dashboard.conversations::index');
//    });
//    Route::get('/dashboard/messages', 'ConversationController@index')->name('dashboard.conversations::index');
//    Route::get('/dashboard/messages/{id}', 'ConversationController@show')->name('dashboard.conversations::show');
//    Route::get('/dashboard/edit-profile', 'UserController@edit')->name('dashboard.profile::edit');
//    Route::get('/dashboard/job-requests', 'JobRequestController@index')->name('dashboard.job_requests::index');
//    Route::get('/dashboard/job-requests/create', 'JobRequestController@show')->name('dashboard.job_requests::create');
//    Route::get('/dashboard/job-requests/{id}', 'JobRequestController@edit')->name('dashboard.job_requests::edit');
//    Route::get('/dashboard/companies', 'CompanyController@indexForUser')->name('dashboard.companies::index');
//    Route::get('/dashboard/companies/create', 'CompanyController@create')->name('dashboard.companies::create');
//    Route::get('/dashboard/companies/{id}', 'CompanyController@edit')->name('dashboard.companies::edit');
});


// Users
Route::group(['middleware' => 'auth'], function () {
    Route::put('/users/{id}', 'UserController@update')->name('users.update');
    Route::delete('/users/{id}', 'UserController@destroy')->name('users.destroy');
});




// Companies
Route::group(['middleware' => 'auth'], function () {
    Route::post('/companies', 'CompanyController@store')->name('companies.store');
    Route::post('/companies/{id}/employees', 'CompanyController@addEmployee')->name('companies.addEmployee');
    Route::delete('/companies/{companyId}/employees/{employeeId}', 'CompanyController@removeEmployee')->name('companies.removeEmployee');
    Route::put('/companies/{id}', 'CompanyController@update')->name('companies.update');
    Route::delete('/companies/{id}', 'CompanyController@destroy')->name('companies.destroy');
});


/** ------------------------------------------------------------
 * User Wall
 ---------------------------------------------------------------*/

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
    Route::post('/posts/{id}/comments', 'CommentController@store')->name('comments.store');
    Route::put('/comments/{id}', 'CommentController@update')->name('comments.update');
    Route::delete('/comments/{id}', 'CommentController@destroy')->name('comments.destroy');
});


/** ------------------------------------------------------------
 * User Messages
---------------------------------------------------------------*/

// Messages
Route::group(['middleware' => 'auth'], function () {
    Route::post('/messages', 'MessageController@store')->name('messages.store');
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

// API Routes

Route::group(['prefix' => 'api'], function () {
    // Resource: User
    Route::group(['middleware' => 'auth'], function () {
        Route::get('/user', 'UserController@auth');
        Route::put('/users/{id}', 'UserController@update');
        Route::delete('/users/{id}', 'UserController@destroy');
    });

    // Resource: Conversation
    Route::group(['middleware' => 'auth'], function () {
        Route::get('/conversations', 'ConversationController@index')->name('conversations.index');
        Route::get('/conversations/{id}', 'ConversationController@show')->name('conversations.show');
        Route::post('/conversations', 'ConversationController@store')->name('conversations.store');
        Route::delete('/conversations/{id}', 'ConversationController@destroy')->name('conversations.destroy');
    });

    // Job Requests
    Route::get('/users/{id}/job_requests', 'JobRequestController@index')->name('job_requests.index');
    Route::group(['middleware' => 'auth'], function () {
        Route::post('/job_requests', 'JobRequestController@store')->name('job_requests.store');
        Route::put('/job_requests/{id}', 'JobRequestController@update')->name('job_requests.update');
        Route::delete('/job_requests/{id}', 'JobRequestController@destroy')->name('job_requests.destroy');
    });

    // Job Offers
    Route::get('/company/{id}/job_offers', 'JobOfferController@index')->name('job_offers.index');
    Route::group(['middleware' => 'auth'], function () {
        Route::post('/job_offers', 'JobOfferController@store')->name('job_offers.store');
        Route::put('/job_offers/{id}', 'JobOfferController@update')->name('job_offers.update');
        Route::delete('/job_offers/{id}', 'JobOfferController@destroy')->name('job_offers.destroy');
    });


});



