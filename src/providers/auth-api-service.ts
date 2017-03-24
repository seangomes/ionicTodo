import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthApi {

  private users$: FirebaseListObservable<any>;
  currentUser: User;
  private userList: Array<User> = [];

  constructor(public http: Http, private af: AngularFire) {
    this.users$ = this.af.database.list('users');

    this.users$.forEach(items => {

      items.forEach(item => {
        let user: User = {
          id: item.$key,
          username: item.username,
          email: item.email,
          password: item.password
        }
        this.userList.push(user);
      });
    });
  }
  

  login(user) {
    if (user) {
      this.userList.forEach(x => {
        if(x.username == user.username && x.password == user.password)
        {
          this.currentUser = x;
          return this.currentUser;
        }
        else
        {
          return this.currentUser;
        }  

      });
    }
  }

}
