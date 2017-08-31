import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
