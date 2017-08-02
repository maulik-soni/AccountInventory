import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-labissue-report',
  templateUrl: './labissue-report.component.html',
  styleUrls: ['./labissue-report.component.css'],
  providers: [WebServicesService]
})
export class LabissueReportComponent implements OnInit {

  constructor(
    private _webservice : WebServicesService
  ) { }
  mydata:any = {};
  issued:any = [];
  received:any = [];
  private searchterm=new Subject;
  searchatts=new Search(['all','filter'],['PCS ID','Lab Type','date']);
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
  labissueRecieved:any = [];

  ngOnInit() {

    this._webservice.showlabissue({reportType:"report",staticdata:'data'}).subscribe(
      resData=>{
        this.issued=resData.map(function(el) {
          var o = Object.assign({}, el);
          o.labissueRec = false;
          return o;
        });
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchlabissue({reportType:"report",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{

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
      this._webservice.showlabissue(this.query).subscribe(response=>this.issued=response);
    }
    
  }

   labissueReceived(){
    
    this._webservice.changelabissuestatus(this.labissueRecieved).subscribe((response)=>{
      for(let j=0; j<this.labissueRecieved.length; j++){
        for(var i=0; i<this.issued.length; i++){
          if(this.issued[i].PCS_ID == this.labissueRecieved[j]){
            this.issued.splice(i,1);
          }
        }
      }
      this.labissueRecieved = [];
    });
  }

  receiveLabissue(labissueRec,data){
    var dataID = data.PCS_ID;
   
    console.log(labissueRec,dataID);
    if(labissueRec == true){
      console.log(this.labissueRecieved.indexOf(dataID))
      if(this.labissueRecieved.indexOf(dataID) == -1){
        this.labissueRecieved.push(dataID);
      }
    }else{
      console.log(this.labissueRecieved.indexOf(dataID))
      if(this.labissueRecieved.indexOf(dataID) != -1){
        var index = this.labissueRecieved.indexOf(dataID);
        this.labissueRecieved.splice(index,1);
      }
    }
    console.log(this.labissueRecieved);
  }

}
