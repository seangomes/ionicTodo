import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './../models/User';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthApi {

  constructor(public http: Http) {
    
  }
  
  currentUser: any = {};

  
}
