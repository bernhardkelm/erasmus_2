<?php

namespace App\Services;

use App\Country;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CountryService
{
    protected $country;

    public function __construct(Country $country)
    {
        $this->country = $country;
    }

    /**
     * Get a listing of all countries.
     * @return mixed
     */
    public function index()
    {
        return $this->country
            ->orderBy('name', 'ASC')
            ->get();
    }

    /**
     * Get a specific country by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $country = $this->country
                ->where('id', $id)
                ->firstOrFail();
            return $country;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new country in the database
     * @param $request
     * @return static
     */
    public function store($country)
    {
        $country->save();
        return $country;
    }

    public function update($country, Array $newData)
    {
        $country->fill($newData);
        $country->save();
        return $country;

    }
    /**
     * Destroy an existing country
     * @param $post
     * @return bool
     */
    public function destroy($country)
    {
        $country->delete();
        return true;
    }
}