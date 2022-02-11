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
  // @Input() task!: Task;
  task!: Task;

  // taskInfoForm = this.formBuilder.group({
  //   id: '',
  //   type: '',
  //   title: '',
  //   description: '',
  //   assignee: '',
  //   priority: '',
  //   status: '',
  //   estimate: '',
  //   createdAt: '',
  // });

  // type: 'Story' | 'Bug';
  // title: string;
  // description: string;
  // assignee: string;
  // priority: 'Low' | 'Normal' | 'High' | 'Critical';
  // status: 'To Do' | 'In Progress' | 'Ready for Test' | 'Done';
  // estimate: number;
  // createdAt: string;

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

  updateTask(): void {
    // TODO Process updating task data
    console.warn('Your task has been updated');
  }
}
