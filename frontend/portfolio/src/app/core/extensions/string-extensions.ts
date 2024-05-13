import { SNIPPETS } from "../constants";

String.prototype.translate = function(): string {
  const lang: 'pl' | 'en' = JSON.parse(localStorage.getItem('selectedLanguage') as string) ?? 'en';
  const key = this as string;

  return SNIPPETS.hasOwnProperty(key) ? SNIPPETS[key][lang] : this as string;
}