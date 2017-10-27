import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';

import { SharedModule } from './../shared/shared.module';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InventoryRoutingModule,
    NgxBarcodeModule
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
