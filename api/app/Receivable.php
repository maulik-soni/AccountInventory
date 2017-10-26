<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use App\Bills;
use Carbon\Carbon;
use DB;

class Receivable extends Model
{
    public $timestamps = false;
    public static function collection(){
         $sales = DB::table('sales')
                        ->leftjoin('bills', 'sales.invoice_number', '=', 'bills.invoice_number')
                        ->where('bills.invoice_number','=',null)
                        ->select('sales.invoice_number','sales.account_name','sales.sales_amount_INR as balance','sales.sales_amount_INR as invoice_value','sales.sales_date as date','sales.due_date','sales.company_name')
                        ->get();

            $reciept = Bills::select('invoice_number','account_name','balance','invoice_value','date','due_date','received','company_name')
                       ->where([['balance','>=',0],['debit_INR','=',null]])
                       ->latest()
                       ->get()
                       ->unique('invoice_number')
                       ->values()
                       ->where('balance','!=',0)
                       ->all();
            
             return $sales->merge($reciept);
    }

    public static function search($term){
        if($term[key($term)]){
            $sales = DB::table('sales')
                            ->leftjoin('bills', 'sales.invoice_number', '=', 'bills.invoice_number')
                            ->where('bills.invoice_number','=',null)
                            ->select('sales.invoice_number','sales.account_name','sales.sales_amount_INR as balance')
                            ->where('sales.'.key($term),'like','%'.$term[key($term)].'%')
                            ->pluck(key($term));
                        

            $reciept = Bills::select('invoice_number','account_name','balance')
                       ->where([['balance','>=',0],['credit_INR','!=',0],[key($term),'like','%'.$term[key($term)].'%']])
                       ->latest()
                       ->get()
                       ->unique('account_name')
                       ->values()
                       ->where('balance','!=',0)
                       ->pluck(key($term));
                       
            
            return $sales
                        ->merge($reciept)
                        ->unique()
                        ->values()
                        ->all();
        }
        return [];
    }

     public static function betweenDates($from,$to){
         $from=Carbon::parse($from)->addDays(1)->toDateString();
        $to=Carbon::parse($to)->addDays(1)->toDateString();
        $sales = DB::table('sales')
                         ->leftjoin('bills', 'sales.invoice_number', '=', 'bills.invoice_number')
                         ->where('bills.invoice_number','=',null)
                        ->select('sales.invoice_number','sales.account_name','sales.amount_INR as balance','sales.amount_INR as invoice_value','sales.sales_date as date','sales.due_date','sales.company_name')
                        ->whereBetween('sales_date',[$from,$to])
                        ->get();

            $reciept = Bills::select('invoice_number','account_name','balance','invoice_value','date','due_date','received','company_name')
                       ->where([['balance','>=',0],['debit_INR','=',null]])
                       ->whereBetween('date',[$from,$to])
                       ->latest()
                       ->get()
                       ->unique('account_name')
                       ->values()
                       ->where('balance','!=',0)
                       ->all();
            
             return $sales
                        ->merge($reciept)
                        ->unique()
                        ->values()
                        ->all();
    }
}
