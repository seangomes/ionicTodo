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

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthApi) {}

  login() {
    this.loading = true;

    if(this.user.username && this.user.password){
      this.currentUser = this.authService.login(this.user);

      if(this.currentUser)
      {
        this.navCtrl.setRoot(TodosPage, {user:this.currentUser});
      }
      else
      {
        this.error = 'Wrong username or password'
      }

      
    }
    else{
      this.error = 'Wrong username or password'
    }

    
    //this.authService.login(this.user.username, this.user.password).subscribe((result) => {
    //  if (result) {
    //    console.log("logged in " + this.user.username  )
    //  }
    //});
  }

  

}
