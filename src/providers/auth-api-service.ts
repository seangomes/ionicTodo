import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthApi {
  private user: User = { id: '', email: '', gender: '', password: '', username: '' };
  private fireAuth: any;

  constructor(private af: AngularFire) {
    af.auth.subscribe(user => {
      if (user) {
        this.fireAuth = user.auth;
        console.log(user);
        var fireUser;
        firebase.database().ref('/users/' + user.uid).once('value')
          .then((snapshot) => {
            var fireUser = snapshot.val();
            console.log(fireUser);
            this.user.id = user.uid;
            this.user.username = fireUser.username;
            this.user.email = fireUser.email;
            this.user.gender = fireUser.gender;
          });
          console.log(this.user);
      }
    });
  }

  get currentUserInfo() : User {
    return this.user;
  }

  //Create a firebase user
  signup(email: string, password: string, username: string, gender: string) {
    console.log(email);
    return this.af.auth.createUser({
      email: email,
      password: password,
    }).then((data) => {
      let user: User = {
        id: data.uid,
        email: email,
        password: password,
        username: username,
        gender: gender
      };
      //Indsætter en bruger i egen user skema i firebase
      if (user) {
        firebase.database().ref('users/' + user.id).set({
          email: user.email,
          username: user.username,
          gender: user.gender,
        });
      }
    });
  }

  login(email: string, password: string) {
    return this.af.auth.login({
      email: email,
      password: password,
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  };
  //Signout
  signOut() {
    return this.af.auth.logout();
  }
}
