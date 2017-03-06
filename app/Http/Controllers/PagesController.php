<?php

namespace App\Http\Controllers;


use App\Services\ConversationService;
use App\Services\MessageService;
use App\Services\UserService;

class PagesController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }

    public function dashboard(Request $request, UserService $userService, ConversationService $conversationService)
    {
        $user = $request->user();
        $conversations = $conversationService->index($user->id);
        $jobRequests = $userService->indexJobRequests($user->id);

        return view('dashboard', [
            'user' => $user,
            'conversations' => $conversations,
            'jobRequests' => $jobRequests
        ]);
    }
}
