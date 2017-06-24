import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { DashboardStructureComponent } from './dashboard-structure/dashboard-structure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardStructureComponent],
  exports:[DashboardStructureComponent]
})
export class DashboardStructureModule { }
