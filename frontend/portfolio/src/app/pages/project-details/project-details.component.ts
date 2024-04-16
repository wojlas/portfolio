import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProjectDetails } from '../../core/interfaces';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { ProjectDetailsSectionComponent } from '../../ui/project-details-section/project-details-section.component';
import { EmptyDashPipe } from '../../core/pipes/empty-dash.pipe';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ProjectDetailsSectionComponent, RouterModule, EmptyDashPipe],
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

  public openGithubRepository(): void {
    window.open(this.project().repository_link, '_blank');
  }
}
