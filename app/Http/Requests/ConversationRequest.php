<?php

namespace App\Http\Requests;

use App\Conversation;
use Illuminate\Foundation\Http\FormRequest;

class ConversationRequest extends FormRequest
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
            'user_one' => 'required|exists:users,id',
            'user_two' => 'required|exists:users,id',
        ];
    }

    public function getConversation()
    {
        $conversation = $this->container->make(Conversation::class);
        $conversation->user_one = $this->get('user_one');
        $conversation->user_two = $this->get('user_two');
        return $conversation;
    }


}
