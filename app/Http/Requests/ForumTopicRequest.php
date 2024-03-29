<?php

namespace App\Http\Requests;

use App\ForumTopic;
use Illuminate\Foundation\Http\FormRequest;

class ForumTopicRequest extends FormRequest
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
            'color' => 'required|max:255',
        ];
    }

    public function getTopic()
    {
        $topic = $this->container->make(ForumTopic::class);
        $topic->name = $this->get('name');
        $topic->color = $this->get('color');

        return $topic;
    }
}
