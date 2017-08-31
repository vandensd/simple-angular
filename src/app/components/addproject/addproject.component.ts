import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Project } from '../../model/project';

import uuid from 'uuid';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  @Output() addProject = new EventEmitter<Project>();

  categories = ['Web Design', 'Web Development', 'Mobile Development'];

  project: Project = {
    id: '',
    category: '',
    name: ''
  };

  constructor() { 
    this.project.category = this.categories[0];
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.project.name === '') {
      alert('Enter a project name');
      return;
    }

    this.addProject.emit({id:uuid.v4(), category: this.project.category, name: this.project.name});
    this.project = {
      id: '',
      category: this.categories[0],
      name: ''
    };
  }

}
