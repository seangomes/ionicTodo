import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import {MomentModule} from 'angular2-moment';

import { TodoApi } from './../../shared/todo-api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos = [];

  constructor(public navCtrl: NavController, private http: Http, private todoService: TodoApi) {

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

}
