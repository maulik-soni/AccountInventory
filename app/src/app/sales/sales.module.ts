import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';

import { SalesComponent } from './sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesReportComponent } from './sales-report/sales-report.component';

@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    SelectModule,
    FormsModule
  ],
  declarations: []
})
export class SalesModule { }
