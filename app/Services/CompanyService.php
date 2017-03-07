<?php

namespace App\Services;

use App\Company;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CompanyService
{
    protected $company;

    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    /**
     * Get a listing of all companies
     * @return mixed
     */
    public function index()
    {
        return $this->company->paginate(10);
    }

    public function indexForUser($userId)
    {
        return $this->company
            ->where('creator_id', $userId)
            ->get();
    }

    /**
     * Get a specific company by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $company = $this->company
                ->where('id', $id)
                ->with(['users', 'creator'])
                ->firstOrFail();
            return $company;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new company in the database
     * @param $request
     * @return static
     */
    public function store($company)
    {
        $company->save();
        return $company;
    }

    /**
     * Update an existing Company in the database
     * @param $company
     * @param array $newData Request data
     * @return mixed
     */
    public function update($company, Array $newData)
    {
        $company->fill($newData);
        $company->save();
        return $company;
    }

    /**
     * Destroy an existing company
     * @param $post
     * @return bool
     */
    public function destroy($company)
    {
        $company->delete();
        return true;
    }

    public function setCreator($company, $user)
    {
        $company->creator_id = $user->id;
        $company->save();
        return $company;
    }

    public function addEmployee($company, $user)
    {
        $company->employees()->attach($user->id);
    }

    public function removeEmployee($company, $userId)
    {
        $company->employees()->detach($userId);
    }
}