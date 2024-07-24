import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { TranslatePipe } from "../../core/pipes/translate.pipe";

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe]
})
export class AboutMeComponent implements OnInit {
    public language = signal<'en' | 'pl'>('en');

    public ngOnInit(): void {
        const storedLanguage = localStorage.getItem('selectedLanguage');

        if (storedLanguage && storedLanguage !== '') {
            this.language.set(JSON.parse(storedLanguage));
        } else {
            localStorage.setItem('selectedLanguage', JSON.stringify('en'));
        }
    }
}
