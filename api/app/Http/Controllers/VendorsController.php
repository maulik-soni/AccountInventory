<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vendors;

class VendorsController extends Controller
{
    public function create(Request $request)
    {
        $query= $request->all();
        if($request->has('vendors')){
           $collectrequests=$query['vendors'];
           foreach ($collectrequests as $key) {
        // $this->validate($request,[
        //     'v_name'=>'required',
        //     'account_code'=>'required',
        //     'opening_bal'=>'nullable',
        //     'opening_bal_USD'=>'nullable',
        //     'remarks'=>'nullable',
        //     'contact_person'=>'required',
        //     'GST'=>'required',
        //     'PAN'=>'required',
        //     'address'=>'required',
        //     'phone'=>'nullable',
        //     'mobile'=>'nullable',
        //     'email'=>'nullable',
        //     'country'=>'required',
        //     'fax_number'=>'required',
        //     'RAP'=>'required',
        //     'IDEX'=>'required',
        //     'diamond_world_id'=>'required',
        //     'QBC'=>'required',
        //     'website'=>'nullable',
        //     'credit_limit'=>'required',
        //     'credit_limit_USD'=>'required',
        //     'refernce_1'=>'nullable',
        //     'reference_2'=>'nullable',

        //     ]);

        $vendor = new Vendors([
            'v_name'=> $key['v_name'],
            'account_code'=>$key['account_code'],
            'opening_bal'=>$key['opening_bal'],
            'opening_bal_USD'=>$key['opening_bal_USD'],
            'remarks'=>$key['remarks'],
            'contact_person'=>$key['contact_person'],
            'address'=>$key['address'],
            'phone'=>$key['phone'],
            'mobile'=>$key['mobile'],
            'email'=>$key['email'],
            'country'=>$key['country'],
            'fax_number'=>$key['fax_number'],
            'RAP'=>$key['RAP'],
            'IDEX'=>$key['IDEX'],
            'diamond_world_id'=>$key['diamond_world_id'],
            'QBC'=>$key['QBC'],
            'website'=>$key['website'],
            'credit_limit'=>$key['credit_limit'],
            'credit_limit_USD'=>$key['credit_limit_USD'],
            'reference_1'=>$key['reference_1'],
            'reference_2'=>$key['reference_2'],
            'GST'=>$key['GST'],
            'PAN'=>$key['PAN'],
            ]);

        $vendor->save();
           }
        }
        return response()->json('Created',201);
    }

    public function edit($id){
        $data=Vendors::all()->where('id',$id)->first();
        return response()->json(['response'=>$data],201);
    }

    public function update(Request $request,$id)
    {
        $query=Vendors::find($id);
        $updatequery=$request->except(['id','api_token','dbcountry']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    public function show(Vendors $vendors,Request $request){
         if($request->has('onload')){
        $data=Vendors::all();
            return response()->json(['response'=>['vendors'=>$data]],201);
        }

        if($request->has('vendornames')){
            $data=Vendors::select('v_name')->get()->pluck('v_name');
            return response()->json(['response'=>['vendor_names'=>$data]],201);
        }

    }

    public function destroy($id)
    {
        $user = Vendors::find($id);    
        $user->delete();
        return response()->json('deleted',201);
    }
}
