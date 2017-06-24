import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { PurchaseComponent } from './purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';



const purchaseRoutes:Routes=[
  {
    path:'purchase',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'purchase-entry',
        component: PurchaseComponent
      },
      {
        path:'purchase-return',
        component: PurchaseReturnComponent
      },
      {
        path:'purchase-report',
        component: PurchaseReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(purchaseRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class PurchaseRoutingModule { }
