import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './../dashboard/dashboard.module'

import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook-report/cashbook-report.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule
  ],
  declarations: [NewCashbookComponent, CashbookReportComponent]
})
export class CashbookModule { }
