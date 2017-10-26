import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebServicesService } from './../../services/web-services.service';
import {MdRadioModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MdDatepickerModule} from '@angular/material';
import { Search,SearchValues } from './../search.model';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})

export class LedgerComponent implements OnInit {
// private searchterm=new Subject;
// searchatts=new Search(['all','filter'],[['invoice number','invoice_number'],['party name','account_name'],['date','date']]);
// searchvalues=new SearchValues(
//   this.searchatts.filter[0],
//   this.searchatts.filterby[0][0],
//   null,
//   new Date().toLocaleDateString(),
//   new Date().toLocaleDateString()
// );

titles=['date','particulars','voucher number','debit','credit'];
ledgers=[];
data;
account_names=[];
company_names=[];
accountname;
companyname;
query;

constructor(private _ledgerservice:WebServicesService){}
  
  ngOnInit() {
    let requesttype={companynames:"companynames"};
    this._ledgerservice.showcompanyprofile(JSON.stringify(requesttype)).
    subscribe(response=>{this.company_names=response.response.company_names;
   console.log(response)});
     
  }

  selectedcompany($event){
    this.companyname=$event.id;
    this._ledgerservice.showledger(JSON.stringify({company_name:this.companyname})).
    subscribe(response=>{this.account_names=response.accounts;
    this.accountname=this.account_names[0]});
  }

  selectedaccount($event){
    this.accountname=$event.id;
    
  }

  onSubmit(form:NgForm){
     this._ledgerservice.showledger(JSON.stringify({company_name:this.companyname,account_name:this.accountname,showledger:'showledger'})).
    subscribe(response=>{this.data=response.response;
    this.ledgers=this.data.ledger});
    
  }

}
