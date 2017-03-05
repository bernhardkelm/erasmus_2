<?php

namespace App\Http\Controllers;

use App\Services\MessageService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PagesController extends Controller
{
    public function welcome(Request $request, MessageService $service)
    {
        if (Auth::check()) {
            $user = $request->user();
            $unreadMessages = $service->numberOfUnreadMessages($user->id);
            return view('welcome', [
                'user' => $user,
                'unreadMessages' => $unreadMessages
            ]);
        }
        return view('welcome');
    }
}
