import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'app-recievable-bill',
  templateUrl: './recievable-bill.component.html',
  styleUrls: ['./recievable-bill.component.css']
})
export class RecievableBillComponent implements OnInit {
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
        this._webservice.getrecievablebill(this.search)
      .subscribe( 
        response => {console.log(response)},
        error=>{console.log(error)});
      this.contents=JSON.stringify(this.mydata);
      console.log(this.mydata);
  }


}
