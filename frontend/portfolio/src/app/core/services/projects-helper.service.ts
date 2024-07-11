import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILanguageAndFramework } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHelperService {
  public projectsFilters$ = new BehaviorSubject<ILanguageAndFramework>({} as ILanguageAndFramework);
}
