<?php

namespace App\Http\Controllers;
use \App\MemoIssue;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;

class memoissueController extends Controller
{
    
    public function memoissueEntry(){
        //print_r(Request::all());
        $new_memoissue = Request::all();
        $memoissue_table = new \App\MemoIssue;
        DB::table('memo_issue')->insert($new_memoissue);
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
        // echo $pcsid;
        $memoissue_table = \App\MemoIssue::where(function($query) use($pcsid){
            $query->where('PCS_ID', '=', $pcsid)
                  ->orWhere('Lot_Number', '=', $pcsid);
        })->first();
        $memoissue_table->status = "RETURNED";
        $memoissue_table->due_date = date("Y/m/d");
        $memoissue_table->save();
    }   
}
