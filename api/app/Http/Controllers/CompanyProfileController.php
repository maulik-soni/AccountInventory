<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CompanyProfile;

use Carbon\Carbon;

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
            'from'=>Carbon::parse($key['from'])->addDays(1)->toDateString(),
            'to'=>Carbon::parse($key['to'])->addDays(1)->toDateString(),
            'email'=>$key['email'],
            'GST'=>$key['GST'],
            'PAN'=>$key['PAN'],
            'IEC'=>$key['IEC'],
            'QBC'=>$key['QBC']
            ]);

        $company_profile->save();
           }

        return response()->json('created',
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
        $updatequery=$request->except(['id','api_token','dbcountry']);
        foreach($updatequery as $update=>$newvalue){
                if($update=='from' || $update=='to'){
                    if(strlen($newvalue)>11){
                        $query->$update=Carbon::parse($newvalue)->addDays(1)->toDateString();
                    }else{
                    $query->$update=$newvalue;
                    }
                }else{
                    $query->$update=$newvalue;
                }
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
        if($request->has('companynames')){
            $data=CompanyProfile::select('c_name')->get()->pluck('c_name');
            return response()->json(['response'=>['company_names'=>$data]],201);
        }
    }

    public function destroy($id)
    {
        $company = CompanyProfile::find($id);    
        $company->delete();
        return response()->json('deleted',201);
    }
}
