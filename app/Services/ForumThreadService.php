<?php

namespace App\Services;

use App\ForumThread;
use App\ForumTopic;
use App\Message;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Mews\Purifier\Facades\Purifier;

class ForumThreadService
{
    protected $thread;

    public function __construct(ForumThread $thread)
    {
        $this->thread = $thread;
    }

    /**
     * Get a listing of all threads by topic ID.
     * @return mixed
     */
    public function index($topicId)
    {
        return $this->thread
            ->where('topic_id', '=', $topicId)
            ->with(['user', 'latestPost.user'])
            ->withCount('posts')
            ->orderBy('updated_at', 'DESC')
            ->paginate(20);
    }

    public function indexAll()
    {
        return $this->thread
            ->with(['user', 'latestPost.user'])
            ->withCount('posts')
            ->orderBy('updated_at', 'DESC')
            ->paginate(20);
    }

    /**
     * Get a specific thread by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $thread = $this->thread
                ->where('id', $id)
                ->with(['user'])
                ->firstOrFail();
            return $thread;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new thread in the database
     * @param $request
     * @return static
     */
    public function store($thread)
    {
        $thread->save();
        return $thread;
    }

    public function update($thread, $request)
    {
        $thread->body = Purifier::clean($request->get('body'));
        $thread->fill($request->except(['body']));
        $thread->save();
        return $thread;

    }
    /**
     * Destroy an existing thread
     * @param $post
     * @return bool
     */
    public function destroy($thread)
    {
        $thread->delete();
        return true;
    }
}