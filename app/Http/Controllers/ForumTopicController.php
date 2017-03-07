<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumTopicRequest;
use App\Services\ForumTopicService;
use Illuminate\Http\Request;

class ForumTopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ForumTopicService $service)
    {
        $topics = $service->index();
        return response()->json($topics, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //@TODO: maybe link to admin panel
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ForumTopicRequest $request, ForumTopicService $service)
    {
        $topic = $service->store($request->getTopic());
        return response()->json($topic, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //@TODO: maybe link to admin panel
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ForumTopicRequest $request, ForumTopicService $service, $id)
    {
        $topic = $service->get($id);
        if (!$topic) return response()-json(['error' => 'Topic not found.'], 404);
        if (!$request->user()->can('update', $topic)) return response()->json(['error' => 'Unauthorized'], 403);
        $topic = $service->update($topic, $request->all());
        return response()->json($topic, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, ForumTopicService $service, $id)
    {
        $topic = $service->get($id);
        if (!$topic) return response()-json(['error' => 'Topic not found.'], 404);
        if (!$request->user()->can('delete', $topic)) return response()->json(['error' => 'Unauthorized'], 403);
        $service->destroy($topic);
        return response()->json("{}", 200);
    }
}
