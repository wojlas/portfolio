import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule, NgTemplateOutlet, Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, switchMap } from 'rxjs';
import { FRAMEWORKS } from '../../core/constants';
import { LANGUAGES } from '../../core/enums';

@Component({
  selector: 'app-single-filter',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './single-filter.component.html',
  styleUrl: './single-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleFilterComponent implements OnInit, OnDestroy {
  public language = input.required<LANGUAGES>();

  public isActive = signal(false);
  public activeFramework = signal<string | null>(null);
  public frameworksList = signal<string[]>([]);

  private _sub!: Subscription;

  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _location = inject(Location);

  public ngOnInit(): void {
    this._sub = this._router.events.pipe(
      filter(res => res instanceof NavigationEnd),
      switchMap(() => this._activatedRoute.queryParams)
    ).subscribe(({ lang, framework }) => {
      this.isActive.set(lang === this.language());
      this.activeFramework.set(framework);
      this._location.go('/projects');
    });
  }

  public filterByLanguage(): void {
    this._router.navigate([`/projects`], { skipLocationChange: true, queryParams: { lang: this.language() }}).then();
    this.frameworksList.set(Object.entries(FRAMEWORKS).filter(([key, value]) => value.includes(this.language())).map(x => x[0]) as string[]);
  }

  public filterByFramework(framework: string): void {
    this._router.navigate(['/projects'], { skipLocationChange: true, queryParams: { lang: this.language(), framework }}).then();
  }

  
  public ngOnDestroy(): void {
    this._sub?.unsubscribe();  
  }
}
