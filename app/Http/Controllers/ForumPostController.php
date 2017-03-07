<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumPostRequest;
use App\Services\ForumPostService;
use App\Services\ForumThreadService;
use Illuminate\Http\Request;

class ForumPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ForumPostService $postService, ForumThreadService $threadService, $threadId)
    {
        $thread = $threadService->get($threadId);
        $posts = $postService->index($threadId);
        return view('forums.threads.show', [
            'thread' => $thread,
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($threadId, ForumThreadService $service)
    {
        $thread = $service->get($threadId);
        return view('forums.posts.create', [
            'thread' => $thread
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ForumPostRequest $request, ForumPostService $service)
    {
        $post = $service->store($request->getPost());
        return redirect()->route('forums.threads.show', ['id' => $post->thread_id]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(ForumPostService $service, Request $request, $id)
    {
        $post = $service->get($id);
        if (!$post) abort(404);
        if (!$request->user()->can('update', $post)) abort(403);
        return view('forums.posts.edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ForumPostRequest $request, ForumPostService $service, $id)
    {
        $post = $service->get($id);
        if (!$post) abort(404);
        if (!$request->user()->can('update', $post)) abort(403);
        $service->update($post, $request);
        return redirect()->route('forums.threads.show', ['id' => $post->thread_id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, ForumPostService $service, $id)
    {
        $post = $service->get($id);
        if (!$post) abort(404);
        if (!$request->user()->can('delete', $post)) abort(403);
        $service->destroy($post);
        return redirect()->route('forums.threads.show', ['id' => $post->thread_id]);
    }
}
