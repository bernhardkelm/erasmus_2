<?php

namespace App\Services;

use App\Conversation;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ConversationService
{
    protected $conversation;

    public function __construct(Conversation $conversation)
    {
        $this->conversation = $conversation;
    }

    /**
     * Get a listing of all conversations that a certain user is part of.
     * @return mixed
     */
    public function index($user)
    {
        $conversations = $this->conversation
            ->where('user_one', $user)
            ->orWhere('user_two', $user)
            ->with('userOne', 'userTwo')
            ->with('latestMessage')
            ->orderBy('updated_at', 'DESC')
            ->get();
        // @TODO Improve this inefficient shit
        $filteredConversations = $conversations->filter(function($value, $key) use ($user) {
            $userNumber = ($value->user_one === $user) ? 'one' : 'two';
            if ($userNumber === 'one') {
                return $value->deleted_from_user_one !== 1;
            } else {
                return $value->deleted_from_user_two !== 1;
            }
        });
        return $filteredConversations;
    }

    /**
     * Get a specific conversation by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $conversation = $this->conversation
                ->where('id', $id)
                ->with(['messages.sender', 'userOne', 'userTwo'])
                ->firstOrFail();
            return $conversation;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    public function getByUsers($userOne, $userTwo)
    {
        try {
            $conversation = $this->conversation
                ->where(function ($query) use ($userOne, $userTwo) {
                    $query
                        ->where('user_one', '=', $userOne)
                        ->where('user_two', '=', $userTwo);
                })
                ->orWhere(function ($query) use ($userOne, $userTwo) {
                    $query
                        ->where('user_one', '=', $userTwo)
                        ->where('user_two', '=', $userOne);
                })
                ->firstOrFail();
            return $conversation;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new conversation in the database
     * @param $request
     * @return static
     */
    public function store($conversation)
    {
        $conversation->save();
        return $conversation;
    }

    public function create(Array $attributes)
    {
        $conversation = $this->conversation->create($attributes);
        $this->store($conversation);
    }

    /**
     * Destroy an existing conversation
     * @param $post
     * @return bool
     */
    public function destroy($conversation)
    {
        $conversation->delete();
        return true;
    }

    public function softDestroy($conversation, $userId)
    {
        $userNumber = ($conversation->user_one === $userId) ? 'one' : 'two';
        $conversation->softDelete($userNumber);
        $conversation->save();
        return true;
    }
}