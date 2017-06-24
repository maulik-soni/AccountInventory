import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './../dashboard/dashboard.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    FormsModule,
    UserRoutingModule

  ],
  declarations: [AddUserComponent]
})
export class UserModule { }
