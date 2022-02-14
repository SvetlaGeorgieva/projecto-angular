# Projecto

A project management system with web application. Built with Angular.

## How to run project

- Make sure you have Node.js version >=14.0.0 and npm package manager installed. For installation help, see this [downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) page.
  > To check your Node.js version, type `node -v` in command line.  
  > To check your npm version, type `npm -v` in command line.
- Fork and clone repository
  > Or you could instead download the code with a ZIP file. To do this go to [this project's main GitHub page](https://github.com/SvetlaGeorgieva/projecto-angular), click on the "Code" button. A drop-down menu will appear, select "Download ZIP".
- Open new terminal in project's root folder
- Run `npm install` -> to install all dependencies
- Run `npm start` OR `ng serve` -> to start dev server
- The app will be running on port 4200  
   [http://localhost:4200/](http://localhost:4200/)
  > Alternatively you can run `ng serve -o` and it will automatically open the app in a browser 😉

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features

- **Top bar** -> The text `Projecto` is also a link, which navigates back to the main page.
- **Main page** -> Lists all projects. Each project can be clicked to navigate to that project's details page.
- **Project details page** -> Lists all tasks for the selected project. Each task can be clicked to navigate to that particular task's details page.
- **Task details page** -> Lists all data for the selected task. The data can be changed and updated via the `Update task` button. This will persist the data in the browser's local storage (even after the browser is closed and opened again, your changes will be persisted).
