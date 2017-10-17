import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{Bills,Options} from './bills.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WebServicesService } from './../../services/web-services.service';
import { SharedService } from './../../shared/shared.service';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  accountdata=[];
  companyname;
  invoicedata;
  bankamount;
  amountdisable=false;
  showpaymentoptions=false;
  titles=['party name','amount'];
  innertitles=['invoice number','date of invoice','invoice amount','amount','balance amount','due date','due days','action'];
  options=new Options(
    ['cash','cheque','bank transfer'],
    ['payment','receive'],
    ['part','full'],
    ['INR','USD'],
   [],
   [],
   [],
   []
   );
  paymentvalues=new Bills(
    null,
    null,
    new Date().toLocaleDateString('en-ca'),
    this.options.transaction_mode[0],
    this.options.transaction_type[0],
    this.options.transaction_status[0],
    '',
    this.options.transaction_currency[0],
    '',
    '',
    null,
    null,
    null,
    '',
    '',
    '',
    null,
    null,
    null,
    null,
    null,
    ''
    );


  constructor(
    private _bills:WebServicesService,
    private _shared:SharedService
  ) {
   }


  ngOnInit() {
       let billtype;
    let billtypevalue=this.paymentvalues.transaction_type;
    billtype={
      billtype:billtypevalue,
    }
    this._bills.showbills(JSON.stringify(billtype))
    .subscribe(response=>{this.options.account_name=response.response.account_names;
    console.log(response)});

  }



  selectedby($event){
    this.paymentvalues.transaction_mode=$event.id;
    if($event.id=='cheque' || $event.id=='bank transfer'){
      let data;
      data={
        company_name:this.companyname,
      }
      this._bills.getcompanybank(JSON.stringify(data))
      .subscribe(response=>{this.options.bank=response.banks;
        console.log(response)
         this.selectedbank({id:this.options.bank[0]});
         
      });
    }
  }

  selectedtype($event){
    this.paymentvalues.transaction_type=$event.id;
    console.log(this.paymentvalues.transaction_type);
  }

  selectedparty($event){
    this.paymentvalues.account_name=$event.id;
    console.log(this.paymentvalues.account_name);
    this.getdata();
  }

  selectedstatus($event){
    this.paymentvalues.transaction_status=$event.id;
  
      this.setamount();
    
    console.log(this.paymentvalues.transaction_status);
  }


  selectedcurrency($event){
    this.paymentvalues.transaction_currency=$event.id;
    console.log(this.paymentvalues.transaction_currency);
  }

  selectedbank($event){
    this.paymentvalues.bank=$event.id;
    let bank;
    bank={
      bank_name: this.paymentvalues.bank,
      company_name:this.companyname,
    }
    this._bills.getcompanybranches(JSON.stringify(bank))
    .subscribe(response=>{this.options.branch=response.branches;
      this.paymentvalues.bank_branch=this.options.branch[0];
      this.getbankaccount(this.paymentvalues.bank,this.paymentvalues.bank_branch,this.companyname);
      this.paymentvalues.account_number=this.options.account_number[0];
      this.getbankamount(this.paymentvalues.bank,this.paymentvalues.bank_branch,this.paymentvalues.account_number,this.companyname);
    });
  }

  selectedaccountnumber($event){
    this.paymentvalues.account_number=$event.id;
    this.getbankamount(this.paymentvalues.bank,this.paymentvalues.bank_branch,this.paymentvalues.account_number,this.companyname);
  }

  selectedbankbranch($event){
    this.paymentvalues.bank_branch=$event.id;
    let bank;
    bank={
      bank_name:this.paymentvalues.bank,
      company_name:this.companyname,
      bank_branch:this.paymentvalues.bank_branch
    }
    this._bills.getcompanybankaccount(JSON.stringify(bank))
    .subscribe(response=>{
      this.options.account_number=response.account_number;
      this.paymentvalues.account_number=this.options.account_number[0];
      this.getbankaccount(this.paymentvalues.bank,this.paymentvalues.bank_branch,this.companyname);
    });
  }

  getbankaccount(bank,branch,companyname){
    let data;
    data={
      bank_name:bank,
      bank_branch:branch,
      company_name:companyname,
    }
    this._bills.getcompanybankaccount(JSON.stringify(data))
    .subscribe(response=>{this.options.account_number=response.account_number});
  }

  getbankamount(bank,branch,account,companyname){
    let data;
    data={
      bank_name:bank,
      bank_branch:branch,
      account_number:account,
      company_name:companyname
    }
    this._bills.getcompanyamount(JSON.stringify(data))
    .subscribe(response=>{this.bankamount=response.amount[0]});
  }



  gettype(option){
    let billtype;
    this.showpaymentoptions=false;
    this.paymentvalues.transaction_mode=this.options.transaction_mode[0];
    let billtypevalue=option;
    billtype={
      billtype:billtypevalue,
    }
    this.accountdata=[];
    this._bills.showbills(JSON.stringify(billtype))
    .subscribe(response=>{this.options.account_name=response.response.account_names});
  }

 
  setdata(){
    this.paymentvalues.balance=this.invoicedata.balance;
    this.paymentvalues.date=this.invoicedata.date;
    this.paymentvalues.due_date=this.invoicedata.due_date;
    this.paymentvalues.invoice_number=this.invoicedata.invoice_number;
    this.paymentvalues.invoice_value=this.invoicedata.invoice_value;
    this.paymentvalues.received=this.invoicedata.received;
  }

  setamount(){
      if(this.paymentvalues.transaction_status==="full"){
    this.paymentvalues.amount=this.invoicedata.balance;
    this.amountdisable=true;
      }
      else{
        this.paymentvalues.amount=null;
        this.amountdisable=false;
      }
  }

  getinvoice(data){
    console.log(data);
    this.companyname=data.company_name;
    this.invoicedata=data;
    this.setdata();
    this.showpaymentoptions=true;
  }



  getdata(){
    if(this.paymentvalues.account_name!=''){
    let bill;
    let billtypevalue=this.paymentvalues.transaction_type;
    bill={
      billtype:billtypevalue,
      account_name:this.paymentvalues.account_name
    }
    this._bills.showbills(JSON.stringify(bill))
    .subscribe(response=>{this.accountdata=response.response;
    if(response.response.accounts.length===0 ){
    this._shared.notify('No Results Found','inverse');
  }});
  }
  
  
  }


  onSubmit(form:NgForm){
     this.paymentvalues.transaction_date=new Date(this.paymentvalues.date.valueOf()).toLocaleDateString('en-ca');
     this._bills.newbill(JSON.stringify(this.paymentvalues))
     .subscribe(response=>{console.log(response);
     this.getdata();
     this.showpaymentoptions=false;
     console.log(form);
     this.paymentvalues.amount=null;
     
    //  this.paymentvalues.balance=this.invoicedata.balance;
    //  this.paymentvalues.date=this.invoicedata.date;
    // this.paymentvalues.due_date=this.invoicedata.due_date;
    // this.paymentvalues.invoice_number=this.invoicedata.invoice_number;
    // this.paymentvalues.invoice_value=this.invoicedata.invoice_value;
    // this.paymentvalues.received=this.invoicedata.received;

  });
  
    console.log(JSON.stringify(this.paymentvalues));
    this.setdata();

  }

}
