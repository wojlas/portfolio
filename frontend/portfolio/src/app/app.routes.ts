import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './shared/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioPageComponent,
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
