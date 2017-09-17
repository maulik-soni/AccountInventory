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

    public function memoissueReport($Stock_ID=''){
        $memo = \App\MemoIssue::all();
        return $memo;
    } 

    public function editmemoissue(){
        $oldmemo = Request::all();
        $oldmemo_data = \App\MemoIssue::find($oldmemo['id']);
        print_r($oldmemo_data);
        $newMemo = Request::all();
        $memoissue_table = new \App\MemoIssue;
        $memoissue_table = MemoIssue::find($newMemo['$Stock_ID']);
        foreach($newMemo as $fields){
            if($fields != "Stock_ID"){
                $memoissue_table->$fields = $newMemo[$fields];
            }
        }
        $memoissue_table->save();
    }

    public function deletememoissue(){
        $data = Request::all();
        \App\MemoIssue::where('id','=',$data['id'])->delete();
        $memoissue_table = new \App\MemoIssue;
        MemoIssue::where('Stock_ID','=',$data['Stock_ID'])->delete();
    }

    public function changeStatusDB($Stock_ID){
        $Stock_ID = $Stock_ID;
        $memoissue_table = \App\MemoIssue::where(function($query) use($Stock_ID){
            $query->where('Stock_ID', '=', $Stock_ID)
                  ->orWhere('Lot_Number', '=', $Stock_ID);
        })->first();
        $memoissue_table->status = "RECEIVED";
        $memoissue_table->due_date = date("Y/m/d");
        $memoissue_table->save();
    }

    public function show(Request $request){
        $params = Request::all();
        //print_r($params);exit;
        if(!empty($params['staticdata'])){
            if($params['reportType'] == "report"){
                $labissue_data = \App\MemoIssue::where('status','ISSUED')->get();
            }else
                $labissue_data = \App\MemoIssue::where('status','RECEIVED')->get();
            return response()->json($labissue_data,200);
        }
        if(!empty($params['filterby'])){

            if(!empty($params['search'])){
                if($params['filterby']=='PCS ID'){
                    if($params['reportType'] == "report"){
                        $response=\App\MemoIssue::where('Stock_ID',$params['search'])->where('status','ISSUED')->get();
                    }else
                        $response=\App\MemoIssue::where('Stock_ID',$params['search'])->where('status','RECEIVED')->get();
                    return response()->json($response,200);
                }
                if($params['filterby']=='Invoice Number'){
                    if($params['reportType'] == "report"){
                        $response=\App\MemoIssue::where('memo_invoice_number',$params['search'])->where('status','ISSUED')->get();
                    }else
                        $response=\App\MemoIssue::where('memo_invoice_number',$params['search'])->where('status','RECEIVED')->get();
                   return response()->json($response,200);
                }
                if($params['filterby']=='Party Name'){
                    if($params['reportType'] == "report"){
                        $response=\App\MemoIssue::where('account_name',$params['search'])->where('status','ISSUED')->get();
                    }else
                        $response=\App\MemoIssue::where('account_name',$params['search'])->where('status','RECEIVED')->get();
                   return response()->json($response,200);
                }
                
            }

            if(!empty($params['fromdate']) && !empty($params['todate'])){
                if($params['fromdate'] || $params['todate']){
                    if($params['reportType'] == "report"){
                            $response=\App\MemoIssue::whereBetween('date',[$params['fromdate'],$params['todate']])->where('status','ISSUED')->get();
                    }else
                        $response=\App\MemoIssue::whereBetween('date',[$params['fromdate'],$params['todate']])->where('status','RECEIVED')->get();
                    return response()->json($response,200);
                }
            }
            
        }
        if(!empty($params['filter'])){
            if($params['filter']=='all'){
                if($params['reportType'] == "report"){
                    $labissue_data = \App\MemoIssue::where('status','ISSUED')->get();
                }else
                    $labissue_data = \App\MemoIssue::where('status','RECEIVED')->get();
                return response()->json($labissue_data,200);
            }
        }        
    }

    public function search(Request $request){
        $query = Request::all();
        
        foreach($query as $key=>$value){
            if($key != 'reportType'){
                if($key == 'Party Name' || $key == 'Party_Name'){
                    $q = 'account_name';
                    $query['account_name'] = $value;
                }
            }
        }
        
        if(!empty($q)){
            if($query['reportType'] == "report"){
                $store=\App\MemoIssue::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            }else
                $store=\App\MemoIssue::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            return response()->json($store,200);
        }
        return response()->json([],200);
    }

    public function changestatus(){
        $MIssue_data = Request::all();
        for($i = 0; $i<count($MIssue_data); $i++){
            $this->changestatusDB($MIssue_data[$i]);
        }
    }
}
