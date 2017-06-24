import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-payable-bill',
  templateUrl: './payable-bill.component.html',
  styleUrls: ['./payable-bill.component.css'],
})
export class PayableBillComponent implements OnInit {
search;
mydata =  [];
contents;
  constructor(
    private _webservice : WebServicesService
  ) { }

  ngOnInit():any {
    this.search="uik";
  }
  onSubmit(form:NgForm){
        this._webservice.getpayablebill(this.search)
      .subscribe( 
        response => {console.log(response)},
        error=>{console.log(error)});
      this.contents=JSON.stringify(this.mydata);
      console.log(this.mydata);
  }

}
