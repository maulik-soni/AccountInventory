import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.css'],
  providers: [ WebServicesService ]
})
export class SalesReturnComponent implements OnInit {

  salesreturn =  [];
  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit() {
    this._webservice.salesretrunreport()
      .subscribe( resData => this.salesreturn = resData);
  }

}
