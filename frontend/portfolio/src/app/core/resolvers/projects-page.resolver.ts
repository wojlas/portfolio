import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PortfolioService } from '../services';
import { forkJoin } from 'rxjs';

export const projectsPageResolver: ResolveFn<any[]> = (route, state) => {
  const portfolioService = inject(PortfolioService);

  return forkJoin(
    [
      portfolioService.getLanguages(),
      portfolioService.getFrameworks(),
      portfolioService.getProjects()
    ]
  )
};
