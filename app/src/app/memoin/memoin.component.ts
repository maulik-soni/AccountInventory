import { Component, OnInit } from '@angular/core';
import { SelectModule } from 'ng2-select';
import { MemoIn } from '../memoin';
import { WebServicesService } from '../web-services.service';
import { DatepickerModule } from 'angular2-material-datepicker';
import { ConstantServiceService } from '../constant-service.service';

@Component({
  selector: 'app-memoin',
  templateUrl: './memoin.component.html',
  styleUrls: ['./memoin.component.css'],
  providers: [WebServicesService,ConstantServiceService]
})
export class MemoinComponent implements OnInit {

  
  constructor(
    private _webservice : WebServicesService,
    public ConstantService : ConstantServiceService
  ) { }

  public names:Array<string> = this.ConstantService.NAMES;
  public brokers:Array<string> = this.ConstantService.BROKERS;
  public invoice:any = this.ConstantService.INVOICE;

  public  newmemoin = new MemoIn(this.invoice);

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
  newmemoindata : any;
  onSubmit() {
    this.submitted = true;
    console.log(this.newmemoin);
    this.newmemoindata = JSON.parse(JSON.stringify(this.newmemoin));
    this.newmemoindata.account_name = JSON.stringify(this.newmemoindata.account_name);
    this.newmemoindata.broker = JSON.stringify(this.newmemoindata.broker);
    this.newmemoindata.date = this.dateConversion(this.newmemoindata.date);
    console.log(this.newmemoindata);
    this._webservice.postmemo(this.newmemoindata,this.memotype);
  }

  ngOnInit() {
  }

}
