import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { SalesComponent } from './sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesRoutingModule } from './sales-routing.module';
import { DatepickerModule } from 'angular2-material-datepicker';


@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    DashboardStructureModule,
    SelectModule,
    FormsModule,
    SalesRoutingModule,
    DatepickerModule
  ],
  declarations: [SalesComponent,SalesReportComponent,SalesReturnComponent]
})
export class SalesModule { }
