import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { SalesComponent } from './sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesRoutingModule } from './sales-routing.module';
// import { DatepickerModule } from 'angular2-material-datepicker';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import {MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    DashboardStructureModule,
    SelectModule,
    FormsModule,
    SalesRoutingModule,
    // DatepickerModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdInputModule
  ],
  declarations: [
    SalesComponent,
    SalesReportComponent,
    SalesReturnComponent, 
    SalesDetailsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdDatepickerModule,
    MdInputModule,
    ReactiveFormsModule
  ]
})
export class SalesModule { }
