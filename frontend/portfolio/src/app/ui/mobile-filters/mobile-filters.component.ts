import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PortfolioPageUtils } from '../../core/utils/PortfolioPageUtils';

@Component({
  selector: 'app-mobile-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-filters.component.html',
  styleUrl: './mobile-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileFiltersComponent {
  public expanded = signal(false);
  public language = signal(JSON.parse(localStorage.getItem('selectedLanguage') ?? '"en"'));

  public toggleExpanded(value: boolean): void {
    this.expanded.set(value);
  }

  public setLang(lang: 'pl' | 'en'): void {
    this.language.set(lang);
    PortfolioPageUtils.setLanguageToLocalStorage(lang);
  }
}
