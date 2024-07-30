import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IProject } from '../../core/interfaces';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { ProjectDetailsSectionComponent } from '../../ui/project-details-section/project-details-section.component';
import { EmptyDashPipe } from '../../core/pipes/empty-dash.pipe';
import { PROJECTS } from '../../core/constants';
import { Title } from '@angular/platform-browser';

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
  public language = signal<'en' | 'pl'>('en');

  private readonly _router = inject(Router);
  private readonly _title = inject(Title);

  public ngOnInit(): void {
    const language = localStorage.getItem('selectedLanguage');
    const id = +decodeURIComponent(this._router.url).split('id=')[1];

    this.project.set(Object.values(PROJECTS).find(x => x.id === id) ?? {} as IProject);
    this.language.set(language ? JSON.parse(language) : 'en');
    this._title.setTitle(`${ this.project().name } | wl-portfolio.pl`);
  }

  public openGithubRepository(): void {
    window.open(this.project().repositoryLink, '_blank');
  }
}
