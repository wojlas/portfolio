import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { projectsPageResolver } from "../../core/resolvers/projects-page.resolver";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: { data: projectsPageResolver }
  },
  {
    path: ':params',
    component: ProjectsComponent
  },
  // {
  //   path: ':id',
  //   component: 
  // }
  {
    path: '**',
    redirectTo: ''
  }
];