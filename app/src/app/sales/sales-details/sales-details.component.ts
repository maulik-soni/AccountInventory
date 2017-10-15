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
  public showSearch = true;

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
  ) {
    
   }

  ngOnInit() {
    
    if(this.salesDetails.value.Stock_ID != ''){
      this.showSearch = false;
      this.dataProcessing(this.salesDetails.value);
    }
  }
  

  public rateCALC(status){
    console.log(this.salesDetails.value);
    var sale_rate = this.acctual_sale_rate;
    if(this.salesDetails.value.less!= undefined && sale_rate != undefined){
      sale_rate = sale_rate-(sale_rate*(parseFloat(this.salesDetails.value.less)/100));
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
        data => {
          this.dataProcessing(data[Object.keys(data)[0]]);
        }
      );
  }

  dataProcessing(data){
    this.searchResult = true;
    this.mypurchase = data;
    delete this.mypurchase.due_date;
    delete this.mypurchase.aginst_Hform;
    delete this.mypurchase.mVAT;
    delete this.mypurchase.sr_no;
    delete this.mypurchase.invoice_number;
    delete this.mypurchase.payment_terms;
    delete this.mypurchase.notes;
    delete this.mypurchase.country;
    delete this.mypurchase.comission;
    delete this.mypurchase.broker_details;
    delete this.mypurchase.less;
    delete this.mypurchase.rate_INR;
    delete this.mypurchase.rate_dolar;

    for (var key in this.mypurchase) {
      if (this.mypurchase.hasOwnProperty(key)) {
        if(key != 'account_name' && key != "purchase_date" && key != "currency_convrsion_rate" && key != "askedPrice" && key!="additional_expenses"){
          console.log(key + " -> " + this.mypurchase[key]);
          this.salesDetails.controls[key].patchValue(this.mypurchase[key]);
        }
      }
    }

    this.salesDetails._value = Object.assign(this.salesDetails._value,this.mypurchase)
    this.childEvent.emit();
  }
}