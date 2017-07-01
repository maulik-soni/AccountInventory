import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
  providers: [ WebServicesService ]
})
export class SalesReportComponent implements OnInit {

  mydata =  [];
  constructor( 
    private _webservice : WebServicesService 
  ) { }

  ngOnInit() {
    this._webservice.getsalesreport()
      .subscribe( resData => this.mydata = resData);
  }

  salesReturn(data){
    console.log(data.PCS_ID);
    var dataID = data.PCS_ID;
    if(data.PCS_ID == undefined || data.PCS_ID == '' || data.PCS_ID == null){
      dataID = data.Lot_Number;
    }
    for(var i=0; i<this.mydata.length; i++){
       if(this.mydata[i].PCS_ID == dataID || this.mydata[i].Lot_Number == dataID){
        this.mydata.splice(i,1);
      }
    }
    this._webservice.salesReturn(dataID);
  }

}
