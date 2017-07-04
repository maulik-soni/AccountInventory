import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Purchase } from './purchase';
import { WebServicesService } from './../services/web-services.service';
import { ConstantServiceService } from './../services/constant-services.service';
import { ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { PiecesTypeComponent } from './pieces-type/pieces-type.component';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { newPurchase } from './purchase.interface';


export abstract class AbstractViewInit {
  ngAfterViewInit() {
    console.log('after View init');
  }
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers: [WebServicesService,ConstantServiceService],
})
export class PurchaseComponent implements OnInit, AbstractViewInit {

  date: DateModel;
  options: DatePickerOptions;

  @ViewChild('subContainer1', {read: ViewContainerRef}) subContainer1: ViewContainerRef;

   public myForm: FormGroup;

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
    private compFactoryResolver: ComponentFactoryResolver,
    private _fb: FormBuilder
  ) {
    this.options = new DatePickerOptions();
  }

  addComponents() {
    console.log("add component",this.newpurchase);
    let compFactory:any;
    compFactory = this.compFactoryResolver.resolveComponentFactory(PiecesTypeComponent);
    this.subContainer1.createComponent(compFactory);
  }


  ngOnInit() {

    this.myForm = this._fb.group({
            invoice_number: [''],
            currency_convrsion_rate:[''],
            payment_terms:[''],
            purchase_date:[''],
            due_date:[''],
            country:[''],
            notes:[''],
            account_name:[''],
            brokerType:[''],
            brokerName:[''],
            brokerage:[''],
            comission1:0,
            comission2:0,
            avg_INR:[''],
            avg_dolar:[''],
            amount_INR:[''],
            amount_dolar:[''],
            mVAT:[''],
            aginst_Hform:[''],            
            piecesTypes: this._fb.array([])
        });
        
        this.AddpiecesType();
  }

  initPiecesType() {
        return this._fb.group({
            PCS_ID: [''],
            certificate_number: [''],
            kapan:[''],
            LAB_type:[''],
            total_diamond_pcs:[''],
            total_diamond_carat:[''],
            bill_type:[''],
            polishing_type:[''],
            item:[''],
            RAP_price:[''],
            cost_discount:[''],
            cost_rate_per_carat:[''],
            wd_rate:[''],
            wd_rate_carat:[''],
            less1:0,
            less2:0,
            less3:0,
            rate_INR:[''],
            rate_dolar:[''],
            diamond_lot_number:[''],
            diamond_clarity:[''],
            stock_status_group:[''],
            diamond_shape:[''],
            diamond_color:[''],
            diamond_size:['']
        });
    }

    AddpiecesType() {
        const control = <FormArray>this.myForm.controls['piecesTypes'];
        const addrCtrl = this.initPiecesType();
        control.push(addrCtrl);
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

    removePiece(i: number) {
        const control = <FormArray>this.myForm.controls['piecesTypes'];
        control.removeAt(i);
    }

    // save(model: newPurchase,data) {
    //     // call API to save
    //     // ...
    //     var formData:any = model;
    //     console.log(formData._value,data);
    // }


    save(formData,data) {
        // call API to save
        // ...
        // var formData:any = model;
        // var temp:any = formData._valu;
        console.log(formData._value);
        var newpurchase = JSON.parse(JSON.stringify(formData._value));
        var piecesarray = JSON.parse(JSON.stringify(newpurchase.piecesTypes));
        delete newpurchase.piecesTypes;
        var purchaseData:any = [];
        for(var i = 0; i < piecesarray.length; i++){
          purchaseData.push(Object.assign({}, newpurchase, piecesarray[i]));
          purchaseData[i].less = JSON.stringify({
            less1:piecesarray[i].less1,
            less2:piecesarray[i].less2,
            less3:piecesarray[i].less3
          });
          delete purchaseData[i].less1;
          delete purchaseData[i].less2;
          delete purchaseData[i].less3;
          purchaseData[i].comission = JSON.stringify({
            comission1:purchaseData[i].comission1,
            comission2:purchaseData[i].comission2
          });
          delete purchaseData[i].comission1 
          delete purchaseData[i].comission2
          purchaseData[i].broker_details = JSON.stringify({
            brokerType : purchaseData[i].brokerType,
            brokerName : purchaseData[i].brokerName,
            brokerage : purchaseData[i].brokerage
          });
          delete purchaseData[i].brokerType;
          delete purchaseData[i].brokerName;
          delete purchaseData[i].brokerage;
          delete purchaseData[i].taxes;
        }
        console.log(purchaseData);
        this._webservice.postpurchasedata(purchaseData);
    }

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
  public invoice:any = this.ConstantService.INVOICE;
  public dolar:any = this.ConstantService.DOLAR;

  newpurchase = new Purchase(this.invoice,this.dolar,false,"Bill To Bill");

  public less:any = {less1:0,less2:0,less3:0};
  public comission:any = {comission1:0,comission2:0};
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private oldamountINR = 0;
  public disable:any = '';
  private comissionCheck:any = false;
  

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any,id):void {

    console.log('Selected value is: ', value, value.text);
    // if(value.text == 'Direct'){
      this.disable = value.text;
    // }else{
      // this.disable = false;
    // }
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
    this.myForm.controls['purchase_date'].patchValue(this.dateConversion(this.newpurchase.purchase_date));
    if(this.newpurchase.purchase_date != undefined && this.myForm.value.payment_terms != undefined && this.myForm.value.payment_terms != ''){
      var targetDate = new Date(this.newpurchase.purchase_date);
      this.myForm.controls['due_date'].patchValue( this.dateConversion(targetDate.setDate(targetDate.getDate() + parseInt(this.myForm.value.payment_terms))));
    }
  }

  public dateConversion(date){
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;

  }

  dateToTimeStamp(str){
	  var date = str.split("/");
    var d = new Date(date[0], date[1] - 1, date[2]);
    return  d;
  }


  public RPCaratCost(){
    
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
    var amountINR = this.newpurchase.amount_INR;
    var avgINR = this.newpurchase.avg_INR;
    var totalCRT = this.newpurchase.total_diamond_carat;

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
      this.newpurchase.mVAT = 0;
      this.newpurchase.taxes = undefined;
    }
  }


  public checkComission(){
    console.log(this.comissionCheck);
    if(!this.comissionCheck){
      this.comission.comission1 = 0;
      this.comission.comission2 = 0;
    }
  }

  public parenFunction(dolarV):void{
    console.log(dolarV);
      // this.myForm.controls['avg_INR'].patchValue(parseFloat(avgINR.toFixed(2)));
      // this.myForm.controls['avg_dolar'].patchValue(parseFloat(avgDOLAR.toFixed(2)));
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
