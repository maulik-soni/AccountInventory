<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vendors;

class VendorsController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'account_code'=>'required',
            'opening_bal'=>'nullable',
            'opening_bal_USD'=>'nullable',
            'remarks'=>'nullable',
            'contact_person'=>'required',
            'GST'=>'required',
            'PAN'=>'required',
            'address'=>'required',
            'phone'=>'nullable',
            'mobile'=>'nullable',
            'email'=>'nullable',
            'country'=>'required',
            'fax_number'=>'required',
            'RAP'=>'required',
            'IDEX'=>'required',
            'diamond_world_id'=>'required',
            'QBC'=>'required',
            'website'=>'nullable',
            'credit_limit'=>'required',
            'credit_limit_USD'=>'required',
            'refernce_1'=>'nullable',
            'reference_2'=>'nullable',

            ]);

        $vendor = new Vendors([
            'name'=> $request->input('name'),
            'account_code'=>$request->input('account_code'),
            'opening_bal'=>$request->input('opening_bal'),
            'opening_bal_USD'=>$request->input('opening_bal_USD'),
            'remarks'=>$request->input('remarks'),
            'contact_person'=>$request->input('contact_person'),
            'address'=>$request->input('address'),
            'phone'=>$request->input('phone'),
            'mobile'=>$request->input('mobile'),
            'email'=>$request->input('email'),
            'country'=>$request->input('country'),
            'fax_number'=>$request->input('fax_number'),
            'RAP'=>$request->input('RAP'),
            'IDEX'=>$request->input('IDEX'),
            'diamond_world_id'=>$request->input('diamond_world_id'),
            'QBC'=>$request->input('QBC'),
            'website'=>$request->input('website'),
            'credit_limit'=>$request->input('credit_limit'),
            'credit_limit_USD'=>$request->input('credit_limit_USD'),
            'reference_1'=>$request->input('reference_1'),
            'reference_2'=>$request->input('reference_2'),
            'GST'=>$request->input('GST'),
            'PAN'=>$request->input('PAN'),
            ]);

        $vendor->save();
        return response()->json(['message'=>'successfully created vendor'],201);
    }

    public function edit($id){
        $data=Vendors::all()->where('id',$id)->first();
        return response()->json(['response'=>$data],201);
    }

    public function update(Request $request,$id)
    {
        $query=Vendors::find($id);
        $updatequery=$request->except(['id']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    public function destroy($id)
    {
        $user = Vendors::find($id);    
        $user->delete();
        return response()->json('deleted',201);
    }
}
