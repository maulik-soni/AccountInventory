import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebServicesService } from './../../services/web-services.service';
import { user } from './../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  usermodel=new user('','','');
  userdata;
  constructor(
    private _userservice:WebServicesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userdata=JSON.stringify(this.usermodel);
    this._userservice.postuserdata(this.userdata);
  }

}
