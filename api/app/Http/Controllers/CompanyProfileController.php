<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CompanyProfile;

class CompanyProfileController extends Controller
{
    public function create(Request $request)
    {
         $query= $request->all();
        if($request->has('companies')){
           $collectrequests=$query['companies'];
           foreach ($collectrequests as $key) {
        // $this->validate($request,[
        //     'c_name'=>'required',
        //     'address'=>'required',
        //     'phone'=>'nullable',
        //     'mobile'=>'nullable',
        //     'email'=>'nullable|email',
        //     'from'=>'required',
        //     'to'=>'required',
        //     'GST'=>'required',
        //     'PAN'=>'required',
        //     'IEC'=>'required',
        //     'QBC'=>'required'
        //     ]);

        $company_profile = new CompanyProfile([
            'c_name'=> $key['c_name'],
            'address'=>$key['address'],
            'phone'=>$key['phone'],
            'mobile'=>$key['mobile'],
            'from'=>$key['from'],
            'to'=>$key['to'],
            'email'=>$key['email'],
            'GST'=>$key['GST'],
            'PAN'=>$key['PAN'],
            'IEC'=>$key['IEC'],
            'QBC'=>$key['QBC']
            ]);

        $company_profile->save();
           }

        return response()->json(
            ['response'=>['message'=>'Successful']],
            201);
    }
    }

    public function edit($id){
        $data=CompanyProfile::all()->where('id',$id)->first();
        return response()->json(
            ['response'=>['response'=>$data]],
            201);
    }

    public function update(Request $request,$id)
    {
        $query=CompanyProfile::find($id);
        $updatequery=$request->except(['id','api_token','country']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    public function show(Request $request){
        $query=$request->all();
        if($request->has('onload')){
            $data=CompanyProfile::all();

            return response()->json(['response'=>['companies'=>$data]],201);
        }
    }

    // public function destroy($id)
    // {
    //     $user = Vendors::find($id);    
    //     $user->delete();
    //     return response()->json('deleted',201);
    // }
}
