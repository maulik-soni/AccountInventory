<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;
use Config;

class UserController extends Controller
{
  
    public function create(Request $request)
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

  
    public function show(Request $request)
    {
        if($request->has('staticdata')){
            $data=User::getData();
            $title=User::getColumns();
            return response()->json(['titles'=>$title,'data'=>$data],201);
        }

    }

    public function edit($id){
        $data=User::all()->where('id',$id)->first();
        return response()->json(['response'=>$data],201);
    }

    public function search(Request $request){
        $query=$request->all();
        if($query[key($query)]){
        $store=User::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%')->pluck(key($query));
        return response()->json($store,201);
        }
        return response()->json([],201);
    }

   
    public function update(Request $request,$id)
    {
        $query=User::find($id);
        $updatequery=$request->except(['confirm','id']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
             if($update=='password'){
                $query->$update=bcrypt($newvalue);
            }
        }
        $query->update();
        return response()->json('updated',201);
    }

    public function destroy($id)
    {
        $user = User::find($id);    
        $user->delete();
        return response()->json('deleted',201);
    }

    public function authenticate(Request $request){
        $query=$request->all();
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

    public function logout(Request $request){
        $query=$request->all();
        $this->validate($request,[
            'api_token'=>'required',
        ]);
        if($request->has('logout')){
            $id=User::select('id')->where('api_token',$query['api_token'])->pluck('id')[0];
            $userrecord=User::find($id);
            $userrecord->api_token=str_random($length = 60);
            $userrecord->save();
            return response()->json(['response'=>'success'],200);
        }
    }
}
