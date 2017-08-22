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
  amountInWords:string = ''

  public sendData(data:any){
    this.outgoingData.emit(data);
	}

  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit() {
    console.log("Sales data : ",this.salesData);
    this.amountInWords = this.NumToWord(Math.round(this.salesData[0].sales_amount_INR));
  }

  printInvoice() {
    console.log("Sales data : ",this.salesData);
    this._webservice.postsalesdata(this.salesData);
    window.print();
  }



// numToWords :: (Number a, String a) => a -> String
  NumToWord(inputNumber) {
    var str = new String(inputNumber)
    var splt = str.split("");
    var rev:any = splt.reverse();
    var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    var numLength = rev.length;
    var word = new Array();
    var j = 0,i=0;

    for (i = 0; i < numLength; i++) {
        switch (i) {

            case 0:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = '' + once[rev[i]];
                }
                word[j] = word[j];
                break;

            case 1:
                aboveTens();
                break;

            case 2:
                if (rev[i] == 0) {
                    word[j] = '';
                }
                else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                    word[j] = once[rev[i]] + " Hundred ";
                }
                else {
                    word[j] = once[rev[i]] + " Hundred and";
                }
                break;

            case 3:
                if (rev[i] == 0 || rev[i + 1] == 1) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                    word[j] = word[j] + " Thousand";
                }
                break;

                
            case 4:
                aboveTens();
                break;

            case 5:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Lakh";
                }
                 
                break;

            case 6:
                aboveTens();
                break;

            case 7:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Crore";
                }                
                break;

            case 8:
                aboveTens();
                break;

            //            This is optional. 

            //            case 9:
            //                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
            //                    word[j] = '';
            //                }
            //                else {
            //                    word[j] = once[rev[i]];
            //                }
            //                if (rev[i + 1] !== '0' || rev[i] > '0') {
            //                    word[j] = word[j] + " Arab";
            //                }
            //                break;

            //            case 10:
            //                aboveTens();
            //                break;

            default: break;
        }
        j++;
    }

    function aboveTens() {
        if (rev[i] == 0) { word[j] = ''; }
        else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
        else { word[j] = tens[rev[i]]; }
    }

    word.reverse();
    var finalOutput = '';
    for (i = 0; i < numLength; i++) {
        finalOutput = finalOutput + word[i];
    }
return finalOutput;
}

}
