
# BoycottWithAI — Non-violent civic action toolkit

Open-source tools and templates for running evidence-based campaigns for diplomacy, humanitarian protection, and accountability. Includes petition templates, MP outreach scripts, OSINT safety guides, and real case studies.

## Get started

**For individuals (5 min):**
1. Pick a target (company, contract, or representative)
2. Download petition & MP email templates from `/public/templates/`
3. Personalize with local evidence
4. Share with your community

**For organizers (30+ min):**
1. Research target using open data (ACLED, GDELT, campaign briefings)
2. Draft and publish petition + one-page briefing
3. Run coordinated outreach (MP emails, social posts, investor letters)
4. Track results (signatures, press mentions, responses)

See [investigations](/investigations) page for documented case studies (ILVA, PFAS, Thames, arms exports, etc.) to understand how accountability campaigns work.

## What's included

- **Templates:** Ready-to-use petitions, MP emails, briefings, OSINT safety guides (`/public/templates/`)
- **Case studies:** 20+ documented investigations with evidence links and actionable steps
- **Data:** Corporate accountability database with company risk scores and sector breakdowns
- **Methodology:** Non-violent civic action playbook with phase examples
- **Multi-language:** UI and templates in Italian, English, French, German

## Contribute

We welcome **anyone** — coders, writers, translators, researchers, organizers. No experience needed.

**Built with AI**

This project was developed through agentic code generation and iterative AI-assisted development. 

**How to contribute:**
- Fork and open a PR. Check the project board for current priorities.
- Run `npm run dev` locally (needs Node.js)
- UI translations live in `src/i18n/ui.ts`
- Page translations go in `src/pages/<lang>/`
- Templates and PR checks in `public/templates/` and `scripts/`

**Content / research:**
- Found a case study or source? Open an issue or PR.
- Want to add a briefing template or improve copy? Edit the template directly and open a PR.
- No GitHub account yet? Email or comment on a GitHub discussion.

**Non-coders:**
- Suggest copy edits, case studies, or corrections via issues
- Help fact-check and verify sources
- Translate a petition or briefing to your language

## Key principles

- **Non-violent, lawful action only** — we emphasize diplomacy, transparency, and institutional pressure.
- **Evidence-based** — every claim links to sources (UN reports, satellite data, leaked documents, news archives).
- **Safe** — OSINT and monitoring guides protect sources and PII. Always follow local law.
- **Practical** — no theory-only content; templates are copy-paste ready.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build to ./dist
npm run preview  # preview build
```

## License

Open source — use and modify freely for non-violent civic action.
