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

  onSubmit(form:NgForm){
    let invoice;
    invoice={
      invoice:'1589'
    }
    this._payableentry.showpaymentreciept(JSON.stringify(invoice)).
    subscribe(result=>console.log(result));
  }

}
