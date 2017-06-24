import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DatepickerModule } from 'angular2-material-datepicker';
// import { DatePickerModule } from 'ng2-datepicker';
// import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
// import { DashboardComponent } from'./../dashboard/dashboard.component';
import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { BillRoutingModule } from './bill-routing.module';
// import { NgForm } from '@angular/forms';


import { PayableBillComponent} from './payable-bill/payable-bill.component';
import { RecievableBillComponent } from './recievable-bill/recievable-bill.component';

import { WebServicesService } from './../services/web-services.service';


@NgModule({
  imports: [
    CommonModule,
        DashboardStructureModule,
    // DatepickerModule,
    // DatePickerModule,
    // SelectModule,
    FormsModule,

    BillRoutingModule
  ],
  declarations: [PayableBillComponent,RecievableBillComponent],
  providers:[WebServicesService]
})
export class BillModule { }
