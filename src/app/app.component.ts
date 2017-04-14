import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { TodosPage } from '../pages/todos/todos';
import { TabsPage } from './../pages/tabs/tabs';
import { AngularFire } from 'angularfire2';


import { TodoApi } from './../providers/todo-api.service';
import { AuthApi } from './../providers/auth-api-service';


@Component({
  templateUrl: 'app.html',
  providers: [
    TodoApi,
    AuthApi
  ]
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, af: AngularFire) {

    // The subscribe function will listen for auth changes, 
    // if there’s a logged-in user the app will send her to the HomePage 
    // if not, she’ll get redirected to the LoginPage 
    // where she’ll be able to either log-in or start using the app anonymously.
    const authObserver = af.auth.subscribe(user => {
      if(user) 
      {
        //console.log(user);
        this.rootPage = TabsPage;
        //this.rootPage = TodosPage;
        authObserver.unsubscribe();
      }else{
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
