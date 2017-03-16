import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  loginPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  

}
