<?php

namespace App\Http\Controllers;
use \App\MemoIssue;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class memoissueController extends Controller
{
    
    public function memoissueEntry(){
        print_r(Request::all());

        $new_memoissue = Request::all();
        $memoissue_table = new \App\MemoIssue;
        $memoissue_table->PCS_ID = $new_memoissue['PCS_ID'];
        $memoissue_table->memo_invoice_number = $new_memoissue['memo_invoice_number'];
        $memoissue_table->date = $new_memoissue['date'];
        $memoissue_table->account_name = $new_memoissue['account_name'];
        $memoissue_table->broker = $new_memoissue['broker'];
        $memoissue_table->reference = $new_memoissue['reference'];
        $memoissue_table->carats = $new_memoissue['carats'];
        $memoissue_table->pending_pcs = $new_memoissue['pending_pcs'];
        $memoissue_table->pending_carats = $new_memoissue['pending_carats'];
        $memoissue_table->amount = $new_memoissue['amount'];
        $memoissue_table->stone_type = $new_memoissue['stone_type'];
        $memoissue_table->no_of_days = $new_memoissue['no_of_days'];
        $memoIn_table->status = "ISSUED";
        $memoissue_table->save();

    } 

    public function memoissueReport($PCS_ID=''){
        $memo = \App\MemoIssue::all();
        return $memo;
    } 

    public function editmemoissue(){
        $oldmemo = Request::all();
        $oldmemo_data = \App\MemoIssue::find($oldmemo['id']);
        print_r($oldmemo_data);
        $newMemo = Request::all();
        $memoissue_table = new \App\MemoIssue;
        $memoissue_table = MemoIssue::find($newMemo['$PCS_ID']);
        foreach($newMemo as $fields){
            if($fields != "PCS_ID"){
                $memoissue_table->$fields = $newMemo[$fields];
            }
        }
        $memoissue_table->save();
    }

    public function deletememoissue(){
        $data = Request::all();
        \App\MemoIssue::where('id','=',$data['id'])->delete();
        $memoissue_table = new \App\MemoIssue;
        MemoIssue::where('PCS_ID','=',$data['PCS_ID'])->delete();
    }

    public function changeStatus(){
        $pcsid = Request::Input('pcsid');
        $memoissue_table = \App\MemoIssue::find($pcsid);
        $memoissue_table->status = "RETURNED";
        $memoissue_table->return_date = date("Y/m/d");
        $memoissue_table->save();
    }   
}
