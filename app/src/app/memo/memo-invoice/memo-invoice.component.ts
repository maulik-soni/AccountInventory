import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memo-invoice',
  templateUrl: './memo-invoice.component.html',
  styleUrls: ['./memo-invoice.component.css']
})
export class MemoInvoiceComponent implements OnInit {

  @Input('memoIssueData') memoIssueRawData : any;
  
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.memoIssueRawData);
  }

  printInvoice() {
    window.print();
  }

}
