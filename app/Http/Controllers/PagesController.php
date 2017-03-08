<?php

namespace App\Http\Controllers;


use App\Services\CompanyService;
use App\Services\ConversationService;
use App\Services\CountryService;
use App\Services\ForumThreadService;
use App\Services\ForumTopicService;
use App\Services\MessageService;
use App\Services\PostService;
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

    public function dashboard(Request $request)
    {
        $user = $request->user();
        return view('dashboard', ['user' => $user]);
    }

    public function users(UserService $userService, CountryService $countryService, Request $request)
    {
        $country = null;
        $requests = false;
        if ($request->has('country')) $country = $request->input('country');
        if ($request->has('requests')) $requests = true;
        $countries = $countryService->index();
        $users = $userService->indexProfessionalsFiltered($country, $requests);
        return view('users.index', [
            'users' => $users,
            'countries' => $countries
        ]);
    }

    public function companies(UserService $userService, CountryService $countryService, Request $request)
    {
        $country = null;
        $offers = false;
        if ($request->has('country')) $country = $request->input('country');
        if ($request->has('offers')) $offers = true;
        $countries = $countryService->index();
        $companies = $userService->indexCompaniesFiltered($country, $offers);
        return view('companies.index', [
            'companies' => $companies,
            'countries' => $countries
        ]);
    }

    public function showUser(UserService $userService, PostService $postService, $id)
    {
        $user = $userService->get($id);
        $posts = $postService->index($id);
        if (!$user->isUser()) {
            return redirect()->route('companies.show', ['id' => $id]);
        }
        return view('users.profile', [
            'user' => $user,
            'posts' => $posts
        ]);
    }

    public function showCompany(UserService $userService, PostService $postService, $id)
    {
        $company = $userService->get($id);
        $posts = $postService->index($id);
        if (!$company->isCompany()) {
            return redirect()->route('users.show', ['id' => $id]);
        }
        return view('companies.profile', [
            'company' => $company,
            'posts' => $posts
        ]);
    }

    public function forums(ForumThreadService $threadService, ForumTopicService $topicService)
    {
        $threads = $threadService->indexAll();
        $topics = $topicService->index();
        return view('forums.threads.index', [
            'topics' => $topics,
            'threads' => $threads
        ]);
    }

}
