import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vendor-bank-details',
  templateUrl: './vendor-bank-details.component.html',
  styleUrls: ['./vendor-bank-details.component.css']
})
export class VendorBankDetailsComponent implements OnInit {
  @Input('group') bankform :FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
