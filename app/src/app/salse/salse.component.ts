import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Sales } from '../sales';
import { WebServicesService } from '../web-services.service';
import { ConstantServiceService } from '../constant-service.service';

export abstract class AbstractViewInit {
  ngAfterViewInit() {
    console.log('after View init');
  }
}


@Component({
  selector: 'app-salse',
  templateUrl: './salse.component.html',
  styleUrls: ['./salse.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class SalseComponent implements OnInit {

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService
  ) { 
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    
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
  

  newsales:any = {};
  newsalesdata:any = {};
  
  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value.text);
    if(value.text == 'Direct'){
      this.disable = true;
    }else{
      this.disable = false;
    }
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
  
  public calcDay(value:any):void{
    console.log(typeof value,this.newsales.sales_date,this.newsales.payment_terms);
    var date;
    if(this.newsales.sales_date != undefined && this.newsales.payment_terms != undefined){
      var targetDate = new Date(this.newsales.sales_date);
      this.newsales.due_date = this.dateConversion(targetDate.setDate(targetDate.getDate() + parseInt(this.newsales.payment_terms)));
      console.log(this.newsales.due_date);
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
    this._webservice.fetchpurchase(this.searchPCS)
      .subscribe(
        resData => {
          console.log(resData);
          
            console.log(Object.keys(resData)[0]);
          
          this.mypurchase = resData[Object.keys(resData)[0]];

          this.newsalesdata = Object.assign(this.newsalesdata,this.mypurchase);
          this.mypurchase.account_name = JSON.parse(this.mypurchase.account_name)[0].text;
          this.mypurchase.country = JSON.parse(this.mypurchase.country)[0].text;
          this.showPurchase = true;
          this.newsales = new Sales(this.invoice,this.dollar,this.mypurchase.amount_INR,this.mypurchase.amount_dolar,0);
          console.log(this.mypurchase,JSON.stringify(this.mypurchase));
          console.log(this.newsalesdata,JSON.stringify(this.newsalesdata));
        }
      );
    
  }

}
