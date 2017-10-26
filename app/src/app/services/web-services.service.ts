import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  private login_url = "http://127.0.0.1:8000"
  private base_url = this.login_url
  private api_token_header(){
    return '?api_token='+this.gettoken()+'&&dbcountry='+this.getcountry()}
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

    newcompanyprofile:this.base_url+'/api/newcompanyprofile',
    editcompanyprofile:this.base_url+'/api/editcompanyprofile',
    showcompanyprofile:this.base_url+'/api/showcompanyprofile',
    updatecompanyprofile:this.base_url+'/api/updatecompanyprofile',
    deletecompanyprofile:this.base_url+'/api/deletecompanyprofile',

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

    getcompanybanks:this.base_url+'/api/getcompanybanks',
    getcompanybank:this.base_url+'/api/getcompanybank',
    getcompanybankaccount:this.base_url+'/api/getcompanybankaccount',
    getcompanybranches:this.base_url+'/api/getcompanybranches',
    getcompanyamount:this.base_url+'/api/getbankamount',
  
    newuser:this.base_url+'/api/newuser',
    searchuser:this.base_url+'/api/searchuser',
    showuser:this.base_url+'/api/showuser',
    edituser:this.base_url+'/api/edituser',
    updateuser:this.base_url+'/api/updateuser',
    deleteuser:this.base_url+'/api/deleteuser',
    logoutuser:this.base_url+'/api/logout',

    resetpassword:this.base_url+'/api/resetpassword',

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
  ///?api_token='+this.gettoken()+'&&country='+this.getcountry(),
  //////////////
  gettoken(){
    let token=localStorage.getItem('currentUser');
    // console.log(token);
    if(token!=null){
        return token.slice(1,token.length-1);
    }
  }

  getcountry(){
    let country=localStorage.getItem('dbcountry');
     if(country!=null){
        return country;
    }
  }

  getcompanybanks(){
    return this._http.get(this.apis.getcompanybanks+this.api_token_header())
    .map((response:Response)=>response.json());
  }

  getcompanybankaccount(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.getcompanybankaccount+this.api_token_header(),data,options)
    .map((response:Response)=>response.json());
  }

  getcompanybank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.getcompanybank+this.api_token_header(),data,options)
    .map((response:Response)=>response.json());
  }


  getcompanybranches(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.getcompanybranches+this.api_token_header(),data,options)
    .map((response:Response)=>response.json());
  }
  
  getcompanyamount(data){
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.apis.getcompanyamount+this.api_token_header());
    return this._http.post(this.apis.getcompanyamount+this.api_token_header(),data,options)
    .map((response:Response)=>response.json());
    // return this._http.post(this.apis.getcompanyamount+this.api_token_header(),data,options)
    // .map((response:Response)=>response.json());
    //  console.log(data);
    // console.log(data);
  }

  newuser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newuser+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchuser(data){
    return this._http.get(this.apis.searchuser+'?'+data.filterby+'='+data.searchterm+this.api_token_header())
       .map((response:Response) => response.json());
  }

  showuser(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showuser+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  edituser(data){
    return this._http.get(this.apis.edituser+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }

  updateuser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updateuser+'/'+id.id+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  deleteuser(data){
    console.log(this.apis.deleteuser+'/'+data);
      return this._http.delete(this.apis.deleteuser+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }

  logoutuser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.logoutuser+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  resetpassword(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.resetpassword+'?country='+this.getcountry(),data,options)
    .map((response:Response) => response.json());
  }







  //////Company Profile

   newcompanyprofile(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newcompanyprofile+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }
  editcompanyprofile(data){
    return this._http.get(this.apis.editcompanyprofile+'/'+data+this.api_token_header())
    .map((response:Response)=>response.json());
  }

  updatecompanyprofile(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    console.log(id);
    return this._http.put(this.apis.updatecompanyprofile+'/'+id.id+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  showcompanyprofile(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcompanyprofile+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  deletecompanyprofile(data){
    console.log(this.apis.deletecompanyprofile+'/'+data);
      return this._http.delete(this.apis.deletecompanyprofile+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }





///////////Company Bank Details

 newcompanybank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newcompanybank+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  showcompanybank(data){
    console.log(this.apis.showcompanybank+this.api_token_header());
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcompanybank+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  editcompanybank(data){
    return this._http.get(this.apis.editcompanybank+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }

  updatecompanybank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    console.log(this.apis.updatecompanybank+'/'+id.id+this.api_token_header());
    console.log(data);
    console.log(options);
    return this._http.put(this.apis.updatecompanybank+'/'+id.id+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  deletecompanybank(data){
    console.log(data);
      return this._http.delete(this.apis.deletecompanybank+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }






  ///////Vendor Profile
 newvendor(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newvendor+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  // searchvendor(data){
  //   return this._http.get(this.apis.search+'?'+data.filterby+'='+data.searchterm)
  //      .map((response:Response) => response.json());
  // }

  showvendor(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showvendor+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  editvendor(data){
    return this._http.get(this.apis.editvendor+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }

  updatevendor(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatevendor+'/'+id.id+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  deletevendor(data){
      return this._http.delete(this.apis.deletevendor+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }




///////////Vendor Bank Details

 newvendorbank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newvendorbank+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  showvendorbank(data){
      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showvendorbank+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  editvendorbank(data){
    return this._http.get(this.apis.editvendorbank+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }

  updatevendorbank(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let id=JSON.parse(data);
    return this._http.put(this.apis.updatevendorbank+'/'+id.id+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  

  deletevendorbank(data){
      return this._http.delete(this.apis.deletevendorbank+'/'+data+this.api_token_header())
    .map((response:Response) => response.json());
  }



  //Cashbook

  newcashbook(data):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newcashbook+this.api_token_header(),data,options)
     .map((response:Response) => response.json());
  }

  showcashbook(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showcashbook+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchcashbook(data){
    return this._http.get(this.apis.searchcashbook+'?'+data.filterby+'='+data.searchterm+'&&api_token='+this.gettoken()+'&&dbcountry='+this.getcountry())
       .map((response:Response) => response.json());
  }







  //Inventory
showinventory(data){
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showinventory+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }




 ///////////
 ///Acoounts
 //////////


  showpayable(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpayable+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }


  searchpayable(data){
    return this._http.get(this.apis.searchpayable+'?'+data.filterby+'='+data.searchterm+'&&api_token='+this.gettoken()+'&&dbcountry='+this.getcountry())
       .map((response:Response) => response.json());
  }







   showreceivable(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showreceivable+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchreceivable(data){
    return this._http.get(this.apis.searchreceivable+'?'+data.filterby+'='+data.searchterm+'&&api_token='+this.gettoken()+'&&dbcountry='+this.getcountry())
       .map((response:Response) => response.json());
  }




  showledger(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showledger+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }




  searchbills(data){
    return this._http.get(this.apis.searchbills+'?'+data.filterby+'='+data.searchterm+this.api_token_header())
    .map((response:Response) => response.json());
  }

  showbills(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showbills+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  newbill(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.newbill+this.api_token_header(),data,options)
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
      this._http.post(this.apis.postnewmemoissue+this.api_token_header(),data,options).subscribe();
    }else{
      this._http.post(this.apis.postnewmemoin+this.api_token_header(),data,options).subscribe();
    }
  }

  postmemoissue(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewmemoissue+this.api_token_header(),data,options).subscribe();
  }

  memoinreport(){
    return this._http.get(this.apis.memoinreport+this.api_token_header())
      .map((response:Response) => response.json());
  }

  memoissuereport(){
    return this._http.get(this.apis.memoissuereport+this.api_token_header())
      .map((response:Response) => response.json());
  }

  memoinchangestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoinchangestatus+this.api_token_header(),pcsid,options);
  }

  memoissuechangestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.memoissuechangestatus+this.api_token_header(),pcsid,options);
  }

  showmemoin(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showmemoin+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchmemoin(data){
    console.log(data);
    return this._http.get(this.apis.searchmemoin+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

  showmemoissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showmemoissue+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchmemoissue(data){
    console.log(data);
    return this._http.get(this.apis.searchmemoissue+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

 /*******************************
  *Lab Issue Module Web services*
  *******************************/

  changelabissuestatus(pcsid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.changelabissuestatus+this.api_token_header(),pcsid,options);
  }

  createlabissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.createlabissue+this.api_token_header(),data,options).subscribe();
  }

  reportlab(){
    console.log("GET");
    return this._http.get(this.apis.reportlab+this.api_token_header())
      .map((response:Response) => response.json());
  }

  showlabissue(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showlabissue+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchlabissue(data){
    console.log(data);
    return this._http.get(this.apis.searchlabissue+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }


 /******************************
  *Purchase Module Web services*
  ******************************/

  showpurchase(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchpurchase(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

  showpurchaseretrun(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showpurchase+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchpurchasereturn(data){
    console.log(data);
    return this._http.get(this.apis.searchpurchase+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

  postpurchasedata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewpurchase+this.api_token_header(),data,options).subscribe();
  }

  purchaseReturn(Stock_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.purchaseretrun+this.api_token_header(),Stock_ID,options).subscribe();
  }

  purchaseretrunreport(){
    console.log(this.apis.purchaseretrunreport);
    return this._http.get(this.apis.purchaseretrunreport+this.api_token_header())
      .map((response:Response) => response.json());
  }

  getpurchasereport(){    
    return this._http.get(this.apis.purchasereport+this.api_token_header())
      .map((response:Response) => response.json());
  }

  fetchpurchase(pcsid,pcstype){
    if(pcstype == "singlestone"){
      return this._http.get(this.apis.purchasereport+"?pcsid="+pcsid+this.api_token_header())
       .map((response:Response) => response.json());
    }else{
      return this._http.get(this.apis.purchasereport+"?lot_number="+pcsid+this.api_token_header())
       .map((response:Response) => response.json());
    }
  }


  
 /**************************
  *Sales Module Web services*
  ***************************/

  showsales(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showsales+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchsales(data){
    console.log(data);
    return this._http.get(this.apis.searchsales+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

  showsalesretrun(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.apis.showsales+this.api_token_header(),data,options)
    .map((response:Response) => response.json());
  }

  searchsalesreturn(data){
    console.log(data);
    return this._http.get(this.apis.searchsales+'?'+data.filterby+'='+data.searchterm+'&reportType='+data.reportType+this.api_token_header())
       .map((response:Response) => response.json());
  }

  getsalesreport(){    
    return this._http.get(this.apis.salesreport+this.api_token_header())
      .map((response:Response) => response.json());
  }

  postsalesdata(data){
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.postnewsales+this.api_token_header(),data,options).subscribe();
  }

  salesReturn(Stock_ID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post(this.apis.salesreturn+this.api_token_header(),Stock_ID,options).subscribe();
  }

  salesretrunreport(){
    console.log(this.apis.salesretrunreport)
    return this._http.get(this.apis.salesretrunreport+this.api_token_header())
      .map((response:Response) => response.json());
  }


  

  dateConversion(date){
    console.log(date);
    var date:any = new Date(date);    
    var dateString = date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate();
    return dateString;
  }

}
