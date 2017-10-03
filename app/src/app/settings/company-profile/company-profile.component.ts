import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CompanyProfile,CompanyTitles} from '../company.model';
import { Bank } from "../bank.model";

import { WebServicesService } from './../../services/web-services.service';
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  companydata;
  comtitles=CompanyTitles;
  isAdd=true;
  companyProfile:FormGroup;
  // companyBank:FormGroup;

  constructor(
    private _company:WebServicesService,
    private _fb:FormBuilder,
    private _router:Router
  ) { 
    this.createcompanyForm();
    // this.createBanksForms();
  }

  ngOnInit() {
    this.showcompanies();
  }

  showcompanies(){
     let requesttype={onload:"onload"};
     this._company.showcompanyprofile(JSON.stringify(requesttype)).
     subscribe(response=>{this.companydata=response.response.companies;
    console.log(response)});
  }

  addClient(){
    this.isAdd=false;
  }

  createcompanyForm(){
    this.companyProfile=this._fb.group({companies:this._fb.array([])});
}

get companies(){
  return this.companyProfile.get('companies') as FormArray;
}

addcompany(){
  this.companies.push(this._fb.group(new CompanyProfile('','','',null,null,'','','','','','')));
}

  removecompany(i: number) {
       this.companies.removeAt(i);
     }

  viewprofile(g){
    this._router.navigate(['settings/company-profile',g.id]);
  }

// createBanksForms(){
//   this.companyBank=this._fb.group({
//     banks:this._fb.array([]),
//   });
// }

// get banks() {
//     return this.companyBank.get('banks') as FormArray;
//   };

//   addBank(){
//     this.banks.push(this._fb.group(new Bank('vikas','','','','',null)));
//   }

//  removeBank(i: number) {
//         this.banks.removeAt(i);
//     }



  onSubmit(){
  //  this.companyProfile.setValue({
  //    from: new Date(this.companyProfile.value.companies[0].from.valueOf()).toLocaleDateString('en-ca'),
  //  });

   console.log(this.companyProfile.value);
    // this._company.newcompanyprofile(JSON.stringify(this.companyProfile.value))
    //  .subscribe(response=>{console.log(response);
    //   this.companies.reset();
    //   this.createcompanyForm();
    // this.showcompanies();})

      // this._company.newcompanybank(JSON.stringify(this.companyBank.value))
      // .subscribe(response=>{console.log(response)});
    
  }
}
