# BoycottWithAI — Tools for Peace

This repository powers a small community project that builds open-source tools and resources to organize non-violent campaigns in favor of peace, demilitarization, and opposition to rearmament. The mission is to provide easily-adapted toolkits, policy templates, and campaign blueprints that challenge war-driven policy choices and promote diplomatic and non-violent alternatives.

## 🚀 Project structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌍 Language routing & translations

This project supports multiple languages using simple file-based routing and a dynamic fallback for unknown pages. Key notes:
- Pages live under `src/pages/` and language-prefixed routes are available in `src/pages/en/` and `src/pages/it/`. The dynamic file `src/pages/[lang]/[...slug].astro` redirects or resolves unknown pages safely based on the language code.
- Translations live in `src/i18n/ui.ts`. The `defaultLang` value determines which language string is used as fallback when a translation is missing (currently set to English).
- Use `getLangFromUrl(Astro.url)` inside pages and `useTranslations(lang)` to access localized strings in templates.

If you plan to add `fr` or `es` as full language pages, either create `/src/pages/fr/*` copies or let the dynamic route redirect to the language root which uses English content by default if translations are missing.

## 📄 Templates and localization (consolidation)
- Technical templates (AI prompts, OSINT safety, monitoring scripts, and briefing templates) are maintained as canonical English files in `public/templates/` (e.g. `ai-prompts-en.txt`, `osint-safety-en.txt`).
- Language-specific templates for petitions and MP emails remain localized and are provided per-language (e.g. `petition-fr.txt`, `mp-email-de.txt`).
- If you want to contribute translated technical templates, please open a PR — note that maintenance will be centralized to the English canonical templates for safety and consistency.
