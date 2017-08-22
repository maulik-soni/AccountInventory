import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';

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
  
  constructor(
    private _webservice : WebServicesService
  ) {
    
   }

  ngOnInit() {
    console.log(this.memoIssueRawData);
  }

  printInvoice() {
    window.print();
    this._webservice.postmemo(this.memoIssueRawData,"memoissue");
  }



}
