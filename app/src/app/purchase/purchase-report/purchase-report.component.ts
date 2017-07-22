import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReportComponent implements OnInit {

  mydata:any =  [];
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

  purchaseReturnData:any = [];

  constructor(
    private _webservice : WebServicesService
  ) { }
  searching: any = { PCS_ID: '' };
  ngOnInit() {
    // this._webservice.getpurchasereport()
    //   .subscribe( resData =>{
    //     this.mydata = resData;
    //   });
    
    this._webservice.showpurchase({reportType:"report",staticdata:'data'}).subscribe(
      resData=>{
        // this.mydata=resData;
        this.mydata = resData.map(function(el) {
          var o = Object.assign({}, el);
          o.purchaseretrun = false;
          return o;
        });

        console.log(this.mydata);
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchpurchase({reportType:"report",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
          // this.mydata=result;
          
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
    this.query = JSON.parse(this.query);
    this.query.reportType = "report";
    this.query = JSON.stringify(this.query);
    if(this.query){
      this._webservice.showpurchase(this.query).subscribe(response=>this.mydata=response);
    }
    
  }

  purchaseReturn(){
    console.log(this.purchaseReturnData);
    for(let j=0; j<this.purchaseReturnData.length; j++){
      for(var i=0; i<this.mydata.length; i++){
        if(this.mydata[i].PCS_ID == this.purchaseReturnData[j] || this.mydata[i].Lot_Number == this.purchaseReturnData[j]){
          this.mydata.splice(i,1);
        }
      }  
    }
    
    this._webservice.purchaseReturn(this.purchaseReturnData);
  }

  returnPurcahse(purchaseretrun,data){
    var dataID = data.PCS_ID;
    if(data.PCS_ID == undefined || data.PCS_ID == '' || data.PCS_ID == null){
      dataID = data.diamond_lot_number;
    }
    console.log(purchaseretrun,dataID);
    if(purchaseretrun == true){
      console.log(this.purchaseReturnData.indexOf(dataID))
      if(this.purchaseReturnData.indexOf(dataID) == -1){
        this.purchaseReturnData.push(dataID);
      }
    }else{
      console.log(this.purchaseReturnData.indexOf(dataID))
      if(this.purchaseReturnData.indexOf(dataID) != -1){
        var index = this.purchaseReturnData.indexOf(dataID);
        this.purchaseReturnData.splice(index,1);
      }
    }
    console.log(this.purchaseReturnData);
  }

}
