import { Injectable } from '@angular/core';

import { Project, PROJECTS } from './projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(name: String): Project {
    const project = PROJECTS.find((project) => project.name === name);
    if (project === undefined) {
      throw new TypeError(`No project with name: ${name} !`);
    }
    return project;
  }
}
