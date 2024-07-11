import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  public openGithub(): void {
    window.open('https://github.com/wojlas', '_blank');
  }

  public openLinkedin(): void {
    window.open('https://linkedin.com/in/wojciech-laska-pl', '_blank');
  }

  public writeEmail(): void {
    window.open('mailto:laskaw@gmail.com', '_blank');
  }
}
