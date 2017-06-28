import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-memo-details',
  templateUrl: './memo-details.component.html',
  styleUrls: ['./memo-details.component.css']
})
export class MemoDetailsComponent implements OnInit {

  @Input('mygroup')
  public memoDetails: FormGroup;
  private piecetype:any = "singlestone";

  

  constructor() { }

  ngOnInit() {
  }

}
