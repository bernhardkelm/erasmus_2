<?php

namespace App\Services;

use App\Message;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MessageService
{
    protected $message;
    protected $conversationService;

    public function __construct(Message $message, ConversationService $conversationService)
    {
        $this->message = $message;
        $this->conversationService = $conversationService;
    }

    /**
     * Get a listing of all messages belonging to a certain conversation.
     * @return mixed
     */
    public function index($conversationId)
    {
        return $this->message
            ->where('conversation_id', $conversationId)
            ->orderBy('created_at', 'DESC')
            ->get();
    }

    /**
     * Get a specific message by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $message = $this->message
                ->where('id', $id)
                ->with(['sender', 'recipient', 'conversation'])
                ->firstOrFail();
            return $message;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new message in the database
     * @param $request
     * @return static
     */
    public function store($message)
    {
        // First check if a conversation is already present on model, if so fetch it
        if ($message->conversation_id) {
            $conversation = $this->conversationService->get($message->conversation_id);
            if (!$conversation) return response()->json(['error' => 'Conversation could not be found'], 404);
        }

        // If not present, check if one already exists
        $conversation = $this->conversationService->getByUsers($message->sender_id, $message->recipient_id);

        // If it doesn't yet exist, create new one
        if (!$conversation) {
            $conversation = $this->conversationService->create([
                'user_one' => $message->sender_id,
                'user_two' => $message->recipient_id
            ]);
        }

        $message->conversation_id = $conversation->id;
        $conversation->touch();
        $message->save();

        return $message;
    }

    public function markAsRead($message)
    {
        $message->is_seen = 1;
        $message->save();
        return $message;
    }

    public function numberOfUnreadMessages($user)
    {
        $number = $this->message
            ->where('recipient_id', '=', $user)
            ->where('is_seen', 0)
            ->get();
        return $number->count();
    }

    /**
     * Destroy an existing conversation
     * @param $post
     * @return bool
     */
    public function destroy($message)
    {
        $message->delete();
        return true;
    }
}