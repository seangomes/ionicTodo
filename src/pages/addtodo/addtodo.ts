import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})

export class AddtodoPage {

  constructor(public navCtrl: NavController) {

  }

  todo : any = {}

  addNewTodo(newTodo) {
    //firebase.database().ref('/').push({object json})
  }
}
