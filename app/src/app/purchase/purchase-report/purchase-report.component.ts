import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';


@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReportComponent implements OnInit {

  mydata =  [];
  constructor(
    private _webservice : WebServicesService
  ) { }
  searching: any = { PCS_ID: '' };
  ngOnInit() {
    this._webservice.getpurchasereport()
      .subscribe( resData =>{
        this.mydata = resData;
        for(var i=0; i<this.mydata.length; i++){
          this.mydata[i].country = JSON.parse(this.mydata[i].country)[0].text ;
          this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text ;
        }
      });
  }

  purchaseReturn(data){
    console.log(data.PCS_ID);
    for(var i=0; i<this.mydata.length; i++){
      if(this.mydata[i].PCS_ID == data.PCS_ID){
        this.mydata.splice(i,1);
      }
    }
    this._webservice.purchaseReturn(data.PCS_ID);
  }

}
