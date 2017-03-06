<?php

namespace App\Policies;

use App\User;
use App\JobRequest;
use Illuminate\Auth\Access\HandlesAuthorization;

class JobRequestPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the jobRequest.
     *
     * @param  \App\User  $user
     * @param  \App\JobRequest  $jobRequest
     * @return mixed
     */
    public function view(User $user, JobRequest $jobRequest)
    {
        //
    }

    /**
     * Determine whether the user can create jobRequests.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the jobRequest.
     *
     * @param  \App\User  $user
     * @param  \App\JobRequest  $jobRequest
     * @return mixed
     */
    public function update(User $user, JobRequest $jobRequest)
    {
        return $user->id === $jobRequest->user_id;
    }

    /**
     * Determine whether the user can delete the jobRequest.
     *
     * @param  \App\User  $user
     * @param  \App\JobRequest  $jobRequest
     * @return mixed
     */
    public function delete(User $user, JobRequest $jobRequest)
    {
        return $user->id === $jobRequest->user_id;
    }
}
