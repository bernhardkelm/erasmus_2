<?php

namespace App\Http\Requests;

use App\Post;
use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
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
        ];
    }

    public function getPost()
    {
        $post = $this->container->make(Post::class);
        $post->body = $this->get('body');
        $post->user_id = $this->user()->id;

        return $post;
    }
}
