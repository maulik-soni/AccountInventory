import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';


const appRoutes: Routes =[
   { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  // { 
  //   path: 'login',
  //   redirectTo:'/login',
  //   pathMatch:'full'
  // },
  
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
