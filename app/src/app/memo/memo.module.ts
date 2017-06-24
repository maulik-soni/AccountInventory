import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { MemoinComponent } from './memoin/memoin.component';
import { MemooutComponent } from './memoout/memoout.component';
import { MemoRoutingModule } from './memo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    DatePickerModule,
    SelectModule,
    FormsModule,
    MemoRoutingModule
  ],
  declarations: [
    MemoinComponent,
    MemooutComponent
  ],

})

export class MemoModule { }
