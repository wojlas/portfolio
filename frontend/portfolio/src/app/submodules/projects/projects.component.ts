import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProject, ISimpleProject } from '../../core/interfaces';
import { ProjectCardComponent } from "../../ui/project-card/project-card.component";
import { PROJECTS } from '../../core/constants';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  public projects = signal<IProject[]>(Object.values(PROJECTS));

  public constructor(private readonly _activatedRoute: ActivatedRoute) {
    this._activatedRoute.queryParams.subscribe(params => {
      
      if (!Object.keys(params).length) {
        // this.setProjectsList(this._activatedRoute.snapshot.data['data'][2]);
      } else {
        this.filterProjectsList(params['type'], +params['id']); 
      }
    });
  }

  private setProjectsList(projects: IProject[]): void {
    this.projects.set(projects)
  }

  private filterProjectsList(type: 'languages' | 'frameworks', id: number): void {
    const base: IProject[] = this._activatedRoute.snapshot.data['data'][2];
    // this.setProjectsList(base.filter(project => {
    //   if (type === 'languages') {
    //     return project.languages.some(lang => lang.id === id);
    //   } else {
    //     return project.frameworks.some(framework => framework.id === id);
    //   }
    // }));
  }
}
