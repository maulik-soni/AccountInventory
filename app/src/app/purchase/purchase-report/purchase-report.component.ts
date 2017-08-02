import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Search,SearchValues } from '../search.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm } from '@angular/forms';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css'],
  providers: [WebServicesService]
})
export class PurchaseReportComponent implements OnInit {

  mydata:any =  [];
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

  purchaseReturnData:any = [];

  constructor(
    private _webservice : WebServicesService
  ) { }
  searching: any = { PCS_ID: '' };
  ngOnInit() {
    // this._webservice.getpurchasereport()
    //   .subscribe( resData =>{
    //     this.mydata = resData;
    //   });
    
    this._webservice.showpurchase({reportType:"report",staticdata:'data'}).subscribe(
      resData=>{
        // this.mydata=resData;
        this.mydata = resData.map(function(el) {
          var o = Object.assign({}, el);
          o.purchaseretrun = false;
          return o;
        });

        console.log(this.mydata);
      });

      this.searchterm
      .debounceTime(100)
      .switchMap(search=>this._webservice.searchpurchase({reportType:"report",filterby:this.searchvalues.filterby,searchterm:search}))
      .subscribe(result=>{
          
          // this.mydata=result;
          
      });
  }

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
    this.query.reportType = "report";
    this.query = JSON.stringify(this.query);
    if(this.query){
      this._webservice.showpurchase(this.query).subscribe(response=>this.mydata=response);
    }
    
  }

  purchaseReturn(){
    console.log(this.purchaseReturnData);
    for(let j=0; j<this.purchaseReturnData.length; j++){
      for(var i=0; i<this.mydata.length; i++){
        if(this.mydata[i].PCS_ID == this.purchaseReturnData[j] || this.mydata[i].Lot_Number == this.purchaseReturnData[j]){
          this.mydata.splice(i,1);
        }
      }  
    }
    
    this._webservice.purchaseReturn(this.purchaseReturnData);
  }

  returnPurcahse(purchaseretrun,data){
    var dataID = data.PCS_ID;
    if(data.PCS_ID == undefined || data.PCS_ID == '' || data.PCS_ID == null){
      dataID = data.diamond_lot_number;
    }
    console.log(purchaseretrun,dataID);
    if(purchaseretrun == true){
      console.log(this.purchaseReturnData.indexOf(dataID))
      if(this.purchaseReturnData.indexOf(dataID) == -1){
        this.purchaseReturnData.push(dataID);
      }
    }else{
      console.log(this.purchaseReturnData.indexOf(dataID))
      if(this.purchaseReturnData.indexOf(dataID) != -1){
        var index = this.purchaseReturnData.indexOf(dataID);
        this.purchaseReturnData.splice(index,1);
      }
    }
    console.log(this.purchaseReturnData);
  }

  s2ab(s:string):ArrayBuffer {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) {
		view[i] = s.charCodeAt(i) & 0xFF;
	};
	return buf;
}

  export(){
    var exportCSVdata:any = JSON.parse(JSON.stringify(this.mydata));
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
        if(key == "purchaseretrun"){
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

  

}
