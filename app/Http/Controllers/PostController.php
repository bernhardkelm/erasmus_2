<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Services\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PostService $service, $id)
    {
        return response()->json($service->index($id), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // @TODO: Create post creation view or remove method if not necessary.
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request, PostService $service)
    {
        $post = $service->store($request->getPost());
        return response()->json($post, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(PostService $service, $id)
    {
        $post = $service->get($id);
        if (!$post) return response()->json(['error' => 'Post could not be found'], 404);
        return response()->json($post, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // @TODO: Implement edit post view or remove method if not necessary.
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, PostService $service, $id)
    {
        $post = $service->get($id);
        if (!$post) return response()->json(['error' => 'Post could not be found'], 404);

        if (!$request->user()->can('update', $post))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $post = $service->update($post, $request->all());
        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PostService $service, Request $request, $id)
    {
        $post = $service->get($id);
        if (!$post) return response()->json(['error' => 'Post could not be found'], 404);
        if (!$request->user()->can('delete', $post))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $service->destroy($post);
        return response()->json("{}", 200);
    }
}
