import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInFields,Countries } from './signin.model';
import { SharedModule } from './../shared/shared.module';
import { AuthService } from "./../authorization/auth.service";

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  private countries=Countries;
  private role:string;
  private error:string;
  private fields:SignInFields;

  
  constructor(private authservice:AuthService,
              private route:Router,
             
              ) { }

 
 
  ngOnInit():any {
    this.fields={email:"",password:"",country:this.countries[0]};
    localStorage.setItem('dbcountry',this.fields.country)
  }

  countryChange(){
    localStorage.setItem('dbcountry',this.fields.country)
  }

  getCountry(){
     let store= localStorage.getItem('dbcountry');
     return store.slice(1,store.length-1);
  }

  onSubmit(form:NgForm){
    this.authservice.authenticate(this.fields.email,this.fields.password)
    .subscribe(
      response=>{
        this.role=this.authservice.HasRole();
        // let redirect='/'+this.role;
        let redirect = '/inventory';
        this.route.navigate([redirect]);
      },
      error=>{
          this.error=error;
          this.resetFields();
          form.controls['email'].reset();
          form.controls['password'].reset();
          // this.fields.country=this.getCountry();
      },
    );
    

  }

  resetFields(){
    this.fields.email="";
    this.fields.password="";
  }

}
