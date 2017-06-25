import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ConstantServiceService } from './constant-services.service';
import { WebServicesService } from './web-services.service'; 
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers:[
    ConstantServiceService,
    WebServicesService
  ]
})
export class ServicesModule { }
