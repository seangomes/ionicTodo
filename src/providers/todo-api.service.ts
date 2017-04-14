import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { AuthApi } from './auth-api-service';
import { User } from './../models/User';

@Injectable()
export class TodoApi {

    private todos$: FirebaseListObservable<any>;
    private currentUserInfo:User;

    constructor(private af:AngularFire, private auth:AuthApi) {
        this.currentUserInfo = auth.currentUserInfo;
     }

    

    getTodos(): Observable<any> {
        this.todos$ = this.af.database.list('todos');
        return this.todos$;
    }

    addTodo(newTodo:string) : Observable<any> {
      
      let date = new Date();

      let todo = {
        todoname: newTodo,
        createdBy: this.currentUserInfo.username,
        date: date.toString(),
        status: true,
      };
      this.todos$.push(todo);
      
      return this.todos$;
    }

    deleteTodo(key:string) {
        if(key) {
          this.af.database.object(`/todos/${key}`).remove();
        }
    }


}