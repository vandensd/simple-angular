import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
