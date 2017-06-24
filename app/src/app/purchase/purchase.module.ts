import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerModule } from 'angular2-material-datepicker';
import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { PurchaseRoutingModule } from './purchase-routing.module';

import { PurchaseComponent } from './purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatePickerModule,
    DatepickerModule,
    SelectModule,
    FormsModule,
    PurchaseRoutingModule
  ],
  declarations: [
    PurchaseComponent,
    PurchaseReportComponent,
    PurchaseReturnComponent
  ]
})
export class PurchaseModule { }
