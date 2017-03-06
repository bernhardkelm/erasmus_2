<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForumThread extends Model
{
    protected $fillable = ['title', 'body', 'topic_id', 'user_id'];
    protected $table = 'forum_threads';

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function topic()
    {
        return $this->belongsTo('App\ForumTopic', 'topic_id');
    }

    public function posts()
    {
        return $this->hasMany('App\ForumPost', 'thread_id');
    }
}
