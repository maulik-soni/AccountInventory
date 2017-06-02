<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  
    public function make(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            ]);

        $user = new User([
            'name'=> $request->input('name'),
            'email'=>$request->input('email'),
            'password'=>bcrypt($request->input('password'))]);

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
}
