<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobRequest extends Model
{
    protected $fillable = [
        'title', 'body', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
