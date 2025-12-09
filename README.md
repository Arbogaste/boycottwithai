
# BoycottWithAI — Practical tools for non-violent campaigns

Simple and usable: this project provides open templates, tools, and short guides to run non-violent campaigns that push for diplomacy, humanitarian protection, and demilitarization. The goal is practical civic action: petitions, MP outreach, monitoring, and safe OSINT.

Who this is for:
- Anyone who wants to take immediate, non-violent civic action (sign/share petitions, contact MPs).
- Local organizers and community groups who want a compact toolkit (templates, prompts, checklists).
- Researchers and volunteers who monitor escalation risks using open datasets and tools.

Quick start — 5 min actions (for individuals)
1) Pick one target: a company, a contract, or a local representative.
2) Download the petition template (`/public/templates/petition-en.txt`) or your localized petition. Edit it to include local details.
3) Personalize an MP email using `/public/templates/mp-email-en.txt` and optionally run it through `/public/templates/ai-prompts-en.txt` for tone and targeting.
4) Share the petition link and email script with your community, ask for signatures and personal messages from local voters.
5) Report progress back to the campaign (on your team or the repo as a discussion/issue) and measure two metrics: signatures and MP replies.

Quick start — 15–60 min actions (for groups/organizers)
Practical campaign example — 8–24 weeks (concrete)
1) Phase 0 — Research & Targeting (2 weeks)
	- Who: Identify 1 company or 1 local MP and one proxy (investor/contractor).
	- How: Use ACLED/GDELT and `src/data/boycott_response.json` to collect evidence.
2) Phase 1 — Soft launch (2–4 weeks)
	- What: Publish a one-page briefing to media and a petition asking for a specific, verifiable policy change (e.g., "Pause procurement of X for 6 months until independent audit").
	- Use templates: `briefing-en.txt` & `petition-en.txt`.
	- Measure: Petition signatures, media pick-ups.
3) Phase 2 — Outreach & Pressure (4–8 weeks)
	- What: Personalized MP outreach using `mp-email-en.txt`, local letters to investors, and coordinated social posts.
	- Tools: Use `ai-prompts-en.txt` to personalize emails safely. Keep messages short and evidence-based.
	- Measure: MP replies, investor statements, petition growth.
4) Phase 3 — Escalation (8–24 weeks)
	- Tactics: Public campaigns (peaceful rallies, targeted boycotts), coordinated divestment asks, and increased media pressure.
	- Safety: Publish non-violent, legal actions; follow `osint-safety-en.txt` when linking to evidence.
	- Measure: Policy outcomes, procurement pauses, committee hearings.

Concrete examples (copyable)
- MP email subject: "Request for immediate, temporary pause to procurement of [item] due to humanitarian concerns"
- MP email body snippet:
  "Dear [Representative], as a constituent, I ask you to support a temporary pause in procurement for [item/contractor], pending an independent review. Data shows [short evidence + source]. Please publicly commit to an audit and parliamentary oversight. Thank you, [Name, Town]"
- Petition ask example: "We the undersigned ask [Institution] to pause the contract with [Company] until independent oversight ensures no civilian harm, and funds are reallocated for humanitarian relief."

Quick social posts that work (short & shareable)
- "We demand oversight: pause [company/contract] until independent audit for civilian safety. Sign petition: [link]"
- "#PauseProcurement — our tax money should protect civilians, not fund harm. Sign now: [link]"

1) Identify leverage (supply chain, investor, MP, budget line). Use `src/data/boycott_response.json` as a starting dataset.
2) Choose a tactic: petition, targeted boycott, divestment, or public education campaign.
3) Adopt templates from `/public/templates` — petitions, mp-email, briefings. Use the `ai-prompts-en.txt` safely to help with personalization. Always verify and add local sources.
4) Prepare your safety checklist: assign a comms lead, legal observer, and a privacy lead. Use OSINT minimal-data workflows and `osint-safety-en.txt`.
5) Run a pilot action: set a 4–12 week timeline, gather evidence and track key metrics (signatures, press mentions, MP replies, social media reach).
6) Iterate and escalate: if achieved goals not met, move up phases (calls to investors, public actions, divestment campaigns).

Templates & localization policy
- Canonical technical templates (briefings, OSINT safety, monitoring samples, AI prompts) are maintained in English in `/public/templates/` (e.g., `ai-prompts-en.txt`, `osint-safety-en.txt`, `monitoring-sample-en.txt`, `briefing-en.txt`).
- Language-specific templates are allowed for public-facing campaign assets: `petition-<lang>.txt`, `mp-email-<lang>.txt`.
- FR/DE technical templates were archived and removed to avoid duplicated maintenance. If you want to translate technical templates, open a PR and label it `translation`; maintainers should review translations against the English canonical version for safety and consistency.
- Keep sensitive technical advice lightly covered or with a safety line: avoid step-by-step instructions that create risk, and always encourage users to follow local law and privacy best practices.

How to run locally
```bash
npm install
npm run dev   # local development server: http://localhost:4321
npm run build  # build to ./dist
npm run preview # preview the built site
```

Contributing: translations & content
- Translate UI keys: `src/i18n/ui.ts` contains language blocks. Add missing keys and create localized pages under `src/pages/<lang>/`.
- For templates: update per-language petition and MP email in `public/templates`. For technical template translation, please open a PR and request security review (especially for OSINT guidance and monitoring scripts).
- Want to help but not a coder? Suggest copy edits via GitHub issues or open PRs with exact phrasing.

Before submitting a PR that edits templates, please run a quick verification:
```bash
npm run check:templates
```
This will verify all template references in `src/pages` point to existing files in `public/templates` and avoid broken links.

Safety & ethics
- Always protect sources: remove PII and personal location data when sharing evidence. Use `osint-safety-en.txt` for guidelines.
- Do not publish harmful instructions or material that breaks the law. The project emphasizes non-violent, lawful civic action.

Common tasks for maintainers
- Keep `public/templates` canonical: EN master files for technical templates, language-specific for outreach assets.
- Archive or delete outdated templates to avoid confusion.
- Consider adding a small CI link-checker to ensure resource links and template references remain valid.

Where to get help
- File an issue on the repo, open a PR, or discuss on GitHub Discussions (if enabled). We welcome proofreaders, translators, and data contributors.

Thanks for contributing and helping build better, safer, non-violent civic tools.

## 📄 Templates and localization (consolidation)
- Technical templates (AI prompts, OSINT safety, monitoring scripts, and briefing templates) are maintained as canonical English files in `public/templates/` (e.g. `ai-prompts-en.txt`, `osint-safety-en.txt`).
- Language-specific templates for petitions and MP emails remain localized and are provided per-language (e.g. `petition-fr.txt`, `mp-email-de.txt`).
- If you want to contribute translated technical templates, please open a PR — note that maintenance will be centralized to the English canonical templates for safety and consistency.
