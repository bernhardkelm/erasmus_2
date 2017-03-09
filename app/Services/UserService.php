<?php

namespace App\Services;

use App\Country;
use App\Enumerators\UserType;
use App\JobOffer;
use App\JobRequest;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserService
{
    protected $user;
    protected $jobRequest;
    protected $jobOffer;

    public function __construct(User $user, JobRequest $jobRequest, JobOffer $jobOffer)
    {
        $this->user = $user;
        $this->jobRequest = $jobRequest;
        $this->jobOffer = $jobOffer;
    }

    /**
     * Get a listing of all users
     * @return mixed
     */
    public function index()
    {
        return $this->user->get();
    }

    /**
     * Get all users that are professionals
     * @return mixed
     */
    public function indexProfessionals()
    {
        return $this->user
                ->where('type', UserType::PROFESSIONAL)
                ->paginate(15);
    }

    public function indexCompanies()
    {
        return $this->user
            ->where('type', UserType::COMPANY)
            ->paginate(15);
    }

    public function indexProfessionalsFiltered($country = null, $requests = false)
    {
        $query = $this->user->where('type', UserType::PROFESSIONAL)->with('country');
        if ($country) {
            $query = $query->where('country_id', '=', $country);
        }
        if ($requests) {
            $query = $query->with('jobRequests');
        }

        $users = $query->paginate(15);
        if ($requests) {
            $users = $users->filter(function($value, $key) {
                return $value->jobRequests->count() > 0;
            });
        }

        return $users;
    }

    /**
     * Get all users that are company representatives
     * @return mixed
     */
    public function indexCompaniesFiltered($country = null, $offers = false)
    {
        $query = $this->user->where('type', UserType::COMPANY)->with('country');
        if ($country) {
            $query = $query->where('country_id', '=', $country);
        }
        if ($offers) {
            $query = $query->with('jobOffers');
        }

        $users = $query->paginate(15);
        if ($offers) {
            $users = $users->filter(function($value, $key) {
                return $value->jobOffers->count() > 0;
            });
        }

        return $users;
        return $this->user
                ->where('type', UserType::COMPANY)
                ->paginate(15);
    }

    /**
     * Get a specific user by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $user = $this->user
                ->where('id', $id)
                ->with('country')
                ->firstOrFail();
            return $user;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    public function find($email)
    {
        try {
            $user = $this->user
                ->where('email', $email)
                ->firstOrFail();
            return $user;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new user in the database
     * @param $request
     * @return static
     */
    public function store($user)
    {
        $user->save();
        return $user;
    }

    /**
     * Update an existing user in the database
     * @param $user
     * @param Request $request
     * @return mixed
     */
    public function update($user, $request)
    {
        // If a new password has been provided, hash it and update user.
        if ($request->password) {
            if (!$request->password_confirm || $request->password !== $request->password_confirm) {
                return false;
            }
            $user->password = Hash::make($request->password);
        }
        // If an avatar has been uploaded, store it and link it to user.
        // Rename it to uniqueId.extension, e.g. 3245325234.png
        if ($request->hasFile('picture')) {
            $filename = uniqid() . '.' . $request->picture->extension();
            $request->picture->move(public_path('images'), $filename);
            $oldavatar = public_path() . $user->picture;
            if (file_exists($oldavatar)) unlink($oldavatar);
            $user->picture = '/images/' . $filename;
        }

        if ($request->hasFile('header')) {
            $filename = uniqid() . '.' . $request->header->extension();
            $request->header->move(public_path('images/headers'), $filename);
            $oldheader = public_path() . $user->header;
            if (file_exists($oldheader)) unlink($oldheader);
            $user->header = '/images/headers/' . $filename;
        }

        // If a resume has been uploaded, store it and link it to user.
        // Rename it to resume_uniqueId.extension, e.g. resume3245325234.pdf
        if ($request->hasFile('resume')) {
            $filename = uniqid() . '.' . $request->picture->extension();
            $request->resume->move(public_path('resumes'), $filename);
            $oldresume = public_path() . $user->resume;
            if (file_exists($oldresume)) unlink($oldresume);
            $user->resume = '/resumes/' . $filename;
        }
        // Update all other properties
        $input = $request->except(['picture', 'resume', 'header', 'password']);
        foreach ($input as $field) {
            if ($field === 'null' or $field === '') $field = null;
        }
        $user->fill($input);
        $user->country_id = $request->get('country_id');
        // Save new user object to DB
        $user->save();
        return $user;
    }

    /**
     * Destroy an existing user
     * @param $user
     * @return bool
     */
    public function destroy($user)
    {
        $user->delete();
        return true;
    }

    public function indexJobRequests($userId)
    {
        return $this->jobRequest
            ->where('user_id', $userId)
            ->get();
    }

    public function getJobRequest($id)
    {
        try {
            $jobRequest = $this->jobRequest
                ->where('id', '=', $id)
                ->firstOrFail();
            return $jobRequest;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    public function storeJobRequest($jobRequest)
    {
        $jobRequest->save();
        return $jobRequest;
    }

    public function updateJobRequest($jobRequest, Array $newData)
    {
        $jobRequest->fill($newData);
        $jobRequest->save();
        return $jobRequest;
    }

    public function destroyJobRequest($jobRequest)
    {
        $jobRequest->delete();
        return true;
    }

    public function indexJobOffers($userId)
    {
        return $this->jobOffer
            ->where('user_id', $userId)
            ->get();
    }

    public function getJobOffer($id)
    {
        try {
            $jobOffer = $this->jobOffer
                ->where('id', '=', $id)
                ->firstOrFail();
            return $jobOffer;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    public function storeJobOffer($jobOffer)
    {
        $jobOffer->save();
        return $jobOffer;
    }

    public function updateJobOffer($jobOffer, Array $newData)
    {
        $jobOffer->fill($newData);
        $jobOffer->save();
        return $jobOffer;
    }

    public function destroyJobOffer($jobOffer)
    {
        $jobOffer->delete();
        return true;
    }
}