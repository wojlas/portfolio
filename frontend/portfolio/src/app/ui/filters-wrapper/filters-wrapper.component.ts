import { ChangeDetectionStrategy, Component, HostBinding, OnInit, inject, signal } from '@angular/core';
import { SingleFilterComponent } from '../single-filter/single-filter.component';
import { IIdNameAndType } from '../../core/interfaces';

@Component({
  selector: 'app-filters-wrapper',
  standalone: true,
  imports: [SingleFilterComponent],
  templateUrl: './filters-wrapper.component.html',
  styleUrl: './filters-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersWrapperComponent implements OnInit {
  @HostBinding('style.min-width') hostWidth = 'calc(100% - 40px)';
  
  public languagesList = signal<IIdNameAndType[]>([]);

  public ngOnInit(): void {
  }
}
