import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProjectDetails } from '../../core/interfaces';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { ProjectDetailsSectionComponent } from '../../ui/project-details-section/project-details-section.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ProjectDetailsSectionComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {
  public project = signal<IProjectDetails>({} as IProjectDetails);

  private _activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.project.set(this._activatedRoute.snapshot.data['data'] as IProjectDetails);
  }
}
