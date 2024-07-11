import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IProject } from '../../core/interfaces';
import { TitleCasePipe } from '@angular/common';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-project-card',
    standalone: true,
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleCasePipe, TranslatePipe, RouterModule]
})
export class ProjectCardComponent {
  public project = input.required<IProject>();

  private readonly _router = inject(Router);

  public navigateTo(): void {
    this.saveRouterUrlToLocalStorage();
    this._router.navigate([`projects/details/id=${ this.project().id.toString() }`]).then();
  }

  private saveRouterUrlToLocalStorage(): void {
    localStorage.setItem('prevUrl', decodeURIComponent(this._router.url));
  }
}
