<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

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
        'password', 'remember_token','api_token','created_at','updated_at'
    ];

    /////////////////////////////////////////////////////////////

    public function roles(){
        return $this->belongsToMany(Role::class);
    }

    public function getRole(){
            return $this->roles->first()->name;
        }

        public static function getData(){
        return User::all();
     }

     public static function getColumns(){
         return Schema::getColumnListing('users');
     }

    //  public static function logout(){

    //  }


       /* return !! $role->intersect($this->roles)->count();*/

    

}
