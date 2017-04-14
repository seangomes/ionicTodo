import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { AuthApi } from './../../providers/auth-api-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  loginPage = LoginPage;
  user : any = {};
  error: String = ('');
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthApi) {}

  signup(email:string,password:string, username: string, gender: string) {
    this.auth.signup(email,password,username,gender)
    .then((user) => {
      
    })
    .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }

}
