import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Input('group')
  public salesDetails:any = FormGroup;
  public searchResult = false;
  public piecetype = "singlestone";
  public searchPCS;
  public mypurchase;
  public dolar:number = this.ConstantService.DOLAR;
  public salesRATE:number;
  public acctual_sale_rate:number;

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
  ) { }

  ngOnInit() {}

  // public salesRate(status){
  //   this.salesRATE = this.salesDetails.value.sale_rate; 
  //   this.rateCALC(status);
  // }

  public rateCALC(status){
    console.log(this.salesDetails.value);
    var sale_rate = this.acctual_sale_rate;
    if(this.salesDetails.value.less1 != undefined && this.salesDetails.value.less2 != undefined && this.salesDetails.value.less3 != undefined && sale_rate != undefined){
      sale_rate = sale_rate-(sale_rate*(parseFloat(this.salesDetails.value.less1)/100));
      sale_rate = sale_rate-(sale_rate*(parseFloat(this.salesDetails.value.less2)/100));
      sale_rate = sale_rate-(sale_rate*(parseFloat(this.salesDetails.value.less3)/100));
      this.salesDetails.controls['sale_rate'].patchValue(sale_rate.toFixed(2));
    }
    if(this.salesDetails.value.sale_disc != undefined && this.salesDetails.value.sale_rate != undefined && sale_rate != undefined ){
      var discountOnSale = sale_rate-(sale_rate*(this.salesDetails.value.sale_disc/100));
      this.salesDetails.controls['sale_rate'].patchValue(discountOnSale.toFixed(2));
    }
    this.childEvent.emit();
  }

  public getDolarRate(){
    var dolarR = this.dolar; 
    if(sessionStorage.dolarRate != undefined){
      dolarR = sessionStorage.dolarRate;
    }
    return dolarR;
  }

  search(){
    this._webservice.fetchpurchase(this.searchPCS,this.piecetype)
      .subscribe(
        resData => {
          this.searchResult = true;
          // console.log(resData);
          // console.log(Object.keys(resData)[0]);
          this.mypurchase = resData[Object.keys(resData)[0]];
          // console.log(this.salesDetails);
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
          delete this.mypurchase.rate_INR;
          delete this.mypurchase.rate_dolar;
          console.log(JSON.stringify(this.mypurchase));

          for (var key in this.mypurchase) {
            if (this.mypurchase.hasOwnProperty(key)) {
              if(key != 'account_name' && key != "purchase_date" && key != "currency_convrsion_rate" && key != "askedPrice" && key!="additional_expenses"){
                console.log(key + " -> " + this.mypurchase[key]);
                this.salesDetails.controls[key].patchValue(this.mypurchase[key]);
              }
            }
          }

          this.salesDetails._value = Object.assign(this.salesDetails._value,this.mypurchase)
          // console.log(this.salesDetails);
          this.childEvent.emit();
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
