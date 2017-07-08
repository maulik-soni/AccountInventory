import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CashbookRoutingModule } from './cashbook-routing.module';

import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook-report/cashbook-report.component';

import { WebServicesService } from './../services/web-services.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CashbookRoutingModule,
  ],
  declarations: [NewCashbookComponent, CashbookReportComponent],
  providers:[WebServicesService]
})
export class CashbookModule {
 
 }
