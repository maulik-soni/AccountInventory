import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers:[AuthService,AuthGuard],
})
export class AuthModule { }
