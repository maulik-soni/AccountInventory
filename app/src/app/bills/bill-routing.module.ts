import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { PayableBillComponent} from './payable-bill/payable-bill.component';
import { RecievableBillComponent } from './recievable-bill/recievable-bill.component';


import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const billRoutes:Routes=[
  {
    path:'bills',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'payable-bill',
        component: PayableBillComponent
      },
      {
        path:'recievable-bill',
        component: RecievableBillComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(billRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class BillRoutingModule { }
