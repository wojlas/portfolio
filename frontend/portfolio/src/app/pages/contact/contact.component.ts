import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {PortfolioService} from "../../core/services/portfolio.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private _lang!: 'en' | 'pl';
  private readonly _title = inject(Title);
  private readonly _portfolioService = inject(PortfolioService);

  public ngOnInit(): void {
    const language = localStorage.getItem('selectedLanguage');
    let parsedLanguage!: string;

    if (language) {
      parsedLanguage = JSON.parse(language);
      this._lang = parsedLanguage as 'en' | 'pl';
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
    window.open('mailto:wojciech.laska.01@gmail.com', '_blank');
  }

  public downloadCvFile(): void {
    const fileUrl = `../../../../assets/static/cv-wojciech-laska-${ this._lang }.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'cv-wojciech-laska.pdf';
    link.click();
  }
}
