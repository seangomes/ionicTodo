import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

import { TodoApi } from './../../shared/todo-api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private baseUrl = ''; //Firebase link
  todos = [];

  constructor(public navCtrl: NavController, private http: Http, private todoService: TodoApi) {

  }

  ionViewDidLoad() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  deleteTodo() {
    
  }

}
