<?php

namespace App\Http\Controllers;
use \App\MemoIn;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memoinController extends Controller
{
    
    public function memoinEntry(){
        // print_r(Request::all());
        $new_memoIn = Request::all();
        $memoIn_table = new \App\MemoIn;
        $memoIn_table->PCS_ID = $new_memoIn['PCS_ID'];
        $memoIn_table->memo_invoice_number = $new_memoIn['memo_invoice_number'];
        $memoIn_table->date = $new_memoIn['date'];
        $memoIn_table->account_name = $new_memoIn['account_name'];
        $memoIn_table->broker = $new_memoIn['broker'];
        $memoIn_table->reference = $new_memoIn['reference'];
        $memoIn_table->carats = $new_memoIn['carats'];
        $memoIn_table->pending_pcs = $new_memoIn['pending_pcs'];
        $memoIn_table->pending_carats = $new_memoIn['pending_carats'];
        $memoIn_table->amount = $new_memoIn['amount'];
        $memoIn_table->stone_type = $new_memoIn['stone_type'];
        $memoIn_table->no_of_days = $new_memoIn['no_of_days'];
        $memoIn_table->status = "ISSUED";
        $memoIn_table->save();
    } 

    public function memoinReport(){
        $memo = \App\MemoIn::all();
        return $memo;
    } 

    public function editMemoin(){
        $oldmemo = Request::all();
        $oldmemo_data = \App\MemoIn::find($oldmemo['$PCS_ID']);
        $newMemo = Request::all();
        $memoIn_table = new \App\MemoIn;
        $memoIn_table = MemoIn::find($newMemo['$PCS_ID']);
        foreach($newMemo as $fields){
            if($fields != "PCS_ID"){
                $memoIn_table->$fields = $newMemo[$fields];
            }
        }
        $memoIn_table->save();
    }

    public function deleteMemoin($PCS_ID=''){
        $data = Request::all();
        \App\MemoIn::where('id','=',$data['id'])->delete();
        $memoIn_table = new \App\MemoIn;
        MemoIn::where('PCS_ID','=',$data['PCS_ID'])->delete();
    }
   
    public function changeStatus(){
        $pcsid = Request::Input('pcsid');
        $memoIn_table = \App\MemoIn::find($pcsid);
        $memoIn_table->status = "RETURNED";
        $memoIn_table->return_date = date("Y/m/d");
        $memoIn_table->save();
    }

}