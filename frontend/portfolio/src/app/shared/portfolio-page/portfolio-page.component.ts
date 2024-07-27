import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { SidebarComponent } from "../../views/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileFiltersComponent } from "../../ui/mobile-filters/mobile-filters.component";
import { fromEvent, Subscription } from 'rxjs';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SidebarComponent, RouterOutlet, CommonModule, MobileFiltersComponent, MobileFiltersComponent]
})
export class PortfolioPageComponent implements OnInit, AfterViewInit, OnDestroy {
    public showMobileFilters = signal(false);

    private _sub$!: Subscription;
    private readonly _elRef = inject(ElementRef);

    public ngOnInit(): void {
        const language = localStorage.getItem('selectedLanguage');

        if (!language || !language?.length) {
            localStorage.setItem('selectedLanguage', JSON.stringify('en'));
        }
    }

    public ngAfterViewInit(): void {
        this.mobileFiltersHandler();
        this._sub$ = fromEvent(window, 'resize').subscribe(this.mobileFiltersHandler.bind(this));
    }

    private mobileFiltersHandler(): void {
        this.showMobileFilters.set(this._elRef.nativeElement.getBoundingClientRect().width < 480);
    }

    public ngOnDestroy(): void {
        this._sub$?.unsubscribe();
    }
 }
