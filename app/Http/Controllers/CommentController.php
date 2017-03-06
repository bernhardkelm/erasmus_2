<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Services\CommentService;
use App\Services\PostService;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CommentService $service, $id)
    {
        $comments = $service->index($id);
        return response()->json($comments, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // @TODO: Either implement create comment view or delete method.
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CommentRequest $request, CommentService $service, $postId)
    {
        $comment = $service->store($postId, $request->getComment());
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CommentService $service, $id)
    {
        $comment = $service->get($id);
        if (!$comment) return response()->json(['error' => 'Comment could not be found'], 404);
        return response()->json($comment, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // @TODO: Implement edit comment view or remove method if not necessary.
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CommentRequest $request, CommentService $service, $id)
    {
        $comment = $service->get($id);
        if (!$comment) return response()->json(['error' => 'Comment could not be found'], 404);

        if (!$request->user()->can('update', $comment))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $comment = $service->update($comment, $request->all());
        return response()->json($comment, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, CommentService $commentService, PostService $postService, $id)
    {
        $comment = $commentService->get($id);
        if (!$comment) return response()->json(['error' => 'Comment could not be found'], 404);
        $post = $postService->get($comment->post_id);
        if (!$request->user()->can('delete', [$comment, $post]))
            return response()->json(['error' => 'Unauthorized.'], 401);
        $commentService->destroy($comment);
        return redirect()->back();
    }
}
