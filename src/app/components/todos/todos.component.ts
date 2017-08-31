import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

}
