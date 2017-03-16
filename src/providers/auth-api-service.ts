import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthApi {

  private users$: FirebaseListObservable<any>;

  constructor(public http: Http, private af: AngularFire) {
    this.users$ = this.af.database.list('users');
  }
  
   

  currentUser: any = {};

  login(username:string, password:string) {
    
  }
  
}
