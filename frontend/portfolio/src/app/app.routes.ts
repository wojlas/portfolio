import { Routes } from '@angular/router';
import { snippetsResolver } from './core/resolvers/snippets.resolver';
import { PortfolioPageComponent } from './shared/portfolio-page/portfolio-page.component';
import { aboutPageResolver } from './core/resolvers/about-page.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioPageComponent,
    resolve: { snippets: snippetsResolver },
    children: [
      {
        path: 'about',
        loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent),
        resolve: { data: aboutPageResolver }
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
