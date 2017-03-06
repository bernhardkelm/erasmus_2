<?php

namespace App;

use App\Enumerators\UserRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'type', 'country', 'major', 'languages', 'twitter', 'facebook', 'about',
        'picture', 'resume'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'email'
    ];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function sentMessages()
    {
        return $this->hasMany('App\Message', 'sender_id');
    }

    public function receivedMessages()
    {
        return $this->hasMany('App\Message', 'recipient_id');
    }

    public function jobRequests()
    {
        return $this->hasMany('App\JobRequest');
    }

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id');
    }

    public function companiesCreated()
    {
        return $this->hasMany('App\Company', 'creator_id');
    }

    public function roles()
    {
        return $this->belongsToMany('App\Role', 'user_role', 'user_id', 'role_id');
    }

    public function isAdmin()
    {
        return $this->roles->contains(function ($value, $key) {
            return $value->id === UserRoles::ADMIN;
        });
    }


}
