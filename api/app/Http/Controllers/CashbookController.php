<?php

namespace App\Http\Controllers;

use App\CashBook;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CashbookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request,[
            'amount'=>'required|integer',
            'type'=>'required',
            'voucher'=>'required',
            'date'=>'required|date',
            'company_name'=>'required',
            'transaction_mode'=>'required'
        ]);

        $casbook=new CashBook([
            'amount'=>$request->input('amount'),
            'type'=>$request->input('type'),
            'voucher'=>$request->input('voucher'),
            'date'=>$request->input('date'),
            'description'=>$request->input('description'),
            'company_name'=>$request->input('company_name'),
            'transaction_mode'=>$request->input('transaction_mode'),
            'bank'=>$request->input('bank'),
            'bank_branch'=>$request->input('bank_branch'),
            'account_number'=>$request->input('account_number'),
            'cheque_no'=>$request->input('cheque_no'),
            'transaction_id'=>$request->input('transaction_id')
        ]);

        $casbook->save();
        return response()->json(['message'=>'successfully new entry entered'],201);


    }

    public function show(Request $request)
    {
        $query=$request->all();
        if($request->has('staticdata')){
            $data=CashBook::getData();
            $title=CashBook::getColumns();
            return response()->json(['titles'=>$title,'data'=>$data],201);
        }

        if($request->has('filterby')){
            if($request->has('search')){
                if($query['filterby']=='type'){
                    $response=Cashbook::where('type',$query['search'])->get();
                     return response()->json(['data'=>$response],201);
                }
                if($query['filterby']=='voucher'){
                    $response=Cashbook::where('voucher',$query['search'])->get();
                   return response()->json(['data'=>$response],201);
                }
            }

            if($request->has('fromdate') || $request->has('todate'))
                {
                    $response=Cashbook::whereBetween('date',[Carbon::parse($query['fromdate'])->addDays(1)->toDateString(),Carbon::parse($query['todate'])->addDays(1)->toDateString()])->get();
                    return response()->json(['data'=>$response],201);
                }
            }
            
           
           if($request->has('filter')){
             if($query['filter']=='all'){
                $response=CashBook::all();
                return response()->json(['data'=>$response],201);
             }
            }

    }

    // public function edit($id){
    //     $data=CashBook::all()->where('id',$id)->first();
    //     return response()->json(['response'=>$data],201);
    // }

    public function search(Request $request){
        $query=$request->except(['api_token','dbcountry']);
        if($query[key($query)]){
        $store=CashBook::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%')->distinct()->pluck(key($query));
        return response()->json($store,201);
        }
        return response()->json([],201);
    }

   
    // public function update(Request $request,$id)
    // {
    //     $query=CashBook::find($id);
    //     $updatequery=$request->all();
    //     foreach($updatequery as $update=>$newvalue){
    //         if($update!='id'){
    //             $query->$update=$newvalue;
    //         }    
    //     }
    //     return response()->json('updated',201);
    // }

    // public function destroy($id)
    // {
    //     $CashBook = CashBook::find($id);    
    //     $CashBook->delete();
    //     return response()->json('deleted',201);
    // }
}
