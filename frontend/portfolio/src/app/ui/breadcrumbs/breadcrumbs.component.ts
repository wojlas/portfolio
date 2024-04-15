import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, filter, map, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  public activeRoute$ = inject(Router).events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.urlAfterRedirects.slice(1).split('/'))
  );
}
