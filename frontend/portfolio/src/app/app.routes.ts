import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'about',
        loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path: 'projects',
        loadChildren: () => import('./submodules/projects/projects.routes').then(m => m.routes)
      },
      {
        path: '**',
        redirectTo: 'about'
      }
    ]
  }
];
