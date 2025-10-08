import rss from '@astrojs/rss';
import { getAggregatedItems } from '../lib/rss-aggregator';

export async function GET(context) {
  const items = await getAggregatedItems();
  // Ensure `site` is provided to the rss() helper. Prefer context.site, then derive
  // from the incoming request URL, finally fall back to localhost.
  const site = context?.site || (context?.request ? new URL('/', context.request.url).toString() : (process.env.SITE || 'http://localhost:4321/'));

  return rss({
    title: 'BoycottWithAI — Aggregated News & Alerts',
    description: 'Combined feed of internal alerts and selected external news sources',
    site,
    items,
  });
}
