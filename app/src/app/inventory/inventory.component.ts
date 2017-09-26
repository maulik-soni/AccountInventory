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
  avalue="vikas";
  searchcount=0;
  showfilterables=false;
searchatts=new SearchOptions(['all','filter'],['purchase','jangad']);
searchvalues=new SearchValues(
  this.searchatts.inventory[0],
);

filtertitles=['shape','color','clarity','group','lab','polish','cut','symmetry','fluor'];
resulttitles=[
  ['STOCK ID','Stock_ID'],
  ['invoice number','invoice_number'],
  ['purchase date','purchase_date'],
  ['due date','due_date'],
  ['account','account_name'],
  ['terms','payment_terms'],
  ['polishing','polishing_type'],
  ['conversion','currency_convrsion_rate'],
  ['note','notes'],
  ['less','less'],
  ['country','country'],
  ['bill','bill_type'],
  ['comission','comission'],
  ['stock status','stock_status_group'],
  ['item','item'],
  ['kapan','kapan'],
  ['diamond shape','diamond_shape'],
  ['lot number','diamond_lot_number'],
  ['size','diamond_size'],
  ['color','diamond_color'],
  ['clarity','diamond_clarity'],
  ['peices','total_diamond_pcs'],
  ['carat','total_diamond_carat'],
  ['discount','cost_discount'],
  ['rate/carat','cost_rate_per_carat'],
  ['RAP','RAP_price'],
  ['wd rate','wd_rate'],
  ['wd rate/carat','wd_rate_carat'],
  ['rate','rate_INR'],
  ['amount','amount_INR'],
  ['rate(USD)','rate_dolar'],
  ['amount(USD)','amount_dolar'],
  ['LAB','LAB_type'],
  ['certificate number','certificate_number'],
  ['average','avg_INR'],
  ['average(USD)','avg_dolar'],
  ['Hform','against_Hform'],
  ['VAT','mVAT'],
  ['broker','broker_details'],
  ['memo lot number','Lot_number'],
  ['memo invoice number','memo_invoice_number'],
  ['memo date','date'],
  ['memo reference','reference'],
  ['memo carats','carats'],
  ['memo stone type','stone_type'],
  ['memo days','no_of_days'],
  ['memo due','due_date'],
  ['memo status','status']
  ]
filterdata=[];
result=[];

  constructor(
    private inventoryservice:WebServicesService
  ) { }

  ngOnInit() {
  }

  showpopup(){
  this.showfilterables=true;
   let getfilters;
      getfilters={
        filter:'filteroptions'
      }
      this.inventoryservice.showinventory(JSON.stringify(getfilters))
      .subscribe(response=>{this.filterdata=response.response.filters;
      console.log(this.filterdata);});
}


  // getdynamic(form:NgForm){
  //   var all=form.value;
  //   all['getoption']='getoption';
  //   all['inventory']='filter';
  //   console.log(all);
   
  //    this.inventoryservice.showinventory(JSON.stringify(all)).subscribe(response=>{
  //      this.filterdata=response.response.filters;
  //     console.log(this.filterdata);});

 
  // }

  getallfilterdata(){
    let data={
      inventory:'all',
    }

    this.inventoryservice.showinventory(JSON.stringify(data)).subscribe(response=>{
       this.result=response.response.inventory;
       this.searchcount=response.response.searches;
       console.log(response);
      });

      this.showfilterables=false
  }
  
  
  onSubmit(form:NgForm,prop){
    
// var all=form.value.filter;
// all['filterresult']='filterresult';

// if(this.searchvalues.inventory=="all"){
//   var all = form.value;
// }


 var all=form.value.filter;
 all['filterresult']='filterresult';
 all['inventory']='filter';
 all['filter']='search';
 


console.log(form.value);

     this.inventoryservice.showinventory(JSON.stringify(all)).subscribe(response=>{
       this.result=response.response.inventory;
       this.searchcount=response.response.searches;
       console.log(response);});

       this.showfilterables=prop;
    
  }

  getbarcodeid(formb:NgForm){
    let barcodevalues=[];
    for (let key in formb.value){
      let value=formb.value[key];
      if(value){
        barcodevalues.push(key);
      }
    }
     console.log(barcodevalues);
  }

}