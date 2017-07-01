import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  private base_url = "http://127.0.0.1:8000";
  private apis = {
    salesreport: this.base_url+'/api/salesreport',
    purchasereport:this.base_url+'/api/purchasereport',
    postnewpurchase:this.base_url+'/api/newpurchase',
    postnewsales:this.base_url+'/api/newsales',
    postnewmemoin:this.base_url+'/api/memoin',
    postnewmemoissue:this.base_url+'/api/memoissue',
    purchaseretrun:this.base_url+'/api/purchasereturn',
    salesreturn:this.base_url+'/api/salesreturn',
    purchaseretrunreport:this.base_url+'/api/purchaseretrunreport',
    salesretrunreport:this.base_url+'/api/salesretrunreport',
    memoinreport:this.base_url+'/api/memoinreport',
    memoissuereport:this.base_url+'/api/memoissuereport',
    memoissuechangestatus:this.base_url+'/api/memoissuechangestatus',
    memoinchangestatus : this.base_url+'/api/memoinchangestatus',
    createlabissue : this.base_url+'/api/createlabissue',
    reportlab:this.base_url+'/api/reportlab',
    changelabissuestatus:this.base_url+'/api/changestatus',
    payablebill:this.base_url+'/api/payablebill',
    recievablebill:this.base_url+'/api/recievablebill',
    postnewuser:this.base_url+'/api/newuser',
    postnewcashbook:this.base_url+'/api/newcashbbok'
  };
  
  constructor(private _http:Http) { }
  getsalesreport(){    
    return this._http.get(this.apis.salesreport)
      .map((response:Response) => response.json());
  }
  getpurchasereport(){    
    return this._http.get(this.apis.purchasereport)
      .map((response:Response) => response.json());
  }

  getpayablebill(data){
    console.log(this.apis.payablebill+'?'+data);
    return this._http.get(this.apis.payablebill+'?'+data)
       .map((response:Response) => response.json());
  }

   getrecievablebill(data){
    console.log(this.apis.recievablebill+'?'+data);
    return this._http.get(this.apis.recievablebill+'?'+data)
       .map((response:Response) => response.json());
  }

  postpurchasedata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewpurchase,data,options).subscribe();
  }

  postcashbook(data):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.postnewcashbook,data,options).subscribe();
  }

  postuserdata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.postnewuser,data,options).subscribe();
  }

  postsalesdata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewsales,data,options).subscribe();
  }

  postmemo(data,memotype){
    console.log(data,memotype);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    if(memotype == "memoissue"){
      this._http.post(this.apis.postnewmemoissue,data,options).subscribe();
    }else{
      this._http.post(this.apis.postnewmemoin,data,options).subscribe();
    }
    // 
  }

  postmemoissue(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewmemoissue,data,options).subscribe();
  }

  purchaseReturn(PCS_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.purchaseretrun,PCS_ID,options).subscribe();
  }

  salesReturn(PCS_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.salesreturn,PCS_ID,options).subscribe();
  }

  purchaseretrunreport(){
    console.log(this.apis.purchaseretrunreport);
    return this._http.get(this.apis.purchaseretrunreport)
      .map((response:Response) => response.json());
  }
  
  salesretrunreport(){
    console.log(this.apis.salesretrunreport)
    return this._http.get(this.apis.salesretrunreport)
      .map((response:Response) => response.json());
  }

  fetchpurchase(pcsid,pcstype){
    if(pcstype == "singlestone"){
      return this._http.get(this.apis.purchasereport+"?pcsid="+pcsid)
       .map((response:Response) => response.json());
    }else{
      return this._http.get(this.apis.purchasereport+"?lot_number="+pcsid)
       .map((response:Response) => response.json());
    }
  }

  memoinreport(){
    return this._http.get(this.apis.memoinreport)
      .map((response:Response) => response.json());
  }

  memoissuereport(){
    return this._http.get(this.apis.memoissuereport)
      .map((response:Response) => response.json());
  }

  memoinchangestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoinchangestatus+"?pcsid="+pcsid,options);
  }

  changelabissuestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.apis.changelabissuestatus+"?PCS_ID="+pcsid,options);
  }

  createlabissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.createlabissue,data,options).subscribe();
  }

  reportlab(){
    console.log("GET");
    return this._http.get(this.apis.reportlab)
      .map((response:Response) => response.json());
  }

  memoissuechangestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoissuechangestatus+"?pcsid="+pcsid,options);
  }

  dateConversion(date){
    console.log(date);
    var date:any = new Date(date);
    // console.log(date.getTime(),date.getMonth());
    // var dd:any = date.getDate();
    // var mm:any = date.getMonth() + 1;
    // var yyyy:any = date.getFullYear();
    var dateString = date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate();
    return dateString;
  }

}
