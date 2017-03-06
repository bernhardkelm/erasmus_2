<?php

namespace App\Http\Requests;

use App\JobRequest;
use Illuminate\Foundation\Http\FormRequest;

class JobRequestRequest extends FormRequest
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
            'title' => 'required|max:255',
            'body' => 'required'
        ];
    }

    public function getJobRequest()
    {
        $jobRequest = $this->container->make(JobRequest::class);
        $jobRequest->title = $this->get('title');
        $jobRequest->body = $this->get('body');
        $jobRequest->user_id = $this->user()->id;

        return $jobRequest;
    }
}
