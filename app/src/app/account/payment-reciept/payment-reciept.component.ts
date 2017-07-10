import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{PaymentReciept,Options} from './payment-reciept.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { WebServicesService } from './../../services/web-services.service';
@Component({
  selector: 'app-payment-reciept',
  templateUrl: './payment-reciept.component.html',
  styleUrls: ['./payment-reciept.component.css']
})
export class PaymentRecieptComponent implements OnInit {
  private searchterm=new Subject;
  searchresult=[];
  data=[];
  formdata=[];
  options=new Options(
    ['cash','cheque'],
    ['Payment','Recieve'],
    [],
    ['Rs','Dollar'],
    ['Part','Full'],
   
  );
  paymentvalues=new PaymentReciept(
    new Date().toLocaleDateString(),
    this.options.by[0],
    this.options.type[0],
    '',
    '',
    this.options.currency[0],
    this.options.payment[0],
    0,
    0,
    0,
    0,
    0
    );

  constructor(
    private _payableentry:WebServicesService
  ) { }

  ngOnInit() {

     this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._payableentry.searchpaymentreciept({filterby:'account_name',searchterm:search}))
      .subscribe(result=>{
          if(result.constructor=== Array){
           this.searchresult=result;
          }
      });
  }

  selectedby($event){
    this.paymentvalues.by=$event.id;
    console.log(this.paymentvalues.by);
  }

  selectedtype($event){
    this.paymentvalues.type=$event.id;
    console.log(this.paymentvalues.type);
  }

  selectedbill($event){
    this.paymentvalues.bill=$event.id;
    console.log(this.paymentvalues.bill);
  }

  selectedcurrency($event){
    this.paymentvalues.currency=$event.id;
    console.log(this.paymentvalues.bill);
  }

  selectedpayment($event){
    this.paymentvalues.payment=$event.id;
    console.log(this.paymentvalues.bill);
  }

  search(searchvalue){
    this.searchterm.next(searchvalue);
  }

  issearchempty(){
    return this.searchresult.length;
  }

  setvalue(result){
    let invoice;
    this.paymentvalues.to=result;
    this.searchresult=[];
    invoice={
      getoptions:result,
    }
    this._payableentry.showpaymentreciept(JSON.stringify(invoice))
    .subscribe(result=>this.options.bill=result.data);
  }

  getdata(){
    let invoice;
    invoice={
      invoice_number: this.paymentvalues.bill,
    }
    this._payableentry.showpaymentreciept(JSON.stringify(invoice)).
    subscribe(result=>{
    // this.paymentvalues.amount=result.data.amount;
    this.paymentvalues.balance=result.data.balance;
    this.paymentvalues.credit=result.data.credit;
    this.paymentvalues.debit=result.data.debit;
    this.paymentvalues.recieve=result.recieved;
    console.log(result);
  });
  
  
  }

  onSubmit(form:NgForm){
     this.paymentvalues.date=new Date(this.paymentvalues.date.valueOf()).toLocaleDateString();
     this._payableentry.newpaymentreciept(JSON.stringify(this.paymentvalues))
     .subscribe(response=>{console.log(response);
     this.getdata()});
    console.log(JSON.stringify(this.paymentvalues));
  }

}
