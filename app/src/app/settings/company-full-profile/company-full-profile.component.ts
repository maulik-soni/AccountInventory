import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WebServicesService } from './../../services/web-services.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bank,BankTitles } from "../bank.model";
import { CompanyProfile } from '../company.model';
import { SharedService } from './../../shared/shared.service';

@Component({
  selector: 'app-company-full-profile',
  templateUrl: './company-full-profile.component.html',
  styleUrls: ['./company-full-profile.component.css']
})
export class CompanyFullProfileComponent implements OnInit {

  companiesprofiledata;
  companiesbankdata;
  isEditable=true;
  isEditableBank=false;
  companyProfile:FormGroup;
  companyBank:FormGroup;
  editBank:FormGroup;
  titles=BankTitles;
  
  

  constructor(
    private showprofile:  WebServicesService,
     private route: ActivatedRoute,
     private _router:Router,
     private _shared:SharedService,
     private _fb:FormBuilder,
  ) {
    this.createcompanyForm();
    this.createBankForms();
    this.createedit();
   }

  
  ngOnInit() {
     this.route.paramMap
      .switchMap((params: ParamMap) => this.showprofile.editcompanyprofile(+params.get('id')))
      .subscribe(response=> {this.companiesprofiledata=response.response.response;
         this.companyProfile.patchValue(this.companiesprofiledata);
         this.showbank(this.companiesprofiledata.id);
      // console.log(this.companiesprofiledata);
    });

  }

  showbank(ids){
    console.log(ids);
  let requesttype={onload:"onload",id:ids};
 this.showprofile.showcompanybank(JSON.stringify(requesttype))
  .subscribe(response=>{
    this.companiesbankdata=response.response.bankdetails;
    console.log(response);
  });
}

createcompanyForm(){
    this.companyProfile=this._fb.group(new CompanyProfile(null,'','',null,null,'','','','','','',''));
    this.Disable();
  }

  createedit(){
    this.editBank=this._fb.group(new Bank(null,'','','','','',null,null));
  }

  onedit(data){
    this.editBank.patchValue(data);
    this.isEditableBank=true;
    
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
    this.banks.push(this._fb.group(new Bank(this.companiesprofiledata.id,'','','','','',null,null)));
  }

  onProfileEdit(){
     this.isEditable=false;
     this.companyProfile.enable();
  }

  ondeletebank(data){
    this.showprofile.deletecompanybank(data.id)
    .subscribe(response=>{
      this._shared.notify('Bank '+response,'success');
      this.ngOnInit();
    })
  }

  removeBank(i: number) {
    this.banks.removeAt(i);
  }

  Disable(){
    this.isEditable=true;
    this.companyProfile.disable();
  }

  profilesave(){
    
    this.showprofile.updatecompanyprofile(JSON.stringify(this.companyProfile.value))
    .subscribe(response=>{
      this._shared.notify('Company Details '+response,'success');
    this.Disable();})  
  }

  onEditSubmit(){
    // console.log(this.editBank.value);
    this.showprofile.updatecompanybank(JSON.stringify(this.editBank.value))
    .subscribe(response=>{
      this._shared.notify('Bank Details '+response,'success');
      this.editBank.reset();
      this.ngOnInit();
      this.isEditableBank=false;
    })
  }

  onBankSubmit(){
    this.showprofile.newcompanybank(JSON.stringify(this.companyBank.value))
    .subscribe(response=>{ this.createBankForms();
    this.showbank(this.companiesprofiledata.id);})
  }

}
