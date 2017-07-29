import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

import { SearchValues,SearchOptions} from './search.model';
import { WebServicesService } from './../services/web-services.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
searchatts=new SearchOptions(['all','filter'],['purchase','jangad']);
searchvalues=new SearchValues(
  this.searchatts.inventory[0],
  this.searchatts.filterby[0],
);

filtertitles=['shape','color','clarity','group','kapan','lab','polish'];
filterdata=[];
filterkeys=[];
query;
  constructor(
    private inventoryservice:WebServicesService
  ) { }

  ngOnInit() {
    // this.inventoryservice.showinventory({staticdata:'data'}).subscribe(
    //   resData=>{
    //     this.titles=resData.titles;
    //   });
  }

  getoption(option){
    if(option=='filter'){
      let getfilters;
      getfilters={
        inventory:option
      }
      this.inventoryservice.showinventory(JSON.stringify(getfilters))
      .subscribe(response=>{this.filterdata=response.response.filters;
        this.filterkeys=this.filterdata.map(e=>{return Object.keys(e)[0]});
      console.log(this.filterdata)});
    }
  }

  onSubmit(form:NgForm){
    // if(this.searchvalues.inventory=='all'){
    //   this.query=JSON.stringify(form.value);
    //   console.log(this.query);
    // }

    
     this.query=JSON.stringify(form.value);
     console.log(this.query);
    

    // if(this.query){
    //   // this.inventoryservice.showinventory(this.query).subscribe(response=>console.log(response));
    // }
    
  }

}
