import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { SingleFilterComponent } from '../single-filter/single-filter.component';
import { IIdNameAndType } from '../../core/interfaces';
import { PortfolioService } from '../../core/services';

@Component({
  selector: 'app-filters-wrapper',
  standalone: true,
  imports: [SingleFilterComponent],
  templateUrl: './filters-wrapper.component.html',
  styleUrl: './filters-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersWrapperComponent implements OnInit {
  public languagesList = signal<IIdNameAndType[]>([]);

  private readonly _portfolioService = inject(PortfolioService);

  public ngOnInit(): void {
    this.languagesList.set(this._portfolioService.languagesBase()); 
  }
}
