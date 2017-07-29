import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { PayableComponent} from './payable/payable.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { LedgerComponent } from './ledger/ledger.component';
import { BillsComponent } from './bills/bills.component';
import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const accountRoutes:Routes=[
  {
    path:'accounts',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'payable',
        component: PayableComponent
      },
      {
        path:'receivable',
        component: ReceivableComponent
      },
      {
        path:'bills',
        component: BillsComponent
      },
      {
        path:'ledger',
        component: LedgerComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class AccountRoutingModule { }
