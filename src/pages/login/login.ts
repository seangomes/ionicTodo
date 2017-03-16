import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from './../signup/signup';
import { AuthApi } from './../../providers/auth-api-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signupPage = SignupPage;
  loading: Boolean = false;
  error: String = '';
  user : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthApi) {}

  login() {
    this.loading = true;

    
    //this.authService.login(this.user.username, this.user.password).subscribe((result) => {
    //  if (result) {
    //    console.log("logged in " + this.user.username  )
    //  }
    //});
  }

  

}
