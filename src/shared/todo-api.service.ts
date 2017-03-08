import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoApi {

    constructor(private http: Http, private af: AngularFire) { }

    

    getTodos(): Observable<any> {
        const todos$ : FirebaseListObservable<any> = this.af.database.list('todos');
        return todos$;
    }

    deleteTodo(todo) {
        
    }
}