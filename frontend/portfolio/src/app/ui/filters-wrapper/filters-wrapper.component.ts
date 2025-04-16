import { ChangeDetectionStrategy, Component, HostBinding, input, signal } from '@angular/core';
import { SingleFilterComponent } from '../single-filter/single-filter.component';
import { LANGUAGES } from '../../core/enums';
import {KeyValuePipe} from "@angular/common";
import {SortByElementsCountPipe} from "../../core/pipes/sort-by-elements-count.pipe";
import {FRAMEWORKS} from "../../core/constants";

@Component({
  selector: 'app-filters-wrapper',
  standalone: true,
  imports: [SingleFilterComponent, KeyValuePipe, SortByElementsCountPipe],
  templateUrl: './filters-wrapper.component.html',
  styleUrl: './filters-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersWrapperComponent {
  @HostBinding('style.min-width')
  public hostWidth = 'calc(100% - 40px)';

  public languagesList = signal(LANGUAGES);
  public bolderOptions = input<boolean>(false);

  protected readonly FRAMEWROKS = FRAMEWORKS;
}
