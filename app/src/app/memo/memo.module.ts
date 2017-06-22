import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';

import { MemoinComponent } from './memoin/memoin.component';
import { MemooutComponent } from './memoout/memoout.component';


@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    SelectModule,
    FormsModule
  ],
  declarations: [
    MemoinComponent,
    MemooutComponent
  ],

})
export class MemoModule { }
