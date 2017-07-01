import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Purchase } from './purchase';
import { WebServicesService } from './../services/web-services.service';
import { ConstantServiceService } from './../services/constant-services.service';
// import { DatepickerModule } from 'angular2-material-datepicker';

export abstract class AbstractViewInit {
  ngAfterViewInit() {
    console.log('after View init');
  }
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class PurchaseComponent implements OnInit, AbstractViewInit {

  date: DateModel;
  options: DatePickerOptions;


  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService
  ) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {}

  ngAfterViewInit(){}

  public countries:Array<string> = this.ConstantService.COUNRTIES;
  public brokertypes:Array<string> = this.ConstantService.BROKERTYPES;
  public names:Array<string> = this.ConstantService.NAMES;
  public brokers:Array<string> = this.ConstantService.BROKERS;
  public shapes:Array<string> = this.ConstantService.SHAPES;
  public colors:Array<string> = this.ConstantService.COLORS;
  public groups:Array<string> = this.ConstantService.GROUPS;
  public clarity:Array<string> = this.ConstantService.CLARITY;
  public sizes:Array<string> = this.ConstantService.SIZES;
  public taxes:Array<string> = this.ConstantService.TAXES;
  // newpurchase.concurrency_convrsion_ratev =
  public invoice:any = this.ConstantService.INVOICE;
  public dolar:any = this.ConstantService.DOLAR;

  newpurchase = new Purchase(this.invoice,this.dolar,false);

  public less:any = {less1:0,less2:0,less3:0};
  public comission:any = {comission1:0,comission2:0};
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private oldamountINR = 0;
  private disable:any = false;

  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

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
    console.log(typeof value,this.newpurchase.purchase_date,this.newpurchase.payment_terms);
    var date;
    if(this.newpurchase.purchase_date != undefined && this.newpurchase.payment_terms != undefined){
      var targetDate = new Date(this.newpurchase.purchase_date);      
      this.newpurchase.due_date = this.dateConversion(targetDate.setDate(targetDate.getDate() + parseInt(this.newpurchase.payment_terms)));
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

  public RPCaratCost(){
    console.log("afqw23r23");
    if(this.newpurchase.RAP_price != undefined && this.newpurchase.cost_discount != undefined){
      console.log(this.newpurchase.RAP_price-(this.newpurchase.RAP_price*this.newpurchase.cost_discount/100));

      this.newpurchase.cost_rate_per_carat = this.newpurchase.RAP_price-(this.newpurchase.RAP_price*this.newpurchase.cost_discount/100);
    }
  }

  public WDRPCarat(){    
    if(this.newpurchase.cost_rate_per_carat != undefined && this.newpurchase.wd_rate   != undefined){      
      var WDrateCarat = this.newpurchase.cost_rate_per_carat+(this.newpurchase.cost_rate_per_carat*this.newpurchase.wd_rate/100);
      this.CALrate();
      this.newpurchase.wd_rate_carat = parseFloat(WDrateCarat.toFixed(2));
    }
  }

  public CALrate(){
    var rateINR = this.newpurchase.cost_rate_per_carat*this.newpurchase.total_diamond_carat*this.newpurchase.total_diamond_pcs;
    var rateDOLAR = rateINR/this.newpurchase.currency_convrsion_rate;
    this.newpurchase.rate_INR = parseFloat(rateINR.toFixed(2));
    this.newpurchase.rate_dolar = parseFloat(rateDOLAR.toFixed(2));
    this.CALavg();
  }

  public CALavg(){
    var avgINR = this.newpurchase.rate_INR/this.newpurchase.total_diamond_carat;
    var avgDOLAR = avgINR/this.newpurchase.currency_convrsion_rate;
    this.newpurchase.avg_INR = parseFloat(avgINR.toFixed(2));
    this.newpurchase.avg_dolar = parseFloat(avgDOLAR.toFixed(2));
    this.CALAmount();
  }

  public CALAmount(){
    this.newpurchase.amount_INR =  this.newpurchase.avg_INR*this.newpurchase.total_diamond_carat;
    var lessDis = parseInt(this.less.less1)+parseInt(this.less.less2)+parseInt(this.less.less3);
    console.log(this.newpurchase.amount_INR,lessDis,(this.newpurchase.amount_INR*(lessDis/100)))
    var amountINR = this.newpurchase.amount_INR-(this.newpurchase.amount_INR*(lessDis/100));
    var amountDOLAR = this.newpurchase.amount_INR/this.newpurchase.currency_convrsion_rate;
    this.newpurchase.amount_INR = parseInt(amountINR.toFixed(2));
    this.newpurchase.amount_dolar = parseInt(amountDOLAR.toFixed(2));
  }

  public addTax(){
    console.log(this.newpurchase.amount_INR,this.newpurchase.mVAT);
    if(this.newpurchase.amount_INR!=undefined && this.newpurchase.mVAT!=undefined){
      this.CALAmount();
      this.newpurchase.amount_INR = this.newpurchase.amount_INR+(this.newpurchase.amount_INR*(this.newpurchase.mVAT/100));
      this.newpurchase.amount_dolar = this.newpurchase.amount_INR/this.newpurchase.currency_convrsion_rate;
    }
  }

  public checkAgianstHform(){
    console.log(this.newpurchase.aginst_Hform);
    if(this.newpurchase.aginst_Hform){
      this.CALAmount();
      this.newpurchase.mVAT = undefined;
      this.newpurchase.taxes = undefined;
    }
  }

  newpurchasedata:any;
  submitted = false;
  onSubmit(form:NgForm) {

    this.submitted = true;
    this.newpurchase.less = JSON.stringify(this.less);
    this.newpurchase.comission = JSON.stringify(this.comission);
    this.newpurchasedata = JSON.parse(JSON.stringify(this.newpurchase));
    console.log(JSON.stringify(this.newpurchasedata));
    this.newpurchasedata.purchase_date = this.dateConversion(this.newpurchasedata.purchase_date);
    // this.newpurchasedata.due_date = this.newpurchasedata.due_date.formatted;
    // this.newpurchasedata.taxes = this.newpurchasedata.taxes[0].text;    
    // this.newpurchasedata.country = this.newpurchasedata.country[0].text;
    // this.newpurchasedata.account_name = this.newpurchasedata.account_name[0].text;
    // this.newpurchasedata.brokerName = this.newpurchasedata.brokerName[0].text;
    // this.newpurchasedata.brokerType = this.newpurchasedata.brokerType[0].text;
    // this.newpurchasedata.diamond_shape = this.newpurchasedata.diamond_shape[0].text;
    // this.newpurchasedata.diamond_size = this.newpurchasedata.diamond_size[0].text;
    // this.newpurchasedata.diamond_clarity = this.newpurchasedata.diamond_clarity[0].text;
    // this.newpurchasedata.diamond_color = this.newpurchasedata.diamond_color[0].text;
    // this.newpurchasedata.stock_status_group = this.newpurchasedata.stock_status_group[0].text;
    this.newpurchasedata.broker_details = {
      brokerName : this.newpurchasedata.brokerName,
      brokerType : this.newpurchasedata.brokerType,
      brokerage : this.newpurchasedata.brokerage
    };
    
    this.newpurchasedata.taxes = JSON.stringify(this.newpurchasedata.taxes);    
    this.newpurchasedata.country = JSON.stringify(this.newpurchasedata.country);
    this.newpurchasedata.account_name = JSON.stringify(this.newpurchasedata.account_name);
    this.newpurchasedata.brokerName = JSON.stringify(this.newpurchasedata.brokerName);
    this.newpurchasedata.brokerType = JSON.stringify(this.newpurchasedata.brokerType);
    this.newpurchasedata.diamond_shape = JSON.stringify(this.newpurchasedata.diamond_shape);
    this.newpurchasedata.diamond_size = JSON.stringify(this.newpurchasedata.diamond_size);
    this.newpurchasedata.diamond_clarity = JSON.stringify(this.newpurchasedata.diamond_clarity);
    this.newpurchasedata.diamond_color = JSON.stringify(this.newpurchasedata.diamond_color);
    this.newpurchasedata.stock_status_group = JSON.stringify(this.newpurchasedata.stock_status_group);
    this.newpurchasedata.broker_details = JSON.stringify(this.newpurchasedata.broker_details);
    console.log(JSON.stringify(this.newpurchasedata));
    this._webservice.postpurchasedata(this.newpurchasedata);
    form.reset();
  }

}
