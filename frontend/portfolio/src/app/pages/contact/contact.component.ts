import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private readonly _title = inject(Title);

  public ngOnInit(): void {
    const language = localStorage.getItem('selectedLanguage');
    let parsedLanguage!: string;

    if (language) {
      parsedLanguage = JSON.parse(language);
    }
    
    
    this._title.setTitle(!parsedLanguage || parsedLanguage === 'en' ? 'Contact | wl-portfolio.pl' : 'Kontakt | wl-portfolio.pl');
  }
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
