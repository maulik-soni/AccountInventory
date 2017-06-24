import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardStructureModule} from './../dashboard-structure/dashboard-structure.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardStructureModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
