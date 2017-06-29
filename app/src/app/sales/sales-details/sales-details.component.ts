import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit {

  @Input('group')
  public salesDetails: FormGroup;
  public searchResult = false;
  public piecetype = "singlestone";
  constructor() { }
  ngOnInit() {
  }

  search(){
    this.searchResult = true;
  }

}
