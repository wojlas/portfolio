import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PortfolioPageUtils } from '../../core/utils/PortfolioPageUtils';
import { FiltersWrapperComponent } from "../filters-wrapper/filters-wrapper.component";
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-mobile-filters',
  standalone: true,
  imports: [CommonModule, FiltersWrapperComponent],
  templateUrl: './mobile-filters.component.html',
  styleUrl: './mobile-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileFiltersComponent implements OnInit, OnDestroy {
  public expanded = signal(false);
  public language = signal(JSON.parse(localStorage.getItem('selectedLanguage') ?? '"en"'));
  public isProjectsPage$ = new BehaviorSubject<boolean>(false);
  
  private _sub$!: Subscription;
  private readonly _router = inject(Router);

  public ngOnInit(): void {
    this.updateIsProjectPageSubject(this._router.url.includes('/projects'));
    this._sub$ = this._router.events
    .pipe(
      filter(res => res instanceof NavigationEnd),
      map(res => (res as unknown as NavigationEnd).url),
      map((res: string) => res.includes('/projects') && !res.includes('details'))
    )
    .subscribe(this.updateIsProjectPageSubject.bind(this));
  }

  public toggleExpanded(value: boolean): void {
    this.expanded.set(value);
  }

  public setLang(lang: 'pl' | 'en'): void {
    this.language.set(lang);
    PortfolioPageUtils.setLanguageToLocalStorage(lang);
  }

  private updateIsProjectPageSubject(value: boolean): void {
    this.isProjectsPage$.next(value);
  }

  public ngOnDestroy(): void {
    this._sub$?.unsubscribe();
  }
}
