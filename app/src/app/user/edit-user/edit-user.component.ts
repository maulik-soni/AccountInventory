import 'rxjs/add/operator/switchMap';
import { Component, OnInit,AfterViewInit }      from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location }               from '@angular/common';
import { WebServicesService } from './../../services/web-services.service';

import { EditUser } from './edit-user.model';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
user=EditUser;

  constructor(
     private editservice:  WebServicesService,
     private route: ActivatedRoute) { }

  ngOnInit():void {
        this.route.paramMap
      .switchMap((params: ParamMap) => this.editservice.edituser(+params.get('id')))
      .subscribe(user=> this.user=user.response);
  }

  onSubmit(){
    this.editservice.updateuser(JSON.stringify(this.user))
    .subscribe(response=>console.log(response))
    console.log(JSON.stringify(this.user));
  }
  }

