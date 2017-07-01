import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardStructureModule } from './../dashboard-structure/dashboard-structure.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRoutingModule } from './user-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardStructureModule,
    FormsModule,
    UserRoutingModule

  ],
  declarations: [AddUserComponent, ManageUsersComponent, EditUserComponent]
})
export class UserModule { }
