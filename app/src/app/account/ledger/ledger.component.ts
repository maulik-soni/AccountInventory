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
private searchterm=new Subject;
searchatts=new Search(['all','filter'],[['invoice number','invoice_number'],['party name','account_name'],['date','date']]);
searchvalues=new SearchValues(
  this.searchatts.filter[0],
  this.searchatts.filterby[0][0],
  null,
  new Date().toLocaleDateString(),
  new Date().toLocaleDateString()
);

titles=['date','particulars','debit','credit'];
data=[];
account_names=[];
company_names=[];
accountname;
companyname;
query;

constructor(private _ledgerservice:WebServicesService){}
  
  ngOnInit() {
    let requesttype={companynames:"companynames"};
    this._ledgerservice.showcompanyprofile(JSON.stringify(requesttype)).
    subscribe(response=>{this.account_names=response.response.company_names;
   console.log(response)});
     
  }

  selectedcompany($event){
    this.companyname=$event;
  }

  selectedparty($event){
    this.accountname=$event;
  }
  
  // search(searchvalue){
  //   this.searchterm.next(searchvalue);
  // }

  // issearchempty(){
  //   return this.searchresult.length;
  // }

  // setvalue(result){
  //   this.to=result;
  //   this.searchresult=[];
  // }

  onSubmit(form:NgForm){
    // let data;
    // if(this.to){
    //   data={
    //   ledger: 'ledger',
    //   account_name:this.to
    // }
    //   this.query=JSON.stringify(data);
    //   console.log(this.query);
    // }
    // if(this.searchvalues.filterby=='date'){
    //   this.query=JSON.stringify(form.value);
    //   console.log(this.query);
    // }
    // if(form.value.search!=null){
    //  this.query=JSON.stringify(form.value);
    //  console.log(this.query);
    // }
    if(this.accountname){
      let account;
      account={
        account_name:this.accountname
      }
      this.query=JSON.stringify(account);
    }

    
      this._ledgerservice.showledger(this.query).subscribe(response=>{
      this.data=response;
      console.log(this.data);
  
    });
    
  }

}
