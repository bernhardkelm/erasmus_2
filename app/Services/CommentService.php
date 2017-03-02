<?php

namespace App\Services;

use App\Comment;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CommentService
{
    protected $comment;

    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Get a listing of all comments belong to a certain post
     * @param $post Post
     * @return mixed
     */
    public function index($post)
    {
        return $this->comment
            ->where('post_id', $post)
            ->with('user')
            ->orderBy('created_at', 'DESC')
            ->get();
    }

    /**
     * Get a specific comment by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $comment = $this->comment->where('id', $id)->firstOrFail();
            return $comment;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new comment in the database
     * @param PostService $service
     * @param $id
     * @param $comment
     * @return mixed
     */
    public function store(PostService $service, $id, $comment)
    {
        $post = $service->get($id);
        $post->comments()->save($comment);
        $comment->save();
        return $comment;
    }

    /**
     * Update an existing comment in the database
     * @param $comment
     * @param array $newData Request data
     * @return mixed
     */
    public function update($comment, Array $newData)
    {
        $comment->fill($newData);
        $comment->save();
        return $comment;
    }

    /**
     * Destroy an existing comment
     * @param $comment
     * @return bool
     */
    public function destroy($comment)
    {
        $comment->delete();
        return true;
    }
}