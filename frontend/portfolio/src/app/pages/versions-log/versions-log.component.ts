import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectsHelperService } from '../../core/services/projects-helper.service';
import { CommonModule } from '@angular/common';
import { map, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-versions-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './versions-log.component.html',
  styleUrl: './versions-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionsLogComponent {
  public readonly log$ = inject(ProjectsHelperService).getVersionsLog().pipe(
    map(res => JSON.parse(res)),
    pluck('versions')
  );
}
