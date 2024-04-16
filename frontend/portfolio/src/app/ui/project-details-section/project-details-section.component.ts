import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-details-section',
  standalone: true,
  imports: [],
  templateUrl: './project-details-section.component.html',
  styleUrl: './project-details-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'd-flex w-100' }
})
export class ProjectDetailsSectionComponent {
  public sectionTitle = input.required<string>();

  public isOpen = signal<boolean>(true);
}
