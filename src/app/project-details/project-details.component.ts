import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../projects';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    // Get the project name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const projectNameFromRoute = routeParams.get('projectName');

    // Find the project that correspond with the name provided in the route.
    if (projectNameFromRoute) {
      this.project = this.projectService.getProject(projectNameFromRoute);
    }
  }
}
