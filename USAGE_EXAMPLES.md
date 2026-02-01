# BoycottWithAI — Usage Examples & Quick Start

## 📚 For Website Visitors

### Scenario 1: "I want to understand corporate accountability"

**Path**: Homepage → Scroll to hero section → Click 🔴 "Responsabilità Aziendale" in menu

**What they find**:

**Action**: Download "Corporate Accountability" resource (markdown, 20 min read)


### Scenario 2: "I've identified local pollution—how do I prove government complicity?"

**Path**: Visit country-specific corporate accountability page  
Example: `/it/corporate-accountability` for Italian users

4. **Template** — Download "Corporate Report Template" from resources page
5. **Evidence** — Fill template with 5 sections (polluter, contracts, oppression, data, action)
6. **Share** — Email to journalists, MPs, NGOs, community
**Time**: 3-4 hours for complete report

---

### Scenario 3: "I want to create visual content for social media"

- How to generate "before/after" maps (satellite imagery)
- Create infographics (71% pollution stat, company logos)
- Generate satirical posters
- Batch process images for TikTok/Instagram

**Example**: User downloads NASA FIRMS data for Po River, generates "Po Polluted: Company X Responsible" graphic in 30 minutes

---

### Scenario 4: "I want to organize a campaign with automated tools"


**Tools Provided**:
- Multi-agent AI system for research → content → distribution
- Setup: 1 hour (install Python, CrewAI, configure)
- Execution: Define target (company name), run agents, get report + social content

**Example**: 
```
Input: "Po River pollution by Italian chemical company"
Output: 
  - Full investigation report (EMAS + contracts)
  - Email template to 50 MPs
  - PDF briefing for journalists
```

---

## 💻 For Developers / Tech Contributors

### Adding New Content

**Example**: Add Italian case study about Sicilian deforestation

1. **Create page** → `src/pages/it/sicilia-deforestation-case.astro`
2. **Add translations** → `src/i18n/ui.ts` add keys (e.g., `case.sicilia.title`)
3. **Update menu** → `src/layouts/Base.astro` add link
4. **Update sitemap** → `public/sitemap.xml` add URL
5. **Build** → `npm run build`
6. **Deploy** → Push to Netlify/Vercel

---

### Translating Resources

**Example**: Translate corporate accountability resource to Spanish

1. Copy `/public/downloads/resources/corporate-accountability.md`
2. Rename to `corporate-accountability-es.md`
3. Translate content (tools section customized for Spain: APAT, etc.)
4. Link from Spanish resources page
5. Update `src/pages/es/resources.astro` with new card

---

### Extending Translation System

**Example**: Add Spanish language support

1. **Edit `src/i18n/ui.ts`**:
   ```typescript
   export const languages = {
     en: 'English',
     it: 'Italiano',
     fr: 'Français',
     de: 'Deutsch',
     es: 'Español',  // ADD
   };

   export const ui = {
     en: { /* existing */ },
     it: { /* existing */ },
     fr: { /* existing */ },
     de: { /* existing */ },
     es: {              // ADD
       'nav.home': 'Inicio',
       'nav.tools': 'Herramientas',
       // ... (850+ keys total)
     }
   };
   ```

2. **Create Spanish pages** → `src/pages/es/index.astro`, etc.

3. **Update Base layout** → hreflang in meta tags

4. **Build & deploy**

---

## 🛠️ Customization Examples

### Example 1: Add New Transparency Portal

**Scenario**: German anti-corruption portal discovered

**Code Change** (in `/de/corporate-accountability.astro`):
```html
<div class="card">
  <h4>🇩🇪 Deutschland</h4>
  <p><strong>Neue Quelle:</strong> 
    <a href="https://anticorruptionplatform.de" target="_blank">
      AntiCorruptionPlatform
    </a> — Real-time Lobbying-Tracking
  </p>
</div>
```

**SEO Impact**: Increases German keyword rankings (anti-corruption + transparency)

---

### Example 2: Add International Case Study

**Scenario**: Textile factory pollution exposed in Bangladesh

**Process**:
1. Create `src/pages/en/case-study-bangladesh.astro`
2. Add translations for Bangladesh region
3. Include satellite images (NASA FIRMS), factory contracts, ACLED protest data
4. Link from resources page & corporate accountability page
5. Add to sitemap
6. Promote via social media

**Impact**: Attracts international audience, increases backlinks from NGOs

---

### Example 3: Create Interactive Corporate Tracker

**Scenario**: Build searchable database of company violations

**Technical Setup**:
1. Create `/src/pages/en/tracker.astro`
2. Load data from `src/data/companies.json` (manually curated or API-fed)
3. Use JavaScript for client-side filtering by:
   - Company name
   - Pollution type
   - Country
   - Government contracts
   - Activist arrests

**Example HTML**:
```html
<input id="companySearch" type="text" placeholder="Search company...">
<div id="results"></div>

<script>
  // Client-side filtering of company database
  document.getElementById('companySearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = companies.filter(c => c.name.toLowerCase().includes(query));
    // Render filtered results
  });
</script>
```

---

## 📊 Analytics Setup

### Google Search Console

1. **Sign up** → https://search.google.com/search-console
2. **Add property** → Select your domain
3. **Upload sitemap** → Paste `https://boycottwithai.org/sitemap.xml`
4. **Monitor**:
   - Search impressions by keyword
   - Click-through rate (CTR)
   - Average ranking position
   - Mobile usability issues

**Key Metrics to Track**:
- "responsabilità aziendale" (Italian) ranking position (target: high ranking positions)
- "corporate accountability" (English) CTR (target: 10%+)
- "pollution tracking" keyword volume (target: 500+ monthly searches)

---

### Privacy-Respecting Analytics (Plausible)

1. **Sign up** → https://plausible.io/
2. **Add code** → Add script to `/src/layouts/Base.astro`
3. **Dashboard** → View real-time traffic, top pages, referrers

```html
<!-- Add to <head> in Base.astro -->
<script defer data-domain="boycottwithai.org" 
  src="https://plausible.io/js/plausible.js"></script>
```

**Metrics**:
- Page views per resource (target: 1,000+/month per resource)
- Download rates (target: 20% of visitors download a resource)
- Time on page (target: 3+ minutes for corporate accountability)
- Referrer sources (NGOs, media, social)

---

## 🚀 Deployment Commands

### Local Development
```bash
cd /home/arbogaste/Documenti/attack/AI_marxist/boycottwithai
npm run dev
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
# Generates /dist/ folder
```

### Deploy to Netlify (Free)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
# Creates live URL
```

### Deploy to Vercel (Free)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### GitHub Pages (Free, but slower)
```bash
# Add to astro.config.mjs
export default defineConfig({
  site: 'https://yourusername.github.io',
});

# Deploy
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

---

## 📞 Troubleshooting

### Build Error: "Expected '}' but found..."
**Cause**: Missing comma in `ui.ts` translation keys  
**Fix**: Check line numbers in error message, add missing comma

**Example**:
```typescript
// WRONG:
'key1': 'value1'
'key2': 'value2'

// CORRECT:
'key1': 'value1',
'key2': 'value2',
```

---

### Page Not Generating
**Cause**: Syntax error in page component  
**Fix**: Check Astro syntax:
- Import statements at top (between `---` tags)
- HTML valid (close all tags)
- No trailing commas in TypeScript

**Example Error Output**:
```
ERROR [build] Could not render `/it/corporate-accountability`
  SyntaxError: Expected identifier, got '>'
  at src/pages/it/corporate-accountability.astro:42
```

**Debug**: Check line 42, fix HTML syntax

---

### Sitemap Not Indexing
**Cause**: Robots.txt blocking `/sitemap.xml`  
**Fix**: Verify `public/robots.txt` has:
```
Allow: /
Sitemap: https://boycottwithai.org/sitemap.xml
```

---

### Translations Not Appearing
**Cause**: Key doesn't exist in `ui.ts`  
**Fix**: Add key to ALL language blocks:

```typescript
export const ui = {
  it: { 'new.key': 'Testo italiano' },
  en: { 'new.key': 'English text' },
  fr: { 'new.key': 'Texte français' },
  de: { 'new.key': 'Deutscher Text' },
};
```

---

## 💡 Tips for Maximum Impact

### 1. Content Marketing
- **Update corporate accountability case studies monthly** (new violations discovered, government responses)
- **Create infographics** (71% stat, regional company examples, arrest data)
- **Guest post on NGO blogs** (link to corporate accountability resource)

### 2. SEO
- **Target long-tail keywords**: "how to track corporate pollution Italy", "government contract transparency UK"
- **Build backlinks**: Reach out to journalists, environmental blogs, watchdog sites
- **Optimize for featured snippets**: Clear step-by-step resources (already done!)

### 3. Community
- **Create email newsletter**: Weekly corporate accountability cases
- **Build Slack/Discord group**: Coordinate research, share findings
- **Host webinars**: "How to File FOIA Requests", "Reading EMAS Declarations"

### 4. Technical
- **API Integration**: Auto-pull latest government contracts, ACLED data
- **Mobile App**: Offline resource access, GPS-based local pollution tracker
- **Chatbot**: Answer questions about corporate accountability, resource users

---

**Last Updated**: January 15, 2025  
**Version**: 2.1
