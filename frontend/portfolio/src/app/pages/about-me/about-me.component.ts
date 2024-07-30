import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { Title } from '@angular/platform-browser';

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

    private readonly _title = inject(Title);

    public ngOnInit(): void {
        const storedLanguage = localStorage.getItem('selectedLanguage');

        if (storedLanguage && storedLanguage !== '') {
            this.language.set(JSON.parse(storedLanguage));
        } else {
            localStorage.setItem('selectedLanguage', JSON.stringify('en'));
        }

        this._title.setTitle(this.language() === 'en' ? 'About | wl-portfolio.pl' : 'O mnie | wl-portfolio.pl');
    }
}
