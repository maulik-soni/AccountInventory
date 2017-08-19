import { Component, OnInit,  Input,EventEmitter,Output } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {

  @Input('salesData') salesData : any;
  @Output('childData') outgoingData = new EventEmitter<any>();

  public sendData(data:any){
    this.outgoingData.emit(data);
	}

  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit() {
    console.log("Sales data : ",this.salesData);
  }

  printInvoice() {
    console.log("Sales data : ",this.salesData);
    this._webservice.postsalesdata(this.salesData);
    window.print();
  }

}
