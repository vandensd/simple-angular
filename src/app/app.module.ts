import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TodoService } from './services/todo.service';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectitemComponent } from './components/projectitem/projectitem.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { AddprojectComponent } from './components/addproject/addproject.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectitemComponent,
    TodosComponent,
    TodoitemComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
