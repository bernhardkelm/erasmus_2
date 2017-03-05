<?php

use Illuminate\Database\Seeder;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(\App\Post $post, \App\Comment $comment, \App\User $user, \App\Conversation $conversation,
                        \App\Message $message)
    {
        $user1 = $user->create([
            'name' => 'Peter',
            'email' => 'example@dev.com',
            'type' => \App\Enumerators\UserType::PROFESSIONAL,
            'password' => app('hash')->make('devtest'),
        ]);

        $user2 = $user->create([
            'name' => 'Alex',
            'email' => 'example@dumb.com',
            'type' => \App\Enumerators\UserType::COMPANY,
            'password' => app('hash')->make('devtest'),
        ]);

        $post1 = $post->create([
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam necessitatibus iusto est repellendus soluta earum magnam, non at eum, incidunt, sint! Odio odit error dignissimos reiciendis eligendi, omnis culpa repudiandae!',
            'user_id' => $user1->id,
        ]);

        $comment1 = $comment->create([
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quos.',
            'user_id' => $user2->id,
            'post_id' => $user1->id
        ]);

        $comment2 = $comment->create([
            'body' => 'What kind of gibberish is that supposed to be?',
            'user_id' => $user2->id,
            'post_id' => $user1->id
        ]);

        $conversation1 = $conversation->create([
            'user_one' => $user1->id,
            'user_two' => $user2->id
        ]);

        $message1 = $message->create([
            'conversation_id' => $conversation1->id,
            'message' => 'Hey, great weather today, huh?',
            'sender_id' => $user1->id,
            'recipient_id' => $user2->id
        ]);

        $message2 = $message->create([
            'conversation_id' => $conversation1->id,
            'message' => 'Sure is!',
            'sender_id' => $user2->id,
            'recipient_id' => $user1->id
        ]);

    }
}
