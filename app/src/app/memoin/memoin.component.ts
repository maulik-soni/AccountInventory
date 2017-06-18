import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { MemoIn } from '../memoin';
import { WebServicesService } from '../web-services.service';

@Component({
  selector: 'app-memoin',
  templateUrl: './memoin.component.html',
  styleUrls: ['./memoin.component.css'],
  providers: [WebServicesService]
})
export class MemoinComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions;
  constructor(
    private _webservice : WebServicesService
  ) {
    this.options = new DatePickerOptions();
  }
  public  newmemoin = new MemoIn();;
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

  submitted = false;
  newmemoindata : any;
  onSubmit() { 
    this.submitted = true;
    console.log(this.newmemoin);
    this.newmemoindata = JSON.parse(JSON.stringify(this.newmemoin));
    this.newmemoindata.account_name = this.newmemoindata.account_name[0].text;
    this.newmemoindata.broker = this.newmemoindata.broker[0].text;
    this.newmemoindata.date = this.newmemoindata.date.formatted
    console.log(this.newmemoindata);
    this._webservice.postmemoin(this.newmemoindata);
  }

  ngOnInit() {
  }

}
