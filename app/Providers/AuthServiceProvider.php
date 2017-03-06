<?php

namespace App\Providers;

use App\Comment;
use App\Conversation;
use App\ForumPost;
use App\ForumThread;
use App\ForumTopic;
use App\JobRequest;
use App\Policies\CommentPolicy;
use App\Policies\CompanyPolicy;
use App\Policies\ConversationPolicy;
use App\Policies\ForumPostPolicy;
use App\Policies\ForumThreadPolicy;
use App\Policies\ForumTopicPolicy;
use App\Policies\JobRequestPolicy;
use App\Policies\PostPolicy;
use App\Policies\UserPolicy;
use App\Post;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Post::class => PostPolicy::class,
        Comment::class => CommentPolicy::class,
        User::class => UserPolicy::class,
        Conversation::class => ConversationPolicy::class,
        JobRequest::class => JobRequestPolicy::class,
        Company::class => CompanyPolicy::class,
        ForumTopic::class => ForumTopicPolicy::class,
        ForumThread::class => ForumThreadPolicy::class,
        ForumPost::class => ForumPostPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
