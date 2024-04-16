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
    this.projects.set(this._activatedRoute.snapshot.data['data'][2])
  }

}
