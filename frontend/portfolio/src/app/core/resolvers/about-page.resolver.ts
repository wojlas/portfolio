import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PortfolioService } from '../services';

export const aboutPageResolver: ResolveFn<boolean> = (route, state) => {
  return inject(PortfolioService).getAboutMeInformations();
};
