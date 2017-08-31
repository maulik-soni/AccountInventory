import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Vendor } from '../vendor.model';
import { Bank } from "../bank.model";

import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  
  isAdd=true;
  vendorProfile:FormGroup;
  vendorBank:FormGroup;

  constructor(
    private _vendor:WebServicesService,
    private _fb:FormBuilder
  ) { 
    this.createVendorForm();
    this.createBanksForms();
  }

  ngOnInit() {
  }

  addClient(){
    this.isAdd=false;
  }

  createVendorForm(){
    this.vendorProfile=this._fb.group(new Vendor('vikas','','','','','','','','',null,null,'','','',
  '','','','',null,null,'','','',
  ));
}

createBanksForms(){
  this.vendorBank=this._fb.group({
    banks:this._fb.array([]),
  });
}

get banks() {
    return this.vendorBank.get('banks') as FormArray;
  };

  addBank(){
    this.banks.push(this._fb.group(new Bank('vikas','','','','',null,null)));
  }

 removeBank(i: number) {
        this.banks.removeAt(i);
    }



  onSubmit(){
    this._vendor.newvendor(JSON.stringify(this.vendorProfile.value))
     .subscribe(response=>{console.log(response);
      this.isAdd=true;})
    
  }


}
