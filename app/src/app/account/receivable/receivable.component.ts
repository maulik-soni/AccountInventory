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
  selector: 'app-receivable',
  templateUrl: './receivable.component.html',
  styleUrls: ['./receivable.component.css'],
})
export class ReceivableComponent implements OnInit {
private searchterm=new Subject;
searchatts=new Search(['all','filter'],[['invoice number','invoice_number'],['party name','account_name'],['date','date']]);
searchvalues=new SearchValues(
  this.searchatts.filter[0],
  this.searchatts.filterby[0][1],
  null,
  new Date().toLocaleDateString(),
  new Date().toLocaleDateString()
);

titles=['party name','amount'];
innertitles=['invoice number','date of invoice','invoice amount','amount received','balance amount','due','due days']
data=[];

searchresult=[];
query;

constructor(private _receivableservice:WebServicesService){}
  
  ngOnInit() {
    this._receivableservice.showreceivable({staticdata:'data'}).subscribe(
      resData=>{
        this.titles=resData.titles;
        this.data=resData.data;
        console.log(resData.titles);
        console.log(resData.data);
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._receivableservice.searchreceivable({filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          if(result.constructor=== Array){
           this.searchresult=result;
          }
      });
     
  }
  
  search(searchvalue){
    this.searchterm.next(searchvalue);
  }

  issearchempty(){
    return this.searchresult.length;
  }

  setvalue(result){
    this.searchvalues.search=result;
    this.searchresult=[];
  }

  resetsearch(){
    this.searchvalues.search=null;
  }

  onSubmit(form:NgForm){
    if(this.searchvalues.filter=='all'){
      this.query=JSON.stringify(form.value);
      console.log(this.query);
    }
    if(this.searchvalues.filterby=='date'){
      this.query=JSON.stringify(form.value);
      console.log(this.query);
    }
    if(form.value.search!=null){
     this.query=JSON.stringify(form.value);
     console.log(this.query);
    }

    if(this.query){
      this._receivableservice.showreceivable(this.query).subscribe(response=>{
      console.log(response.response);
      console.log(response.response.accounts);
      console.log(response.response.accounts[0]);
      console.log(response.response.accounts[0].account_name);
    this.data=response.response});
    }
    
  }

}
