import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ISimpleProject } from '../../core/interfaces';
import { ProjectCardComponent } from "../../ui/project-card/project-card.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  public projects = signal<ISimpleProject[]>([]);

  public constructor(private readonly _activatedRoute: ActivatedRoute) {
    this._activatedRoute.queryParams.subscribe(params => {
      
      if (!Object.keys(params).length) {
        this.setProjectsList(this._activatedRoute.snapshot.data['data'][2]);
      } else {
        this.filterProjectsList(params['type'], +params['id']); 
      }
    });
  }

  private setProjectsList(projects: ISimpleProject[]): void {
    this.projects.set(projects)
  }

  private filterProjectsList(type: 'languages' | 'frameworks', id: number): void {
    const base: ISimpleProject[] = this._activatedRoute.snapshot.data['data'][2];
    this.setProjectsList(base.filter(project => {
      if (type === 'languages') {
        return project.language.some(lang => lang.id === id);
      } else {
        return project.framework.some(framework => framework.id === id);
      }
    }));
  }
}
