import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  private base_url = "http://localhost:8000";
  private apis = {
    salesreport: this.base_url+'/api/public/api/salesreport',
    purchasereport:this.base_url+'/api/public/api/purchasereport',
    postnewpurchase:this.base_url+'/api/public/api/newpurchase',
    postnewsales:this.base_url+'/api/public/api/newsales',
    postnewmemoin:this.base_url+'/api/public/api/memoin',
    postnewmemoout:this.base_url+'/api/public/api/memoout',
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


  postpurchasedata(data):any{
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.postnewpurchase,data,options).subscribe();
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
