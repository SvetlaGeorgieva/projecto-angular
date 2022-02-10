import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
