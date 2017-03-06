<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForumPost extends Model
{
    protected $fillable = ['body', 'user_id', 'thread_id'];
    protected $table = 'forum_posts';

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function thread()
    {
        return $this->belongsTo('App\ForumThread', 'thread_id');
    }
}
