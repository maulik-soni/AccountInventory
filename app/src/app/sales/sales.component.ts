import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Sales } from './sales';
import { WebServicesService } from './../services/web-services.service';
import { ConstantServiceService } from './../services/constant-services.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { newSales } from './sales.interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule} from '@angular/material';
import { MdInputModule } from '@angular/material';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';

export abstract class AbstractViewInit {
  ngAfterViewInit() {
    console.log('after View init');
  }
}
  

@Component({
  selector: 'app-salse',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class SalesComponent implements OnInit {

  public myForm: FormGroup;
  loadInvoiceComponent:boolean = false;
  finalSalesData : any;
  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
    private _fb: FormBuilder
  ) { 
    this.options = new DatePickerOptions();
  }

  ngOnInit() {

    this.myForm = this._fb.group({
            invoice_number:[''],
            currency_convrsion_rate:[''],
            sales_date:[''],
            due_date:[''],
            country:[''],
            notes:[''],
            payment_terms:0,
            account_name:[''],
            brokerName:[''],
            brokerType:[''],
            brokerage:[''],
            comission1:0,
            comission2:0,
            purchase_amount_INR:0,
            purchase_amount_dolar:0,
            freight:0,
            sales_amount_INR:0,
            sales_amount_dolar:0,
            diff_amount_INR:0,
            diff_amount_dolar:0,
            salesDetails: this._fb.array([])
        });
    this.addSalesDetails();
  }

  initSalesDetails() {
    return this._fb.group({
      PCS_ID: [''],
      polishing_type: [''],
      bill_type: [''],
      stock_status_group: [''],
      item: [''],
      kapan: [''],
      diamond_shape: [''],
      diamond_lot_number: [''],
      diamond_size: [''],
      diamond_color: [''],
      diamond_clarity: [''],
      total_diamond_pcs: 0,
      total_diamond_carat: 0,
      cost_discount: 0,
      cost_rate_per_carat:0,
      RAP_price: 0,
      wd_rate: 0,
      wd_rate_carat: 0,
      rate_INR: 0,
      amount_INR: 0,
      rate_dolar: 0,
      amount_dolar: 0,
      LAB_type: [''],
      certificate_number: [''],
      avg_INR: 0,
      avg_dolar: 0,
      less1:0,
      less2:0,
      less3:0,
      sale_disc:0,
      sale_rate:0,
    });
  }

  addSalesDetails() {
      const control = <FormArray>this.myForm.controls['salesDetails'];
      const addrCtrl = this.initSalesDetails();
      control.push(addrCtrl);
  }

  removeSalesDetails(i: number) {
      const control = <FormArray>this.myForm.controls['salesDetails'];
      control.removeAt(i);
  }

  save(formData) {
      console.log(formData);
      console.log(formData._value);
      var newsales = JSON.parse(JSON.stringify(formData._value));
      var salesdetails = JSON.parse(JSON.stringify(newsales.salesDetails));
      delete newsales.salesDetails;
      var salesData:any = [];
      for(var i = 0; i < salesdetails.length; i++){
        salesData.push(Object.assign({}, newsales, salesdetails[i]));
        salesData[i].less = JSON.stringify({
          less1:salesdetails[i].less1,
          less2:salesdetails[i].less2,
          less3:salesdetails[i].less3
        });
        delete salesData[i].less1;
        delete salesData[i].less2;
        delete salesData[i].less3;
        salesData[i].comission = JSON.stringify({
          comission1:salesData[i].comission1,
          comission2:salesData[i].comission2
        });
        delete salesData[i].comission1 
        delete salesData[i].comission2
        salesData[i].broker_details = JSON.stringify({
          brokerType : salesData[i].brokerType,
          brokerName : salesData[i].brokerName,
          brokerage : salesData[i].brokerage
        });
        delete salesData[i].brokerType;
        delete salesData[i].brokerName;
        delete salesData[i].brokerage;
      }
      console.log(salesData);
      this.finalSalesData = salesData;
      this.loadInvoiceComponent = true;
      // this._webservice.postsa  lesdata(salesData);
  }



  ngAfterViewInit(){
    console.log("view loaded");
  }

  date: DateModel;
  options: DatePickerOptions;
  
  show:false;
  searchPCS:any;
  showPurchase:any;
  public brokertypes:Array<string> = this.ConstantService.BROKERTYPES;
  public brokers:Array<string> = this.ConstantService.BROKERS;
  public dollar:any = this.ConstantService.DOLAR;
  public invoice:any = this.ConstantService.INVOICE;
  public countries:Array<string> = this.ConstantService.COUNRTIES;
  public names:Array<string> = this.ConstantService.NAMES;

  public less:any = {less1:0,less2:0,less3:0};
  public comission:any = {comission1:0,comission2:0};
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private disable:any = false;
  public dolar:any = this.ConstantService.DOLAR;
  private comissionCheck:any = false;
  public TotalSalesAmount:any;

  newsales:any = {};
  newsalesdata:any = {};
  
  setDolarRate(){
    console.log(this.myForm.value.currency_convrsion_rate);
    sessionStorage.setItem('dolarRate', this.myForm.value.currency_convrsion_rate);
  }

  public getDolarRate(){
    var dolarR = this.dolar; 
    if(sessionStorage.dolarRate != undefined){
      dolarR = sessionStorage.dolarRate;
    }
    return dolarR;
  }

  public parenFunction(){
    
    var detailsArr = this.myForm.value.salesDetails;
    var sumOfPurchaseAmountINR = 0;
    var sumOfPurchaseAmountDOLAR = 0;

    var SalesAmmountINR = 0;

    for(var i=0; i<detailsArr.length;i++){
      sumOfPurchaseAmountINR = sumOfPurchaseAmountINR+detailsArr[i].amount_INR;
      sumOfPurchaseAmountDOLAR = sumOfPurchaseAmountDOLAR+detailsArr[i].amount_dolar;
      SalesAmmountINR = SalesAmmountINR+(detailsArr[i].sale_rate*detailsArr[i].total_diamond_pcs);
      console.log(detailsArr[i]);
    }
    console.log(SalesAmmountINR);
    this.myForm.controls['purchase_amount_INR'].patchValue(sumOfPurchaseAmountINR.toFixed(2));
    this.myForm.controls['purchase_amount_dolar'].patchValue(sumOfPurchaseAmountDOLAR.toFixed(2));
    this.myForm.controls['sales_amount_dolar'].patchValue((SalesAmmountINR/this.getDolarRate()).toFixed(2));
    this.myForm.controls['sales_amount_INR'].patchValue(SalesAmmountINR.toFixed(2));
    this.TotalSalesAmount = SalesAmmountINR.toFixed(2);
    this.myForm.controls['diff_amount_INR'].patchValue((SalesAmmountINR-sumOfPurchaseAmountINR).toFixed(2));
    this.myForm.controls['diff_amount_dolar'].patchValue(((SalesAmmountINR/this.getDolarRate())-sumOfPurchaseAmountDOLAR).toFixed(2));
  }

  public checkComission(){
    console.log(this.comissionCheck);
    if(!this.comissionCheck){
      this.comission.comission1 = 0;
      this.comission.comission2 = 0;
    }
  }

  public freightCALC(){
    var freight = parseFloat(this.myForm.value.freight);
    var SalesAmmountINR = parseFloat(this.TotalSalesAmount)+freight;
    console.log(freight,SalesAmmountINR);
    if(freight != undefined && SalesAmmountINR != undefined){       
      this.myForm.controls['sales_amount_dolar'].patchValue((SalesAmmountINR/this.getDolarRate()).toFixed(2));
      this.myForm.controls['sales_amount_INR'].patchValue(SalesAmmountINR);
      console.log(this.myForm.value.sales_amount_INR);
    }
    var SalesAmmountINR = parseFloat(this.myForm.value.sales_amount_INR);
    var PurchaseAmountINR = parseFloat(this.myForm.value.purchase_amount_INR);
    this.myForm.controls['diff_amount_INR'].patchValue((SalesAmmountINR-PurchaseAmountINR).toFixed(2));
    this.myForm.controls['diff_amount_dolar'].patchValue(((SalesAmmountINR/this.getDolarRate())-(PurchaseAmountINR/this.getDolarRate())).toFixed(2));
  }

  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any,id):void {

    console.log('Selected value is: ', value, value.text);
    this.disable = value.text;
    this.myForm.controls[id].patchValue(JSON.parse(JSON.stringify(value)).text);
    console.log(this.myForm);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }

  public calcDay():void{    
    this.myForm.controls['sales_date'].patchValue(this.dateConversion(this.newsales.sales_date));
    if(this.newsales.sales_date != undefined && this.myForm.value.payment_terms != undefined && this.myForm.value.payment_terms != ''){
      var targetDate = new Date(this.newsales.sales_date);
      this.myForm.controls['due_date'].patchValue( this.dateConversion(targetDate.setDate(targetDate.getDate() + parseInt(this.myForm.value.payment_terms))));
    }
  }

  public dateConversion(date){
    console.log(date);
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;

  }

  public calAmount():void{
    var salesAmount = this.newsales.sale_rate*this.mypurchase.total_diamond_carat*this.mypurchase.total_diamond_pcs;
    var lessDis = parseInt(this.less.less1)+parseInt(this.less.less2)+parseInt(this.less.less3);
    salesAmount = parseInt((salesAmount*(1-(lessDis/100))).toFixed(2));
    salesAmount = parseInt((salesAmount*(1-(this.newsales.sale_disc/100))).toFixed(2));
    this.newsales.sales_amount_INR = salesAmount;
    this.newsales.sales_amount_dolar = parseInt((salesAmount/this.dollar).toFixed(2));
    this.newsales.diff_amount_INR = salesAmount-parseInt(this.mypurchase.amount_INR);
    this.newsales.diff_amount_dolar = parseInt(this.newsales.sales_amount_dolar)-parseInt(this.mypurchase.amount_dolar);
  }

  
  onSubmit() { 
    this.newsales.less = JSON.stringify(this.less);
    this.newsales.comission = JSON.stringify(this.comission);
    this.newsalesdata.broker_details = {
      brokerName : this.newsales.brokerName,
      brokerType : this.newsales.brokerType,
      brokerage : this.newsales.brokerage
    };
    // console.log(this.newsales);
    // console.log(JSON.stringify(this.newsales));
    this.newsalesdata = JSON.parse(JSON.stringify(this.newsales));
    // console.log(this.newsalesdata);
    //console.log(JSON.stringify(this.newsalesdata));
    this.newsalesdata = Object.assign(this.mypurchase,this.newsalesdata);
    console.log(this.newsalesdata,JSON.stringify(this.newsalesdata));
    delete this.newsalesdata.purchase_date;
    delete this.newsalesdata.aginst_Hform;
    delete this.newsalesdata.mVAT;
    delete this.newsalesdata.brokerType;
    console.log(this.newsalesdata,JSON.stringify(this.newsalesdata));    
    // this.newsales.due_date = this.newsales.due_date.formatted;
    this.newsalesdata.country = JSON.stringify(this.newsales.country);
    this.newsalesdata.account_name = JSON.stringify(this.newsales.account_name);
    this.newsalesdata.sales_date = this.dateConversion(this.newsales.sales_date);
    // this.newsales.brokerName = this.newsales.brokerName[0].text;
    // this.newsales.brokerType = this.newsales.brokerType[0].text;
    // this.newsales.diamond_shape = this.newsales.diamond_shape[0].text; 
    // this.newsales.diamond_color = this.newsales.diamond_color[0].text;
    // this.newsales.stock_status_group = this.newsales.stock_status_group[0].text;
    // this.newsales.broker_details = {
    //   brokerName : this.newsales.brokerName,
    //   brokerType : this.newsales.brokerType,
    //   brokerage : this.newsales.brokerage
    // };
    // this.newsales.broker_details = JSON.stringify(this.newsales.broker_details);
    this._webservice.postsalesdata(this.newsalesdata);
  }
  mypurchase:any = {};
  search(){
    // this._webservice.fetchpurchase(this.searchPCS)
    //   .subscribe(
    //     resData => {
    //       console.log(resData);
          
    //         console.log(Object.keys(resData)[0]);
          
    //       this.mypurchase = resData[Object.keys(resData)[0]];

    //       this.newsalesdata = Object.assign(this.newsalesdata,this.mypurchase);
    //       this.mypurchase.account_name = JSON.parse(this.mypurchase.account_name)[0].text;
    //       this.mypurchase.country = JSON.parse(this.mypurchase.country)[0].text;
    //       this.showPurchase = true;
    //       this.newsales = new Sales(this.invoice,this.dollar,this.mypurchase.amount_INR,this.mypurchase.amount_dolar,0);
    //       console.log(this.mypurchase,JSON.stringify(this.mypurchase));
    //       console.log(this.newsalesdata,JSON.stringify(this.newsalesdata));
    //     }
    //   );
    
  }

}

