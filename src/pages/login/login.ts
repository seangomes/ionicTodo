import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from './../signup/signup';
import { AuthApi } from './../../providers/auth-api-service';
import { User } from './../../models/User';
import { TodosPage } from './../todos/todos';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signupPage = SignupPage;
  loading: Boolean = false;
  error: String = '';
  user : any = {};
  currentUser: any;
  isLoggedIn : Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthApi) {}


  login(email:string, password:string) {
    this.error = '';
    if(email !== undefined && password !== undefined)
    {
      this.authService.login(email,password)
      .then((user) => {
        this.navCtrl.setRoot(TodosPage, this.user);
      })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
    }
    else {
      this.error = "Email and password required!";
    }
  }

  

}
