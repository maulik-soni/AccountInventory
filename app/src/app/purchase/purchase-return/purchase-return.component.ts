import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReturnComponent implements OnInit {

  purchasereturn =  [];
  private searchterm=new Subject;
  searchatts=new Search(['all','filter'],['PCS ID','Invoice Number','Party Name','date']);
  searchvalues=new SearchValues(
    this.searchatts.filter[0],
    this.searchatts.filterby[0],
    null,
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  );

  titles=[];
  data=[];
  searchresult=[];
  query:any;
  constructor(
    private _webservice : WebServicesService
  ) { }

  search(searchvalue){
    this.searchterm.next(searchvalue);
  }

  issearchempty(){
    return this.searchresult.length;
  }

  setvalue(result){
    this.searchvalues.search=result;
    this.searchresult=[];
  }

  resetsearch(){
    this.searchvalues.search=null;
  }

  onSubmit(form:NgForm){
    if(this.searchvalues.filter=='all'){
      this.query=JSON.stringify(form.value);
      console.log(this.query);
    }
    if(this.searchvalues.filterby=='date'){
      this.query=JSON.stringify(form.value);
      console.log(this.query);
    }
    if(form.value.search!=null){
     this.query=JSON.stringify(form.value);
     console.log(this.query);
    }
    this.query = JSON.parse(this.query);
    this.query.reportType = "return";
    this.query = JSON.stringify(this.query);    
    if(this.query){
      this._webservice.showpurchaseretrun(this.query).subscribe(response=>this.purchasereturn=response);
    }
    
  }

  ngOnInit() {

    // this._webservice.showpurchase({staticdata:'data'}).subscribe(
    //   resData=>{
    //     this.purchasereturn=resData;
    // });
    // this.searchterm
    //   .debounceTime(100)
    //   .switchMap(search=>this._webservice.searchpurchase({filterby:this.searchvalues.filterby,searchterm:search}))
    //   .subscribe(result=>{
    //        this.purchasereturn=result;
    // });

    this._webservice.showpurchaseretrun({reportType:"return",staticdata:'data'}).subscribe(
      resData=>{
        this.purchasereturn=resData;
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchpurchasereturn({reportType:"report",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
           //this.purchasereturn=result;
          
      });

    // this._webservice.purchaseretrunreport()
    //   .subscribe(resData => {
    //     this.purchasereturn = resData;
    //     for(var i=0; i<this.purchasereturn.length; i++){
    //       console.log(this.purchasereturn[i].country);
    //       //this.purchasereturn[i].country = JSON.parse(this.purchasereturn[i].country)[0].text ;
    //       //this.purchasereturn[i].account_name = JSON.parse(this.purchasereturn[i].account_name)[0].text ;
    //     }
    //   });
  }

   export(){
    var exportCSVdata:any = JSON.parse(JSON.stringify(this.purchasereturn));
    for(var i = 0; i<exportCSVdata.length; i++){
      for(var key in exportCSVdata[i]){
        if(exportCSVdata[i][key] == null){
          exportCSVdata[i][key] = '-'; 
        }
        if(key == "less"){
          exportCSVdata[i][key] = JSON.parse(exportCSVdata[i][key]);
          exportCSVdata[i].less1 = exportCSVdata[i][key].less1;
          exportCSVdata[i].less2 = exportCSVdata[i][key].less2;
          exportCSVdata[i].less3 = exportCSVdata[i][key].less3;
          delete exportCSVdata[i][key];
        }
        if(key == "comission"){
          exportCSVdata[i][key] = JSON.parse(exportCSVdata[i][key]);
          exportCSVdata[i].comission1 = exportCSVdata[i][key].comission1;
          exportCSVdata[i].comission2 = exportCSVdata[i][key].comission2;
          delete exportCSVdata[i][key];
        }
        if(key == "broker_details"){
          exportCSVdata[i][key] = JSON.parse(exportCSVdata[i][key]);
          exportCSVdata[i].brokerType = exportCSVdata[i][key].brokerType;
          exportCSVdata[i].brokerName = exportCSVdata[i][key].brokerName;
          exportCSVdata[i].brokerage = exportCSVdata[i][key].brokerage;
          delete exportCSVdata[i][key];
        }
       
      }
    }
    if(exportCSVdata[0].sr_no != "Sr No."){
      exportCSVdata.unshift(
        {
          "sr_no": "Sr No.",
          "PCS_ID": "PCS ID",
          "invoice_number": "Invoice Number",
          "purchase_date": "Purchase Date",
          "due_date": "Due Date",
          "account_name": "Party's Name",
          "payment_terms": "Terms of Payment",
          "polishing_type": "Polish Type",
          "currency_convrsion_rate": "Currency Conversion rate",
          "notes": "Notes",
          "country": "Country",
          "bill_type": "Bill Type",
          "stock_status_group": "Stock Group",
          "item": "Item",
          "kapan": "Kapan",
          "diamond_shape": "Diamont Shape",
          "diamond_lot_number": "Lot Number",
          "diamond_size": "Diamond Size",
          "diamond_color": "Diamond Color",
          "diamond_clarity": "Diamond Clarity",
          "total_diamond_pcs": "Total Diamond Pcs",
          "total_diamond_carat": "Total Diamond Carat",
          "cost_discount": "Cost Discount",
          "cost_rate_per_carat": "Cost Rate/Carat",
          "RAP_price": "RAP price",
          "wd_rate": "WD rate",
          "wd_rate_carat": "WD rate carat",
          "rate_INR": "Rate in INR",
          "amount_INR": "Amount INR",
          "rate_dolar": "Rate in USD",
          "amount_dolar": "Amount in USD",
          "LAB_type": "Lab Type",
          "certificate_number": "Certificate No.",
          "avg_INR": "Average in INR",
          "avg_dolar": "Average in USD",
          "aginst_Hform": "Against Hform",
          "mVAT": "mVAT",
          "less1": "Less 1",
          "less2": "Less 2",
          "less3": "Less 3",
          "comission1": "Comission 1",
          "comission2": "Comission 2",
          "brokerType": "Broker Type",
          "brokerName": "Broker Name",
          "brokerage": "Brokerage"
        }
      );
    }
    for(var i = 0; i<exportCSVdata.length; i++){
        exportCSVdata[i] = Object.keys(exportCSVdata[i]).map(function(k) { 
          return exportCSVdata[i][k]; 
        });
    }
    const ws = XLSX.utils.aoa_to_sheet(exportCSVdata);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		const wbout = XLSX.write(wb, { bookType:'xlsx', type:'binary' });
		saveAs(new Blob([this.s2ab(wbout)]), "PurchaseReport"+new Date().getTime()+".xlsx");
  }
   s2ab(s:string):ArrayBuffer {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) {
		view[i] = s.charCodeAt(i) & 0xFF;
	};
	return buf;
}


}