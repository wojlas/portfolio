import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ISimpleProject } from '../../core/interfaces';
import { TitleCasePipe } from '@angular/common';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-project-card',
    standalone: true,
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleCasePipe, TranslatePipe, RouterModule]
})
export class ProjectCardComponent {
  public project = input.required<ISimpleProject>();

  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public navigateTo(): void {
    this._router.navigate([this.project().id.toString()], { relativeTo: this._activatedRoute}).then();
  }
}