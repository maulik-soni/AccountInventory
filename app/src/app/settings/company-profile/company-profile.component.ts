import { Component, OnInit} from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CompanyProfile } from '../company.model';
import { Bank } from "../bank.model";

import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  
  data;
  isEditable=true;
  companyProfile:FormGroup;
  companyBank:FormGroup;

  constructor(
    private _company:WebServicesService,
    private _fb:FormBuilder,
    ) { 
      this.createProfileForm();
    this.createBankForms(); }

  ngOnInit() {
    let requesttype={onload:"onload"};
    this._company.showcompanyprofile(JSON.stringify(requesttype))
    .subscribe(response=>{
      this.data=response.response.details;
      this.companyProfile.patchValue(this.data);
  });
}


  createProfileForm(){
    this.companyProfile=this._fb.group(new CompanyProfile('',null,'',null,null,'','','','','','',''));
    this.Disable();
  }

  createBankForms(){
    this.companyBank=this._fb.group({
      banks: this._fb.array([]),
    });
  }

   get banks() {
    return this.companyBank.get('banks') as FormArray;
  };

  addBank(){
    this.banks.push(this._fb.group(new Bank('vikas','','','','',null,null)));
  }

  onProfileEdit(){
     this.isEditable=false;
     this.companyProfile.enable();
  }

  Disable(){
    this.isEditable=true;
    this.companyProfile.disable();
  }

  onProfileSubmit(){
    this._company.updatecompanyprofile(JSON.stringify(this.companyProfile.value))
    .subscribe(response=>{console.log(response);
    this.Disable();})  
  }

  onBankSubmit(){
    this._company.newcompanybank(JSON.stringify(this.companyBank.value))
    .subscribe(response=>{console.log(response);})
  }



}
