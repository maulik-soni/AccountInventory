import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  private base_url = "http://localhost/projects/inventory/AccountInventory/api/public/api";
  private apis = {
    salesreport: this.base_url+'/salesreport',
    purchasereport:this.base_url+'/purchasereport',
    postnewpurchase:this.base_url+'/newpurchase',
    postnewsales:this.base_url+'/newsales',
    postnewmemoin:this.base_url+'/memoin',
    postnewmemoissue:this.base_url+'/memoissue',
    purchaseretrun:this.base_url+'/purchasereturn',
    salesreturn:this.base_url+'/salesreturn',
    purchaseretrunreport:this.base_url+'/purchaseretrunreport',
    salesretrunreport:this.base_url+'/salesretrunreport',
    memoinreport:this.base_url+'/memoinreport',
    memoissuereport:this.base_url+'/memoissuereport',
    memoissuechangestatus:this.base_url+'/memoissuechangestatus',
    memoinchangestatus : this.base_url+'/memoinchangestatus',
    createlabissue : this.base_url+'/createlabissue',
    reportlab:this.base_url+'/reportlab',
    changelabissuestatus:this.base_url+'/changestatus'
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

  postpurchasedata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewpurchase,data,options).subscribe();
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
      this._http.post(this.apis.postnewmemoin,data,options).subscribe();
    }else{
      this._http.post(this.apis.postnewmemoissue,data,options).subscribe();
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
    return this._http.get(this.apis.purchaseretrunreport)
      .map((response:Response) => response.json());
  }
  
  salesretrunreport(){
    return this._http.get(this.apis.salesretrunreport)
      .map((response:Response) => response.json());
  }

  fetchpurchase(pcsid){
    return this._http.get(this.apis.purchasereport+"?pcsid="+pcsid)
      .map((response:Response) => response.json()); 
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
    return this._http.get(this.apis.memoissuechangestatus+"?pcsid="+pcsid,options);
  }

  dateConversion(date){
    console.log(date);
    var dd = new Date(date).getDate();
    var mm = new Date(date).getMonth() + 1;
    var yyyy = new Date(date).getFullYear();
    var dateString = yyyy + "/" + mm + "/" + dd;
    return dateString;
  }

}
