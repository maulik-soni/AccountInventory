import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ConstantServicesService } from './constant-services.service';
import { WebServicesService } from './web-services.service'; 
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers:[
    ConstantServicesService,
    WebServicesService
  ]
})
export class ServicesModule { }
