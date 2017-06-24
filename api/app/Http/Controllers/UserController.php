<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  
    public function make(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required|email',
            'password'=>'required',
            ]);

        $user = new User([
            'name'=> $request->input('name'),
            'email'=>$request->input('email'),
            'password'=>bcrypt($request->input('password')),
            'api_token'=>str_random($length = 60)]);

        $user->save();
        return response()->json(['message'=>'successfully created user'],201);
    }

  
    public function show(User $user)
    {
        //
    }

   
    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        //
    }

    public function authenticate(Request $request){
        $this->validate($request,[
            'email'=>'required|email',
            'password'=>'required']);

        $credentials= $request->only('email','password');

         if (Auth::attempt($credentials)){
            $token=$request->user()->api_token;
            $role=$request->user()->getRole();
            return response()->json(['token'=> $token,'role'=> $role],200);
         }

         return response()->json(['error'=> 'invalid password or email'],401);
    }
}
