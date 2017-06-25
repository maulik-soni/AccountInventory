import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-memoin-report',
  templateUrl: './memoin-report.component.html',
  styleUrls: ['./memoin-report.component.css'],
  providers: [WebServicesService]
})
export class MemoinReportComponent implements OnInit {

  mydata:any =  [];
  issued:any = [];
  returned:any = [];
  constructor( 
    private _webservice : WebServicesService 
  ) { }

  ngOnInit() {
    this._webservice.memoinreport()
      .subscribe( resData => {
        this.mydata = JSON.parse(JSON.stringify(resData));
        for(var i = 0; i<this.mydata.length; i++){
          this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text;
          this.mydata[i].broker = JSON.parse(this.mydata[i].broker)[0].text; 
          if(this.mydata[i].status =="ISSUED"){
            this.issued.push(this.mydata[i]);
          }else{
            this.returned.push(this.mydata[i]);
          }
        }

        for(var i = 0; i<this.mydata.lenght; i++){
          if(this.mydata[i].status =="ISSUED"){
            this.issued.push(this.mydata[i]);
          }else{
            this.returned.push(this.mydata[i]);
          }
        }
      });
  }

  memoinReturn(data){
    for(var i=0; i<this.issued.length; i++){
      if(this.issued[i].PCS_ID == data.PCS_ID){
        var ival = i;
        this._webservice.memoinchangestatus(data.PCS_ID).subscribe(
          response =>{
            this.issued[ival].return_date = this.dateConversion(new Date);
            this.returned.push(this.issued[ival]);
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


