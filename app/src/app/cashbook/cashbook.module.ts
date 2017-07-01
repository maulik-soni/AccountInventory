import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { MdRadioModule, DateAdapter, NativeDateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { CashbookRoutingModule } from './cashbook-routing.module';

import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook-report/cashbook-report.component';
import { WebServicesService } from './../services/web-services.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    CashbookRoutingModule,
  ],
  declarations: [NewCashbookComponent, CashbookReportComponent],
  providers:[WebServicesService,
  {provide: DateAdapter, useClass: NativeDateAdapter},
]
})
export class CashbookModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
         dateAdapter.setLocale('en-ca');
    }
 }
