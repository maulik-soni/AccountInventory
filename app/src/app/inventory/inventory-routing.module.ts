import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { InventoryComponent } from './inventory.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const inventoryRoutes:Routes=[
  {
    path:'inventory',
    canActivate:[AuthGuard,AdminGuard],
    component:InventoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class InventoryRoutingModule { }
