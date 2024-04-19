import { ChangeDetectionStrategy, Component, OnInit, inject, input, signal } from '@angular/core';
import { IIdNameAndLanguage, IIdNameAndType } from '../../core/interfaces';
import { NgTemplateOutlet } from '@angular/common';
import { PortfolioService } from '../../core/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-filter',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './single-filter.component.html',
  styleUrl: './single-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleFilterComponent implements OnInit {
  public language = input.required<IIdNameAndType>();

  public isActive = signal(false);
  public activeFramework = signal<IIdNameAndLanguage | null>(null);
  public frameworksList = signal<IIdNameAndLanguage[]>([]);

  private readonly _portfolioService = inject(PortfolioService);
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
   this.frameworksList.set(this._portfolioService.frameworksBase().filter(framework => {
    return framework.languages.some(lang => lang.id === this.language().id);
   })); 
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
          id: id ?? this.language().id
        }
      }
    ).then();
  }
}
