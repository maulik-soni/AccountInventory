import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../web-services.service';

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
  ngOnInit() {
    console.log("LOAD");
    this._webservice.reportlab()
    .subscribe(resData=>{
        this.mydata = JSON.parse(JSON.stringify(resData));
        console.log(this.mydata);
        for(var i = 0; i<this.mydata.length; i++){
           
          if(this.mydata[i].status =="ISSUED"){
            this.issued.push(this.mydata[i]);
          }else{
            this.received.push(this.mydata[i]);
          }
        }

        for(var i = 0; i<this.mydata.lenght; i++){
          if(this.mydata[i].status =="ISSUED"){
            this.issued.push(this.mydata[i]);
          }else{
            this.received.push(this.mydata[i]);
          }
        }
        console.log(this.issued);
        console.log(this.received);
      });
  }

  labissuereceived(data){
    for(var i=0; i<this.issued.length; i++){
      if(this.issued[i].PCS_ID == data.PCS_ID){
        var ival = i;
        this._webservice.changelabissuestatus(data.PCS_ID).subscribe(
          response =>{
            this.issued[ival].return_date = this._webservice.dateConversion(new Date);
            this.received.push(this.issued[ival]);
            this.issued.splice(ival,1);
        });
        
      }
    }
  }

}
