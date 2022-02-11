import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../task';
import { PROJECTS } from '../projects';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the task id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = routeParams.get('taskId');
    const projectNameFromRoute = routeParams.get('projectName'); // TODO use service

    // Find the task that correspond with the id provided in the route.
    const project = PROJECTS.find(
      (project) => project.name === projectNameFromRoute
    );
    if (project) {
      this.task = project.tasks.find(
        (task) => task.id === Number(taskIdFromRoute)
      );
    }
  }
}
