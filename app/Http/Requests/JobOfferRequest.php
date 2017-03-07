<?php

namespace App\Http\Requests;

use App\JobOffer;
use Illuminate\Foundation\Http\FormRequest;

class JobOfferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'body' => 'required'
        ];
    }

    public function getJobOffer()
    {
        $jobOffer = $this->container->make(JobOffer::class);
        $jobOffer->title = $this->get('title');
        $jobOffer->body = $this->get('body');
        $jobOffer->user_id = $this->user()->id;

        return $jobOffer;
    }
}
