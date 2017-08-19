import { Component, OnInit,  Input,EventEmitter,Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    console.log(this.salesData);
  }

  printInvoice() {
    window.print();
  }

}
