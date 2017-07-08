import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InventoryRoutingModule
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
