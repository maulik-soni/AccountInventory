import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WebServicesService } from './../../services/web-services.service';
import { cashbook,options } from './cashbook.model';
import { SharedService } from './../../shared/shared.service';

@Component({
  selector: 'app-new-cashbook',
  templateUrl: './new-cashbook.component.html',
  styleUrls: ['./new-cashbook.component.css']
})
export class NewCashbookComponent implements OnInit {
  cashbook=new cashbook(null,'','',new Date().toLocaleDateString('en-ca'),null,'','','','',null,'','');
  options=new options([],['cash','cheque','bank transfer'],[],[],[]);
  cashbookdata;
  constructor(
    private _cashbookservice:WebServicesService
  ) { }

  ngOnInit() {
    let requesttype={companynames:"companynames"};
    this._cashbookservice.showcompanyprofile(JSON.stringify(requesttype)).
    subscribe(response=>{this.options.company_name=response.response.company_names;
   });
  }

  selectedcompany(e){
    this.cashbook.company_name=e.id;
    this.cashbook.transaction_mode='cash';
  }

  selectedby(e){
    this.cashbook.transaction_mode=e.id;
    if(e.id=='cheque' || e.id=='bank transfer'){
      let data;
      data={
        company_name:this.cashbook.company_name,
      }
      this._cashbookservice.getcompanybank(JSON.stringify(data))
      .subscribe(response=>{this.options.bank=response.banks;
        // console.log(response)
         this.selectedbank({id:this.options.bank[0]});
         
      });
    }
  }

  selectedbank(e){
    this.cashbook.bank=e.id;
    let bank;
    bank={
      bank_name: this.cashbook.bank,
      company_name:this.cashbook.company_name,
    }
    this._cashbookservice.getcompanybranches(JSON.stringify(bank))
    .subscribe(response=>{this.options.bank_branch=response.branches;
      this.cashbook.bank_branch=this.options.bank_branch[0];
      this.getbankaccount(this.cashbook.bank,this.cashbook.bank_branch,this.cashbook.company_name);
    });
  }

  selectedbankbranch(e){
    this.cashbook.bank_branch=e.id;
    let bank;
    bank={
      bank_name:this.cashbook.bank,
      company_name:this.cashbook.company_name,
      bank_branch:this.cashbook.bank_branch
    }
    this._cashbookservice.getcompanybankaccount(JSON.stringify(bank))
    .subscribe(response=>{
      this.options.account_number=response.account_number;
      console.log(response);
      this.cashbook.account_number=this.options.account_number[0];
      this.getbankaccount(this.cashbook.bank,this.cashbook.bank_branch,this.cashbook.company_name);
    });
  }

  getbankaccount(bank,branch,companyname){
    let data;
    data={
      bank_name:bank,
      bank_branch:branch,
      company_name:companyname,
    }
    this._cashbookservice.getcompanybankaccount(JSON.stringify(data))
    .subscribe(response=>{this.options.account_number=response.account_number;
  });
  }

  selectedaccountnumber(e){
    this.cashbook.account_number=e.id;
  }

  onSubmit(form:NgForm){
      this.cashbook.date=new Date(this.cashbook.date.valueOf()).toLocaleDateString('en-ca');
    this.cashbookdata=JSON.stringify(this.cashbook);
    this._cashbookservice.newcashbook(this.cashbookdata).subscribe(response=>{
       form.resetForm();
    this.cashbook.date=new Date().toLocaleDateString('en-ca');
    this.cashbook.company_name=null;
    });
   
   
  }

}
