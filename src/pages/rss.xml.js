import rss from '@astrojs/rss';

export async function GET(context) {
  // Internal feed items: Africa trials, Epstein investigation, tools & resources
  const items = [
    {
      title: '🌍 LIVE: Africa 2026 Landmark Trials — TotalEnergies EACOP Hearing (Feb 19-20)',
      description: 'Paris court hearings begin today on whether multinationals can be legally forced to abandon fossil fuel projects for climate compliance. First precedent of its kind globally. Follow live updates, evidence documents, and how to support legal teams via Sherpa.',
      link: '/corporate-accountability/#africa-trials',
      pubDate: new Date('2026-02-21T15:00:00Z').toUTCString(),
      categories: ['Corporate Accountability', 'Africa', 'Climate Justice', 'Legal'],
    },
    {
      title: '⚖️ Shell Nigeria Legacy Pollution Trial: 14,000 Victims Sue for Cleanup',
      description: 'June 2025 UK High Court ruling declared Shell liable for "legacy pollution" — meaning decades-old spills = endless corporate responsibility. March 2027 merits trial will set precedent for all multinational extraction operations.',
      link: '/en/investigations/#africa-shell',
      pubDate: new Date('2026-02-20T10:30:00Z').toUTCString(),
      categories: ['Shell', 'Nigeria', 'Environmental Justice', 'Legal Victory'],
    },
    {
      title: '🔨 Glencore Individual Accountability: Criminal Prosecution of Executives',
      description: 'After $1.3B corporate fines (2022), UK has shifted strategy: now prosecuting individual traders criminally for bribery across West Africa & DRC mining ops. Trial October 2027. Signals end of "corporation pays, executives walk free" model.',
      link: '/en/investigations/#glencore',
      pubDate: new Date('2026-02-19T14:00:00Z').toUTCString(),
      categories: ['Glencore', 'Executive Accountability', 'Corruption', 'DRC'],
    },
    {
      title: '📄 New OCR Tools Guide: Automate Document Analysis at Scale',
      description: 'Added Dots OCR (RedNote HiLab) and DeepSeek-OCR-2 to tools library. Extract text from leaked documents, PDFs, and scans with zero cost. Full workflow guide for building searchable archives of corporate evidence.',
      link: '/tools/#ocr',
      pubDate: new Date('2026-02-18T09:15:00Z').toUTCString(),
      categories: ['OSINT Tools', 'Document Processing', 'Automation', 'Research'],
    },
    {
      title: '🔍 Epstein Files: Complete Searchable Database Launch',
      description: '60,000+ documents now available. JMail.world provides instant search; download our full methodology guide for reproducible analysis. Includes Python OCR pipeline, SQLite FTS5 setup, entity mapping, and co-occurrence analysis.',
      link: '/tools/#epstein',
      pubDate: new Date('2026-02-17T16:45:00Z').toUTCString(),
      categories: ['Epstein Files', 'Power Networks', 'Investigation', 'Open Data'],
    },
    {
      title: '💪 Urgent: Solidarity Action — Support Local Workers Organizing',
      description: 'Rapid-response assembly to support workplace organizing in your area. Safety protocols, contact info, and how to participate. All skills welcome: comms, legal observers, medics, logistics.',
      link: '/actions/',
      pubDate: new Date('2026-02-15T12:00:00Z').toUTCString(),
      categories: ['Solidarity', 'Direct Action', 'Workers', 'Local'],
    },
    {
      title: '🗺️ Action Map: Find Safe Meetup Points & Local Resources',
      description: 'Live deployment of location-aware action map. See verified safe houses, legal aid contacts, first aid networks, and trusted community organizers. Connect privacy-first feeds to enable crowdsourced updates.',
      link: '/map/',
      pubDate: new Date('2026-02-14T11:20:00Z').toUTCString(),
      categories: ['Infrastructure', 'Safety', 'Resources', 'Community'],
    },
    {
      title: '📋 Corporate Accountability Framework: Complete Resource Library',
      description: 'New guides on pollution tracking, government contracting databases, and activist legal defense. Includes templates for MP emails, petitions, corporate briefings, and monitoring protocols in 4 languages.',
      link: '/corporate-accountability/',
      pubDate: new Date('2026-02-13T08:30:00Z').toUTCString(),
      categories: ['Resources', 'Corporate Accountability', 'Templates', 'Training'],
    },
    {
      title: '🛠️ OSINT Toolkit Expanded: 25+ New Tools for Conflict Monitoring',
      description: 'Added Bellingcat geolocation methods, GDELT escalation tracking, and satellite imagery guides. Complete workflows for verifying footage, mapping infrastructure, and tracking military movements with open-source tools.',
      link: '/tools/#osint',
      pubDate: new Date('2026-02-12T13:00:00Z').toUTCString(),
      categories: ['OSINT', 'Verification', 'Conflict Monitoring', 'Toolkit'],
    },
    {
      title: '✊ Anti-Rearmament Campaign: Parliamentary Votes & Divestment Tracker',
      description: 'Live tracking of defense spending bills, weapons transfers, and divestment victories across EU parliaments. See how your elected officials vote and connect with campaigns targeting military contractors.',
      link: '/methodology/',
      pubDate: new Date('2026-02-11T10:15:00Z').toUTCString(),
      categories: ['Anti-Rearmament', 'Transparency', 'Divestment', 'Parliamentary'],
    },
  ];

  return rss({
    title: 'BoycottWithAI — Alerts & Tools',
    description: 'Breaking updates on corporate accountability, 2026 landmark trials, Epstein investigation, OSINT resources, and non-violent action campaigns across Europe and globally',
    // Provide a robust `site` value: prefer context.site, then derive from request,
    // then use process.env.SITE, and finally fall back to https://boycottwithai.org/.
    site: context?.site || (context?.request ? new URL('/', context.request.url).toString() : (process.env.SITE || 'https://boycottwithai.org/')),
    items,
    customData: `
      <language>en-en</language>
      <category>Justice &amp; Accountability</category>
      <category>OSINT &amp; Investigation</category>
      <category>Non-Violent Action</category>
      <managingEditor>contact@boycottwithai.org</managingEditor>
      <ttl>360</ttl>
      <docs>http://www.rssboard.org/rss-specification</docs>
    `,
  });
}
