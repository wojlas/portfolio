import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { Observable, filter, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FiltersWrapperComponent } from "../../ui/filters-wrapper/filters-wrapper.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, TranslatePipe, CommonModule, FiltersWrapperComponent]
})
export class SidebarComponent implements OnInit {
  public language = signal(JSON.parse(localStorage.getItem('selectedLanguage') ?? '"pl"'));
  public isProjectsActive = signal<boolean>(false);
  public routerEvents$!: Observable<NavigationEnd>;

  private _router = inject(Router);

  public ngOnInit(): void {
    this.routerEvents$ = this._router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      tap(this.setIsProjectsActive.bind(this))
    );
    this.setIsProjectsActive();
  }
  
  private setIsProjectsActive(): void {
    this.isProjectsActive.set(this._router.url === '/projects');
  }
}
