import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
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