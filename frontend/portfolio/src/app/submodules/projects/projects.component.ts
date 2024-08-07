import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProject } from '../../core/interfaces';
import { ProjectCardComponent } from "../../ui/project-card/project-card.component";
import { PROJECTS } from '../../core/constants';
import { LANGUAGES, FRAMEWORKS } from '../../core/enums';
import { map } from 'rxjs';
import { ProjectsHelperService } from '../../core/services/projects-helper.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, CommonModule, ProjectCardComponent]
})
export class ProjectsComponent implements OnInit {
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

  private readonly _title = inject(Title);

  public ngOnInit(): void {
    const language = localStorage.getItem('selectedLanguage');
    let parsedLanguage!: string;

    if (language) {
      parsedLanguage = JSON.parse(language);
    }

    
    this._title.setTitle(!parsedLanguage || parsedLanguage === 'en' ? 'Projects | wl-portfolio.pl' : 'Projekty | wl-portfolio.pl');
    localStorage.removeItem('prevUrl');
    
  }
}
