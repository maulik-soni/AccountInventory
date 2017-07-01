<?php

namespace App\Http\Controllers;

use App\CashBook;
use Illuminate\Http\Request;

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
            'date'=>'required|date'
        ]);

        $casbook=new CashBook([
            'amount'=>$request->input('amount'),
            'type'=>$request->input('type'),
            'voucher'=>$request->input('voucher'),
            'date'=>$request->input('date'),
            'description'=>$request->input('description')
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
                    $response=Cashbook::whereBetween('date',[$query['fromdate'],$query['todate']])->get();
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

    public function edit($id){
        $data=CashBook::all()->where('id',$id)->first();
        return response()->json(['response'=>$data],201);
    }

    public function search(Request $request){
        $query=$request->all();
        if($query[key($query)]){
        $store=CashBook::select(key($query))->where(key($query),'like','%'.$query[key($query)].'%')->distinct()->pluck(key($query));
        return response()->json($store,201);
        }
        return response()->json([],201);
    }

   
    public function update(Request $request,$id)
    {
        $query=CashBook::find($id);
        $updatequery=$request->all();
        foreach($updatequery as $update=>$newvalue){
            if($update!='id'){
                $query->$update=$newvalue;
            }    
        }
        return response()->json('updated',201);
    }

    public function destroy($id)
    {
        $CashBook = CashBook::find($id);    
        $CashBook->delete();
        return response()->json('deleted',201);
    }
}
