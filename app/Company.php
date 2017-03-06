<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name', 'description', 'logo', 'creator_id',
    ];

    public function employees()
    {
        return $this->hasMany('App\User');
    }

    public function creator()
    {
        return $this->belongsTo('App\User', 'creator_id');
    }
}
