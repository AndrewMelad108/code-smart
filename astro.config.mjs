import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";
import { mkdir, rename, writeFile } from "node:fs/promises";

const { SITE_URL } = loadEnv(
  process.env.NODE_ENV ?? "production",
  process.cwd(),
  "",
);
const site = SITE_URL ? new URL(SITE_URL).origin : undefined;

// Astro's file format emits /ar.html for pages/ar/index.astro.
// Keep the source structure while exporting the requested /ar/index.html URLs.
const localizedHomeFiles = {
  name: "localized-home-files",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      for (const lang of ["ar", "en"]) {
        await mkdir(new URL(`${lang}/`, dir), { recursive: true });
        await rename(
          new URL(`${lang}.html`, dir),
          new URL(`${lang}/index.html`, dir),
        );
      }
      if (site) {
        await writeFile(
          new URL("robots.txt", dir),
          `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`,
        );
      }
    },
  },
};

export default defineConfig({
  site,
  output: "static",
  build: { format: "file" },
  integrations: [
    ...(site
      ? [
          sitemap({
            filter: (page) => page !== `${site}/`,
            serialize: (item) => ({
              ...item,
              url: item.url.replace(
                /\/(ar|en)(?:\.html|\/)?$/,
                "/$1/index.html",
              ),
            }),
          }),
        ]
      : []),
    localizedHomeFiles,
  ],
  vite: { plugins: [tailwindcss()] },
});
