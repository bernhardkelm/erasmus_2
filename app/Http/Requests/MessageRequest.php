<?php

namespace App\Http\Requests;

use App\Message;
use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
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
            'message' => 'required',
            'conversation_id' => 'required|exists:conversations,id',
            'sender_id' => 'required|exists:users,id',
            'recipient_id' => 'required|exists:users,id'
        ];
    }

    public function messages()
    {
        return [
            'message.required' => 'Your message cannot be empty.',
            'recipient_id.required' => 'Please specify the receiver of this message.',
            'recipient_id.exists' => 'The specified user does not exist.'
        ];
    }

    public function getMessage()
    {
        $message = $this->container->make(Message::class);
        $message->message = $this->get('message');
        $message->sender_id = $this->user()->id;
        $message->recipient_id = $this->get('recipient_id');
        $message->conversation_id = $this->get('conversation_id');

        return $message;
    }
}
