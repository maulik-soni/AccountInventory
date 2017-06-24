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
        $this->validate($request,[
            'amount'=>'required',
            'voucher'=>'required',
            'type'=>'required'
        ]);

        $casbook=new CashBook([
            'amount'=>$request->input('amount'),
            'voucher'=>$request->input('voucher'),
            'type'=>$request->input('type')
        ]);

        $casbook->save();
        return response()->json(['message'=>'successfully new entry entered'],201);


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
     * @param  \App\cashbook  $cashbook
     * @return \Illuminate\Http\Response
     */
    public function show(cashbook $cashbook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\cashbook  $cashbook
     * @return \Illuminate\Http\Response
     */
    public function edit(cashbook $cashbook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\cashbook  $cashbook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cashbook $cashbook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\cashbook  $cashbook
     * @return \Illuminate\Http\Response
     */
    public function destroy(cashbook $cashbook)
    {
        //
    }
}
