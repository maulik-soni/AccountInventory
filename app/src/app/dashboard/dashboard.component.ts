import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../authorization/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
