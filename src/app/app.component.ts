import { Component, OnInit } from '@angular/core';
import { Project } from './model/project';
import uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: Array<Project> = [
    {id: uuid.v4(), name: 'Business Website', category: 'Web Design'},
    {id: uuid.v4(), name: 'Social App', category: 'Mobile Development'},
    {id: uuid.v4(), name: 'Ecommerce Shopping Cart', category: 'Web Development'}
  ];

  ngOnInit() {

  }

  addProject(project: Project) {
    this.projects.push(project);
  }
}


