import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  private base_url = "http://localhost/projects/inventory/AccountInventory";
  private apis = {
    salesreport: this.base_url+'/api/public/api/salesreport',
    purchasereport:this.base_url+'/api/public/api/purchasereport',
    postnewpurchase:this.base_url+'/api/public/api/newpurchase',
    postnewsales:this.base_url+'/api/public/api/newsales',
    postnewmemoin:this.base_url+'/api/public/api/memoin',
    postnewmemoout:this.base_url+'/api/public/api/memoout'
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

  postmemoin(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewmemoin,data,options).subscribe();
  }

  postmemoout(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewmemoout,data,options).subscribe();
  }
  
}
