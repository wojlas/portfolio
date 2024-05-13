import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { projectsResolver } from "../../core/resolvers/projects.resolver";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: { projects: projectsResolver }
  },
  {
    path: 'filter/:test',
    component: ProjectsComponent
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../../pages/project-details/project-details.component').then(c => c.ProjectDetailsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];