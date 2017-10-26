<?php

namespace App\Http\Controllers;

use App\VendorBankDetails;
use Illuminate\Http\Request;

class VendorBankDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
        public function create(Request $request)
    {
        $query= $request->all();
        if($request->has('banks')){
           $collectrequests=$query['banks'];
           foreach ($collectrequests as $key) {
        //        $this
        // ->validate($request,[
        //     'bank_name'=>'required',
        //     'bank_address'=>'required',
        //     'bank_branch'=>'required',
        //     'account_number'=>'required',
        //     'IFSC_code'=>'required',
        //     'amount'=>'nullable',
        //     'amount_USD'=>'nullable',
        // ]);

        $data=new VendorBankDetails([
            'bank_name'=>$key['bank_name'],
            'bank_address'=>$key['bank_address'],
            'bank_branch'=>$key['bank_branch'],
            'account_number'=>$key['account_number'],
            'v_id'=>$key['id'],
            'IFSC_code'=>$key['IFSC_code'],
        ]);
        $data->save();
           }

            return response()
               ->json(['message'=>'successfully created user'],201);
        
           

        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VendorBankDetails  $vendorBankDetails
     * @return \Illuminate\Http\Response
     */
    public function show(request $request)
    {
        $query= $request->all();
         
        if($request->has('onload')){
        $data=VendorBankDetails::where('v_id',$query['id'])->get();
        }

            return response()->json(['response'=>['bankdetails'=>$data]],201);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VendorBankDetails  $vendorBankDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $query=VendorBankDetails::find($id);
        $updatequery=$request->except(['id','api_token','dbcountry']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VendorBankDetails  $vendorBankDetails
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, VendorBankDetails $vendorBankDetails)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VendorBankDetails  $vendorBankDetails
     * @return \Illuminate\Http\Response
     */
     public function destroy($id)
    {
         $company = VendorBankDetails::find($id);    
        $company->delete();
        return response()->json('deleted',201);
    }
}
