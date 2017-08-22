import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

import { PayableComponent} from './payable/payable.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { LedgerComponent } from './ledger/ledger.component';
import { BillsComponent } from './bills/bills.component';

import { WebServicesService } from './../services/web-services.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    PayableComponent,
    ReceivableComponent, 
    LedgerComponent, 
    BillsComponent, 
    ],
  providers:[WebServicesService]
})
export class AccountModule {

 }
