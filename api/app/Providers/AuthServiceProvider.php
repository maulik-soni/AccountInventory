<?php

namespace App\Providers;
use App\Permission;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
     public function boot()
    {
        $this->registerPolicies();

       /* foreach ($this->getPermissions() as $permission) {
            Gate::define($permission->name,function($user) use ($permission){
                return $user->hasRole($permission->roles);
            });
        }*/

        Gate::define('delete_user',function($user){
            return $user->hasRole('admin');
        });

        Gate::define('edit_user',function($user){
            return $user->hasRole('admin');
        });

        Gate::define('make_user',function($user){
            return $user->hasRole('admin');
        });
    }

    /*protected function getPermissions(){
        return Permission::with('roles')->get();
    }*/
}
