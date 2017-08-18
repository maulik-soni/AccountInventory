import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Purchase } from './purchase';
import { WebServicesService } from './../services/web-services.service';
import { ConstantServiceService } from './../services/constant-services.service';
import { DatepickerModule } from 'angular2-material-datepicker';
import { ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { PiecesTypeComponent } from './pieces-type/pieces-type.component';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { newPurchase } from './purchase.interface';
import { MdDatepickerModule} from '@angular/material';
import { MdInputModule } from '@angular/material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export abstract class AbstractViewInit {
  ngAfterViewInit() {
  }
}

type AOA = Array<Array<any> >;
var importedData:any = []; 
function s2ab(s:string):ArrayBuffer {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) {
		view[i] = s.charCodeAt(i) & 0xFF;
	};
	return buf;
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers: [WebServicesService,ConstantServiceService],
})
export class PurchaseComponent implements OnInit, AbstractViewInit {

   data:AOA = [];
	wopts:XLSX.WritingOptions = { bookType:'xlsx', type:'binary' };
	fileName:string = "SheetJS.xlsx";
  
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

  setDolarRate(){
    sessionStorage.setItem('dolarRate', this.myForm.value.currency_convrsion_rate);
  }

  ngOnInit() {

    this.myForm = this._fb.group({
            invoice_number: [''],
            currency_convrsion_rate: this.dolar,
            payment_terms:[''],
            purchase_date:[''],
            due_date:[''],
            country:[''],
            notes:[''],
            account_name:[''],
            brokerType:[''],
            brokerName:[''],
            brokerage:[0],
            comission1:0,
            comission2:0,
            avg_INR:0,
            avg_dolar:0,
            amount_INR:0,
            amount_dolar:0,
            mVAT:0,
            aginst_Hform:[''],            
            piecesTypes: this._fb.array([])
        });
        
        this.AddpiecesType();
        this.setDolarRate();
  }

  initPiecesType() {
        return this._fb.group({
            PCS_ID: [''],
            certificate_number: [''],
            kapan:[''],
            LAB_type:[''],
            total_diamond_pcs:0,
            total_diamond_carat:0,
            bill_type:[''],
            polishing_type:[''],
            item:[''],
            RAP_price:0,
            cost_discount:0,
            cost_rate_per_carat:0,
            wd_rate:0,
            wd_rate_carat:0,
            less1:0,
            less2:0,
            less3:0,
            rate_INR:0,
            rate_dolar:0,
            diamond_lot_number:[''],
            diamond_clarity:[''],
            stock_status_group:[''],
            diamond_shape:[''],
            diamond_color:[''],
            diamond_size:[''],
            length: [''],
            width: [''],
            depth: [''],
            message: [''],
            weight: [''],
            reportNo: [''],
            colorDesc: [''],
            finalCut: [''],
            depthPct: [''],
            tablePct: [''],
            crnAg: [''],
            crnHt: [''],
            pavAg: [''],
            pavDp: [''],
            starLn: [''],
            lrHalf: [''],
            girdle: [''],
            girdleCondition: [''],
            girdlePct: [''],
            culetSize: [''],
            symmetry: [''],
            fluorescenceIntensity:[''],
            fluorescenceColor: [''],
            keyToSymbols: [''],
            reportType: [''],
            reportDt: [''],
            inscription: [''],
            infoMsg:[''],
            fullShapeDescription:['']
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
        // console.log(formData._value);
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
        // console.log(purchaseData);
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
  public lab_type:any = this.ConstantService.LAB_TYPE;

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

    // console.log('Selected value is: ', value, value.text);
    // if(value.text == 'Direct'){
      this.disable = value.text;
    // }else{
      // this.disable = false;
    // }
    this.myForm.controls[id].patchValue(JSON.parse(JSON.stringify(value)).text);
    // console.log(this.myForm);
  }

  public removed(value:any):void {
    // console.log('Removed value is: ', value);
    
  }

  public typed(value:any):void {
    // console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public calcDay():void{
    // console.log("calculate date");
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
      // console.log(this.newpurchase.RAP_price-(this.newpurchase.RAP_price*this.newpurchase.cost_discount/100));

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
    if(this.myForm.value.amount_INR!=undefined && this.myForm.value.mVAT!=undefined){
      this.parenFunction();
      this.myForm.controls['amount_INR'].patchValue(this.myForm.value.amount_INR+(this.myForm.value.amount_INR*(this.myForm.value.mVAT/100)));
      this.myForm.controls['amount_dolar'].patchValue(this.myForm.value.amount_INR/this.myForm.value.currency_convrsion_rate);
    }
  }

  public checkAgianstHform(){
    console.log(this.myForm.value.aginst_Hform);
    if(this.myForm.value.aginst_Hform){
      this.parenFunction();
      // this.newpurchase.mVAT = 0;
      // this.newpurchase.taxes = undefined;
    }
  }


  public checkComission(){
    console.log(this.comissionCheck);
    if(!this.comissionCheck){
      this.comission.comission1 = 0;
      this.comission.comission2 = 0;
    }
  }

  public getDolarRate(){
    var dolarR = this.dolar; 
    if(sessionStorage.dolarRate != undefined){
      dolarR = sessionStorage.dolarRate;
    }
    return dolarR;
  }

  public parenFunction():void{
    
    var piecesArr = this.myForm.value.piecesTypes;
    var sumOfRates = 0;
    var sumOfCarats = 0;
    
    for(var i=0; i<piecesArr.length; i++){
      console.log(piecesArr[i].total_diamond_carat,piecesArr[i].rate_INR,piecesArr[i]);
      sumOfCarats = sumOfCarats+parseFloat(piecesArr[i].total_diamond_carat);
      sumOfRates = sumOfRates+parseFloat(piecesArr[i].rate_INR);
    }
    console.log(sumOfRates,sumOfCarats);
    var avgINR = sumOfRates/sumOfCarats;
    var avgDOLAR = avgINR/this.getDolarRate();
    this.myForm.controls['avg_INR'].patchValue(parseFloat(avgINR.toFixed(2)));
    this.myForm.controls['avg_dolar'].patchValue(parseFloat(avgDOLAR.toFixed(2)));

    var amountINR = avgINR*sumOfCarats;
    var amountDOLAR = amountINR/this.getDolarRate();

    amountINR = amountINR+(amountINR*(this.myForm.value.comission1/100));
    amountINR = amountINR+(amountINR*(this.myForm.value.comission1/100));

    this.myForm.controls['amount_INR'].patchValue(parseFloat(amountINR.toFixed(2)));
    this.myForm.controls['amount_dolar'].patchValue(parseFloat(amountDOLAR.toFixed(2)));
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

  public onFileChange(evt:any) {
    var jsonMap = {
          "sr_no": "Sr No.",
          "PCS_ID": "PCS ID",
          "invoice_number": "Invoice Number",
          "purchase_date": "Purchase Date",
          "due_date": "Due Date",
          "account_name": "Party's Name",
          "payment_terms": "Terms of Payment",
          "polishing_type": "Polish Type",
          "currency_convrsion_rate": "Currency Conversion rate",
          "notes": "Notes",
          "country": "Country",
          "bill_type": "Bill Type",
          "stock_status_group": "Stock Group",
          "item": "Item",
          "kapan": "Kapan",
          "diamond_shape": "Diamont Shape",
          "diamond_lot_number": "Lot Number",
          "diamond_size": "Diamond Size",
          "diamond_color": "Diamond Color",
          "diamond_clarity": "Diamond Clarity",
          "total_diamond_pcs": "Total Diamond Pcs",
          "total_diamond_carat": "Total Diamond Carat",
          "cost_discount": "Cost Discount",
          "cost_rate_per_carat": "Cost Rate/Carat",
          "RAP_price": "RAP price",
          "wd_rate": "WD rate",
          "wd_rate_carat": "WD rate carat",
          "rate_INR": "Rate in INR",
          "amount_INR": "Amount INR",
          "rate_dolar": "Rate in USD",
          "amount_dolar": "Amount in USD",
          "LAB_type": "Lab Type",
          "certificate_number": "Certificate No.",
          "avg_INR": "Average in INR",
          "avg_dolar": "Average in USD",
          "aginst_Hform": "Against Hform",
          "mVAT": "mVAT",
          "less1": "Less 1",
          "less2": "Less 2",
          "less3": "Less 3",
          "comission1": "Comission 1",
          "comission2": "Comission 2",
          "brokerType": "Broker Type",
          "brokerName": "Broker Name",
          "brokerage": "Brokerage",
          "length": "length",
          "width": "width",
          "depth": "depth",
          "message": "message",
          "weight": "weight",
          "reportNo": "reportNo",
          "colorDesc": "colorDesc",
          "finalCut": "finalCut",
          "depthPct": "depthPct",
          "tablePct": "tablePct",
          "crnAg": "crnAg",
          "crnHt": "crnHt",
          "pavAg": "pavAg",
          "pavDp": "pavDp",
          "starLn": "starLn",
          "lrHalf": "lrHalf",
          "girdle": "girdle",
          "girdleCondition": "girdleCondition",
          "girdlePct": "girdlePct",
          "culetSize": "culetSize",
          "symmetry": "symmetry",
          "fluorescenceIntensity": "fluorescenceIntensity",
          "fluorescenceColor": "fluorescenceColor",
          "keyToSymbols": "keyToSymbols",
          "reportType": "reportType",
          "reportDt": "reportDt",
          "inscription": "inscription",
          "infoMsg": "infoMsg",
          "fullShapeDescription": "fullShapeDescription"
        };
		const scope = this;
		/* wire up file reader */
		const target:DataTransfer = (<DataTransfer>(evt.target));
		if(target.files.length != 1) throw new Error("Cannot upload multiple files on the entry");
		const reader = new FileReader();
		reader.onload = function (e:any) {
			/* read workbook */
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:'binary'});
			/* grab first sheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* save data to scope */
      scope.data = (<AOA>(XLSX.utils.sheet_to_json(ws, {header:1})));
      var index = [];
      for (let x in jsonMap) {
        index.push(x);
      }
      for(let i=1; i<scope.data.length; i++){
        for(let j=0; j<index.length; j++){
          jsonMap[index[j]] = scope.data[i][j];
        }
        importedData.push(JSON.parse(JSON.stringify(jsonMap)));
      }
      for(var i = 0; i<importedData.length; i++){
        console.log(importedData[i]);
        importedData[i].comission = {
          comission1 : importedData[i].comission1,
          comission2 : importedData[i].comission2
        };
        importedData[i].comission = JSON.stringify(importedData[i].comission);

        importedData[i].less = {
          less1 : importedData[i].less1,
          less2 : importedData[i].less2,
          less3 : importedData[i].less3
        };
        importedData[i].less = JSON.stringify(importedData[i].less);
        
        importedData[i].broker_details = {
          brokerName : importedData[i].brokerName,
          brokerType : importedData[i].brokerType,
          brokerage : importedData[i].brokerage
        };
        importedData[i].broker_details = JSON.stringify(importedData[i].broker_details);
        
    }
      // console.log(importedData);
    };

		reader.readAsBinaryString(target.files[0]);
  }
  submitData(){
    console.log(importedData);
    for(var i = 0; i<importedData.length; i++){
        for(var key in importedData[i]){
          if(importedData[i][key] == '-'){
            importedData[i][key] = ''; 
          }
        }
        delete importedData[i].sr_no;
        delete importedData[i].less1;
        delete importedData[i].less2;
        delete importedData[i].less3;
        delete importedData[i].comission1;
        delete importedData[i].comission2;
        delete importedData[i].brokerName;
        delete importedData[i].brokerType;
        delete importedData[i].brokerage;
    }
      
      this._webservice.postpurchasedata(importedData);
  }  
//   function getObjectKeyIndex(obj, keyToFind) {
//     var i = 0, key;
//     for (key in obj) {
//         if (key == keyToFind) {
//             return i;
//         }
//         i++;
//     }
//     return null;
// }

}
