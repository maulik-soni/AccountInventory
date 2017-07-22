import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReturnComponent implements OnInit {

  purchasereturn =  [];
  private searchterm=new Subject;
  searchatts=new Search(['all','filter'],['PCS ID','Invoice Number','Party Name','date']);
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
  query:any;
  constructor(
    private _webservice : WebServicesService
  ) { }

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
    this.query = JSON.parse(this.query);
    this.query.reportType = "return";
    this.query = JSON.stringify(this.query);    
    if(this.query){
      this._webservice.showpurchaseretrun(this.query).subscribe(response=>this.purchasereturn=response);
    }
    
  }

  ngOnInit() {

    // this._webservice.showpurchase({staticdata:'data'}).subscribe(
    //   resData=>{
    //     this.purchasereturn=resData;
    // });
    // this.searchterm
    //   .debounceTime(100)
    //   .switchMap(search=>this._webservice.searchpurchase({filterby:this.searchvalues.filterby,searchterm:search}))
    //   .subscribe(result=>{
    //        this.purchasereturn=result;
    // });

    this._webservice.showpurchaseretrun({reportType:"return",staticdata:'data'}).subscribe(
      resData=>{
        this.purchasereturn=resData;
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchpurchasereturn({reportType:"report",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
           //this.purchasereturn=result;
          
      });

    // this._webservice.purchaseretrunreport()
    //   .subscribe(resData => {
    //     this.purchasereturn = resData;
    //     for(var i=0; i<this.purchasereturn.length; i++){
    //       console.log(this.purchasereturn[i].country);
    //       //this.purchasereturn[i].country = JSON.parse(this.purchasereturn[i].country)[0].text ;
    //       //this.purchasereturn[i].account_name = JSON.parse(this.purchasereturn[i].account_name)[0].text ;
    //     }
    //   });
  }

}