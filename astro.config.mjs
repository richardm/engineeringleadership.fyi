// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://engineeringleadership.fyi",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `es` or `fr` after `https://engineeringleadership.fyi/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en-US", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    starlight({
      title: "Engineering Leadership Handbook",
      editLink: {
        baseUrl:
          "https://github.com/richardm/engineeringleadership.fyi/edit/main/",
      },
      // TODO: add logo
      // logo: {
      //   src: "/logo.svg",
      //   replacesTitle: true,
      //   alt: "Engineering Leadership Handbook",
      // },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/richardm/engineeringleadership.fyi",
        },
      ],
      sidebar: [
        {
          label: "Universal Principles",
          autogenerate: { directory: "universal-principles" },
        },
        {
          label: "Laws",
          autogenerate: { directory: "laws" },
        },
        {
          label: "Tenets",
          autogenerate: { directory: "tenets" },
        },
        {
          label: "Contextual Principles",
          autogenerate: { directory: "contextual-principles" },
        },
        {
          label: "Values",
          autogenerate: { directory: "values" },
        },
        {
          label: "Practices",
          autogenerate: { directory: "practices" },
        },
        {
          label: "Books & Resources",
          autogenerate: { directory: "books" },
        },
      ],
      // items: [
      //   Each item here is one entry in the navigation menu.
      //       { label: "Example Guide", slug: "universal-principles" },
      //     ],
      //   },
      //   {
      //     label: "Reference",
      //     autogenerate: { directory: "reference" },
      //   },
      // ],
    }),
  ],
});
