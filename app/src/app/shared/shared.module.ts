import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SelectModule} from 'ng2-select';
import {MaterialModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { MdRadioModule, DateAdapter, NativeDateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    SelectModule
  ],
  declarations: [],
  providers:[ {provide: DateAdapter, useClass: NativeDateAdapter},],
  exports:[
    FormsModule,
    MdDatepickerModule,
    DashboardStructureModule,
    MdRadioModule,
    SelectModule]
})
export class SharedModule {
   constructor(private dateAdapter: DateAdapter<Date>) {
         dateAdapter.setLocale('en-ca');
    }
 }
