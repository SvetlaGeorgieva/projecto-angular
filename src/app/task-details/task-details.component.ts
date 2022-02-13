import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../log.service';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;
  taskId: number | undefined;
  projectName!: string;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    // Get the task id and project name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('taskId'));
    const projectNameFromRoute = routeParams.get('projectName');

    this.taskId = taskIdFromRoute;
    this.projectName = projectNameFromRoute as string;

    // Find the task that correspond with the id and project provided in the route.
    if (taskIdFromRoute && projectNameFromRoute) {
      this.task = this.taskService.getTask(
        taskIdFromRoute,
        projectNameFromRoute
      );
    }
  }

  updateTask(): void {
    // this.log(this.task);
    this.taskService.updateTask(this.task, this.projectName);
    this.log('Your task has been updated');
  }

  log(msg: any): void {
    this.logger.log(msg);
  }
}
