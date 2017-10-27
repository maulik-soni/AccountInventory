import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

@Component({
  selector: 'vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  @Input('vendorgroup') vendorform :FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
