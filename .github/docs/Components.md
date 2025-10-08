Routing
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

Learn more about getStaticPaths().

Related recipe:
Add i18n features
Rest parameters
If you need more flexibility in your URL routing, you can use a rest parameter ([...path]) in your .astro filename to match file paths of any depth:

src/pages/sequences/[...path].astro
---
export function getStaticPaths() {
  return [
    { params: { path: "one/two/three" }},
    { params: { path: "four" }},
    { params: { path: undefined }}
  ]
}

const { path } = Astro.params;
---

This will generate /sequences/one/two/three, /sequences/four, and /sequences. (Setting the rest parameter to undefined allows it to match the top level page.)

Rest parameters can be used with other named parameters. For example, GitHub’s file viewer can be represented with the following dynamic route:

/[org]/[repo]/tree/[branch]/[...file]

In this example, a request for /withastro/astro/tree/main/docs/public/favicon.svg would be split into the following named parameters:

{
  org: "withastro",
  repo: "astro",
  branch: "main",
  file: "docs/public/favicon.svg"
}

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


