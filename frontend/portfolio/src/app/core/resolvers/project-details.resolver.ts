import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PortfolioService } from '../services';
import { IProjectDetails } from '../interfaces';

export const projectDetailsResolver: ResolveFn<IProjectDetails> = (route, state) => {
  const portfolioService = inject(PortfolioService);
  
  return portfolioService.getProjectDetails(route.params['id']);
};
