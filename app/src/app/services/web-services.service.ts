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

    searchpaymentreciept:this.base_url+'/api/searchpaymentreciept',
    showpaymentreciept:this.base_url+'/api/showpaymentreciept',

    showpayable:this.base_url+'/api/showpayable',
    searchpayable:this.base_url+'/api/searchpayable',

    showinventory:this.base_url+'/api/showinventory',

    showrecievable:this.base_url+'/api/showrecievable',
    searchrecievable:this.base_url+'/api/searchrecievable',

    showledger:this.base_url+'/api/showledger',
    searchledger:this.base_url+'/api/searchledger',

    newuser:this.base_url+'/api/newuser',
    searchuser:this.base_url+'/api/searchuser',
    showuser:this.base_url+'/api/showuser',
    edituser:this.base_url+'/api/edituser',
    updateuser:this.base_url+'/api/updateuser',
    deleteuser:this.base_url+'/api/deleteuser',


    newcashbook:this.base_url+'/api/newcashbook',
    showcashbook:this.base_url+'/api/showcashbook',
    searchcashbook:this.base_url+'/api/searchcashbook',

    showpurchase:this.base_url+'/api/showpurchase',
    searchpurchase:this.base_url+'/api/searchpurchase',

    showsales:this.base_url+'/api/showsales',
    searchsales:this.base_url+'/api/searchsales',

    showlabissue:this.base_url+'/api/showlabissue',
    searchlabissue:this.base_url+'/api/searchlabissue',

    showmemoin:this.base_url+'/api/showmemoin',
    searchmemoin:this.base_url+'/api/searchmemoin',

    showmemoissue:this.base_url+'/api/showmemoissue',
    searchmemoissue:this.base_url+'/api/searchmemoissue'
  };
  
  constructor(private _http:Http) { }
  ///////////////
  ///User
  //////////////

  newuser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newuser,data,options)
    .map((response:Response) => response.json());
  }

  searchuser(data){
    return this._http.get(this.apis.searchuser+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }

  showuser(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showuser,data,options)
    .map((response:Response) => response.json());
  }

  edituser(data){
    return this._http.get(this.apis.edituser+'/'+data)
    .map((response:Response) => response.json());
  }

  updateuser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updateuser+'/'+id.id,data,options)
    .map((response:Response) => response.json());
  }

  deleteuser(data){
    console.log(this.apis.deleteuser+'/'+data);
      return this._http.delete(this.apis.deleteuser+'/'+data)
    .map((response:Response) => response.json());
  }

  //Cashbook

  newcashbook(data):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newcashbook,data,options)
     .map((response:Response) => response.json());
  }

  showcashbook(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcashbook,data,options)
    .map((response:Response) => response.json());
  }

  searchcashbook(data){
    console.log(data);
    return this._http.get(this.apis.searchcashbook+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }

  //Inventory
showinventory(data){
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showinventory,data,options)
    .map((response:Response) => response.json());
  }

 ///////////
 ///Acoounts
 //////////
  showpayable(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpayable,data,options)
    .map((response:Response) => response.json());
  }
  searchpayable(data){
    return this._http.get(this.apis.searchpayable+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }

   showrecievable(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showrecievable,data,options)
    .map((response:Response) => response.json());
  }

  searchrecievable(data){
    return this._http.get(this.apis.searchpayable+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }

  showledger(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showledger,data,options)
    .map((response:Response) => response.json());
  }
  searchledger(data){
    return this._http.get(this.apis.searchledger+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }

  searchpaymentreciept(data){
    return this._http.get(this.apis.searchpaymentreciept+'?'+data.filterby+'='+data.searchterm)
    .map((response:Response) => response.json());
  }

  showpaymentreciept(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpaymentreciept,data,options)
    .map((response:Response) => response.json());
  }

  



 
  
 

  // getcashbookdata(){
  //   console.log(this.apis.getcashbookdata);
  //   return this._http.get(this.apis.getcashbookdata)
  //     .map((response:Response) => response.json());
  // }

 /**************************
  *Memo Module Web services*
  **************************/  

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

  memoissuechangestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoissuechangestatus+"?pcsid="+pcsid,options);
  }

 /******************************
  *Lab Issue Module Web services*
  ******************************/

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

  showlabissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showlabissue,data,options)
    .map((response:Response) => response.json());
  }

  searchlabissue(data){
    console.log(data);
    return this._http.get(this.apis.searchlabissue+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }


/******************************
*Purchase Module Web services *
*******************************/

  showpurchase(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase,data,options)
    .map((response:Response) => response.json());
  }

  searchpurchase(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  showpurchaseretrun(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase,data,options)
    .map((response:Response) => response.json());
  }

  searchpurchasereturn(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  postpurchasedata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewpurchase,data,options).subscribe();
  }

  purchaseReturn(PCS_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.purchaseretrun,PCS_ID,options).subscribe();
  }

  purchaseretrunreport(){
    console.log(this.apis.purchaseretrunreport);
    return this._http.get(this.apis.purchaseretrunreport)
      .map((response:Response) => response.json());
  }

  getpurchasereport(){    
    return this._http.get(this.apis.purchasereport)
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


  
/***************************
*Sales Module Web services *
****************************/

  showsales(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase,data,options)
    .map((response:Response) => response.json());
  }

  searchsales(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  showsalesretrun(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase,data,options)
    .map((response:Response) => response.json());
  }

  searchsalesreturn(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  getsalesreport(){    
    return this._http.get(this.apis.salesreport)
      .map((response:Response) => response.json());
  }

  postsalesdata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewsales,data,options).subscribe();
  }

  salesReturn(PCS_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.salesreturn,PCS_ID,options).subscribe();
  }

  salesretrunreport(){
    console.log(this.apis.salesretrunreport)
    return this._http.get(this.apis.salesretrunreport)
      .map((response:Response) => response.json());
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
