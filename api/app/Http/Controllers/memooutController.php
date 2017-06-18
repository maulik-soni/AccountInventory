<?php

namespace App\Http\Controllers;
use \App\MemoOut;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memooutController extends Controller
{
    
    public function memooutEntry(){
        print_r(Request::all());

        $new_memoOut = Request::all();
        $memoOut_table = new \App\MemoOut;
        $memoOut_table->PCS_ID = $new_memoOut['PCS_ID'];
        $memoOut_table->memo_invoice_number = $new_memoOut['memo_invoice_number'];
        $memoOut_table->date = $new_memoOut['date'];
        $memoOut_table->account_name = $new_memoOut['account_name'];
        $memoOut_table->broker = $new_memoOut['broker'];
        $memoOut_table->reference = $new_memoOut['reference'];
        $memoOut_table->carats = $new_memoOut['carats'];
        $memoOut_table->pending_pcs = $new_memoOut['pending_pcs'];
        $memoOut_table->pending_carats = $new_memoOut['pending_carats'];
        $memoOut_table->amount = $new_memoOut['amount'];
        $memoOut_table->stone_type = $new_memoOut['stone_type'];
        $memoOut_table->no_of_days = $new_memoOut['no_of_days'];
        $memoOut_table->save();

    } 

    public function memooutReport($PCS_ID=''){
        $memo = \App\MemoOut::all();
        return $memo;
    } 

    public function editMemoout(){
        $oldmemo = Request::all();
        $oldmemo_data = \App\MemoOut::find($oldmemo['id']);
        print_r($oldmemo_data);
        $newMemo = Request::all();
        $memoOut_table = new \App\MemoOut;
        $memoOut_table = MemoOut::find($newMemo['$PCS_ID']);
        foreach($newMemo as $fields){
            if($fields != "PCS_ID"){
                $memoOut_table->$fields = $newMemo[$fields];
            }
        }
        $memoOut_table->save();
    }

    public function deleteMemoout(){
        $data = Request::all();
        \App\MemoOut::where('id','=',$data['id'])->delete();
        $memoOut_table = new \App\MemoOut;
        MemoOut::where('PCS_ID','=',$data['PCS_ID'])->delete();
    }
   
}
