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

    newbill:this.base_url+'/api/newbill',
    searchbills:this.base_url+'/api/searchbills',
    showbills:this.base_url+'/api/showbills',

    showledger:this.base_url+'/api/showledger',

    showpayable:this.base_url+'/api/showpayable',
    searchpayable:this.base_url+'/api/searchpayable',

    showinventory:this.base_url+'/api/showinventory',

    showreceivable:this.base_url+'/api/showreceivable',
    searchreceivable:this.base_url+'/api/searchreceivable',

    editcompanyprofile:this.base_url+'/api/editcompanyprofile',
    showcompanyprofile:this.base_url+'/api/showcompanyprofile',
    updatecompanyprofile:this.base_url+'/api/updatecompanyprofile',

    newcompanybank:this.base_url+'/api/newcompanybank',
    editcompanybank:this.base_url+'/api/editcompanybank',
    showcompanybank:this.base_url+'/api/showcompanybank',
    updatecompanybank:this.base_url+'/api/updatecompanybank',
    deletecompanybank:this.base_url+'/api/deletecompanybank',

    newvendorbank:this.base_url+'/api/newvendorbank',
    editvendorbank:this.base_url+'/api/editvendorbank',
    showvendorbank:this.base_url+'/api/showvendorbank',
    updatevendorbank:this.base_url+'/api/updatevendorbank',
    deletevendorbank:this.base_url+'/api/deletevendorbank',

    newvendor:this.base_url+'/api/newvendor',
    editvendor:this.base_url+'/api/editvendor',
    updatevendor:this.base_url+'/api/updatevendor',
    showvendor:this.base_url+'/api/showvendor',
    deletevendor:this.base_url+'/api/deletevndor',
  
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
    searchmemoissue:this.base_url+'/api/searchmemoissue',

    getcompany : this.base_url+'/api/getcompany',
    generateInvoice : this.base_url+'/api/getInvoiceNumber'
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







  //////Company Profile
  editcompanyprofile(data){
    return this._http.get(this.apis.editcompanyprofile+'/'+data)
    .map((response:Response)=>response.json());
  }

  updatecompanyprofile(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatecompanyprofile+'/'+id.id,data,options)
    .map((response:Response) => response.json());
  }

  showcompanyprofile(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcompanyprofile,data,options)
    .map((response:Response) => response.json());
  }




///////////Company Bank Details

 newcompanybank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newcompanybank,data,options)
    .map((response:Response) => response.json());
  }

  showcompanybank(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcompanybank,data,options)
    .map((response:Response) => response.json());
  }

  editcompanybank(data){
    return this._http.get(this.apis.editcompanybank+'/'+data)
    .map((response:Response) => response.json());
  }

  updatecompanybank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatecompanybank+'/'+id.id,data,options)
    .map((response:Response) => response.json());
  }

  deletecompanybank(data){
      return this._http.delete(this.apis.deletecompanybank+'/'+data)
    .map((response:Response) => response.json());
  }






  ///////Vendor Profile
 newvendor(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newvendor,data,options)
    .map((response:Response) => response.json());
  }

  // searchvendor(data){
  //   return this._http.get(this.apis.search+'?'+data.filterby+'='+data.searchterm)
  //      .map((response:Response) => response.json());
  // }

  showvendor(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showvendor,data,options)
    .map((response:Response) => response.json());
  }

  editvendor(data){
    return this._http.get(this.apis.editvendor+'/'+data)
    .map((response:Response) => response.json());
  }

  updatevendor(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatevendor+'/'+id.id,data,options)
    .map((response:Response) => response.json());
  }

  deletevendor(data){
      return this._http.delete(this.apis.deletevendor+'/'+data)
    .map((response:Response) => response.json());
  }




///////////Vendor Bank Details

 newvendorbank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newvendorbank,data,options)
    .map((response:Response) => response.json());
  }

  showvendorbank(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showvendorbank,data,options)
    .map((response:Response) => response.json());
  }

  editvendorbank(data){
    return this._http.get(this.apis.editvendorbank+'/'+data)
    .map((response:Response) => response.json());
  }

  updatevendorbank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatevendorbank+'/'+id.id,data,options)
    .map((response:Response) => response.json());
  }

  deletevendorbank(data){
      return this._http.delete(this.apis.deletevendorbank+'/'+data)
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







   showreceivable(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showreceivable,data,options)
    .map((response:Response) => response.json());
  }

  searchreceivable(data){
    return this._http.get(this.apis.searchreceivable+'?'+data.filterby+'='+data.searchterm)
       .map((response:Response) => response.json());
  }




  showledger(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showledger,data,options)
    .map((response:Response) => response.json());
  }




  searchbills(data){
    return this._http.get(this.apis.searchbills+'?'+data.filterby+'='+data.searchterm)
    .map((response:Response) => response.json());
  }

  showbills(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showbills,data,options)
    .map((response:Response) => response.json());
  }

  newbill(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newbill,data,options)
    .map((response:Response) => response.json());
  }


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

  memoinchangestatus(stockid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoinchangestatus,stockid,options);
  }

  memoissuechangestatus(stockid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoissuechangestatus,stockid,options);
  }

  showmemoin(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showmemoin,data,options)
    .map((response:Response) => response.json());
  }

  searchmemoin(data){
    console.log(data);
    return this._http.get(this.apis.searchmemoin+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  showmemoissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showmemoissue,data,options)
    .map((response:Response) => response.json());
  }

  searchmemoissue(data){
    console.log(data);
    return this._http.get(this.apis.searchmemoissue+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

 /*******************************
  *Lab Issue Module Web services*
  *******************************/

  changelabissuestatus(stockid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.changelabissuestatus,stockid,options);
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
  *Purchase Module Web services*
  ******************************/

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

  fetchpurchase(stockid,pcstype){
    if(pcstype == "singlestone"){
      return this._http.get(this.apis.purchasereport+"?stockid="+stockid)
       .map((response:Response) => response.json());
    }else{
      return this._http.get(this.apis.purchasereport+"?lot_number="+stockid)
       .map((response:Response) => response.json());
    }
  }


  
 /**************************
  *Sales Module Web services*
  ***************************/

  showsales(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showsales,data,options)
    .map((response:Response) => response.json());
  }

  searchsales(data){
    console.log(data);
    return this._http.get(this.apis.searchsales+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
       .map((response:Response) => response.json());
  }

  showsalesretrun(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showsales,data,options)
    .map((response:Response) => response.json());
  }

  searchsalesreturn(data){
    console.log(data);
    return this._http.get(this.apis.searchsales+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType)
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


  getCompany(){
    return this._http.get(this.apis.getcompany)
    .map((response:Response) => response.json());
  }

  generateInvoice(table){
    return this._http.get(this.apis.generateInvoice+"?table="+table)
    .map((response:Response) => response.json());
  }

  dateConversion(date){
    console.log(date);
    var date:any = new Date(date);    
    var dateString = date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate();
    return dateString;
  }

}
