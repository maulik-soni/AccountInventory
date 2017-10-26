<?php

namespace App\Http\Controllers;

use App\CompanyBankDetails;
use App\CompanyProfile;
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
            'opening_balance'=>$key['opening_balance'],
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

    public function getcompanybanks(){
        $data=CompanyBankDetails::select('bank_name')->distinct()->pluck('bank_name');
        return response()
               ->json(['banks'=>$data],201);
    }

    public function getcompanybank(Request $request){
        $query=$request->all();
        $cid=CompanyProfile::select('id')->where('c_name',$query['company_name'])->pluck('id');
        $data=CompanyBankDetails::select('bank_name')->where('c_id',$cid)->distinct()->pluck('bank_name');
        return response()->json(['banks'=>$data],201);
    }

    public function getcompanybankaccount(Request $request){
        $query=$request->all();
        $cid=CompanyProfile::select('id')->where('c_name',$query['company_name'])->pluck('id');
        $data=CompanyBankDetails::select('account_number')->where([['bank_name',$query['bank_name']],['c_id',$cid],['bank_branch',$query['bank_branch']]])->pluck('account_number');
        return response()->json(['account_number'=>$data],201);
    }

    public function getbankbranches(Request $request){
        $query=$request->all();
        $cid=CompanyProfile::select('id')->where('c_name',$query['company_name'])->pluck('id');
        $data=CompanyBankDetails::select('bank_branch')->where([['bank_name',$query['bank_name']],['c_id',$cid]])->distinct()->pluck('bank_branch');
        return response()->json(['branches'=>$data],201);
    }

    public function getamount(Request $request){
        $query=$request->all();
        $cid=CompanyProfile::select('id')->where('c_name',$query['company_name'])->pluck('id');
        $data=CompanyBankDetails::select('amount')->where([['bank_name',$query['bank_name']],['c_id',$cid],['account_number',$query['account_number']],['bank_branch',$query['bank_branch']]])->pluck('amount');
        return response()->json(['amount'=>$data],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyBankDetails $companyBankDetails,Request $request)
    {
        $query=$request->all();

        
        if($request->has('onload')){
        $data=CompanyBankDetails::where('c_id',$query['id'])->get();
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
    public function update(Request $request,$id)
    {
         $query=CompanyBankDetails::find($id);
        $updatequery=$request->except(['id','api_token','dbcountry']);
        foreach($updatequery as $update=>$newvalue){
             $query->$update=$newvalue;
        }
        $query->update();
        return response()->json('updated',201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompanyBankDetails  $companyBankDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $company = CompanyBankDetails::find($id);    
        $company->delete();
        return response()->json('deleted',201);
    }
}
