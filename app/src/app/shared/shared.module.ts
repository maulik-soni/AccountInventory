import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SelectModule} from 'ng2-select';
import {MaterialModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule,
  DateAdapter,
  NativeDateAdapter,
  MD_DATE_FORMATS } from '@angular/material';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { DaysPipe } from './pipes/days.pipe';




import { SharedService } from './shared.service';
import { ValidemailDirective } from './directives/validemail.directive';




@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdCheckboxModule,
    MdNativeDateModule,
    MdRadioModule,
    SelectModule
  ],
  declarations: [DaysPipe, ValidemailDirective],
  providers:[ {provide: DateAdapter, useClass: NativeDateAdapter},
  SharedService],
  exports:[
    FormsModule,
    CommonModule,
    MdDatepickerModule,
    MdCheckboxModule,
    DashboardStructureModule,
    MdRadioModule,
    SelectModule,
    DaysPipe,
    ValidemailDirective,]
})
export class SharedModule {
   constructor(private dateAdapter: DateAdapter<Date>) {
         dateAdapter.setLocale('en-ca');
    }
 }
