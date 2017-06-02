<?php

namespace App\Http\Controllers;
use \App\MemoIn;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memoinController extends Controller
{
    
    public function memoinEntry(){
        print_r(Request::all());

        $new_memoIn = Request::all();
        $memoIn_table = new \App\MemoIn;
        $memoIn_table->PCS_ID = $new_memoIn['PCS_ID'];
        $memoIn_table->memo_invoice_number = $new_memoIn['memo_invoice_number'];
        $memoIn_table->data = $new_memoIn['data'];
        $memoIn_table->account_name = $new_memoIn['account_name'];
        $memoIn_table->broker = $new_memoIn['broker'];
        $memoIn_table->reference = $new_memoIn['reference'];
        $memoIn_table->carats = $new_memoIn['carats'];
        $memoIn_table->pending_pcs = $new_memoIn['pending_pcs'];
        $memoIn_table->pending_carats = $new_memoIn['pending_carats'];
        $memoIn_table->amount = $new_memoIn['amount'];
        $memoIn_table->stone_type = $new_memoIn['stone_type'];
        $memoIn_table->no_of_days = $new_memoIn['no_of_days'];
 $memoIn_table->save();
    } 

    // public function memoinReport($lastid='',  $limit=''){
    //     $memmo = \App\MemoIn::all();
    //     print_r($memo);
    // } 

    // public function editMemoin(){
    //     $oldmemo = Request:all();
    //     $oldmemo_data = \App\MemoIn::find($oldmemo['id']);
    //     print_r($oldmemo_data);
    // }

    // public function deleteMemoin(){
    //     $data = Request::all();
    //     \App\MemoIn::where('id','=',$data['id'])->delete();
    // }
   
}
