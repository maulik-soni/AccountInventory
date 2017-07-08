import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

import { PayableComponent} from './payable/payable.component';
import { RecievableComponent } from './recievable/recievable.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PaymentRecieptComponent } from './payment-reciept/payment-reciept.component';

import { WebServicesService } from './../services/web-services.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    PayableComponent,
    RecievableComponent, 
    LedgerComponent, 
    PaymentRecieptComponent, 
    ],
  providers:[WebServicesService]
})
export class AccountModule {

 }
