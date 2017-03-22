import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthApi {

  private users$: FirebaseListObservable<any>;

  private userList : any;

  constructor(public http: Http, private af: AngularFire) {
    this.users$ = this.af.database.list('users');
    
    this.users$.forEach(user => {
      this.userList =user;
    });

    
  }
  
  currentUser: User;

  login(user) {

    if(user) {
      let signedUser : User = {
        id : user.id,
        username : user.username,
        email : '',
        password : '?'
      };

      this.currentUser = signedUser;
    }

    
  }
  
}
