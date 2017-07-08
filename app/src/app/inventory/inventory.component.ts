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
  this.searchatts.filter[0],
  this.searchatts.filterby[0],
);

titles=[];
data=[];
query;
  constructor(
    private inventoryservice:WebServicesService
  ) { }

  ngOnInit() {
    this.inventoryservice.showinventory({staticdata:'data'}).subscribe(
      resData=>{
        this.titles=resData.titles;
      });
  }

  onSubmit(form:NgForm){
    if(this.searchvalues.filter=='all'){
      this.query=JSON.stringify(form.value);
      console.log(this.query);
    }

    if(form.value.filterby){
     this.query=JSON.stringify(form.value);
     console.log(this.query);
    }

    if(this.query){
      this.inventoryservice.showinventory(this.query).subscribe(response=>this.data=response.data);
    }
    
  }

}
