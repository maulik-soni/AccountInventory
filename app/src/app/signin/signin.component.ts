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
  }

  onSubmit(form:NgForm){
    this.authservice.authenticate(this.fields.email,this.fields.password)
    .subscribe(
      response=>{
        this.role=this.authservice.HasRole();
        // let redirect='/'+this.role;
        let redirect = '/dashboard';
        this.route.navigate([redirect]);
      },
      error=>{
          this.error=error;
          this.resetFields();
          form.reset();
      },
    );
    

  }

  resetFields(){
    this.fields.email="";
    this.fields.password="";
  }

}
