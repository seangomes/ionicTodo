import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import {MomentModule} from 'angular2-moment';

//Pages
import { AddtodoPage } from './../addtodo/addtodo';
//Services
import { TodoApi } from './../../providers/todo-api.service';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
  todos = [];
  user : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http, private todoService: TodoApi) {
    this.user = navParams.get('user');
  }

ionViewDidLoad() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }

  deleteTodo(key:string) {
    this.todoService.deleteTodo(key);
  }

  addTodoPage() {
    this.navCtrl.push(AddtodoPage);
  }

}
