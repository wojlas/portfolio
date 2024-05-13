import { ResolveFn } from '@angular/router';
import { Observable, from, map } from 'rxjs';
import { IProject } from '../interfaces';
import { PROJECTS } from '../enums';

export const projectsResolver: ResolveFn<Observable<IProject[]>> = (route, state) => {
  return from(import('../../../assets/data/PROJECTS')).pipe(
    map(res => res.PROJECTS),
    map(res => Object.values(res))
  );
};
