<?php

namespace App\Http\Controllers;
use \App\MemoIn;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memoinController extends Controller
{
    
    public function memoEntry(){
        print_r(Request::all());
    } 

    public function memoReport($lastid='',  $limit=''){
        $memmo = \App\MemoIn::all();
        print_r($memo);
    } 

    public function editMemo(){
        $oldmemo = Request:all();
        $oldmemo_data = \App\MemoIn::find($oldmemo['id']);
        print_r($oldmemo_data);
    }

    public function deleteMemo(){
        $data = Request::all();
        \App\MemoIn::where('id','=',$data['id'])->delete();
    }
   
}
