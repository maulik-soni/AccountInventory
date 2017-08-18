import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Vendor } from '../vendor.model';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  vendordata=new Vendor('vikas','','','','','','','','',null,null,'','','',
  '','','','',null,null,'','','',
  )
  isAdd=true;

  constructor(
    private _vendor:WebServicesService,
    private_router:Router
  ) { }

  ngOnInit() {
  }

  addClient(){
    this.isAdd=false;
  }

  onSubmit(){
    this._vendor.newvendor(JSON.stringify(this.vendordata))
    .subscribe(response=>{console.log(response);
     this.isAdd=true;})
    
  }


}
