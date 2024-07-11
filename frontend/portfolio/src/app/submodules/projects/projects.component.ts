import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProject } from '../../core/interfaces';
import { ProjectCardComponent } from "../../ui/project-card/project-card.component";
import { PROJECTS } from '../../core/constants';
import { LANGUAGES, FRAMEWORKS } from '../../core/enums';
import { map } from 'rxjs';
import { ProjectsHelperService } from '../../core/services/projects-helper.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);

  public projectsList$ = inject(ProjectsHelperService).projectsFilters$.asObservable().pipe(
    map(({ language, framework}) => {
      if (language) {
        return Object.values(PROJECTS).filter((project: IProject) => {
          return framework
            ? project.languages.includes(language as LANGUAGES) && project.frameworks?.includes(framework as FRAMEWORKS) 
            : project.languages.includes(language as LANGUAGES);
        });
      } else {
        return Object.values(PROJECTS);
      }
    })
  );
}
