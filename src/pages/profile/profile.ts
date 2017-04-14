import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/User';
import { AuthApi } from './../../providers/auth-api-service';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user : User;
  changeProfileTab: Boolean = true;
  TodoListTab: Boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthApi) {
    this.user = auth.currentUserInfo;
    console.log(this.user);
  }

  ionViewDidLoad() {

  }

  changeProfile() {

  }

}
