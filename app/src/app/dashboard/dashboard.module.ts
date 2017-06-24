import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from'./dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AuthModule } from './../authorization/auth.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
