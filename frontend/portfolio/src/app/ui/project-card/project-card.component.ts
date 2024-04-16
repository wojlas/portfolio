import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ISimpleProject } from '../../core/interfaces';
import { TitleCasePipe } from '@angular/common';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-project-card',
    standalone: true,
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleCasePipe, TranslatePipe, RouterModule]
})
export class ProjectCardComponent {
  project = input.required<ISimpleProject>();
}
