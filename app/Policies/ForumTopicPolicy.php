<?php

namespace App\Policies;

use App\User;
use App\ForumTopic;
use Illuminate\Auth\Access\HandlesAuthorization;

class ForumTopicPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the forumTopic.
     *
     * @param  \App\User  $user
     * @param  \App\ForumTopic  $forumTopic
     * @return mixed
     */
    public function view(User $user, ForumTopic $forumTopic)
    {
        //
    }

    /**
     * Determine whether the user can create forumTopics.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isAdmin() || $user->isModerator();
    }

    /**
     * Determine whether the user can update the forumTopic.
     *
     * @param  \App\User  $user
     * @param  \App\ForumTopic  $forumTopic
     * @return mixed
     */
    public function update(User $user, ForumTopic $forumTopic)
    {
        return $user->isAdmin() || $user->isModerator();
    }

    /**
     * Determine whether the user can delete the forumTopic.
     *
     * @param  \App\User  $user
     * @param  \App\ForumTopic  $forumTopic
     * @return mixed
     */
    public function delete(User $user, ForumTopic $forumTopic)
    {
        return $user->isAdmin() || $user->isModerator();
    }
}
