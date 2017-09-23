<?php

namespace App\Http\Controllers;

use App\CompanyBankDetails;
use Illuminate\Http\Request;

class CompanyBankDetailsController extends Controller
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

        $data=new CompanyBankDetails([
            'bank_name'=>$key['bank_name'],
            'c_id'=>$key['id'],
            'bank_address'=>$key['bank_address'],
            'bank_branch'=>$key['bank_branch'],
            'account_number'=>$key['account_number'],
            'IFSC_code'=>$key['IFSC_code'],
            'amount'=>$key['amount'],
            'amount_USD'=>$key['amount_USD']
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
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyBankDetails $companyBankDetails,Request $request)
    {

        
        if($request->has('onload')){
        $data=CompanyBankDetails::all();
        }

            return response()->json(['response'=>['bankdetails'=>$data]],201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(CompanyBankDetails $companyBankDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CompanyBankDetails $companyBankDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompanyBankDetails $companyBankDetails)
    {
        //
    }
}
