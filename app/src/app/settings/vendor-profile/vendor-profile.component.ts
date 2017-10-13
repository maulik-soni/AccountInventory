import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Vendor,VendorTitles} from '../vendor.model';
import { Bank } from "../bank.model";

import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  
  vendordata;
  ventitles=VendorTitles;
  isAdd=true;
  vendorProfile:FormGroup;
  // vendorBank:FormGroup;

  constructor(
    private _vendor:WebServicesService,
    private _fb:FormBuilder,
    private _router:Router
  ) { 
    this.createVendorForm();
    // this.createBanksForms();
  }

  ngOnInit() {
    this.showvendors();
  }

  showvendors(){
     let requesttype={onload:"onload"};
     this._vendor.showvendor(JSON.stringify(requesttype)).
     subscribe(response=>{this.vendordata=response.response.vendors});
     
  }

  addClient(){
    this.isAdd=false;
  }

  createVendorForm(){
    this.vendorProfile=this._fb.group({vendors:this._fb.array([])});
}

get vendors(){
  return this.vendorProfile.get('vendors') as FormArray;
}

addVendor(){
  this.vendors.push(this._fb.group(new Vendor(null,'vikas','','','','','','','','',null,null,'','','',
  '','','','',null,null,'','','',
  )));
}

  removeVendor(i: number) {
       this.vendors.removeAt(i);
     }

  viewprofile(g){
    this._router.navigate(['settings/vendors-profile',g.id]);
  }

// createBanksForms(){
//   this.vendorBank=this._fb.group({
//     banks:this._fb.array([]),
//   });
// }

// get banks() {
//     return this.vendorBank.get('banks') as FormArray;
//   };

//   addBank(){
//     this.banks.push(this._fb.group(new Bank('vikas','','','','',null)));
//   }

//  removeBank(i: number) {
//         this.banks.removeAt(i);
//     }



  onSubmit(){
    this._vendor.newvendor(JSON.stringify(this.vendorProfile.value))
     .subscribe(response=>{console.log(response);
      this.vendors.reset();
      this.createVendorForm();
    this.showvendors();})

      // this._vendor.newvendorbank(JSON.stringify(this.vendorBank.value))
      // .subscribe(response=>{console.log(response)});
    
  }


}
