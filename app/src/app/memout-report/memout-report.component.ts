import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../web-services.service';

@Component({
  selector: 'app-memout-report',
  templateUrl: './memout-report.component.html',
  styleUrls: ['./memout-report.component.css'],
  providers: [WebServicesService]
})
export class MemoutReportComponent implements OnInit {

  mydata:any =  [];
  constructor( 
    private _webservice : WebServicesService 
  ) { }

  ngOnInit() {
    this._webservice.memooutreport()
      .subscribe( resData => {
        this.mydata = resData;
        console.log(this.mydata);
        for(var i = 0; i<this.mydata.length; i++){
          
          this.mydata[i].account_name = JSON.parse(this.mydata[i].account_name)[0].text;
          this.mydata[i].broker = JSON.parse(this.mydata[i].broker)[0].text; 
        }
        // this.mydata.broker.text
      });
  }

}
