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
            ]);

        $vendor = new Vendors([
            'name'=> $request->input('name'),
            'account_code'=>$request->input('account_code'),
            'opening_bal'=>$request->input('opening_bal'),
            'opening_bal_USD'=>$request->input('opening_bal_USD'),
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
