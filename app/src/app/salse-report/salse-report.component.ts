import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../web-services.service';

@Component({
  selector: 'app-salse-report',
  templateUrl: './salse-report.component.html',
  styleUrls: ['./salse-report.component.css'],
  providers: [ WebServicesService ]
})
export class SalseReportComponent implements OnInit {

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
    for(var i=0; i<this.mydata.length; i++){
      if(this.mydata[i].PCS_ID == data.PCS_ID){
        this.mydata.splice(i,1);
      }
    }
    this._webservice.salesReturn(data.PCS_ID);
  }

}
