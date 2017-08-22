import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{Bills,Options} from './bills.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { WebServicesService } from './../../services/web-services.service';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  accountdata=[];
  invoicedata;
  showpaymentoptions=false;
  titles=['party name','amount'];
  innertitles=['invoice number','date of invoice','invoice amount','amount paid','balance amount','due'];
  options=new Options(
    ['cash','cheque','bank transfer'],
    ['payment','receive'],
    ['part','full'],
    ['INR','USD'],
   []
   );
  paymentvalues=new Bills(
    null,
    null,
    new Date().toLocaleDateString(),
    this.options.transaction_mode[0],
    this.options.transaction_type[0],
    this.options.transaction_status[0],
    '',
    this.options.transaction_currency[0],
    '',
    '',
    null,
    null,
    null
    );


  constructor(
    private _bills:WebServicesService
  ) { }


  ngOnInit() {
       let billtype;
    let billtypevalue=this.paymentvalues.transaction_type;
    billtype={
      billtype:billtypevalue,
    }
    this._bills.showbills(JSON.stringify(billtype))
    .subscribe(response=>{this.options.account_name=response.response.account_names});

  }

  selectedby($event){
    this.paymentvalues.transaction_mode=$event.id;
    console.log(this.paymentvalues.transaction_mode);
  }

  selectedtype($event){
    this.paymentvalues.transaction_type=$event.id;
    console.log(this.paymentvalues.transaction_type);
  }

  selectedparty($event){
    this.paymentvalues.account_name=$event.id;
    console.log(this.paymentvalues.account_name);
  }

  selectedstatus($event){
    this.paymentvalues.transaction_status=$event.id;
    console.log(this.paymentvalues.transaction_status);
  }


  selectedcurrency($event){
    this.paymentvalues.transaction_currency=$event.id;
    console.log(this.paymentvalues.transaction_currency);
  }



  gettype(option){
    let billtype;
    let billtypevalue=option;
    billtype={
      billtype:billtypevalue,
    }
    this._bills.showbills(JSON.stringify(billtype))
    .subscribe(response=>{this.options.account_name=response.response.account_names});
  }

 
  setdata(){
    console.log(this.paymentvalues);
    this.paymentvalues.balance=this.invoicedata.balance;
    this.paymentvalues.date=this.invoicedata.date;
    this.paymentvalues.due_date=this.invoicedata.due_date;
    this.paymentvalues.invoice_number=this.invoicedata.invoice_number;
    this.paymentvalues.invoice_value=this.invoicedata.invoice_value;
    this.paymentvalues.received=this.invoicedata.received;
  }

  getinvoice(data){
    console.log(data);
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
    .subscribe(response=>{this.accountdata=response.response});
    }
  }

  onSubmit(form:NgForm){
     this.paymentvalues.transaction_date=new Date(this.paymentvalues.date.valueOf()).toLocaleDateString();
     this._bills.newbill(JSON.stringify(this.paymentvalues))
     .subscribe(response=>{console.log(response);
     this.getdata();
     this.showpaymentoptions=false;
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
