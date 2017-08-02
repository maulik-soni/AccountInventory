import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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

  s2ab(s:string):ArrayBuffer {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    };
    return buf;
  }

  export(){
    var exportCSVdata:any = JSON.parse(JSON.stringify(this.received));
    for(var i = 0; i<exportCSVdata.length; i++){
      for(var key in exportCSVdata[i]){
        if(exportCSVdata[i][key] == null){
          exportCSVdata[i][key] = '-'; 
        }
        if(key == "labissueRec"){
          delete exportCSVdata[i][key];
        }
        if(key == "created_at"){
          delete exportCSVdata[i][key];
        }
        if(key == "updated_at"){
          delete exportCSVdata[i][key];
        }
        
        if(key == "status"){
          delete exportCSVdata[i][key];
        } 
      }
    }
    if(exportCSVdata[0].sr_no != "Sr No."){
      exportCSVdata.unshift(
        {
          "Sr_no": "Sr No.",
          "PCS_ID": "PCS ID",
          "LAB_type": "Lab Type",
          "date" : "Date",
          "shape" : "Shape",
          "service" : "Service",
          "carat" : "Carat",
          "diameter" : "Diaeter",
          "height" : "Height",
          "color" : "Color",
          "clarity" : "Clarity",
          "amount" : "Amount", 
          "return_date" : "Return Date"
        }
      );
    }
    for(var i = 0; i<exportCSVdata.length; i++){
        exportCSVdata[i] = Object.keys(exportCSVdata[i]).map(function(k) { 
          return exportCSVdata[i][k]; 
        });
    }
    const ws = XLSX.utils.aoa_to_sheet(exportCSVdata);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		const wbout = XLSX.write(wb, { bookType:'xlsx', type:'binary' });
		saveAs(new Blob([this.s2ab(wbout)]), "LabIssueReceiveReport"+new Date().getTime()+".xlsx");
  }

}
