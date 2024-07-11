import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IProject } from '../../core/interfaces';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { ProjectDetailsSectionComponent } from '../../ui/project-details-section/project-details-section.component';
import { EmptyDashPipe } from '../../core/pipes/empty-dash.pipe';
import { PROJECTS } from '../../core/constants';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ProjectDetailsSectionComponent, RouterModule, EmptyDashPipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {
  public project = signal<IProject>({} as IProject);
  public prevUrl = localStorage.getItem('prevUrl') ?? 'projects';

  private readonly _router = inject(Router);

  public ngOnInit(): void {
    const id = +decodeURIComponent(this._router.url).split('id=')[1];
    this.project.set(Object.values(PROJECTS).find(x => x.id === id) ?? {} as IProject);
  }

  public openGithubRepository(): void {
    window.open(this.project().repositoryLink, '_blank');
  }
}
