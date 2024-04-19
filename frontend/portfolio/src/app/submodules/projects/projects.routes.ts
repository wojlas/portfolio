import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { projectsPageResolver } from "../../core/resolvers/projects-page.resolver";
import { projectDetailsResolver } from "../../core/resolvers/project-details.resolver";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: { data: projectsPageResolver }
  },
  {
    path: 'filter/:test',
    component: ProjectsComponent
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../../pages/project-details/project-details.component').then(c => c.ProjectDetailsComponent),
    resolve: { data: projectDetailsResolver }
  },
  {
    path: '**',
    redirectTo: ''
  }
];