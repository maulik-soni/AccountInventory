<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPassword;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function getResetToken(Request $request)
    {
            $this->validateEmail($request);
            $user = User::where('email', $request->input('email'))->first();
            if (!$user) {
                return response()->json(['status'=>trans('passwords.user')], 400);
            }
            $token = $this->broker()->createToken($user);
            $url=action('Auth\ResetPasswordController@reset',['token'=>$token]);
            Mail::to($user['email'])->send(new ResetPassword($url));
            if(sizeof(Mail::failures())==0){
                return response()->json(['status' => 'success'],201);
            }
            return response()->json(['status'=>'Error Occured while sending email'],400);
        
    }
}
