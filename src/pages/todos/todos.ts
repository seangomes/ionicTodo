import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/User';
//Pages
import { AddtodoPage } from './../addtodo/addtodo';
//Services
import { TodoApi } from './../../providers/todo-api.service';
import { AuthApi } from './../../providers/auth-api-service';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
  todos = [];
  user: any;
  currentUserInfo: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoApi, private auth: AuthApi) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
      //console.log(this.todos);
    });
  }

  deleteTodo(key: string) {
    this.todoService.deleteTodo(key);
  }

  addTodoPage() {
    this.navCtrl.push(AddtodoPage);
  }

}
