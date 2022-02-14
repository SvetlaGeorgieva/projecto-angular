import { Injectable } from '@angular/core';

import { Project } from './projects';
import projects_json_data from '../assets/projects.json';
// import projects_json_data from '../assets/projects-7.json';
// import projects_json_data from '../assets/projects-8.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    let projectsLSString = localStorage.getItem('projects');
    if (projectsLSString) {
      let projectsLS: Project[] = JSON.parse(projectsLSString);
      return projectsLS;
    } else {
      return projects_json_data as Project[];
    }
  }

  getProject(name: String): Project {
    let projects = this.getProjects();

    const project = projects.find((project) => project.name === name);
    if (project === undefined) {
      throw new TypeError(`No project with name: ${name} !`);
    }
    return project;
  }

  updateProject(projectName: string, updatedProject: Project) {
    let projects = this.getProjects();
    const lastProjectIndex = projects.findIndex(
      (project) => project.name === projectName
    );

    if (lastProjectIndex !== -1) {
      projects[lastProjectIndex] = updatedProject;
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }
}
