import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayableBillComponent} from './payable-bill/payable-bill.component';


import { DatepickerModule } from 'angular2-material-datepicker';
import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './../dashboard/dashboard.module'


import { WebServicesService } from './../services/web-services.service';
import { RecievableBillComponent } from './recievable-bill/recievable-bill.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    DatepickerModule,
    DatePickerModule,
    SelectModule,
    FormsModule
  ],
  declarations: [PayableBillComponent, RecievableBillComponent],
  providers:[WebServicesService]
})
export class BillModule { }
