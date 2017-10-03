import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// import{ Bank } from '../bank.model';
// import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector: 'bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  @Input('group') bankform :FormGroup;

  constructor() { }

  ngOnInit() {

    console.log(this.bankform);
    
  }


}
