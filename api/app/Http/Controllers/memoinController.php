<?php

namespace App\Http\Controllers;
use \App\MemoIn;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

class memoinController extends Controller
{
    
    public function memoinEntry(){
        $new_memoIn = Request::all();
        $memoIn_table = new \App\MemoIn;
        DB::table('memo_in')->insert($new_memoIn);
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
        $memoIn_table = \App\MemoIn::where(function($query) use($pcsid){
            $query->where('PCS_ID', '=', $pcsid)
                  ->orWhere('Lot_Number', '=', $pcsid);
        })->first();
        $memoIn_table->status = "RETURNED";
        $memoIn_table->due_date = date("Y/m/d");
        $memoIn_table->save();
    }

}