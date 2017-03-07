<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Services\MessageService;
use App\Services\PostService;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UserService $service)
    {
        $users = $service->indexProfessionals();
        return response()->json($users, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(UserService $userService, PostService $postService, MessageService $messageService,
                         Request $request, $id)
    {
        $user = $userService->get($id);
        $posts = $postService->index($id);
        return view('profile', [
            'user' => $user,
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(UserService $service, Request $request)
    {
        $user = $service->get($request->user()->id);
        return view('dashboard.profile.edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserService $service, UserRequest $request, $id)
    {
        $user = $service->get($id);
        if (!$user) return response()->json(['error' => 'User could not be found'], 404);
        if (!$request->user()->can('update', $user))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $user = $service->update($user, $request);
        if (!user) return response()->json(['error' => 'Your passwords didn\'t match.']);
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserService $service, Request $request, $id)
    {
        $user = $service->get($id);
        if (!$user) return response()->json(['error' => 'User could not be found'], 404);
        if (!$request->user()->can('delete', $user))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $service->destroy($user);
        return response()->json("{}", 200);
    }
}
