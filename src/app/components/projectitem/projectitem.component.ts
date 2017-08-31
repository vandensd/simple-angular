import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent implements OnInit {
  @Input() project: Project =
  {
    id: '',
    name: '',
    category: ''
  };
  @Output() deleteProject = new EventEmitter<boolean>();
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  onDeleteProject() {
    this.deleteProject.emit(true);
  }

}
