import rss from '@astrojs/rss';

export async function GET(context) {
  // Sample internal feed items. We'll later merge these with external feeds in a combined aggregator.
  const items = [
    {
      title: 'Urgent: Solidarity Call — Local Action',
      description: 'A rapid-response local assembly to support workers organizing in the area. Details and safety tips.',
      link: '/actions/',
      pubDate: new Date().toUTCString(),
    },
    {
      title: 'Tooling update: Map demo live',
      description: 'We deployed a mock action-map to visualize safe meetup points and resources. Connect privacy-first feeds to enable real data.',
      link: '/map/',
      pubDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toUTCString(),
    },
  ];

  return rss({
    title: 'BoycottWithAI — Alerts & Tools',
    description: 'Updates and alerts for actions and campaigns',
    // Provide a robust `site` value: prefer context.site, then derive from request,
    // then use process.env.SITE, and finally fall back to localhost:4321.
    site: context?.site || (context?.request ? new URL('/', context.request.url).toString() : (process.env.SITE || 'http://localhost:4321/')),
    items,
    customData: `<language>it-it</language>`,
  });
}
