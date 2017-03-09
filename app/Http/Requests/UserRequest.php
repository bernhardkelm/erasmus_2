<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        switch($this->method())
        {
            case 'POST':
                return [
                    'name' => 'required|max:255',
                    'email' => 'required|email|max:255|unique:users',
                    'password' => 'required|min:6|confirmed',
                ];
            case 'PUT':
                /**
                 * When updating user, don't validate unique email on existing user model
                 */
                return [
                    'name' => 'required|max:255',
                    'country_id' => 'required|integer',
                    'major' => 'max:255',
                    'languages' => 'max:255',
                    'twitter' => 'max:255',
                    'facebook' => 'max:255',
                    'website' => 'max:255',
                    'location' => 'max:255',
                    'header' => 'image|mimes:jpeg,png,jpg:max:2000',
                    'picture' => 'image|mimes:jpeg,png,jpg|max:300',
                    'resume' => 'file|mimes:pdf|max:5000',
                    'email' => 'required|email|unique:users,email,'.$this->route('id'),
                ];
        }
    }
}
