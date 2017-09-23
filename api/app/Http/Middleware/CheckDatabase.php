<?php

namespace App\Http\Middleware;

use Closure;
use Config;

class CheckDatabase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
     $query=$request->all();   
         Config::set('database.default', $query['country']);
        return $next($request);
    }
}
