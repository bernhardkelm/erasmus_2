<?php

namespace App\Services;

use App\Post;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PostService
{
    protected $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    /**
     * Get a listing of all posts belonging to a certain user
     * @return mixed
     */
    public function index($user)
    {
        return $this->post
            ->where('user_id', $user)
            ->with('comments.user')
            ->orderBy('created_at', 'DESC')
            ->get();
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
                ->with(['user', 'comments'])
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

    /**
     * Update an existing Post in the database
     * @param $post
     * @param array $newData Request data
     * @return mixed
     */
    public function update($post, Array $newData)
    {
        $post->fill($newData);
        $post->save();
        return $post;
    }

    /**
     * Destroy an existing post
     * @param $post
     * @return bool
     */
    public function destroy($post)
    {
        $post->delete();
        return true;
    }
}