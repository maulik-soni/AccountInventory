import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup,FormArray } from '@angular/forms';
import { Purchase } from '../purchase';
import { WebServicesService } from '../../services/web-services.service';
import { ConstantServiceService } from '../../services/constant-services.service';
import { newPurchase } from '../purchase.interface';

@Component({
  moduleId: module.id,
  selector: 'app-pieces-type',
  templateUrl: './pieces-type.component.html',
  styleUrls: ['./pieces-type.component.css'],
  providers: [WebServicesService,ConstantServiceService],  
})
export class PiecesTypeComponent implements OnInit {

  // @Input('newpurchase') newpurchase:any;

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

  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Input('mygroup')
  
  // @Input('dolarValue') dolarvalue:number;
  
  public piecesTypeForm: FormGroup;
  
  newpurchase = new Purchase();
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private piecetype:any = "singlestone";

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any, id):void {
    console.log('Selected value is: ', value, id);
    this.piecesTypeForm.controls[id].patchValue(JSON.parse(JSON.stringify(value)).text);
    console.log(this.piecesTypeForm);
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

  public RPCaratCost(){
    var a = 1;
    this.childEvent.emit();
    if(this.piecesTypeForm.value.RAP_price != undefined && this.piecesTypeForm.value.cost_discount != undefined){
      this.piecesTypeForm.controls['cost_rate_per_carat'].patchValue(this.piecesTypeForm.value.RAP_price-(this.piecesTypeForm.value.RAP_price*this.piecesTypeForm.value.cost_discount/100));
    }
  }

  public WDRPCarat(){
    var costRatePC = this.piecesTypeForm.value.cost_rate_per_carat;
    var WDRate = this.piecesTypeForm.value.wd_rate;

    if(costRatePC != undefined && WDRate != undefined){ 
      var WDrateCarat = costRatePC+(costRatePC*WDRate/100);
      this.piecesTypeForm.controls['wd_rate_carat'].patchValue(parseFloat(WDrateCarat.toFixed(2)));
      this.CALrate();
    }
  }

  public CALrate(){
    var costRatePC = parseFloat(this.piecesTypeForm.value.cost_rate_per_carat);
    var totalDiamondC = parseFloat(this.piecesTypeForm.value.total_diamond_carat);
    var totalDiamondP = parseFloat(this.piecesTypeForm.value.total_diamond_pcs);
    var dolarRate = parseFloat(this.piecesTypeForm.value.currency_convrsion_rate);

    if (costRatePC != undefined && totalDiamondC  != undefined && totalDiamondP != undefined && dolarRate != undefined){
      var rateINR = costRatePC*totalDiamondC*totalDiamondP;
      var rateDOLAR = rateINR/this.dolar;
      this.piecesTypeForm.controls['rate_INR'].patchValue(parseFloat(rateINR.toFixed(2)));
      this.piecesTypeForm.controls['rate_dolar'].patchValue(parseFloat(rateDOLAR.toFixed(2)));
      this.CALavg();
    }
  }

  public CALavg(){
    var rateINR = parseFloat(this.piecesTypeForm.value.rate_INR);
    var totalDiamondC = parseFloat(this.piecesTypeForm.value.total_diamond_carat);
    var dolarRate = parseFloat(this.piecesTypeForm.value.currency_convrsion_rate);

    if(rateINR != undefined && totalDiamondC != undefined && dolarRate != undefined){
      var avgINR = this.piecesTypeForm.value.rate_INR/this.piecesTypeForm.value.total_diamond_carat;
      var avgDOLAR = avgINR/this.piecesTypeForm.value.currency_convrsion_rate;
      this.piecesTypeForm.controls['avg_INR'].patchValue(parseFloat(avgINR.toFixed(2)));
      this.piecesTypeForm.controls['avg_dolar'].patchValue(parseFloat(avgDOLAR.toFixed(2)));
      this.CALAmount();
    }
    
  }

  public CALAmount(){
    this.piecesTypeForm.value.amount_INR =  this.piecesTypeForm.value.avg_INR*this.piecesTypeForm.value.total_diamond_carat;

    var lessDis = parseInt(this.piecesTypeForm.value.less1)+parseInt(this.piecesTypeForm.value.less2)+parseInt(this.piecesTypeForm.value.less3);
    
    console.log(this.piecesTypeForm.value.rate_INR,lessDis,(this.piecesTypeForm.value.rate_INR*(lessDis/100)))
    var amountINR = this.piecesTypeForm.value.rate_INR-(this.piecesTypeForm.value.rate_INR*(this.piecesTypeForm.value.less1/100));
    amountINR = amountINR-(amountINR*(this.piecesTypeForm.value.less2/100));
    amountINR = amountINR-(amountINR*(this.piecesTypeForm.value.less3/100));
    
    var amountDOLAR = amountINR/this.dolar;
    this.piecesTypeForm.controls['rate_INR'].patchValue(parseInt(amountINR.toFixed(2)));
    this.piecesTypeForm.controls['rate_dolar'].patchValue(parseInt(amountDOLAR.toFixed(2)));
  }

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
  ) {
    
    //console.log(this.newpurchase)
  }

  ngOnInit() {
    //console.log(this.newpurchase)
  }

}