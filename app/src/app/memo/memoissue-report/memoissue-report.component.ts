import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';


@Component({
  selector: 'app-memoissue-report',
  templateUrl: './memoissue-report.component.html',
  styleUrls: ['./memoissue-report.component.css'],
  providers: [WebServicesService]
})
export class MemoissueReportComponent implements OnInit {

  mydata:any =  [];
  issued:any = [];
  received:any = [];
  constructor( 
    private _webservice : WebServicesService 
  ) { }

  ngOnInit() {
    this._webservice.memoissuereport()
      .subscribe( resData => {
        this.mydata = resData;
        console.log(this.mydata);
        for(var i = 0; i<this.mydata.length; i++){
          // this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text;
          // this.mydata[i].broker = JSON.parse(this.mydata[i].broker)[0].text; 
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
        // this.mydata.broker.text
      });
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

