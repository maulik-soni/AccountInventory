<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

use \App\Purchase;
use \App\MemoIn;
use \App\MemoIssue;
use \App\Sales;
use \App\LabIssue;
use \App\CompanyProfile;


class sharedAPIController extends Controller
{
    public function fetchCompanyName(){
        $data=CompanyProfile::pluck('c_name')->toArray();
        return $data;
    }

    public function generateInvoiceNumber(Request $request){
        $params = Request::all();
        $data = DB::table($params['table'])->orderBy('Stock_ID', 'desc')->pluck('invoice_number')->first();
        if(empty($data) || $data == null || $data == "" || $data == " "){
            return 1;
        }else{
            $data = intval(explode(
                "-",$data
            )[1]);
            return ++$data;
        }
    }
}