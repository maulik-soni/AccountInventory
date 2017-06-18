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

}
