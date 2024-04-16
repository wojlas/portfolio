import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIdNameAndLanguage, IIdNameAndType, ISimpleProject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private _lang: 'pl' | 'en';

  constructor(private readonly _api: HttpClient) {
    this._lang = (JSON.parse(localStorage.getItem('selectedLanguage') ?? '"pl"') as 'pl' | 'en') || 'pl';
   }

  public getSnippets(): Observable<Record<string, string>> {
    return this._api.get<Record<string, string>>('api/snippets/' + this._lang);
  }

  public getLanguages(): Observable<IIdNameAndType[]> {
    return this._api.get<IIdNameAndType[]>('api/languages');
  }

  public getFrameworks(): Observable<IIdNameAndLanguage[]> {
    return this._api.get<IIdNameAndLanguage[]>('api/frameworks');
  }

  public getProjects(): Observable<ISimpleProject[]> {
    return this._api.get<ISimpleProject[]>('api/projects');
  }

  public getProjectDetails(id: number): Observable<any> {
    return this._api.get<any>(`api/projects/${ id }`);
  }
}
