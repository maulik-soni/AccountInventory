import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../web-services.service';

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
      .subscribe(resData => this.purchasereturn = resData);
  }

}
