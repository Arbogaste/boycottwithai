# BoycottWithAI — Corporate Accountability & Civic Resistance Platform

## Recent Updates (January 2025)

### NEW: Corporate Accountability Section
- **New Pages (All Languages)**: `/[lang]/corporate-accountability/`
  - Italian: `/it/corporate-accountability`
  - English: `/en/corporate-accountability`
  - French: `/fr/corporate-accountability`
  - German: `/de/corporate-accountability`

- **New Resources & Templates**:
  - `corporate-accountability.md` - 5-step methodology for tracking pollution and government contracts
  - `corporate-report-template.md` - Structured template for documenting corporate-government malfeasance

- **Navigation Update**: Main menu now features prominent "🔴 Responsabilità Aziendale" (Corporate Accountability) link

### SEO Improvements
- Added `robots.txt` for search engine crawling rules
- Added `sitemap.xml` with full URL structure and priority settings
- Updated meta tags across all corporate accountability pages
- Added structured data (JSON-LD) with organization schema
- Canonical links added to prevent duplicate content issues

### Content Improvements
- All resources pages now feature corporate accountability section
- resources include country-specific transparency portals (Italy, France, Germany, UK)
- Case studies with real data (Po River, Thames, Seine, Ruhr pollution)
- Practical toolkit with ACLED, NASA FIRMS, OpenStreetMap, government contract databases

---

## Platform Overview

**BoycottWithAI** is a civic resistance platform combining:
1. **Evidence-based narrative**: 71% of global pollution from 100 corporations; governments enable via contracts
2. **Practical tools**: OSINT (ACLED, GDELT), AI (Fooocus, CrewAI), data scraping (Python, BeautifulSoup)
3. **Resources & templates**: Downloadable markdown resources for tools; petitions, MP emails, briefings
4. **Multi-language support**: Italian, English, French, German (+ Spanish planned)
5. **Transparency focus**: Link to government contracts, pollution declarations, corporate lobbying data

---

## How to Build & Deploy

### Prerequisites
- Node.js 16+ (npm)
- Astro.js 4.x
- Git (optional, for version control)

### Local Development

```bash
cd /path/to/boycottwithai
npm install
npm run dev
```

Opens http://localhost:3000 with live reload.

### Build for Production

```bash
npm run build
```

Generates static files in `dist/` directory. Ready for:
- **Netlify**: Drop `dist/` folder, auto-deploys
- **Vercel**: Connect GitHub repo, auto-builds
- **Any static host**: FTP/rsync the `dist/` folder

### SEO Pre-Flight Checklist

Before deploying, verify:
- [ ] `robots.txt` exists and allows `/` (not blocking search engines)
- [ ] `sitemap.xml` updated with all pages and priority levels
- [ ] Meta tags on all pages (title, description, keywords, og:tags)
- [ ] Canonical links set (prevent duplicate indexing)
- [ ] Mobile responsive design tested (use Chrome DevTools)
- [ ] Page load speed: <3s on 4G (test with Google PageSpeed Insights)
- [ ] Internal links working (check 404s in build logs)

---

## Content Structure

### Pages

#### Italian (`/it/`)
- `index.astro` - Homepage: resistance hero, global issues, Italy-specific (Po pollution, wolf hunting, welfare)
- `corporate-accountability.astro` - NEW: Track corporate responsibility with tools by country
- `resources.astro` - Downloadable resources, templates, toolkits
- `tools.astro` - Featured tools (ACLED, Bellingcat, OSINT)
- `actions.astro` - Civic action templates
- `methodology.astro` - Investigative methodology
- `manifesto.astro` - Justice manifesto

#### English (`/en/`)
- Similar structure with UK-specific content (Thames pollution, fracking, energy companies)

#### French (`/fr/`)
- Similar with France specifics (Seine pollution, agriculture, nuclear)

#### German (`/de/`)
- Similar with Germany specifics (Ruhr pollution, forestry, coal)

### Resources (Downloadable)

Located in `/public/downloads/resources/`:
1. `scraping-python.md` - Extract public data (Python, BeautifulSoup)
2. `fooocus-visuals.md` - AI image generation
3. `tts-audio.md` - Text-to-speech with emotional voices
4. `ffmpeg-video.md` - Video montage for social campaigns
5. `crewai-agents.md` - Multi-agent AI automation
6. `osint-tools.md` - ACLED, GDELT, Bellingcat, NASA usage
7. `corporate-accountability.md` - **NEW**: 5-step corporate tracking methodology
8. `example-script.md` - Working code examples

### Templates (Downloadable)

Located in `/public/templates/`:
- `petition-[lang].txt` - Petition template
- `mp-email-[lang].txt` - MP contact template
- `briefing-[lang].txt` - One-page briefing
- `osint-safety-[lang].txt` - OSINT security rules
- `ai-prompts-[lang].txt` - AI prompt library
- `monitoring-sample-[lang].txt` - Sample OSINT monitoring
- `corporate-report-template.md` - **NEW**: Structured corporate accountability report

---

## Translation System

All UI text managed via `/src/i18n/ui.ts`:

```typescript
export const ui = {
  it: {
    'nav.tools': 'Strumenti',
    'corporate.title': 'Responsabilità Corporativa',
    // ... hundreds of keys
  },
  en: { /* English translations */ },
  fr: { /* French translations */ },
  de: { /* German translations */ },
};

// Usage in components:
const t = useTranslations('it');
<h1>{t('corporate.title')}</h1>
```

To add new content:
1. Add key to all language blocks in `ui.ts`
2. Use `useTranslations()` in component
3. Import in page: `import { useTranslations } from '../../i18n/utils'`

---

## SEO Keywords by Country

### Italy
- "responsabilità aziendale inquinamento"
- "contratti governativi trasparenza"
- "attivisti arrestati ambientalisti"
- "Po inquinato aziendale"
- "abbattimenti lupi"
- "diritti animali"

### UK/England
- "corporate accountability pollution"
- "Thames sewage scandal"
- "fracking environmental justice"
- "activist repression government"
- "fox hunting opposition"

### France
- "responsabilité corporative pollution"
- "Seine pollution amiante"
- "justice climatique"
- "lobbying agricole"
- "chasseurs renards"

### Germany
- "Unternehmensverantwortung Umwelt"
- "Ruhr Vergiftung Industrie"
- "Kohlelobby Regierung"
- "Hirschjagd Widerstand"
- "Waldrodung Bayern"

---

## Key Features

### 1. Corporate Tracking
- Step-by-step to identify polluters
- Access government contracts (trasparenza.it, data.gouv.fr, BundesAusschreibungen)
- Download EMAS pollution declarations
- Document activist arrests vs. unpunished executives
- Generate 1-page reports for media

### 2. OSINT Tools Integration
- **ACLED**: Protest & repression data
- **GDELT**: Global event monitoring
- **NASA FIRMS**: Real-time pollution/fire detection
- **Bellingcat**: Image verification methodology
- **OpenStreetMap**: Industrial site mapping

### 3. AI Content Generation
- **Fooocus**: Create infographics & "before/after" maps
- **EmotiVoice**: Generate emotional testimonial audio
- **FFmpeg**: Produce short viral videos
- **CrewAI**: Multi-agent research → content → distribution automation

### 4. Data Scraping Tools
- Python (BeautifulSoup, pandas) for extracting public data
- Government websites, procurement databases, corporate registries
- Secure documentation templates

### 5. Legal Protection
- OSINT safety checklist
- FOIA request templates
- Amnesty/FIDH resources
- International complaint mechanisms (ECHR, UN)

---

## Deployment Checklist

### Pre-Deployment
- [ ] `npm run build` succeeds (no errors)
- [ ] `dist/` folder contains `sitemap.xml`, `robots.txt`
- [ ] All language pages generated: `/en/`, `/it/`, `/fr/`, `/de/`
- [ ] All new resources present: `/en/corporate-accountability/`, `/it/corporate-accountability/`, etc.

### Post-Deployment
- [ ] Test site at live URL
- [ ] Verify all links work (404 check)
- [ ] Verify CSS loads correctly
- [ ] Test mobile responsiveness
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Add hreflang tags confirmed in meta (check source)

### Ongoing SEO
- [ ] Monitor Google Search Console for errors
- [ ] Track keyword rankings (use SEMrush, Ahrefs free tier, or Google Trends)
- [ ] Update pages monthly with fresh content (news, case studies)
- [ ] Build backlinks via press releases, partner sites, social media
- [ ] Measure traffic via Matomo or Plausible analytics (privacy-respecting)

---

## File Structure

```
boycottwithai/
├── astro.config.mjs           # Astro configuration
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies
├── public/
│   ├── robots.txt             # SEO: Search engine crawl rules
│   ├── sitemap.xml            # SEO: URL index
│   ├── styles.css             # Global stylesheet
│   ├── downloads/resources/      # Downloadable markdown resources
│   └── templates/             # Text/markdown templates
├── src/
│   ├── pages/
│   │   ├── index.astro        # Redirect to /en/ or /it/
│   │   ├── en/                # English pages
│   │   │   ├── index.astro    # Homepage
│   │   │   ├── corporate-accountability.astro
│   │   │   ├── resources.astro
│   │   │   └── ...
│   │   ├── it/                # Italian pages
│   │   ├── fr/                # French pages
│   │   ├── de/                # German pages
│   │   └── [lang]/[...slug].astro  # Dynamic routing
│   ├── components/
│   │   ├── LanguagePicker.astro
│   │   └── ToolCard.astro
│   ├── layouts/
│   │   └── Base.astro         # Main layout with nav
│   ├── i18n/
│   │   ├── ui.ts              # All translations
│   │   └── utils.ts           # Helper functions
│   ├── lib/
│   │   └── rss-aggregator.js  # RSS feed logic
│   └── data/
│       ├── boycott_response.json
│       └── internal_feed.json
```

---

## Support & Maintenance

### For Questions About:
- **Astro routing**: https://docs.astro.build/en/resources/routing/
- **i18n setup**: See `src/i18n/utils.ts` for examples
- **SEO**: Check meta tags in each page's `<head>`
- **Resources**: All markdown files in `public/downloads/resources/`

### To Add New Content:
1. Create new page in `src/pages/[lang]/newpage.astro`
2. Add translations to `src/i18n/ui.ts` (all language blocks)
3. Add navigation link in `src/layouts/Base.astro`
4. Update `public/sitemap.xml` with new URL
5. Run `npm run build` and test locally
6. Deploy

---

## Accountability & Impact Metrics

### Tracked Metrics:
- Site traffic (unique visitors, pages/session, bounce rate)
- Petition signatures collected
- downloads
- Social media shares & engagement
- Media coverage & backlinks
- Policy changes resulting from pressure

### Tools for Tracking:
- **Analytics**: Plausible (privacy), Matomo (self-hosted), Google Analytics (simple)
- **Petition Platform**: Change.org, Avaaz, Action Network
- **Social Monitoring**: Hootsuite, Buffer, Sprout Social
- **Media Monitoring**: Google Alerts, Mention, Brandwatch

---

**Last Updated**: January 15, 2025
**Version**: 2.1 (Corporate Accountability Update)
**Status**: Production Ready ✅
