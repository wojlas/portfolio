import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../views/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SidebarComponent, RouterOutlet, CommonModule]
})
export class PortfolioPageComponent implements OnInit {
    public ngOnInit(): void {
        const language = localStorage.getItem('selectedLanguage');

        if (!language || !language?.length) {
            localStorage.setItem('selectedLanguage', JSON.stringify('en'));
        }
    }
 }
