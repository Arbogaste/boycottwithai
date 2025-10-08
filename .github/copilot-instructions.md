BoycottWithAI - A social justice framework powered by AI, with the goal of boycotting companies, products, and services that exploit workers, violate human rights, or harm the environment.  

Improve the page in the best way possible, following these guidelines and best ui/ux practices, be clear, concise, and efficient.

You are a SEO expert, a web developer, and a technical writer, with social justice values, use trending and social justice fights topics in the parahraph and use seo keywords and optimizations. 


# Astro Docs (Routing, i18)
    - Skip to content you need
    - Priority to SEO, popularity, and best performance 
    - Use Typescript solutions
    - Prefer simple and clear code
    - Use best practices
    - Use latest Astro features 


## Routing
Astro uses file-based routing to generate your build URLs based on the file layout of your project src/pages/ directory.

Navigating between pages
Astro uses standard HTML <a> elements to navigate between routes. There is no framework-specific <Link> component provided.

src/pages/index.astro
<p>Read more <a href="/about/">about</a> Astro!</p>

<!-- With `base: "/docs"` configured -->
<p>Learn more in our <a href="/docs/reference/">reference</a> section!</p>

Static routes
.astro page components as well as Markdown and MDX Files (.md, .mdx) within the src/pages/ directory automatically become pages on your website. Each page’s route corresponds to its path and filename within the src/pages/ directory.

# Example: Static routes
src/pages/index.astro        -> mysite.com/
src/pages/about.astro        -> mysite.com/about
src/pages/about/index.astro  -> mysite.com/about
src/pages/about/me.astro     -> mysite.com/about/me
src/pages/posts/1.md         -> mysite.com/posts/1

Tip

There is no separate “routing config” to maintain in an Astro project! When you add a file to the src/pages/ directory, a new route is automatically created for you. In static builds, you can customize the file output format using the build.format configuration option.

Dynamic routes
An Astro page file can specify dynamic route parameters in its filename to generate multiple, matching pages. For example, src/pages/authors/[author].astro generates a bio page for every author on your blog. author becomes a parameter that you can access from inside the page.

In Astro’s default static output mode, these pages are generated at build time, and so you must predetermine the list of authors that get a corresponding file. In SSR mode, a page will be generated on request for any route that matches.

Static (SSG) Mode
Because all routes must be determined at build time, a dynamic route must export a getStaticPaths() that returns an array of objects with a params property. Each of these objects will generate a corresponding route.

[dog].astro defines the dynamic dog parameter in its filename, so the objects returned by getStaticPaths() must include dog in their params. The page can then access this parameter using Astro.params.

src/pages/dogs/[dog].astro
---
export function getStaticPaths() {
  return [
    { params: { dog: "clifford" }},
    { params: { dog: "rover" }},
    { params: { dog: "spot" }},
  ];
}

const { dog } = Astro.params;
---
<div>Good dog, {dog}!</div>

This will generate three pages: /dogs/clifford, /dogs/rover, and /dogs/spot, each displaying the corresponding dog name.

The filename can include multiple parameters, which must all be included in the params objects in getStaticPaths():

src/pages/[lang]-[version]/info.astro
---
export function getStaticPaths() {
  return [
    { params: { lang: "en", version: "v1" }},
    { params: { lang: "fr", version: "v2" }},
  ];
}

const { lang, version } = Astro.params;
---

This will generate /en-v1/info and /fr-v2/info.

Parameters can be included in separate parts of the path. For example, the file src/pages/[lang]/[version]/info.astro with the same getStaticPaths() above will generate the routes /en/v1/info and /fr/v2/info.

Decoding params
The params provided to the function getStaticPaths() function are not decoded. Use the function decodeURI when you need to decode parameter values.

src/pages/[slug].astro
---
export function getStaticPaths() {
  return [
    { params: { slug: decodeURI("%5Bpage%5D") }}, // decodes to "[page]"
  ]
}
---

Example: Dynamic pages at multiple levels
In the following example, a rest parameter ([...slug]) and the props feature of getStaticPaths() generate pages for slugs of different depths.

src/pages/[...slug].astro
---
export function getStaticPaths() {
  const pages = [
    {
      slug: undefined,
      title: "Astro Store",
      text: "Welcome to the Astro store!",
    },
    {
      slug: "products",
      title: "Astro products",
      text: "We have lots of products for you",
    },
    {
      slug: "products/astro-handbook",
      title: "The ultimate Astro handbook",
      text: "If you want to learn Astro, you must read this book.",
    },
  ];

  return pages.map(({ slug, title, text }) => {
    return {
      params: { slug },
      props: { title, text },
    };
  });
}

const { title, text } = Astro.props;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>

On-demand dynamic routes
For on-demand rendering with an adapter, dynamic routes are defined the same way: include [param] or [...path] brackets in your file names to match arbitrary strings or paths. But because the routes are no longer built ahead of time, the page will be served to any matching route. Since these are not “static” routes, getStaticPaths should not be used.

For on-demand rendered routes, only one rest parameter using the spread notation may be used in the file name (e.g. src/pages/[locale]/[...slug].astro or src/pages/[...locale]/[slug].astro, but not src/pages/[...locale]/[...slug].astro).

src/pages/resources/[resource]/[id].astro
---
export const prerender = false; // Not needed in 'server' mode
const { resource, id } = Astro.params;
---
<h1>{resource}: {id}</h1>

This page will be served for any value of resource and id: resources/users/1, resources/colors/blue, etc.

Modifying the [...slug] example for SSR
Because SSR pages can’t use getStaticPaths(), they can’t receive props. The previous example can be adapted for SSR mode by looking up the value of the slug param in an object. If the route is at the root (”/”), the slug param will be undefined. If the value doesn’t exist in the object, we redirect to a 404 page.

src/pages/[...slug].astro
---
const pages = [
  {
    slug: undefined,
    title: 'Astro Store',
    text: 'Welcome to the Astro store!',
  },
  {
    slug: 'products',
    title: 'Astro products',
    text: 'We have lots of products for you',
  },
  {
    slug: 'products/astro-handbook',
    title: 'The ultimate Astro handbook',
    text: 'If you want to learn Astro, you must read this book.',
  }
];

const { slug } = Astro.params;
const page = pages.find((page) => page.slug === slug);
if (!page) return Astro.redirect("/404");
const { title, text } = page;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>

Redirects
Sometimes you will need to redirect your readers to a new page, either permanently because your site structure has changed or in response to an action such as logging in to an authenticated route.

You can define rules to redirect users to permanently-moved pages in your Astro config. Or, redirect users dynamically as they use your site.

Configured Redirects
Added in: astro@2.9.0

You can specify a mapping of permanent redirects in your Astro config with the redirects value.

For internal redirects, this is a mapping of an old route path to the new route. As of Astro v5.2.0, it is also possible to redirect to external URLs that start with http or https and can be parsed:

astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  redirects: {
    "/old-page": "/new-page",
    "/blog": "https://example.com/blog"
  }
});

These redirects follow the same priority rules as file-based routes and will always take lower precedence than an existing page file of the same name in your project. For example, /old-page will not redirect to /new-page if your project contains the file src/pages/old-page.astro.

Dynamic routes are allowed as long as both the new and old routes contain the same parameters, for example:

{
  "/blog/[...slug]": "/articles/[...slug]"
}

Using SSR or a static adapter, you can also provide an object as the value, allowing you to specify the status code in addition to the new destination:

astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  redirects: {
    "/old-page": {
      status: 302,
      destination: "/new-page"
    },
    "/news": {
      status: 302,
      destination: "https://example.com/news"
    }
  }
});

When running astro build, Astro will output HTML files with the meta refresh tag by default. Supported adapters will instead write out the host’s configuration file with the redirects.

The status code is 301 by default. If building to HTML files the status code is not used by the server.

Dynamic redirects
On the Astro global, the Astro.redirect method allows you to redirect to another page dynamically. You might do this after checking if the user is logged in by getting their session from a cookie.
---

Because Astro uses HTML streaming in on-demand rendering, redirects must be done at the page level, not inside child components.

## i18n features

In v4.0, Astro added built-in support for i18n routing that allows you to configure default and supported languages and includes valuable helper functions to assist you in serving an international audience. If you want to use this instead, see our internationalization guide to learn about these features.

This example serves each language at its own subpath, e.g. example.com/en/blog for English and example.com/fr/blog for French.

If you prefer the default language to not be visible in the URL unlike other languages, there are instructions to hide the default language below.

See the resources section for external links to related topics such as right-to-left (RTL) styling and choosing language tags.
Recipe
Set up pages for each language
Create a directory for each language you want to support. For example, en/ and fr/ if you are supporting English and French:


Static
On demand
src/pages/index.astro
<meta http-equiv="refresh" content="0;url=/en/" />

This approach uses a meta refresh and will work however you deploy your site. Some static hosts also let you configure server redirects with a custom configuration file. See your deploy platform’s documentation for more details.

Use collections for translated content
Create a folder in src/content/ for each type of content you want to include and add subdirectories for each supported language. For example, to support English and French blog posts:

src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date()
  })
});

export const collections = {
  'blog': blogCollection
};

Read more about Content Collections.
Use dynamic routes to fetch and render content based on a lang and a slug parameter.

Static On demand
In static rendering mode, use getStaticPaths to map each content entry to a page:

src/pages/[lang]/blog/[...slug].astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const pages = await getCollection('blog');

  const paths = pages.map(page => {
    const [lang, ...slug] = page.id.split('/');
    return { params: { lang, slug: slug.join('/') || undefined }, props: page };
  });

  return paths;
}

const { lang, slug } = Astro.params;
const page = Astro.props;
const formattedDate = page.data.date.toLocaleString(lang);
const { Content } = await render(page);
---
<h1>{page.data.title}</h1>
<p>by {page.data.author} • {formattedDate}</p>
<Content/>

Read more about dynamic routing.
Date formatting

The example above uses the built-in toLocaleString() date-formatting method to create a human-readable string from the frontmatter date. This ensures the date and time are formatted to match the user’s language.

Translate UI strings
Create dictionaries of terms to translate the labels for UI elements around your site. This allows your visitors to experience your site fully in their language.

Create a src/i18n/ui.ts file to store your translation strings:

src/i18n/ui.ts
export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
} as const;

Create two helper functions: one to detect the page language based on the current URL, and one to get translations strings for different parts of the UI in src/i18n/utils.ts:

src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

Did you notice?

In step 1, the nav.twitter string was not translated to French. You may not want every term translated, such as proper names or common industry terms. The useTranslations helper will return the default language’s value if a key is not translated. In this example, French users will also see “Twitter” in the nav bar.

Import the helpers where needed and use them to choose the UI string that corresponds to the current language. For example, a nav component might look like:

src/components/Nav.astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<ul>
    <li>
        <a href={`/${lang}/home/`}>
          {t('nav.home')}
        </a>
    </li>
    <li>
        <a href={`/${lang}/about/`}>
          {t('nav.about')}
        </a>
    </li>
    <li>
        <a href="https://twitter.com/astrodotbuild">
          {t('nav.twitter')}
        </a>
    </li>
</ul>

Each page must have a lang attribute on the <html> element that matches the language on the page. In this example, a reusable layout extracts the language from the current route:

src/layouts/Base.astro
---
import { getLangFromUrl } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
---
<html lang={lang}>
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <title>Astro</title>
    </head>
    <body>
        <slot />
    </body>
</html>

You can then use this base layout to ensure that pages use the correct lang attribute automatically.

src/pages/en/about.astro
---
import Base from '../../layouts/Base.astro';
---
<Base>
    <h1>About me</h1>
    ...
</Base>