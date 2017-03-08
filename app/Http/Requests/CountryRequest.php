<?php

namespace App\Http\Requests;

use App\Country;
use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'code' => 'required|unique:countries,code'
        ];
    }

    public function getCountry()
    {
        $country = $this->container->make(Country::class);
        $country->name = $this->get('name');
        $country->code = $this->get('code');
        return $country;
    }
}
