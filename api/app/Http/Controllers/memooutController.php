<?php

namespace App\Http\Controllers;
use \App\MemoOut;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memooutController extends Controller
{
    
    public function memooutEntry(){
        print_r(Request::all());
    } 

    public function memooutReport($lastid='',  $limit=''){
        $memmo = \App\MemoOut::all();
        print_r($memo);
    } 

    public function editMemoout(){
        $oldmemo = Request:all();
        $oldmemo_data = \App\MemoOut::find($oldmemo['id']);
        print_r($oldmemo_data);
    }

    public function deleteMemoout(){
        $data = Request::all();
        \App\MemoOut::where('id','=',$data['id'])->delete();
    }
   
}
