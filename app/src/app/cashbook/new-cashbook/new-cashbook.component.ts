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
  cashbook=new cashbook(null,'','');
  cashbookdata;
  constructor(
    private _cashbookservice:WebServicesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.cashbookdata=JSON.stringify(this.cashbook);
    this._cashbookservice.postcashbook(this.cashbookdata);
  }

}
