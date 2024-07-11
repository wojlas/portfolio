import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { FRAMEWORKS } from '../../core/constants';
import { LANGUAGES } from '../../core/enums';
import { ProjectsHelperService } from '../../core/services/projects-helper.service';

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
  private readonly _projectsHelper = inject(ProjectsHelperService);

  public ngOnInit(): void {
    this.setFilterElementState(decodeURIComponent(this._router.url));
    this._sub = this._router.events.pipe(
      filter(res => res instanceof NavigationEnd),
      map((res: any): string => decodeURIComponent(res.url))
    ).subscribe((url: string) => {
      this.setFilterElementState(url);
    });
  }

  public filterByLanguage(): void {
    this._router.navigate([`/projects/language=${ this.language() }`]).then();
  }

  public filterByFramework(framework: string): void {
    this._router.navigate([`/projects/language=${ this.language() }/framework=${ framework }`]).then();
  }

  private setFilterElementState(url: string): void {
    const language = url.split(`language=`)[1];
    const framework = url.split(`framework=`)[1];

    if (language?.length) {
      this.setActiveState(language.split('/')[0]);
    } else {
      this.isActive.set(false);
    }

    if (framework?.length && this.frameworksList()?.length) {
      this.activeFramework.set(framework);
    } else {
      this.activeFramework.set(null);
    }

    this._projectsHelper.projectsFilters$.next({ language: language?.split('/')?.[0], framework: framework });
  }

  private setActiveState(lang: string): void {
    if (lang === this.language()) {
      this.isActive.set(true);
      this.frameworksList.set(Object.entries(FRAMEWORKS).filter(([key, value]) => value.includes(this.language())).map(x => x[0]) as string[]);
    } else {
      this.isActive.set(false);
    }
  }

  public ngOnDestroy(): void {
    this._sub?.unsubscribe();  
  }
}
