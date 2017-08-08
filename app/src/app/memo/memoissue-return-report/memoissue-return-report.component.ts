import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-memoissue-return-report',
  templateUrl: './memoissue-return-report.component.html',
  styleUrls: ['./memoissue-return-report.component.css']
})
export class MemoissueReturnReportComponent implements OnInit {

  mydata:any =  [];
  issued:any = [];
  received:any = [];

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

  ngOnInit() {
    // this._webservice.memoissuereport()
    //   .subscribe( resData => {
    //     this.mydata = resData;
    //     console.log(this.mydata);
    //     for(var i = 0; i<this.mydata.length; i++){
    //       // this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text;
    //       // this.mydata[i].broker = JSON.parse(this.mydata[i].broker)[0].text; 
    //       if(this.mydata[i].status =="ISSUED"){
    //         this.issued.push(this.mydata[i]);
    //       }else{
    //         this.received.push(this.mydata[i]);
    //       }
    //     }

    //     for(var i = 0; i<this.mydata.lenght; i++){
    //       if(this.mydata[i].status =="ISSUED"){
    //         this.issued.push(this.mydata[i]);
    //       }else{
    //         this.received.push(this.mydata[i]);
    //       }
    //     }
    //     // this.mydata.broker.text
    //   });
    this._webservice.showmemoissue({reportType:"return",staticdata:'data'}).subscribe(
      resData=>{
        this.received=resData;
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchmemoissue({reportType:"return",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
          // this.issued=result;
          
      });
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
      this._webservice.showmemoissue(this.query).subscribe(response=>this.received=response);
    }
    
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

   memoissueReturn(data){
     console.log(data);
    for(var i=0; i<this.issued.length; i++){
      if(this.issued[i].PCS_ID == data.PCS_ID){
        var ival = i;
        var dataID = data.PCS_ID;
        if(data.PCS_ID == undefined || data.PCS_ID == '' || data.PCS_ID == null){
          dataID = data.Lot_Number;
        }
        this._webservice.memoissuechangestatus(dataID).subscribe(
          response =>{
            this.issued[ival].return_date = this.dateConversion(new Date);
            this.received.push(this.issued[ival]);
            this.issued.splice(ival,1);
        });
        
      }
    }
  }

  public dateConversion(date){
    console.log(date);
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;

  }

}
