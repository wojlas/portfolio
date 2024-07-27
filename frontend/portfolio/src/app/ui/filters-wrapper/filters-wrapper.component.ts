import { ChangeDetectionStrategy, Component, HostBinding, input, signal } from '@angular/core';
import { SingleFilterComponent } from '../single-filter/single-filter.component';
import { LANGUAGES } from '../../core/enums';

@Component({
  selector: 'app-filters-wrapper',
  standalone: true,
  imports: [SingleFilterComponent],
  templateUrl: './filters-wrapper.component.html',
  styleUrl: './filters-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersWrapperComponent {
  @HostBinding('style.min-width') hostWidth = 'calc(100% - 40px)';
  
  public languagesList = signal(Object.values(LANGUAGES));
  public bolderOptions = input<boolean>(false);
}
