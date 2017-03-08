<?php

namespace App;

use App\Enumerators\UserRoles;
use App\Enumerators\UserType;
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
        // General information
        'name', 'email', 'password', 'type', 'twitter', 'facebook', 'header', 'picture',
        // User specific information
        'major', 'country', 'languages', 'about', 'resume',
        // Company specific information
        'description', 'location', 'website',
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

    public function country()
    {
        return $this->belongsTo('App\Country');
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

    public function roles()
    {
        return $this->belongsToMany('App\Role', 'user_role', 'user_id', 'role_id');
    }

    public function isCompany()
    {
        return $this->type === UserType::COMPANY;
    }

    public function isUser()
    {
        return $this->type === UserType::PROFESSIONAL;
    }

    public function isAdmin()
    {
        return $this->roles->contains(function ($value, $key) {
            return $value->id === UserRoles::ADMIN;
        });
    }

    public function isModerator()
    {
        return $this->roles->contains(function ($value, $key) {
            return $value->id === UserRoles::MODERATOR;
        });
    }


}
