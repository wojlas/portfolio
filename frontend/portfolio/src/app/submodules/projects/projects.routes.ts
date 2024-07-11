import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: ':language',
    component: ProjectsComponent
  },
  {
    path: ':language/:framework',
    component: ProjectsComponent
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../../pages/project-details/project-details.component').then(c => c.ProjectDetailsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix'
  }
];