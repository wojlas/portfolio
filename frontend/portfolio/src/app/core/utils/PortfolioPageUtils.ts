export class PortfolioPageUtils {
  public static setLanguageToLocalStorage(language: string): void {
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
    window.location.reload();
  }
}
