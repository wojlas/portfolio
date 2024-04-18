import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IIdNameAndLanguage, IIdNameAndType, IProjectDetails, ISimpleProject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public languagesBase = signal<IIdNameAndType[]>([]);
  public frameworksBase = signal<IIdNameAndLanguage[]>([]);
  public projectsBase = signal<ISimpleProject[]>([]);

  private _lang: 'pl' | 'en';

  constructor(private readonly _api: HttpClient) {
    this._lang = (JSON.parse(localStorage.getItem('selectedLanguage') ?? '"pl"') as 'pl' | 'en') || 'pl';
   }

  public getSnippets(): Observable<Record<string, string>> {
    return this._api.get<Record<string, string>>('api/snippets/' + this._lang);
  }

  public getLanguages(): Observable<IIdNameAndType[]> {
    return this._api.get<IIdNameAndType[]>('api/languages').pipe(
      tap(res => this.languagesBase.set(res))
    );
  }

  public getFrameworks(): Observable<IIdNameAndLanguage[]> {
    return this._api.get<IIdNameAndLanguage[]>('api/frameworks').pipe(
      tap(res => this.frameworksBase.set(res))
    );
  }

  public getProjects(): Observable<ISimpleProject[]> {
    return this._api.get<ISimpleProject[]>('api/projects').pipe(
      tap(res => this.projectsBase.set(res))
    );
  }

  public getProjectDetails(id: number): Observable<IProjectDetails> {
    return this._api.get<IProjectDetails>(`api/projects/${ id }`).pipe(map((res: any) => {
      switch (this._lang) {
        case 'pl':
          res.description = res.description_pl;
          break;
        case 'en':
          res.description = res.description_en;
          break
      }

      delete res.description_pl;
      delete res.description_en;
      
      return res;
    }));
  }
}
