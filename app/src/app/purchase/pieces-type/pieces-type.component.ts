import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup,FormArray } from '@angular/forms';
import { Purchase } from '../purchase';
import { WebServicesService } from '../../services/web-services.service';
import { ConstantServiceService } from '../../services/constant-services.service';

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

  @Input('mygroup')
  public piecesTypeForm: FormGroup;
  newpurchase = new Purchase();
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

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