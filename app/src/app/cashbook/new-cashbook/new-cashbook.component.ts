import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WebServicesService } from './../../services/web-services.service';
import { cashbook } from './cashbook.model';

@Component({
  selector: 'app-new-cashbook',
  templateUrl: './new-cashbook.component.html',
  styleUrls: ['./new-cashbook.component.css']
})
export class NewCashbookComponent implements OnInit {
  cashbook=new cashbook(null,'','',new Date().toLocaleDateString(),'');
  cashbookdata;
  minDate;
  maxDate;
  constructor(
    private _cashbookservice:WebServicesService
  ) { }

  ngOnInit() {

this.maxDate = new Date();
  }

  onSubmit(form:NgForm){
      this.cashbook.date=new Date(this.cashbook.date.valueOf()).toLocaleDateString();
    this.cashbookdata=JSON.stringify(this.cashbook);
    this._cashbookservice.newcashbook(this.cashbookdata).subscribe(response=>console.log(response));
    console.log(this.cashbookdata);
    form.reset();
    this.cashbook=new cashbook(null,'','',new Date().toLocaleDateString(),'');
  }

}
