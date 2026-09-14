import { defineMiddleware } from "astro:middleware";

// Resolve exported HTML URLs in the development server as well.
export const onRequest = defineMiddleware((context, next) => {
  if (
    import.meta.env.DEV &&
    /^\/(ar|en)\/index\.html$/.test(context.url.pathname)
  ) {
    const target = new URL(context.url);
    target.pathname = target.pathname.replace("/index.html", "");
    return context.rewrite(target);
  }
  return next();
});
