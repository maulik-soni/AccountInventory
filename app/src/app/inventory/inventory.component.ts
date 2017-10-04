import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

import { WebServicesService } from './../services/web-services.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  selected=[];
  barcodes=[];
  searchcount=0;
  showfilterables=false;
  collectiontype=['all','stock in hand','stock on memo-issue','stock on memo-in','sold stones','lab issue'];
  initfilterby=this.collectiontype[0];
  filtertitles=['shape','color','clarity','group','lab','polish','cut','symmetry','fluor','party name','certificate'];
resulttitles=[
  ['stock status','stock_status_group'],
  ['item','item'],
  ['kapan','kapan'],
  ['STOCK ID','Stock_ID'],
  ['diamond shape','diamond_shape'],
  ['lot number','diamond_lot_number'],
  ['color','diamond_color'],
  ['clarity','diamond_clarity'],
  ['carat','total_diamond_carat'],
  ['crown height','crnHt'],
  ['cut','finalCut'],
  ['polishing','polishing_type'],
  ['symmetry','symmetry'],
  ['measurement','fullShapeDescription'],
  ['fluo','fluorescenceIntensity'],
  ['fluo Color','fluorescenceColor'],
  ['height','length'],
  ['girdle','girdle'],
  ['crown angle','crnAg'],
  ['pav depth','pavDp'],
  ['pav angle','pavAg'],
  ['culet','culetSize'],
  ['LAB','LAB_type'],
  ['discount','cost_discount'],
  ['cost rate/carat','cost_rate_per_carat'],
  ['RAP','RAP_price'],
  ['wd rate','wd_rate'],
  ['wd rate/carat','wd_rate_carat'],
  ['party name','account_name'],
  ['purchase date','purchase_date'],
  ['due date','due_date'],
  ['rate','rate_INR'],
  ['amount','amount_INR'],
  ['rate(USD)','rate_dolar'],
  ['amount(USD)','amount_dolar'],

  // ['invoice number','invoice_number'],
  // ['terms','payment_terms'],
  // ['conversion','currency_convrsion_rate'],
  // ['note','notes'],
  // ['less','less'],
  // ['country','country'],
  // ['bill','bill_type'],
  // ['comission','comission'],
  // ['size','diamond_size'],
  // ['peices','total_diamond_pcs'],
  // ['certificate number','certificate_number'],
  // ['average','avg_INR'],
  // ['average(USD)','avg_dolar'],
  // ['Hform','against_Hform'],
  // ['VAT','mVAT'],
  // ['broker','broker_details'],
  // ['memo lot number','Lot_number'],
  // ['memo invoice number','memo_invoice_number'],
  // ['memo date','date'],
  // ['memo reference','reference'],
  // ['memo carats','carats'],
  // ['memo stone type','stone_type'],
  // ['memo days','no_of_days'],
  // ['memo due','due_date'],
  // ['memo status','status']
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
  this.barcodes=[];
   let getfilters;
      getfilters={
        filter:'filteroptions',
        filterby:this.initfilterby,
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

  // getallfilterdata(){
  //   let data={
  //     inventory:'all',
  //   }

  //   this.inventoryservice.showinventory(JSON.stringify(data)).subscribe(response=>{
  //      this.result=response.response.inventory;
  //      this.searchcount=response.response.searches;
  //      console.log(response);
  //     });

  //     this.showfilterables=false
  // }

  resetcollection(filterby){
    this.showfilterables=true;
    this.barcodes=[];
     let getfilters;
        getfilters={
          filter:'filteroptions',
          filterby:filterby,
        }
        this.inventoryservice.showinventory(JSON.stringify(getfilters))
        .subscribe(response=>{this.filterdata=response.response.filters;
        console.log(this.filterdata);});
  }
  
  
  onSubmit(form:NgForm,prop){
    console.log(form.value);
     this.inventoryservice.showinventory(JSON.stringify(form.value)).subscribe(response=>{
       this.result=response.response.inventory;
       this.searchcount=response.response.searches;
       console.log(response);});
       this.showfilterables=prop;
  }

  getselecteddata(formb:NgForm){
    let barcodevalues=[];
    for (let key in formb.value){
      let value=formb.value[key];
      if(value){
        barcodevalues.push(JSON.parse(key));
      }
    }
    this.selected=barcodevalues;
  }

  generatebarcode(){
    this.barcodes=[];
    let barcodedata=this.selected;
    for(let data of barcodedata){
      this.barcodes.push('Stock ID: '+data.Stock_ID);
    }
    console.log(this.barcodes);
  }

  printbarcode(data){
  

    window.print();
    this.barcodes=[];

  }

}