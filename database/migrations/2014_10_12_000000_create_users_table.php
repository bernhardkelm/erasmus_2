<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('type')->default(\App\Enumerators\UserType::PROFESSIONAL);
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->string('header')->default('/images/user_header.jpg');
            $table->string('picture')->nullable();

            $table->integer('country_id')->unsigned()->nullable();
            $table->string('major')->nullable();
            $table->string('languages')->nullable();
            $table->text('about')->nullable();
            $table->string('resume')->nullable();

            $table->string('location')->nullable();
            $table->string('website')->nullable();
            $table->text('description')->nullable();

            $table->foreign('country_id')->references('id')->on('countries');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
