import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoApi } from '../../shared/todo-api.service';

@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})

export class AddtodoPage {

  constructor(public navCtrl: NavController, private todoService: TodoApi ) {

  }

  addNewTodo(newTodo: string) {

    if (newTodo) {
      this.todoService.addTodo(newTodo);
    }

    //firebase.database().ref('/').push({object json})
  }
}
