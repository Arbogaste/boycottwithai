import Parser from 'rss-parser';

const parser = new Parser();

const EXTERNAL_FEEDS = [
  'https://rss.nytimes.com/services/xml/rss/nyt/World.xml'
];

const INTERNAL_ITEMS = [
  {
    title: 'Internal: Rapid solidarity call',
    description: 'Internal alert: local meeting at 18:00. Check safety guidance.',
    link: '/actions/',
    pubDate: new Date().toUTCString(),
  }
];

export async function getAggregatedItems() {
  const items = [...INTERNAL_ITEMS];
  for (const feedUrl of EXTERNAL_FEEDS) {
    try {
      const feed = await parser.parseURL(feedUrl);
      for (const it of feed.items || []) {
        items.push({
          title: it.title || 'No title',
          description: it.contentSnippet || it.content || it.description || '',
          link: it.link || feedUrl,
          pubDate: it.pubDate ? new Date(it.pubDate).toUTCString() : new Date().toUTCString(),
        });
      }
    } catch (err) {
      console.error('rss-aggregator: failed to fetch', feedUrl, err && err.message);
    }
  }
  // sort newest first
  items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return items;
}
