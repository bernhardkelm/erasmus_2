<?php

namespace App\Http\Controllers;


use App\Services\CompanyService;
use App\Services\ConversationService;
use App\Services\MessageService;
use App\Services\UserService;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }

    public function information() {
        return view('information');
    }

    public function dashboard(Request $request, UserService $userService, ConversationService $conversationService,
        MessageService $messageService)
    {
        $user = $request->user();
        $conversations = $conversationService->indexComplete($user->id);
        $jobRequests = $userService->indexJobRequests($user->id);
        foreach($conversations as $conversation) {
            $unreadMessages = $conversation->messages->filter(function ($value, $key) use ($user) {
                return ((!(intval($value->is_seen) === 1)) && ($value->recipient_id === $user->id));
            });

            foreach($unreadMessages as $message) {
                $messageService->markAsRead($message);
            }
        }

        return view('dashboard', [
            'user' => $user,
            'conversations' => $conversations,
            'jobRequests' => $jobRequests
        ]);
    }

    public function users(UserService $userService)
    {
        $users = $userService->indexProfessionals();
        return view('users.index', [
            'users' => $users
        ]);
    }

    public function companies(CompanyService $companyService)
    {
        $companies = $companyService->index();
        return view('companies.index', [
            'companies' => $companies
        ]);
    }

}
