<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConversationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_one')->unsigned();
            $table->integer('user_two')->unsigned();
            $table->boolean('deleted_from_user_one')->default(0);
            $table->boolean('deleted_from_user_two')->default(0);
            $table->foreign('user_one')->references('id')->on('users');
            $table->foreign('user_two')->references('id')->on('users');
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
        Schema::dropIfExists('conversations');
    }
}
