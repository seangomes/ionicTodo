import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoApi {

    constructor(private http: Http, private af: AngularFire) { }

    private todos$: FirebaseListObservable<any>;

    getTodos(): Observable<any> {
        this.todos$ = this.af.database.list('todos');
        return this.todos$;
    }

    addTodo(newTodo:string) : Observable<any> {
      
      let date = new Date();

      let todo = {
        todoname: newTodo,
        createdBy: 'Sean',
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