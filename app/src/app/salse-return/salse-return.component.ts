import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../web-services.service';

@Component({
  selector: 'app-salse-return',
  templateUrl: './salse-return.component.html',
  styleUrls: ['./salse-return.component.css'],
  providers: [WebServicesService]
})
export class SalseReturnComponent implements OnInit {

  salesreturn =  [];
  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit() {
    this._webservice.salesretrunreport()
      .subscribe( resData =>{ 
        this.salesreturn = resData
        for(var i = 0; i<this.salesreturn.length; i++){
          
          this.salesreturn[i].account_name = JSON.parse(this.salesreturn[i].account_name)[0].text;
          this.salesreturn[i].country = JSON.parse(this.salesreturn[i].country)[0].text; 
        }
      });
  }


}
