import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
   { 
    path: '',
    component:HomeComponent
  },
  { 
    path: 'login',
    redirectTo:'/login',
  },
  {
    path: 'resetpassword',
    redirectTo:'/resetpassword'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
