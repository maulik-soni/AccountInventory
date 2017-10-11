import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { WebServicesService } from './../services/web-services.service';
import { PasswordFields,Countries } from './forgetpassword.model';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  private countries=Countries;
  private fields:PasswordFields;

  constructor(
    private route:Router,
    private passwordservice:WebServicesService
  ) { }

  ngOnInit() {
    this.fields={email:"",country:this.countries[0]};
    localStorage.setItem('country',this.fields.country)
  }
  countryChange(){
    localStorage.setItem('country',this.fields.country)
  }

  getCountry(){
    let store= localStorage.getItem('country');
    return store.slice(1,store.length-1);
 }

 onSubmit(form:NgForm){
   this.passwordservice.resetpassword(this.fields.email)
   .subscribe(
    response=>{
      console.log(response);
    });
 }
}
