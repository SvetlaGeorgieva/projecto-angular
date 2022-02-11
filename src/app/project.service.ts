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
}
