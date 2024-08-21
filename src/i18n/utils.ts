import { defaultLang, Languages, ui } from "./ui";

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in Languages) return lang as keyof typeof Languages;
	return defaultLang;
  }

  export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof typeof ui[typeof defaultLang]) {
	  return ui[lang][key] || ui[defaultLang][key];
	}
  }

  export function changeLangFromUrl(url: URL, lang: string) {
	const newLang = lang in ui ? lang : defaultLang
	const splitUrl = url.pathname.split('/')
	splitUrl[1] = newLang
	return splitUrl.join('/').substring(1)
  }

export { ui }
