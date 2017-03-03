<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = [
        'user_one', 'user_two', 'deleted_from_user_one', 'deleted_from_user_two'
    ];

    public function messages()
    {
        return $this->hasMany('App\Message', 'conversation_id');
    }

    public function userOne()
    {
        return $this->belongsTo('App\User', 'user_one');
    }

    public function userTwo()
    {
        return $this->belongsTo('App\User', 'user_two');
    }

    public function softDelete($user)
    {
        if ($user === 'one') {
            $this->deleted_from_user_one = 1;
        } elseif ($user === 'two') {
            $this->deleted_from_user_two = 1;
        }
    }
}
