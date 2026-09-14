import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname
    .split("/")
    .filter(Boolean)[0]
    ?.replace(/\.html$/, "");
  return segment === "en" ? "en" : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t<K extends keyof typeof ui.ar>(
    section: K,
  ): (typeof ui)[Lang][K] {
    return ui[lang][section] as (typeof ui)[Lang][K];
  };
}

export function localizePath(path: string, lang: Lang): string {
  const url = new URL(path, "https://local.invalid");
  const segments = url.pathname
    .replace(/\.html$/, "")
    .split("/")
    .filter(Boolean);
  if (segments[0] === "ar" || segments[0] === "en") segments.shift();
  if (segments.at(-1) === "index") segments.pop();
  const page = segments.length ? segments.join("/") : "index";
  return `/${lang}/${page}.html${url.search}${url.hash}`;
}
