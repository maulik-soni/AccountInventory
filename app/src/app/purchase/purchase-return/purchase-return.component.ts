import { Component, OnInit } from '@angular/core';

import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReturnComponent implements OnInit {

  purchasereturn =  [];
  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit() {
    this._webservice.purchaseretrunreport()
      .subscribe(resData => {
        this.purchasereturn = resData;
        for(var i=0; i<this.purchasereturn.length; i++){
          console.log(this.purchasereturn[i].country);
          //this.purchasereturn[i].country = JSON.parse(this.purchasereturn[i].country)[0].text ;
          //this.purchasereturn[i].account_name = JSON.parse(this.purchasereturn[i].account_name)[0].text ;
        }
      });
  }

}