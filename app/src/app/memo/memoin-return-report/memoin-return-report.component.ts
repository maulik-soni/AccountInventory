import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
'./../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-memoin-return-report',
  templateUrl: './memoin-return-report.component.html',
  styleUrls: ['./memoin-return-report.component.css']
})
export class MemoinReturnReportComponent implements OnInit {

  mydata:any =  [];
  issued:any = [];
  returned:any = [];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  
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
    // this._webservice.memoinreport()
    //   .subscribe( resData => {
    //     this.mydata = JSON.parse(JSON.stringify(resData));
    //     console.log(this.mydata);
    //     for(var i = 0; i<this.mydata.length; i++){
    //       // this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text;
    //       // this.mydata[i].broker = JSON.parse(this.mydata[i].broker)[0].text; 
    //       if(this.mydata[i].status =="ISSUED"){
    //         this.issued.push(this.mydata[i]);
    //       }else{
    //         this.returned.push(this.mydata[i]);
    //       }
    //     }

    //     for(var i = 0; i<this.mydata.lenght; i++){
    //       if(this.mydata[i].status =="ISSUED"){
    //         this.issued.push(this.mydata[i]);
    //       }else{
    //         this.returned.push(this.mydata[i]);
    //       }
    //     }
    //   });

    this._webservice.showmemoin({reportType:"return",staticdata:'data'}).subscribe(
      resData=>{
        this.returned=resData;
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchmemoin({reportType:"return",filterby:this.searchvalues.filterby,searchterm:search}))
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
      this._webservice.showmemoin(this.query).subscribe(response=>this.returned=response);
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

  public dateConversion(date){
    console.log(date);
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;

  }

  public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}
