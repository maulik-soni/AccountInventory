import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService{
    private loginUrl = 'http://127.0.0.1:8000/api/login';

    constructor(private http:Http){}

    getcountry(){
    let country=localStorage.getItem('country');
     if(country!=null){
        return country;
    }
  }

    authenticate(email:string,password:string){
        let headers= new Headers({'X-Requested-With': 'XMLHttpRequest'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.loginUrl+'?country='+this.getcountry(),{email:email,password:password},options)
                        .map(this.extractData)
                        .catch(this.handleError);
                        
    }

      private extractData(res: Response) {
    let body = res.json();
    if(body && body.token && body.role){
      localStorage.setItem('currentUser',JSON.stringify(body.token));
      localStorage.setItem('role',JSON.stringify(body.role));
    }
       return body;
   
  }


      private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

   public isLoggedIn(){
     return localStorage.getItem('currentUser')===null?false:true;
   }

   public HasRole(){
     if(this.isLoggedIn()){
     let store= localStorage.getItem('role');
     return store.slice(1,store.length-1);
    }
   }
   
}