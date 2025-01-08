import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILanguageAndFramework } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public projectsFilters$ = new BehaviorSubject<ILanguageAndFramework>({} as ILanguageAndFramework);

  private readonly _http = inject(HttpClient);

  public getVersionsLog(): Observable<string> {
    return this._http.get('../../../assets/static/versions-history.json', { responseType: 'text' });
  }

  public getCvFile(language: 'en' | 'pl'): Observable<Blob> {
    return this._http.get(`../../../assets/static/cv-wojciech-laska-${ language }`, { responseType: 'blob' })
  }
}
