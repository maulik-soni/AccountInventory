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
  public showSearch = true;
  

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
  }

  public typed(value:any):void {
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
        data => {
          this.dataProcessing(data[Object.keys(data)[0]]);
        }
      );
    
  }
  
  ngOnInit() {
    if(this.memoDetails.value.Stock_ID != '' && this._router.url == '/jangad/jangad-issue-entry'){      
      this.showSearch = false;
      this.dataProcessing(this.memoDetails.value);
    }
  }

  dataProcessing(data){
    this.searchResult = true;
    this.mypurchase = JSON.parse(JSON.stringify(data));
    this.memoDetails.controls['Stock_ID'].patchValue(this.mypurchase.Stock_ID);
  }

}
