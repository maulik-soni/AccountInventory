import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './../../authorization/auth.service';
import { WebServicesService } from './../../services/web-services.service';

@Component({
  selector:'dashboard',
  templateUrl: './dashboard-structure.component.html',
  styleUrls: ['./dashboard-structure.component.css']
})
export class DashboardStructureComponent implements OnInit {
   isAdmin=false;
  constructor(
     private route:Router,
     private _auth:AuthService,
     private _logoutservice:WebServicesService
  ) { }

  ngOnInit() {
     if(this._auth.HasRole()=='admin'){
      this.isAdmin=true;
    }
  }

  logout(){
    let log;
    log={
      logout:'logout'
    }
    this._logoutservice.logoutuser(JSON.stringify(log)).subscribe(response=>{console.log(response);localStorage.clear();
      this.route.navigate(['/login'])
    });
            ;
            

  }

}
