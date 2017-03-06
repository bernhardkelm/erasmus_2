<?php

namespace App\Http\Requests;

use App\ForumThread;
use Illuminate\Foundation\Http\FormRequest;
use Mews\Purifier\Facades\Purifier;

class ForumThreadRequest extends FormRequest
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
            'body' => 'required',
            'topic_id' => 'required|exists:forum_topics'
        ];
    }

    public function getThread()
    {
        $thread = $this->container->make(ForumThread::class);
        $thread->title = $this->get('title');
        $thread->body = Purifier::clean($this->get('body'));
        $thread->user_id = $this->user()->id;
        $thread->topic_id = $this->get('topic_id');

        return $thread;
    }
}
