import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    // Get the task id and project name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('taskId'));
    const projectNameFromRoute = routeParams.get('projectName');

    // Find the task that correspond with the id and project provided in the route.
    if (taskIdFromRoute && projectNameFromRoute) {
      this.task = this.taskService.getTask(
        taskIdFromRoute,
        projectNameFromRoute
      );
    }
  }
}
