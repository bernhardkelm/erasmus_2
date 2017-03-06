<?php

namespace App\Http\Controllers;

use App\Http\Requests\ConversationRequest;
use App\Services\ConversationService;
use App\Services\MessageService;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ConversationService $service, MessageService $messageService, Request $request)
    {
        $conversations = $service->index($request->user()->id);
        return view('dashboard.conversations.index', [
            'conversations' => $conversations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ConversationRequest $request, ConversationService $service)
    {
        $conversation = $service->store($request->getConversation());
        return response()->json($conversation, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ConversationService $conversationService, MessageService $messageService, Request $request, $id)
    {
        $conversation = $conversationService->get($id);
        if (!$conversation) return response()->json(['error' => 'Conversation could not be found'], 404);
        $user = $request->user()->id;
        $unreadMessages = $conversation->messages->filter(function ($value, $key) use ($user) {
            return ((!(intval($value->is_seen) === 1)) && ($value->recipient_id === $user));
        });

        foreach($unreadMessages as $message) {
            $messageService->markAsRead($message);
        }
        return view('dashboard.conversations.show', [
            'conversation' => $conversation
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, ConversationService $service, $id)
    {
        $conversation = $service->get($id);
        if (!$conversation) return response()->json(['error' => 'Conversation could not be found'], 404);
        if (!$request->user()->can('delete', $conversation))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $service->softDestroy($conversation, $request->user()->id);
        return response()->json("{}", 200);
    }
}
