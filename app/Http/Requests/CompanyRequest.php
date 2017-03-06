<?php

namespace App\Http\Requests;

use App\Company;
use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
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
            'logo' => 'image|mimes:jpeg,png,jpg|max:300',
        ];
    }

    public function getCompany()
    {
        $company = $this->container->make(Company::class);
        $company->name = $this->get('name');
        $company->creator_id = ($$this->user()->id;
        // If a logo has been uploaded, store it and link it to company.
        // Rename it to uniqueId.extension, e.g. 3245325234.png
        if ($this->hasFile('logo')) {
            $filename = uniqid() . '.' . $this->logo->extension();
            $this->logo->move(public_path('images/companies'), $filename);
            $company->logo = '/images/companies/' . $filename;
        }
        if ($this->has('description')) $company->description = $this->get('description');
    }
}
