<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumThreadRequest;
use App\Services\ForumThreadService;
use App\Services\ForumTopicService;
use Illuminate\Http\Request;

class ForumThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ForumThreadService $threadService, ForumTopicService $topicService, $topicId)
    {
        $threads = $threadService->index($topicId);
        $topics = $topicService->index();
        $topic = $topicService->get($topicId);
        
        return view('forums.threads.index', [
            'currentTopic' => $topic,
            'topics' => $topics,
            'threads' => $threads
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(ForumTopicService $topicService)
    {
        $topics = $topicService->index();
        return view('forums.threads.create', [
            'topics' => $topics
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ForumThreadRequest $request, ForumThreadService $service)
    {
        $thread = $service->store($request->getThread());
        return redirect()->route('forums.thread::show', ['id' => $thread->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ForumThreadService $service, $id)
    {
        $thread = $service->get($id);
        return response()->json($thread, 200);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, ForumThreadService $service, ForumTopicService $topicService, $id)
    {
        $topics = $topicService->index();
        $thread = $service->get($id);
        if (!$thread) abort(404);
        if (!$request->user()->can('update', $thread)) abort(403);
        return view('forums.threads.edit', [
            'thread' => $thread,
            'topics' => $topics
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ForumThreadService $service, $id)
    {
        $thread = $service->get($id);
        if (!$thread) abort(404);
        if (!$request->user()->can('update', $thread)) abort(403);
        $service->update($thread, $request);
        return redirect()->route('forums.threads::show', ['id' => $thread->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, ForumThreadService $service, $id)
    {
        $thread = $service->get($id);
        if (!$thread) abort(404);
        if (!$request->user()->can('delete', $thread)) abort(403);
        $service->destroy($thread);
        return redirect()->route('forums.threads::index', ['id' => $thread->topic_id]);
    }
}
