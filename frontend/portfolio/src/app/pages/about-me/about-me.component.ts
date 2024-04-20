import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe]
})
export class AboutMeComponent implements OnInit {
    public about = signal('');

    private _activatedRoute = inject(ActivatedRoute);

    public ngOnInit(): void {
        this.about.set(this._activatedRoute.snapshot.data['data']['data']);
    }
}
