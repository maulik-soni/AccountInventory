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
searchatts=new Search(['all','filter'],['invoice','account','date']);
searchvalues=new SearchValues(
  this.searchatts.filter[0],
  this.searchatts.filterby[0],
  null,
  new Date().toLocaleDateString(),
  new Date().toLocaleDateString()
);

titles=[];
data=[];
searchresult=[];
query;

constructor(private _ledgerservice:WebServicesService){}
  
  ngOnInit() {
    this._ledgerservice.showledger({staticdata:'data'}).subscribe(
      resData=>{
        this.titles=resData.titles;
        this.data=resData.data;
        console.log(resData.titles);
        console.log(resData.data);
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._ledgerservice.searchledger({filterby:this.searchvalues.filterby,searchterm:search}))
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
      this._ledgerservice.showledger(this.query).subscribe(response=>this.data=response.data);
    }
    
  }

}
