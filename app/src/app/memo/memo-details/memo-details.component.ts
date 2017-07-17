import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';
import { WebServicesService } from '../../services/web-services.service';
import { ConstantServiceService } from '../../services/constant-services.service';

@Component({
  selector: 'app-memo-details',
  templateUrl: './memo-details.component.html',
  styleUrls: ['./memo-details.component.css']
})
export class MemoDetailsComponent implements OnInit {

  @Input('mygroup')
  public memoDetails: FormGroup;
  public searchPCS;
  public mypurchase;
  public piecetype:any = "singlestone";
  public searchResult = false;
  public countries:Array<string> = this.ConstantService.COUNRTIES;
  public country:string;

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
    
    this.disable = value.text;
    this.memoDetails.controls[id].patchValue(JSON.parse(JSON.stringify(value)).text);
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

  constructor(
    private _router: Router,
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService,
  ) {
    console.log(this._router.url);
  }

  search(pcID){
    this._webservice.fetchpurchase(pcID,this.piecetype)
      .subscribe(
        resData => {
          console.log(pcID);
          this.searchResult = true;
          console.log(resData);
          console.log(Object.keys(resData)[0]);
          this.mypurchase = resData[Object.keys(resData)[0]];
          console.log(this.mypurchase);
          // this.mypurchase.account_name = JSON.parse(this.mypurchase.account_name)[0].text;
          // this.mypurchase.country = JSON.parse(this.mypurchase.country)[0].text; 
          // this.mypurchase.diamond_shape = JSON.parse(this.mypurchase.diamond_shape)[0].text;
          // this.mypurchase.diamond_size = JSON.parse(this.mypurchase.diamond_size)[0].text;
          // this.mypurchase.diamond_color = JSON.parse(this.mypurchase.diamond_color)[0].text;
          // this.mypurchase.diamond_clarity = JSON.parse(this.mypurchase.diamond_clarity)[0].text;
          console.log(this.mypurchase,JSON.stringify(this.mypurchase));
          this.memoDetails.controls['PCS_ID'].patchValue(this.mypurchase.PCS_ID);

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
  
  ngOnInit() {
  }

}
