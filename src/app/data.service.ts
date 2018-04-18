import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import{HttpHeaders} from '@angular/common/http';
import{Http,Headers,RequestOptions,Response,HttpModule} from '@angular/http';

import{HttpClient,HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule, Router}   from '@angular/router'
import{CustomError} from './project.model';


@Injectable()
export class DataService {
  requestedURL:string = "";
  constructor(private http:HttpClient) { }

  getData(URL:string): Observable<{}> {
    this.requestedURL=URL;
    //return this.http.get(URL,{withCredentials:true})
    return this.http.get(URL,{withCredentials:false})
      .map((res:Response) => { 
        console.log(res); 
        return res; })
      // .do(data =>console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 0){
      let type:string = "Error retrieving data";
      let msg:string = "Web services may not be running, or available";
      let err:CustomError= new CustomError(error.status,type,msg);
      return Observable.throw(err);
    }
    if(error.status === 401){
      let type:string = "Error retrieving data - Type 401 - Unauthorized";
      let msg:string = "Inadequate permission to pull data from Web Services";
      let err:CustomError= new CustomError(error.status,type,msg);
      return Observable.throw(err);
    }
    if(error.status === 404){
      let type:string = "Error retrieving data - Type 404 - Not Found";
      let msg:string = "";
      let err:CustomError= new CustomError(error.status,type,msg);
      return Observable.throw(err);
    }
    //console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
