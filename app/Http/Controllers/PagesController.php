<?php

namespace App\Http\Controllers;


use App\Services\ConversationService;
use App\Services\UserService;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }

    public function dashboard(Request $request, UserService $userService, ConversationService $conversationService)
    {
        $user = $request->user();
        $conversations = $conversationService->indexComplete($user->id);
        $jobRequests = $userService->indexJobRequests($user->id);

        return view('dashboard', [
            'user' => $user,
            'conversations' => $conversations,
            'jobRequests' => $jobRequests
        ]);
    }
}
