import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-labissue-received-report',
  templateUrl: './labissue-received-report.component.html',
  styleUrls: ['./labissue-received-report.component.css']
})
export class LabissueReceivedReportComponent implements OnInit {

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

  ngOnInit() {
    console.log("LOAD");
    // this._webservice.reportlab()
    // .subscribe(resData=>{
    //     this.mydata = JSON.parse(JSON.stringify(resData));
    //     console.log(this.mydata);
    //     for(var i = 0; i<this.mydata.length; i++){
           
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
    //     console.log(this.issued);
    //     console.log(this.received);
    //   });

    this._webservice.showlabissue({reportType:"return",staticdata:'data'}).subscribe(
      resData=>{
        this.received=resData;
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchlabissue({reportType:"return",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
          // this.received=result;
          
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
    this.query.reportType = "return";
    this.query = JSON.stringify(this.query);
    if(this.query){
      this._webservice.showlabissue(this.query).subscribe(response=>this.received=response);
    }
    
  }  

}
