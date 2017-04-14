import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {MomentModule} from 'angular2-moment';
import { MyApp } from './app.component';
import { firebaseConfig } from '../data/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TodosPage } from './../pages/todos/todos';
import { AddtodoPage } from '../pages/addtodo/addtodo';
import { TabsPage } from '../pages/tabs/tabs';

//Servies
import { AuthApi } from './../providers/auth-api-service';
import { TodoApi } from './../providers/todo-api.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    AddtodoPage,
    ProfilePage,
    HomePage,
    TodosPage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    AddtodoPage,
    ProfilePage,
    HomePage,
    TodosPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthApi, TodoApi]
})
export class AppModule {}
