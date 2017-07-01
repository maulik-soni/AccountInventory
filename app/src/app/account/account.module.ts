import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DatepickerModule } from 'angular2-material-datepicker';
// import { DatePickerModule } from 'ng2-datepicker';
// import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
// import { DashboardComponent } from'./../dashboard/dashboard.component';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import {MaterialModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { MdRadioModule, DateAdapter, NativeDateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { AccountRoutingModule } from './account-routing.module';
// import { NgForm } from '@angular/forms';


import { PayableComponent} from './payable/payable.component';
import { RecievableComponent } from './recievable/recievable.component';

import { WebServicesService } from './../services/web-services.service';
import { LedgerComponent } from './ledger/ledger.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    AccountRoutingModule
  ],
  declarations: [PayableComponent,RecievableComponent, LedgerComponent],
  providers:[WebServicesService,
  {provide: DateAdapter, useClass: NativeDateAdapter},
]
})
export class AccountModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
         dateAdapter.setLocale('en-IN');
    }
 }
