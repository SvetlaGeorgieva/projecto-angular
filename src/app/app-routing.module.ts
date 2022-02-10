import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'projects/:projectName', component: ProjectDetailsComponent }, // TODO use slug for :projectName in the url
  {
    path: 'projects/:projectName/tasks/:taskId',
    component: TaskDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
