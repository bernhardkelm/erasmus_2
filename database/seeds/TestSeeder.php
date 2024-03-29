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
                        \App\Message $message, \App\Role $role)
    {
        $role->create(['role' => \App\Enumerators\UserRoles::ADMIN]);
        $role->create(['role' => \App\Enumerators\UserRoles::MODERATOR]);
        $role->create(['role' => \App\Enumerators\UserRoles::USER]);

        $user1 = $user->create([
            'name' => 'Peter',
            'email' => 'example@dev.com',
            'type' => \App\Enumerators\UserType::PROFESSIONAL,
            'password' => app('hash')->make('devtest'),
            'picture' => '/images/allaire.jpg',
            'country_id' => 10
        ]);

        $user1->roles()->attach(\App\Enumerators\UserRoles::ADMIN);

        $user2 = $user->create([
            'name' => 'Alex',
            'email' => 'example@dumb.com',
            'type' => \App\Enumerators\UserType::COMPANY,
            'password' => app('hash')->make('devtest'),
        ]);

        $user3 = $user->create([
            'name' => 'Fay',
            'email' => 'fay@fay.com',
            'picture' => '/images/069f.jpg',
            'type' => \App\Enumerators\UserType::PROFESSIONAL,
            'password' => app('hash')->make('devtest'),
        ]);

        factory(App\User::class, 'user_male', 20)->create();
        factory(App\User::class, 'user_female', 20)->create();
        factory(App\User::class, 'company', 40)->create();

        $user2->roles()->attach(\App\Enumerators\UserRoles::USER);

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

        sleep(1);

        $message2 = $message->create([
            'conversation_id' => $conversation1->id,
            'message' => 'Sure is!',
            'sender_id' => $user2->id,
            'recipient_id' => $user1->id
        ]);

        $conversation2 = $conversation->create([
            'user_one' => $user1->id,
            'user_two' => $user3->id
        ]);

        $message3 = $message->create([
            'conversation_id' => $conversation2->id,
            'message' => 'Hey, what you up to?',
            'sender_id' => $user1->id,
            'recipient_id' => $user3->id
        ]);

        sleep(1);

        $message4 = $message->create([
            'conversation_id' => $conversation2->id,
            'message' => 'Nothing much.',
            'sender_id' => $user3->id,
            'recipient_id' => $user1->id
        ]);

        \App\ForumTopic::create([
            'name' => 'General',
            'color' => '#1E90FF'
        ]);
        \App\ForumTopic::create([
            'name' => 'Travel',
            'color' => '#BA55D3'
        ]);
        \App\ForumTopic::create([
            'name' => 'IT',
            'color' => '#90EE90'
        ]);
        \App\ForumTopic::create([
            'name' => 'Work',
            'color' => '#87CEEB'
        ]);

        factory(\App\ForumThread::class, 20)->create();
        factory(\App\ForumPost::class, 50)->create();
    }
}
