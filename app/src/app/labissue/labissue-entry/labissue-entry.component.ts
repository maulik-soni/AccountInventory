import { Component, OnInit } from '@angular/core';
import { LabIssue } from '../labissue';
import { WebServicesService } from '../../services/web-services.service';
import { ConstantServiceService } from '../../services/constant-services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule} from '@angular/material';
import { MdInputModule } from '@angular/material';

@Component({
  selector: 'app-labissue-entry',
  templateUrl: './labissue-entry.component.html',
  styleUrls: ['./labissue-entry.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class LabissueEntryComponent implements OnInit {

  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService
  ) { }

  ngOnInit() {
  }

  public brokertypes:Array<string> = this.ConstantService.BROKERTYPES;
  public brokers:Array<string> = this.ConstantService.BROKERS;
  public dollar:any = this.ConstantService.DOLAR;
  public invoice:any = this.ConstantService.INVOICE;
  public countries:Array<string> = this.ConstantService.COUNRTIES;
  public names:Array<string> = this.ConstantService.NAMES;
  public piecetype =  'singlestone';

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private disable:any = false;

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

  mypurchase:any = {};
  searchPCS:any;
  showPurchase = false;
  newlabissue = new LabIssue();  
  newlabissuedata:any = {};
  search(){
    this._webservice.fetchpurchase(this.searchPCS,this.piecetype)
      .subscribe(
        resData => {
          console.log(resData);          
          console.log(Object.keys(resData)[0]);        
          this.mypurchase = resData[Object.keys(resData)[0]];          
          // this.mypurchase.account_name = JSON.parse(this.mypurchase.account_name)[0].text;
          // this.mypurchase.country = JSON.parse(this.mypurchase.country)[0].text; 
          // this.mypurchase.diamond_shape = JSON.parse(this.mypurchase.diamond_shape)[0].text;
          // this.mypurchase.diamond_size = JSON.parse(this.mypurchase.diamond_size)[0].text;
          // this.mypurchase.diamond_color = JSON.parse(this.mypurchase.diamond_color)[0].text;
          // this.mypurchase.diamond_clarity = JSON.parse(this.mypurchase.diamond_clarity)[0].text;

          console.log(this.mypurchase,JSON.stringify(this.mypurchase));
          this.showPurchase = true;
          //this.newlabissue = Object.assign(this.newlabissuedata,this.mypurchase);
          this.newlabissue = new LabIssue(
            this.mypurchase.PCS_ID,
            this.mypurchase.diamond_size,
            this.mypurchase.diamond_shape,
            this.mypurchase.total_diamond_carat,
            this.mypurchase.diamond_color,
            this.mypurchase.diamond_clarity,
            this.mypurchase.total_diamond_carat
          );
          console.log(this.newlabissue);
        }
      );
    
  }

  onSubmit(){
    console.log(this.newlabissue);
    // this.newlabissue.date = this._webservice.dateConversion(this.newlabissue.date);
    this._webservice.createlabissue(this.newlabissue);
  }

  dateConversion(date){
    console.log(date);
    var date:any = new Date(date);
    // console.log(date.getTime(),date.getMonth());
    // var dd:any = date.getDate();
    // var mm:any = date.getMonth() + 1;
    // var yyyy:any = date.getFullYear();
    var dateString = date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate();
    return dateString;
  }

}
