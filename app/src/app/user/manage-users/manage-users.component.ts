import { Component, OnInit } from '@angular/core';
import { WebServicesService } from './../../services/web-services.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  titles=[];
  data=[];

  constructor(
    private _userservice:WebServicesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._userservice.showuser({staticdata:'data'}).subscribe(
        resData=>{
        this.titles=resData.titles;
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.data=resData.data;
      });

}

onedit(g){
  this._router.navigate(['users/manage-users/edit',g.id]);
}

ondelete(id){
  console.log('vikas');
  this._userservice.deleteuser(id.id);
  this._userservice.showuser({staticdata:'data'}).subscribe(
    resData=>{
        this.titles=resData.titles;
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.titles.pop();
        this.data=resData.data;
      });
}
}
