import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './../../authorization/auth.service';

@Component({
  selector:'dashboard',
  templateUrl: './dashboard-structure.component.html',
  styleUrls: ['./dashboard-structure.component.css']
})
export class DashboardStructureComponent implements OnInit {
   isAdmin=false;
  constructor(
     private route:Router,
              private _auth:AuthService
  ) { }

  ngOnInit() {
     if(this._auth.HasRole()=='admin'){
      this.isAdmin=true;
    }
  }

  logout(){
            localStorage.clear();
            this.route.navigate(['/login']);

  }

}
