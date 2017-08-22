import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Company } from '../company.model';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  companydata=new Company('','',null,null,'','','','','','','');
  data;
  isEditable=true;

  constructor(
    private _company:WebServicesService,
    private _router:Router
  ) { }

  ngOnInit() {
    let requesttype;
    requesttype={
      onload:"onload"
    }
    this._company.showcompanyprofile(JSON.stringify(requesttype))
    .subscribe(response=>{this.data=response.response.details;
    this.companydata=this.data});
  }

  onedit(){
    this.isEditable=false;
  
}

onSubmit(){
    this._company.updatecompanyprofile(JSON.stringify(this.companydata))
    .subscribe(response=>{console.log(response);
     this.isEditable=true;})
    
  }

}
