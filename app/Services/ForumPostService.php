<?php

namespace App\Services;

use App\ForumPost;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Mews\Purifier\Facades\Purifier;

class ForumPostService
{
    protected $post;

    public function __construct(ForumPost $post)
    {
        $this->post = $post;
    }

    /**
     * Get a listing of all posts by thread ID.
     * @return mixed
     */
    public function index($threadId)
    {
        return $this->post
            ->where('thread_id', '=', $threadId)
            ->with(['user'])
            ->orderBy('created_at', 'ASC')
            ->paginate(20);
    }

    /**
     * Get a specific post by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $post = $this->post
                ->where('id', $id)
                ->with(['user'])
                ->firstOrFail();
            return $post;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new post in the database
     * @param $request
     * @return static
     */
    public function store($post)
    {
        $post->save();
        return $post;
    }

    public function update($post, $request)
    {
        $post->body = Purifier::clean($request->get('body'));
        $post->fill($request->except(['body']));
        $post->save();
        return $post;

    }
    /**
     * Destroy an existing thread
     * @param $post
     * @return bool
     */
    public function destroy($post)
    {
        $post->delete();
        return true;
    }
}