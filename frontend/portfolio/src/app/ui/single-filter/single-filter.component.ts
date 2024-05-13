import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { IIdNameAndLanguage, IIdNameAndType } from '../../core/interfaces';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-single-filter',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './single-filter.component.html',
  styleUrl: './single-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleFilterComponent implements OnInit, OnDestroy {
  public language = input.required<string>();

  public isActive = signal(false);
  public activeFramework = signal<IIdNameAndLanguage | null>(null);
  public frameworksList = signal<IIdNameAndLanguage[]>([]);

  private _sub!: Subscription;

  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
  }

  
  public ngOnDestroy(): void {
    this._sub?.unsubscribe();  
  }
}
