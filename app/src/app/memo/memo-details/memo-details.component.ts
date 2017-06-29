import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-memo-details',
  templateUrl: './memo-details.component.html',
  styleUrls: ['./memo-details.component.css']
})
export class MemoDetailsComponent implements OnInit {

  @Input('mygroup')
  public memoDetails: FormGroup;
  private piecetype:any = "singlestone";

  private searchResult = false;

  constructor(private _router: Router) {
    console.log(this._router.url);
  }

  search(){
    this.searchResult = true;
  }

  ngOnInit() {
  }

}
