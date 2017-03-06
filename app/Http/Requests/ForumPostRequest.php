<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Mews\Purifier\Facades\Purifier;

class ForumPostRequest extends FormRequest
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
            'body' => 'required',
            'thread_id' => 'required|exists:forum_threads'
        ];
    }

    public function getPost()
    {
        $post = $this->container->make('App\ForumPost');
        $post->body = Purifier::clean($this->get('body'));
        $post->user_id = $this->user()->id;
        $post->thread_id = $this->get('thread_id');

        return $post;
    }
}
