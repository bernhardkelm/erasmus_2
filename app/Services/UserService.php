<?php

namespace App\Services;

use App\Enumerators\UserType;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserService
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
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
                ->get();
    }

    /**
     * Get all users that are company representatives
     * @return mixed
     */
    public function indexCompanies()
    {
        return $this->user
                ->where('type', UserType::COMPANY)
                ->get();
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
        $input = $request->except(['picture', 'resume', 'password']);
        $user->fill($input);
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
}