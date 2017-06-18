import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { Sales } from '../sales';
import { WebServicesService } from '../web-services.service';

export abstract class AbstractViewInit {
  ngAfterViewInit() {
    console.log('after View init');
  }
}


@Component({
  selector: 'app-salse',
  templateUrl: './salse.component.html',
  styleUrls: ['./salse.component.css'],
  providers: [WebServicesService]
})
export class SalseComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions;
  newsales = new Sales();
  
  doption:['12','121','1232'];
  constructor(
    private _webservice : WebServicesService
  ) { 
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    
    console.log("view loaded");
  }

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
 
  public less:any = {};
  public comission:any = {};
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
    console.log('Selected value is: ', value,this.options);
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
  newsalesdata:any;
  submitted = false;
  onSubmit() { 
    this.submitted = true;
    this.newsales.less = JSON.stringify(this.less);
    this.newsales.comission = JSON.stringify(this.comission);
    console.log(this.newsales);
    this.newsalesdata = JSON.parse(JSON.stringify(this.newsales));
    console.log(this.newsalesdata);
    
    this.newsalesdata.sales_date = this.newsalesdata.sales_date.formatted;
    this.newsalesdata.due_date = this.newsalesdata.due_date.formatted;
    this.newsalesdata.country = this.newsalesdata.country[0].text;
    this.newsalesdata.account_name = this.newsalesdata.account_name[0].text;
    this.newsalesdata.brokerName = this.newsalesdata.brokerName[0].text;
    this.newsalesdata.brokerType = this.newsalesdata.brokerType[0].text;
    this.newsalesdata.diamond_shape = this.newsalesdata.diamond_shape[0].text; 
    this.newsalesdata.diamond_color = this.newsalesdata.diamond_color[0].text;
    this.newsalesdata.stock_status_group = this.newsalesdata.stock_status_group[0].text;
    this.newsalesdata.broker_details = {
      brokerName : this.newsalesdata.brokerName,
      brokerType : this.newsalesdata.brokerType,
      brokerage : this.newsalesdata.brokerage
    };
    this.newsalesdata.broker_details = JSON.stringify(this.newsalesdata.broker_details);
    this._webservice.postsalesdata(this.newsalesdata);
  }

}
