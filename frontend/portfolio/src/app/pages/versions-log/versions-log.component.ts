import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-versions-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './versions-log.component.html',
  styleUrl: './versions-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionsLogComponent {
  public readonly log$ = inject(PortfolioService).getVersionsLog().pipe(
    map(res => JSON.parse(res)),
    map((res): { version: string, whatsNew: string }[] => res.versions)
  );
}
