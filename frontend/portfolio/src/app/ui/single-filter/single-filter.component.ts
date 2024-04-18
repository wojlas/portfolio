import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IIdNameAndType } from '../../core/interfaces';

@Component({
  selector: 'app-single-filter',
  standalone: true,
  imports: [],
  templateUrl: './single-filter.component.html',
  styleUrl: './single-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleFilterComponent {
  public language = input.required<IIdNameAndType>();
}
