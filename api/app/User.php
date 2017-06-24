<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use Notifiable;

        /*protected $connection = 'china_db';*/

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','api_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /////////////////////////////////////////////////////////////

    public function roles(){
        return $this->belongsToMany(Role::class);
    }

    public function getRole(){
            return $this->roles->first()->name;
        }

       /* return !! $role->intersect($this->roles)->count();*/

    

}
