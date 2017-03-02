<?php

use Illuminate\Database\Seeder;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(\App\Post $post, \App\Comment $comment, \App\User $user)
    {
        $user1 = $user->create([
            'name' => 'Peter',
            'email' => 'example@dev.com',
            'password' => app('hash')->make('devtest'),
        ]);

        $user1 = $user->create([
            'name' => 'Alex',
            'email' => 'example@dumb.com',
            'password' => app('hash')->make('devtest'),
        ]);

        $post1 = $post->create([
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam necessitatibus iusto est repellendus soluta earum magnam, non at eum, incidunt, sint! Odio odit error dignissimos reiciendis eligendi, omnis culpa repudiandae!',
            'user_id' => 1,
        ]);

        $comment1 = $comment->create([
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quos.',
            'user_id' => 2,
            'post_id' => 1
        ]);

        $comment2 = $comment->create([
            'body' => 'What kind of gibberish is that supposed to be?',
            'user_id' => 1,
            'post_id' => 1
        ]);
    }
}
