import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../../views/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SidebarComponent, RouterOutlet]
})
export class PortfolioPageComponent {

}
