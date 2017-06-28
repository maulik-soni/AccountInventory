import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { MemoComponent } from './memo/memo.component';
import { MemoRoutingModule } from './memo-routing.module';
import { DatepickerModule } from 'angular2-material-datepicker';
import { MemoissueReportComponent } from './memoissue-report/memoissue-report.component';
import { MemoinReportComponent } from './memoin-report/memoin-report.component';
import { MemoDetailsComponent } from './memo-details/memo-details.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatePickerModule,
    SelectModule,
    FormsModule,
    MemoRoutingModule,
    DatepickerModule,
    BrowserModule, 
    ReactiveFormsModule
  ],
  declarations: [
    MemoComponent,    
    MemoissueReportComponent,
    MemoinReportComponent,
    MemoDetailsComponent
  ],

})

export class MemoModule { }
