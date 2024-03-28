import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PortfolioService } from '../services';
import SnippetsService from '../services/snippets.service';
import { tap } from 'rxjs';

export const snippetsResolver: ResolveFn<Record<string, string>> = (route, state) => {
  const portfolioService = inject(PortfolioService);
  const snippetService = SnippetsService;

  return portfolioService.getSnippets().pipe(tap(snippets => snippetService.snippets = snippets));
};
