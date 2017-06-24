import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { CashbookRoutingModule } from './cashbook-routing.module';

import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook-report/cashbook-report.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    CashbookRoutingModule
  ],
  declarations: [NewCashbookComponent, CashbookReportComponent]
})
export class CashbookModule { }
