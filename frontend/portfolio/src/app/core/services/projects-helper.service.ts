import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILanguageAndFramework } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHelperService {
  public projectsFilters$ = new BehaviorSubject<ILanguageAndFramework>({} as ILanguageAndFramework);

  private readonly _http = inject(HttpClient);

  public getVersionsLog(): Observable<string> {
    return this._http.get('../../../assets/static/versions-history.json', { responseType: 'text' });
  }
}
