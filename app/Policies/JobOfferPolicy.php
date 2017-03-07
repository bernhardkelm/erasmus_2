<?php

namespace App\Policies;

use App\User;
use App\JobOffer;
use Illuminate\Auth\Access\HandlesAuthorization;

class JobOfferPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the jobOffer.
     *
     * @param  \App\User  $user
     * @param  \App\JobOffer  $jobOffer
     * @return mixed
     */
    public function view(User $user, JobOffer $jobOffer)
    {
        //
    }

    /**
     * Determine whether the user can create jobOffers.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the jobOffer.
     *
     * @param  \App\User  $user
     * @param  \App\JobOffer  $jobOffer
     * @return mixed
     */
    public function update(User $user, JobOffer $jobOffer)
    {
        return $user->id === $jobOffer->user_id;
    }

    /**
     * Determine whether the user can delete the jobRequest.
     *
     * @param  \App\User  $user
     * @param  \App\JobRequest  $jobRequest
     * @return mixed
     */
    public function delete(User $user, JobOffer $jobOffer)
    {
        return $user->id === $jobOffer->user_id;
    }
}
