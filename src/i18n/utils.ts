import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split('/').filter(Boolean);
  const lang = segments.length > 0 ? segments[0] : '';
  if (lang && Object.prototype.hasOwnProperty.call(ui, lang)) return lang as keyof typeof ui;
  return defaultLang;
}

export function stripLangFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments.length > 0 ? segments[0] : '';
  if (first && Object.prototype.hasOwnProperty.call(ui, first)) {
    segments.shift();
  }
  return '/' + segments.join('/') + (segments.length ? '/' : '');
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}