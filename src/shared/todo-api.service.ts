import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoApi {

    private baseUrl = 'https://ionictodo-fd8a2.firebaseio.com/';
    todos: any = [];


    constructor(private http: Http) { }

    getTodos(): Observable<any> {
        return this.http.request(`${this.baseUrl}/todos.json`)
            .map((response: Response) => {
                this.todos = response.json();
                return this.todos;
            });
    }

    deleteTodo(todo) {
        
    }
}