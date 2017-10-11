import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

import { WebServicesService } from './../services/web-services.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  selected=[];
  barcodes=[];
  datefilter=false;
  searchcount=0;
  fromDate;
  toDate;
  showfilterables=false;
  collectiontype=['all','stock in hand','stock on memo-issue','stock on memo-in','sold stones','lab issue'];
  initfilterby=this.collectiontype[0];
  range0=false;
  range1=false;
  range2=false;
  range3=false;

  caratrange=[
    [0.01,0.02,0.03],
    [0.04,0.05,0.06,0.07],
    [0.08,0.09,0.10,0.11,0.12,0.13,0.14],
    [0.15,0.16,0.17],
  ]
  filtertitles=['shape','color','clarity','group','lab','polish','cut','symmetry','fluor','party name','carats'];
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
  this.datefilter=false;
  this.datetoggle();
  this.searchcount=0;
  this.barcodes=[];
   let getfilters;
   let getdate;
   getdate={
     fromDate:this.fromDate?this.fromDate:null,
     toDate:this.toDate?this.toDate:null
   }
      getfilters={
        filter:'filteroptions',
        filterby:this.initfilterby,
        date:getdate
      }
      this.inventoryservice.showinventory(JSON.stringify(getfilters))
      .subscribe(response=>{
        this.filterdata=response.response.filters;
        this.filterdata.pop();
      console.log(response);});
}

  datetoggle(){
    if(!this.datefilter){
      this.fromDate=null;
      this.toDate=null;
    }
  }

  resetcollection(filterby){
    this.showfilterables=true;
    this.datefilter=false;
    this.searchcount=0;
    this.datetoggle();
    this.barcodes=[];
     let getfilters;
     let getdate;
      getdate={
         fromDate:this.fromDate?this.fromDate:null,
     toDate:this.toDate?this.toDate:null
      }
        getfilters={
          filter:'filteroptions',
          filterby:filterby,
          date:getdate
        }
        this.inventoryservice.showinventory(JSON.stringify(getfilters))
        .subscribe(response=>{
          this.filterdata=response.response.filters;
        this.filterdata.pop();          
        console.log(response);});
  }
  
  
  onSubmit(form:NgForm,prop){

    console.log(this.range0);
    console.log(this.range1);
   if(!form.value.date){
     let getdate;
      getdate={
         fromDate:this.fromDate?this.fromDate:null,
     toDate:this.toDate?this.toDate:null
      }
     form.value.date=getdate;
   }
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



  printxl(){
    let options={
      showLabels: true, 
    showTitle: true 
    }
    new Angular2Csv(this.selected, 'My Report');
  }

}