<?php

namespace App\Services;

use App\ForumTopic;
use App\Message;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ForumTopicService
{
    protected $topic;

    public function __construct(ForumTopic $topic)
    {
        $this->topic = $topic;
    }

    /**
     * Get a listing of all topics.
     * @return mixed
     */
    public function index()
    {
        return $this->topic->get();
    }

    /**
     * Get a specific topic by its ID
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        try {
            $topic = $this->topic
                ->where('id', $id)
                ->firstOrFail();
            return $topic;
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }

    /**
     * Store a new message in the database
     * @param $request
     * @return static
     */
    public function store($topic)
    {
        $topic->save();
        return $topic;
    }

    public function update($topic, Array $newData)
    {
        $topic->fill($newData);
        $topic->save();
        return $topic;

    }
    /**
     * Destroy an existing conversation
     * @param $post
     * @return bool
     */
    public function destroy($topic)
    {
        $topic->delete();
        return true;
    }
}