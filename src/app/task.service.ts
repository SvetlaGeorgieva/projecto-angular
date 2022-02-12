import { Injectable } from '@angular/core';

import { Task } from './task';
import { Project } from './projects';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.setAllTasks();
  }

  setAllTasks(): void {
    let projects: Project[] = this.projectService.getProjects();
    for (let project of projects) {
      this.tasks.push(...project.tasks);
    }
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasks(project: Project): Task[] {
    let tasks: Task[] = project.tasks;
    return tasks;
  }

  getTask(id: number, projectName?: string): Task {
    let task;
    let taskPool;

    if (projectName) {
      const project: Project = this.projectService.getProject(projectName);
      taskPool = this.getTasks(project);
    } else {
      taskPool = this.tasks;
    }

    task = taskPool.find((task) => task.id === id);
    if (task === undefined) {
      throw new TypeError(`No task with id: ${id} !`);
    }
    return task;
  }

  updateTask(task: Task): void {
    // TODO
    console.log('Task service: ', task.status);
  }
}
