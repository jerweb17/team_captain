import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {DataService} from '../data.service';
import {Routes, RouterModule, Router}   from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{CustomError,ErrorPage} from '../project.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{Http,Headers,RequestOptions,Response,HttpModule} from '@angular/http';

import{HttpClient,HttpClientModule} from '@angular/common/http';
import{Globals} from '../globals';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  componentApiPiece:string='customer';
  serviceUrl:string;
  getAllUrl:string;
  getByIDUrlPiece:string;
  allRecords;
  selectedRecord;
  //*Sample create url: http://localhost:1337/customer/create?first_name=Petie&last_name=Klingme


  constructor(private _dataService:DataService,private router:Router,private _globals:Globals) { }

  ngOnInit() {
    this._globals.home=true;
    this.serviceUrl = environment.servicesUrl;
    this.getAllUrl=this.serviceUrl+this.componentApiPiece;
    this.getByIDUrlPiece=this.serviceUrl+this.componentApiPiece+'/';
    if(this._dataService){this.getDataSet();}
  }

  getDataSet():void{
    console.log(this.getAllUrl);
    this.allRecords="";
    this._dataService.getData(this.getAllUrl).subscribe(
      data => {
        this.allRecords=data;
        if(this.allRecords.length>0){   
          
        }
      },
      error => { 
          let err:CustomError = error;
          let errPage:ErrorPage = new ErrorPage(err,"Role","LDV Portal Interactor","https://ags.intel.com");
          this.router.navigate(["errors",errPage]);
           },
      () => {}
    );
  }
}
