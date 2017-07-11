import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WebServicesService } from '../../services/web-services.service';
import { ConstantServiceService } from '../../services/constant-services.service';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class SalesDetailsComponent implements OnInit {

  @Input('group')
  public salesDetails:any = FormGroup;
  public searchResult = false;
  public piecetype = "singlestone";
  public searchPCS;
  public mypurchase;

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
  ) { }

  ngOnInit() {
  }

  public rateCALC(){
    if(this.salesDetails.value.less1 == undefined && this.salesDetails.value.less2 == undefined && this.salesDetails.value.less3 == undefined && this.salesDetails.value.sale_rate == undefined){
      var rateINR = this.salesDetails.value.rate_INR-(this.salesDetails.value.rate_INR*(this.salesDetails.value.less1/100));
      rateINR = rateINR-(rateINR*(this.salesDetails.value.less2/100));
      rateINR = rateINR-(rateINR*(this.salesDetails.value.less3/100));
      this.salesDetails.controls['sale_rate'].patchValue(rateINR.toFixed(2));
      this.salesDetails.controls['sale_rate'].patchValue(parseInt(rateINR.toFixed(2))-parseInt(this.salesDetails.value.sale_disc));
    }
  }

  search(){
    this._webservice.fetchpurchase(this.searchPCS,this.piecetype)
      .subscribe(
        resData => {
          this.searchResult = true;
          console.log(resData);
          console.log(Object.keys(resData)[0]);
          this.mypurchase = resData[Object.keys(resData)[0]];
          console.log(this.salesDetails);
          // delete this.mypurchase.purchase_date;
          delete this.mypurchase.due_date;
          delete this.mypurchase.aginst_Hform;
          delete this.mypurchase.mVAT;
          delete this.mypurchase.sr_no;
          delete this.mypurchase.invoice_number;
          // delete this.mypurchase.account_name;
          delete this.mypurchase.payment_terms;
          // delete this.mypurchase.currency_convrsion_rate;
          delete this.mypurchase.notes;
          delete this.mypurchase.country;
          delete this.mypurchase.comission;
          delete this.mypurchase.broker_details;
          delete this.mypurchase.less;
          console.log(JSON.stringify(this.mypurchase));

          for (var key in this.mypurchase) {
            if (this.mypurchase.hasOwnProperty(key)) {
              if(key != 'account_name' && key != "purchase_date" && key != "currency_convrsion_rate"){
                console.log(key + " -> " + this.mypurchase[key]);
                this.salesDetails.controls[key].patchValue(this.mypurchase[key]);
              }
            }
          }

          this.salesDetails._value = Object.assign(this.salesDetails._value,this.mypurchase)
          console.log(this.salesDetails);
          // this.newsalesdata = Object.assign(this.newsalesdata,this.mypurchase);
          // this.mypurchase.account_name = JSON.parse(this.mypurchase.account_name)[0].text;
          // this.mypurchase.country = JSON.parse(this.mypurchase.country)[0].text;
          // this.showPurchase = true;
          // this.newsales = new Sales(this.invoice,this.dollar,this.mypurchase.amount_INR,this.mypurchase.amount_dolar,0);
          // console.log(this.mypurchase,JSON.stringify(this.mypurchase));
          // console.log(this.newsalesdata,JSON.stringify(this.newsalesdata));
        }
      );
    
  }


}
