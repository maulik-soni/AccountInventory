
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})


export class AppComponent implements OnInit {
  islogin = this.checkLogin();

  constructor(private authservice:AuthService,
              private route:Router,
             
              ) { }

 
 
  ngOnInit():any {
  
  
}

checkLogin(){
    if(this.authservice.isLoggedIn()){
    return true;
    }
    return false;

}
}


