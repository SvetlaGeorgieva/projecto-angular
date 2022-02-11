import { Task } from './task';

export interface Project {
  name: string;
  tasks: Task[];
}

export const PROJECTS: Project[] = [
  {
    name: 'Project 1',
    tasks: [
      {
        id: 11,
        type: 'Story',
        title: 'Story 1 - P1S1',
        description: 'Some description 1',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 12,
        type: 'Story',
        title: 'Story 2 - P1S2',
        description: 'Some description 2',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'In Progress',
        estimate: 5,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 13,
        type: 'Story',
        title: 'Story 3 - P1S3',
        description: 'Some description 3',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 14,
        type: 'Bug',
        title: 'Bug 1 - P1B1',
        description: 'What went wrong 1',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 15,
        type: 'Bug',
        title: 'Bug 2 - P1B2',
        description: 'What went wrong 2',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'Ready for Test',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 16,
        type: 'Bug',
        title: 'Bug 3 - P1B3',
        description: 'What went wrong 3',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'Done',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
    ],
  },
  {
    name: 'Project 2',
    tasks: [
      {
        id: 21,
        type: 'Story',
        title: 'Story 21 - P2S1',
        description: 'Some description 1',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 22,
        type: 'Story',
        title: 'Story 22 - P2S2',
        description: 'Some description 2',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'In Progress',
        estimate: 5,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 23,
        type: 'Story',
        title: 'Story 23 - P2S3',
        description: 'Some description 3',
        assignee: 'Ivo Yankov',
        priority: 'Low',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 24,
        type: 'Bug',
        title: 'Bug 21 - P2B1',
        description: 'What went wrong 1',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'To Do',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 25,
        type: 'Bug',
        title: 'Bug 22 - P2B2',
        description: 'What went wrong 2',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'Ready for Test',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
      {
        id: 26,
        type: 'Bug',
        title: 'Bug 23 - P2B3',
        description: 'What went wrong 3',
        assignee: 'Valeriya Yankova',
        priority: 'High',
        status: 'Done',
        estimate: 10,
        createdAt: '2022-02-09T09:00:00.000Z',
      },
    ],
  },
];

/*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
