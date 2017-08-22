<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CompanyProfile;

class CompanyProfileController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'c_name'=>'required',
            'address'=>'required',
            'phone'=>'nullable',
            'mobile'=>'nullable',
            'email'=>'nullable|email',
            'from'=>'required',
            'to'=>'required',
            'GST'=>'required',
            'PAN'=>'required',
            'IEC'=>'required',
            'QBC'=>'required'
            ]);

        $company_profile = new CompanyProfile([
            'c_name'=> $request->input('c_name'),
            'address'=>$request->input('address'),
            'phone'=>$request->input('phone'),
            'mobile'=>$request->input('mobile'),
            'from'=>$request->input('from'),
            'to'=>$request->input('to'),
            'email'=>$request->input('email'),
            'GST'=>$request->input('GST'),
            'PAN'=>$request->input('PAN'),
            'IEC'=>$request->input('IEC'),
            'QBC'=>$request->input('QBC')
            ]);

        $company_profile->save();

        return response()->json(
            ['response'=>['message'=>'Successful']],
            201);
    }

    public function edit($id){
        $data=CompanyProfile::all()->where('id',$id)->first();
        return response()->json(
            ['response'=>['editable_data'=>$data]],
            201);
    }

    public function update(Request $request,$id)
    {
        $query=CompanyProfile::find($id);
        $updatequery=$request->except(['id']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    public function show(Request $request){
        $query=$request->all();
        if($request->has('onload')){
            $data=CompanyProfile::all()->first();

            return response()->json(['response'=>['details'=>$data]],201);
        }
    }

    // public function destroy($id)
    // {
    //     $user = Vendors::find($id);    
    //     $user->delete();
    //     return response()->json('deleted',201);
    // }
}
