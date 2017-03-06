<?php

namespace App\Policies;

use App\User;
use App\ForumThread;
use Illuminate\Auth\Access\HandlesAuthorization;

class ForumThreadPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the forumThread.
     *
     * @param  \App\User  $user
     * @param  \App\ForumThread  $forumThread
     * @return mixed
     */
    public function view(User $user, ForumThread $forumThread)
    {
        //
    }

    /**
     * Determine whether the user can create forumThreads.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the forumThread.
     *
     * @param  \App\User  $user
     * @param  \App\ForumThread  $forumThread
     * @return mixed
     */
    public function update(User $user, ForumThread $forumThread)
    {
        return ($user->id === $forumThread->user_id) || $user->isAdmin() || $user->isModerator();
    }

    /**
     * Determine whether the user can delete the forumThread.
     *
     * @param  \App\User  $user
     * @param  \App\ForumThread  $forumThread
     * @return mixed
     */
    public function delete(User $user, ForumThread $forumThread)
    {
        return ($user->id === $forumThread->user_id) || $user->isAdmin() || $user->isModerator();
    }
}