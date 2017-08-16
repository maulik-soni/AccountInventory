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
      console.log(this.filterdata);});
    }
  }
  isda(elem){
    return (elem.length > 0);
  }

  onSubmit(form:NgForm){
    // if(this.searchvalues.inventory=='all'){
    //   this.query=JSON.stringify(form.value);
    //   console.log(this.query);
    // }
var all=form.value.filter;
//    var queries=Object.keys(all);

//   for (let query of queries) {
//  var a=(Object.keys(all[query]).map(key=>{return key}));
//  var b=a.map(e=>{
//    if(all[query][e]=== true){
//      return {property:e,asas:query,}
//    }
// });
//  console.log(b);
    
//  }

    

    // if(this.query){
    //   // this.inventoryservice.showinventory(this.query).subscribe(response=>console.log(response));
    // }
     this.inventoryservice.showinventory(JSON.stringify(all)).subscribe(response=>console.log(response));
     console.log(JSON.stringify(all));
    
  }

}
