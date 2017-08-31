import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Array<Project> = [];

  constructor() { }

  ngOnInit() {
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }

}
