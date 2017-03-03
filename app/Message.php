<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'message', 'is_seen', 'sender_id',
        'recipient_id', 'conversation_id'
    ];

    /**
     * Returns the created_at atributed in a human readable format, e.g. '2 days ago'.
     * @return mixed
     */
    public function getDiffTimeForHumans()
    {
        $date = $this->created_at;
        $now = $date->now();

        return $date->diffForHumans($now, true);
    }

    public function sender()
    {
        return $this->belongsTo('App\User', 'sender_id');
    }

    public function recipient()
    {
        return $this->belongsTo('App\User', 'recipient_id');
    }

    public function conversation()
    {
        return $this->belongsTo('App\Conversation');
    }
}
