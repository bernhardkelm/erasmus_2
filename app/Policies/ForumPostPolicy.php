<?php

namespace App\Policies;

use App\User;
use App\ForumPost;
use Illuminate\Auth\Access\HandlesAuthorization;

class ForumPostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the forumPost.
     *
     * @param  \App\User  $user
     * @param  \App\ForumPost  $forumPost
     * @return mixed
     */
    public function view(User $user, ForumPost $forumPost)
    {
        //
    }

    /**
     * Determine whether the user can create forumPosts.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the forumPost.
     *
     * @param  \App\User  $user
     * @param  \App\ForumPost  $forumPost
     * @return mixed
     */
    public function update(User $user, ForumPost $forumPost)
    {
        return ($user->id === $forumPost->user_id) || $user->isAdmin() || $user->isModerator();
    }

    /**
     * Determine whether the user can delete the forumPost.
     *
     * @param  \App\User  $user
     * @param  \App\ForumPost  $forumPost
     * @return mixed
     */
    public function delete(User $user, ForumPost $forumPost)
    {
        return ($user->id === $forumPost->user_id) || $user->isAdmin() || $user->isModerator();
    }
}
