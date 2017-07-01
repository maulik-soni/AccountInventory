import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { MemoComponent } from './memo/memo.component';
import { MemoRoutingModule } from './memo-routing.module';
// import { DatepickerModule } from 'angular2-material-datepicker';
import { MemoissueReportComponent } from './memoissue-report/memoissue-report.component';
import { MemoinReportComponent } from './memoin-report/memoin-report.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatePickerModule,
    SelectModule,
    FormsModule,
    MemoRoutingModule,
    // DatepickerModule
  ],
  declarations: [
    MemoComponent,    
    MemoissueReportComponent,
    MemoinReportComponent
  ],

})

export class MemoModule { }
