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
    postnewmemoout:this.base_url+'/memoout',
    purchaseretrun:this.base_url+'/purchasereturn',
    salesreturn:this.base_url+'/salesreturn',
    purchaseretrunreport:this.base_url+'/purchaseretrunreport',
    salesretrunreport:this.base_url+'/salesretrunreport',
    memoinreport:this.base_url+'/memoinreport',
    memooutreport:this.base_url+'/memooutreport'
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
      this._http.post(this.apis.postnewmemoout,data,options).subscribe();
    }
    // 
  }

  postmemoout(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewmemoout,data,options).subscribe();
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

  memooutreport(){
    return this._http.get(this.apis.memooutreport)
      .map((response:Response) => response.json());
  }

}
