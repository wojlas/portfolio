import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from "../../core/pipes/translate.pipe";

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe]
})
export class AboutMeComponent {

}