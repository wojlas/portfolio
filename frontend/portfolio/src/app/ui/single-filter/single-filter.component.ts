import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { IIdNameAndLanguage, IIdNameAndType } from '../../core/interfaces';
import { NgTemplateOutlet } from '@angular/common';
import { PortfolioService } from '../../core/services';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-single-filter',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './single-filter.component.html',
  styleUrl: './single-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleFilterComponent implements OnInit, OnDestroy {
  public language = input.required<IIdNameAndType>();

  public isActive = signal(false);
  public activeFramework = signal<IIdNameAndLanguage | null>(null);
  public frameworksList = signal<IIdNameAndLanguage[]>([]);

  private _sub!: Subscription;

  private readonly _portfolioService = inject(PortfolioService);
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.frameworksList.set(this._portfolioService.frameworksBase().filter(framework => {
      return framework.languages.some(lang => lang.id === this.language().id);
    })); 
    this.trackRouterChanges();
    this.checkUrlOnInit();
  }

  public setActive(): void {
    this.isActive.set(!this.isActive());
    this.navigateTo('languages');
  }

  public setFramework(framework: IIdNameAndLanguage): void {
    this.activeFramework.set(framework);
    this.navigateTo('frameworks', framework.id);
  }
  
  private navigateTo(type: 'languages' | 'frameworks', id?: number): void {
    this._router.navigate(
      [`projects/filter/`],
      {
        relativeTo: this._activatedRoute,
        queryParams: {
          type,
          languageId: this.language().id,
          id: id ?? this.language().id
        }
      }
    ).then();
  }

  private checkUrlOnInit(): void {
    this.setActiveState(this._router.url);
  }

  private trackRouterChanges(): void {
    this._sub = this._router.events.pipe(
      filter(res => res instanceof NavigationEnd)
    ).subscribe((res: any) => {
      this.setActiveState(res.urlAfterRedirects as string);
    });
  }

  private setActiveState(url: string) {
    const languageId = +url.split('languageId')?.[1]?.[1]
    
    this.isActive.set(languageId === this.language().id);
    
    if (!url.includes('frameworks') || !this.isActive()) {
      this.activeFramework.set(null);
    } else if (url.includes('frameworks') && this.isActive()) {
      this.activeFramework.set(this.frameworksList().find(framework => framework.id === +url[url.length - 1]) ?? null);
    }
  }

  public ngOnDestroy(): void {
    this._sub?.unsubscribe();  
  }
}
