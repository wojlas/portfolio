import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from "../../core/pipes/translate.pipe";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, TranslatePipe]
})
export class SidebarComponent {
  public language = signal(JSON.parse(localStorage.getItem('selectedLanguage') ?? '"pl"'));
}
