<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\LabIssue;


class LabIssueController extends Controller
{
    public function index()
    {
        return view('lab');
    }
    public function create(Request $request)
    {
        // $this->validate($request,[
        //     'LAB_type'=>'required',
        //     'shape'=>'required',
        //     'carat'=>'required',
        //     'diameter'=>'required',
        //     'height'=>'required',
        //     'color'=>'required',
        //      ]);
        
        $lab= new LabIssue;
		$lab->PCS_ID = Input::get("PCS_ID");
        $lab->date = Input::get("date");
        $lab->LAB_type = Input::get("LAB_type");
		$lab->shape = Input::get("shape");
		$lab->service = Input::get("service");
		$lab->carat = Input::get("carat");
		$lab->diameter = Input::get("diameter");
        $lab->height = Input::get("height");
        $lab->color = Input::get("color");
        $lab->clarity = Input::get("clarity");
        $lab->amount = Input::get("amount");
        $lab->return_date = Input::get("return_date");
        $lab->status = "ISSUED";
		$lab->save();
		return ("your data submitted successfully");
    }
    
    public function editlab(Request $request,$id)
    {
        $id='PCS_ID';
        $labis=LabIssue::find($id);
    }
    
    public function delLabissue(Request $request)
    {
        $data = $request->all(); 
        $lab = new \App\LabIssue;
        LabIssue::where('PCS_ID', '=', $data['PCS_ID'])->delete();
    }    
    public function repoLabissue()
    {   
        // $query=$request->only('PCS_ID');
        // $repo = LabIssue::all()->where('PCS_ID','=',$query['PCS_ID']);
        // return $repo;       
        $repo = LabIssue::all();
        return $repo;
    }
    public function changestatus(Request $request)
    {   
        $data = $request->all();
        $lab = new \App\LabIssue;
        $mon=LabIssue::select('status')->where('PCS_ID', '=', $data['PCS_ID'])->update(['status'=>'RECEIVED']);
        $ton=LabIssue::select('return_date')->where('PCS_ID', '=', $data['PCS_ID'])->update(['return_date'=>date('y/m/d')]);
        return 'Done';
    }

    public function show(Request $request){
        $params = $request->all();
        if(!empty($params['staticdata'])){
            if($params['reportType'] == "report"){
                $labissue_data = LabIssue::where('status','ISSUED')->get();
            }else
                $labissue_data = LabIssue::where('status','RECEIVED')->get();
            return response()->json($labissue_data,200);
        }
        if(!empty($params['filterby'])){

            if(!empty($params['search'])){
                if($params['filterby']=='PCS ID'){
                    if($params['reportType'] == "report"){
                        $response=LabIssue::where('PCS_ID',$params['search'])->where('status','ISSUED')->get();
                    }else
                        $response=LabIssue::where('PCS_ID',$params['search'])->where('status','RECEIVED')->get();
                    return response()->json($response,200);
                }
                if($params['filterby']=='Lab Type'){
                    if($params['reportType'] == "report"){
                        $response=LabIssue::where('LAB_type',$params['search'])->where('status','ISSUED')->get();
                    }else
                        $response=LabIssue::where('LAB_type',$params['search'])->where('status','RECEIVED')->get();
                   return response()->json($response,200);
                }                
            }

            if($params['fromdate'] || $params['todate']){
                if($params['reportType'] == "report"){
                    $response=LabIssue::whereBetween('date',[$params['fromdate'],$params['todate']])->where('status','ISSUED')->get();
                }else
                    $response=LabIssue::whereBetween('date',[$params['fromdate'],$params['todate']])->where('status','RECEIVED')->get();
                    return response()->json($response,200);
            }
            
        }
        if(!empty($params['filter'])){
            if($params['filter']=='all'){
                if($params['reportType'] == "report"){
                    $labissue_data = LabIssue::where('status','ISSUED')->get();
                }else
                    $labissue_data = LabIssue::where('status','RECEIVED')->get();
                return response()->json($labissue_data,200);
            }
        }        
    }

    public function search(Request $request){
        $query=$request->all();
        foreach($query as $key=>$value){            
            if($key != 'reportType'){
                $q = $key; 
            }
        }
        
        if(!empty($q)){
            if($query['reportType'] == "report"){
                $store=LabIssue::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            }else
                $store=LabIssue::select($q)->where($q,'like','%'.$query[$q].'%')->distinct()->pluck($q);
            return response()->json($store,200);
        }
        return response()->json([],200);
    }

}