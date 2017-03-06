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
            $table->integer('type')->nullable();
            $table->string('country')->nullable();
            $table->string('major')->nullable();
            $table->string('languages')->nullable();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->text('about')->nullable();
            $table->string('picture')->nullable();
            $table->string('resume')->nullable();
            $table->string('email')->unique();
            $table->integer('company_id')->unsigned()->nullabe();
            $table->string('password');
            $table->foreign('company_id')->references('id')->on('companies');
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
