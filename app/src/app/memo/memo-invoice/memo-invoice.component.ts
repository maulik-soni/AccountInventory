import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-memo-invoice',
  templateUrl: './memo-invoice.component.html',
  styleUrls: ['./memo-invoice.component.css']
})
export class MemoInvoiceComponent implements OnInit {

  @Input('memoIssueData') memoIssueRawData : any;

  @Output('childData') outgoingData = new EventEmitter<any>();

  public sendData(data:any){
    this.outgoingData.emit(data);
	}
  
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.memoIssueRawData);
  }

  printInvoice() {
    window.print();
  }



}
