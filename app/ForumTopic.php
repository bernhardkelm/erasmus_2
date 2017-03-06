<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForumTopic extends Model
{
    protected $fillable = ['name', 'color'];
    protected $table = 'forum_topics';

    public function threads()
    {
        return $this->hasMany('App\ForumThread', 'topic_id');
    }
}
