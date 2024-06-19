import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProject } from '../../core/interfaces';
import { ProjectCardComponent } from "../../ui/project-card/project-card.component";
import { PROJECTS } from '../../core/constants';
import { LANGUAGES, FRAMEWORKS } from '../../core/enums';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  public projects = signal<IProject[]>([]);

  public constructor(private readonly _activatedRoute: ActivatedRoute) {
    this._activatedRoute.queryParams.subscribe(params => {
      if (!Object.keys(params).length) {
        this.setProjectsList(Object.values(PROJECTS));
      } else {
        this.filterProjectsList(params['lang'], params['framework']); 
      }
    });
  }

  private setProjectsList(projects: IProject[]): void {
    this.projects.set(projects)
  }

  private filterProjectsList(language: string, framework?: string): void {
    this.setProjectsList(
      Object.values(PROJECTS).filter((value: IProject) => {
        return framework
        ? value.languages.includes(language as LANGUAGES) && value.frameworks?.includes(framework as FRAMEWORKS) 
        : value.languages.includes(language as LANGUAGES);
      })
    );
  }
}
