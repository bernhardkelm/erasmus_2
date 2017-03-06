<?php

namespace App\Http\ViewComposers;

use App\Services\MessageService;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

/**
 * Created by PhpStorm.
 * User: allaire
 * Date: 06.03.17
 * Time: 01:09
 */
class UserComposer
{

    protected $messageService;

    public function __construct(MessageService $service)
    {
        $this->messageService = $service;
    }

    public function compose(View $view)
    {
        if (Auth::check()) {
            $view->with('unreadMessages', $this->messageService->numberOfUnreadMessages(Auth::id()));
        }
    }

}