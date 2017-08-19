import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {

  @Input('salesData') salesData : any;
  constructor() { }

  ngOnInit() {
    console.log(this.salesData);
  }

  printInvoice() {
    window.print();
  }

}
