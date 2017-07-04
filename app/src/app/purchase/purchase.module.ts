import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerModule } from 'angular2-material-datepicker';
// import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';

import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { PurchaseRoutingModule } from './purchase-routing.module';

import { PurchaseComponent } from './purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { PiecesTypeComponent } from './pieces-type/pieces-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from "angular2-datatable";



@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatepickerModule,
    SelectModule,
    FormsModule,
    PurchaseRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  declarations: [
    PurchaseComponent,
    PurchaseReportComponent,
    PurchaseReturnComponent,
    PiecesTypeComponent,
    
  ],
  entryComponents: [PiecesTypeComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PurchaseModule { }
