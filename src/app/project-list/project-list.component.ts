import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects = PROJECTS;

  constructor() {}

  ngOnInit(): void {}
}
