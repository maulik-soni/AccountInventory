import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
// import { DatepickerModule } from 'angular2-material-datepicker';
import { LabissueEntryComponent } from './labissue-entry/labissue-entry.component';
import { LabissueReportComponent } from './labissue-report/labissue-report.component';
import { LabissueRoutingModule } from './labissue-rounting.module';
import { MaterialModule,MdDatepickerModule,MdNativeDateModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { LabissueReceivedReportComponent } from './labissue-received-report/labissue-received-report.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatePickerModule,
    SelectModule,
    FormsModule,
    LabissueRoutingModule,
    MdDatepickerModule,
    MdInputModule
    // DatepickerModule
  ],
  declarations: [
    LabissueEntryComponent,
    LabissueReportComponent,
    LabissueReceivedReportComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdDatepickerModule,
    MdInputModule,
  ]
})
export class LabissueModule { }
