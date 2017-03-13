import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TodoApi } from '../../shared/todo-api.service';

@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})

export class AddtodoPage {

  constructor(public navCtrl: NavController, private todoService: TodoApi, private toastCtrl : ToastController ) {

  }

  newTodo:any = "";

  addNewTodo(newTodo: string) {

    let status = ""; 
    this.newTodo = newTodo;
    
    if (this.newTodo) {
      this.todoService.addTodo(this.newTodo);

      status = "Your Todo: " + this.newTodo + " has been added to the list";

      this.presentToast(status);

      this.newTodo = "";
    }
    else {
      status = "There was an error, please try again";
      this.presentToast(status);
      this.newTodo = "";
    }
    
  }

  presentToast(status) {
    let toast = this.toastCtrl.create({
      message: status,
      duration: 3000,
      position: "middle",
    });

    toast.present();
    
  }
}
