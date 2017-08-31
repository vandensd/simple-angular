import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .map(response => response.json() as Todo[]);
  }

}
