import { Component, OnInit } from '@angular/core';
import { SelectModule } from 'ng2-select';
import { Memo } from './memo';
// import { DatepickerModule } from 'angular2-material-datepicker';
import { WebServicesService } from './../../services/web-services.service';
import { ConstantServiceService } from './../../services/constant-services.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],
  providers: [WebServicesService,ConstantServiceService] 
})
export class MemoComponent implements OnInit {

  
  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService
  ) { }
  public names:Array<string> = this.ConstantService.NAMES;
  public brokers:Array<string> = this.ConstantService.BROKERS;
  public invoice:any = this.ConstantService.INVOICE;

  public  newmemo = new Memo(this.invoice);

  public memotype:any = "memoissue";

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
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
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
  
  public dateConversion(date){
    console.log(date);
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;

  }

  submitted = false;
  newmemodata : any;
  onSubmit() {
    this.submitted = true;
    console.log(this.newmemo);
    this.newmemodata = JSON.parse(JSON.stringify(this.newmemo));
    this.newmemodata.account_name = JSON.stringify(this.newmemodata.account_name);
    this.newmemodata.broker = JSON.stringify(this.newmemodata.broker);
    this.newmemodata.date = this.dateConversion(this.newmemodata.date);
    console.log(this.newmemodata);
    this._webservice.postmemo(this.newmemodata,this.memotype);
  }

  ngOnInit() {
  }

}
