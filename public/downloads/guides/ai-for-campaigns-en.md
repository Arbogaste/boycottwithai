# AI for Campaigns: A Practical Guide for Activists

## Introduction

AI is not magic. It's a tool that automates boring stuff so you can focus on what matters: understanding your issue, talking to people, and organizing.

**Golden Rule: Never trust AI alone. Verify everything with human judgment.**

---

## Part 1: What AI Can Do (And What It Cannot)

### What AI is Good At
- **Summarizing long documents**: Feed a 100-page UN report to an LLM, get a 1-page summary with key facts
- **Finding patterns**: Detect when news language shifts toward war rhetoric or propaganda
- **Cleaning messy data**: Standardize spreadsheets with conflicting formats
- **Personalizing outreach**: Generate custom emails to MPs at scale
- **Organizing evidence**: Version-control databases so you can track who said what, when

### What AI Cannot Do
- ❌ Make decisions for you
- ❌ Replace fact-checking
- ❌ Generate reliable evidence from nothing
- ❌ Tell you what's "true" without human verification
- ❌ Protect you from surveillance (on its own)

---

## Part 2: Tools & Workflows

### 1. Local Language Models (No Cloud, No Logging)

**Why?** When you're in a country with surveillance or censorship, using Google's API means sending your research to their servers. Use local models instead.

**Tools:**
- **LLaMA 2** - Facebook's open model, 70B parameters, powerful
- **Mistral** - Smaller, faster, still accurate
- **OLLAMA** - Easy installer to run models on your laptop

**How to use:**
```
1. Download OLLAMA from ollama.ai
2. ollama run mistral
3. Ask it: "Summarize this UN report on arms sales"
4. Verify the summary against the original
5. Delete your local copy when done (or encrypt it)
```

**Security:** 
- Runs on your machine only
- No internet required (after download)
- Encrypt your hard drive with VeraCrypt (Windows/Mac) or LUKS (Linux)

---

### 2. Training Models on Your Campaign Data

**Use Case:** You want to train a model to recognize propaganda language specific to your target (a company, government, or military).

**Tools:**
- **LLaMA Factory** - Train models without coding
- **easy-dataset** - Create training datasets in 10 minutes

**Real Example:**
1. Collect 500 corporate statements and news articles
2. Mark them: "This is propaganda" or "This is factual"
3. Train a model on this dataset
4. Feed new articles to your model
5. It flags ones that look like propaganda

**Code Example (Using Python & LLaMA Factory):**
```
# 1. Create dataset folder
mkdir my_campaign_data
cd my_campaign_data

# 2. Add your labeled examples
# data.json:
{
  "conversations": [
    {
      "human": "Analyze: 'Our weapons are defensive tools for peace'",
      "assistant": "❌ PROPAGANDA: Uses 'peace' language to justify weapons"
    }
  ]
}

# 3. Run LLaMA Factory
llamafactory-cli train config.yaml
```

---

### 3. Cleaning & Organizing Data

**Problem:** You have contracts, news articles, and spreadsheets from 3 different sources. They use different formats, dates, and naming.

**Tool: OpenRefine**
- Free, no coding required
- Drag-and-drop interface
- Instantly standardizes messy data

**Example Workflow:**
1. Import 3 CSV files with corporate contracts
2. OpenRefine shows you the inconsistencies
3. Click "Standardize dates" → all dates converted to YYYY-MM-DD
4. Click "Remove duplicates"
5. Export clean data

**Download:** https://openrefine.org

---

### 4. Version-Controlled Evidence

**Problem:** You and 5 teammates are updating a database of weapons contracts. How do you know who changed what? How do you prevent someone from secretly deleting evidence?

**Tool: Dolt** (Git for Databases)

**Workflow:**
```
# Initialize a database
dolt init

# Add a table
dolt table create contracts

# Team adds data
# Every change is logged with: WHO, WHEN, WHAT

# Track changes
dolt log contracts
# Output:
# 2025-01-15 10:30 - Alice added 5 new contracts
# 2025-01-15 11:00 - Bob corrected dates
```

**Why it matters:** If a company's lawyer claims "we never approved those exports," you can show exact timestamps and who logged the evidence.

---

### 5. Automating Repetitive Tasks

**Use Case:** Every morning, check the UN arms-export database for new weapons transfers to your target country. Alert your team if anything matches.

**Tool: Apache Airflow**

**Simple Workflow:**
```
1. Download latest data (automated)
2. Cross-check against your target list (automated)
3. Send Slack alert if match found (automated)
4. Log everything (automated)
```

**What You Save:** 30 minutes/day of manual checking = 2.5 hours/week = 10+ hours/month

---

## Part 3: Safety Rules

### In High-Surveillance Countries

**Rule 1: Use local models**
- ❌ Don't send documents to ChatGPT, Claude, or Google
- ✅ Use OLLAMA + Mistral on your encrypted laptop

**Rule 2: Encrypt everything**
- ✅ Use VeraCrypt (Windows/Mac) or LUKS (Linux)
- ✅ Use Signal (encrypted messaging)
- ✅ Use ProtonMail (encrypted email)

**Rule 3: Delete AI outputs**
- ❌ Don't keep summaries from AI as finished evidence
- ✅ Keep the original source document only
- ✅ Keep AI output as a working note only (then delete)

**Rule 4: Verify, cite, verify again**
- ❌ Don't say "AI found this"
- ✅ Say "According to [original source], ..."
- ✅ Always link to the primary source, not the AI summary

**Rule 5: Train on verified data only**
- ❌ Don't train models on unverified rumors
- ✅ Only use peer-reviewed, published, official sources
- ✅ Document where each training example came from

---

## Part 4: Real Campaign Examples

### Example 1: Detecting Escalation Language

**Goal:** Monitor news to detect when governments shift toward war rhetoric.

**Method:**
1. Collect 1000 historical news articles tagged as "escalation" or "de-escalation"
2. Train a local LLM on these
3. Feed it today's news
4. It flags articles with escalation patterns
5. Send alert to your coalition

**What You Need:**
- OLLAMA + Mistral (free)
- 1000 articles (from archives)
- 1 hour to tag them
- 30 minutes to train

**Result:** Automated early warning system for your issue

---

### Example 2: Corporate Supply Chain Investigation

**Goal:** Map which governments supply weapons to Company X, and which governments receive weapons from Company X.

**Method:**
1. Collect contracts from 5 sources (Sweden, Norway, Belgium, USA, SIPRI)
2. Use OpenRefine to standardize the data
3. Create a Dolt database (version-controlled)
4. Export to visualization tool
5. Show journalists & policymakers the connections

**Tools:**
- OpenRefine (data cleaning)
- Dolt (version-controlled database)
- Gephi or Flourish (visualization)

**Result:** Undeniable evidence of corporate complicity

---

### Example 3: MPs' Voting Records Analysis

**Goal:** Track which MPs vote for disarmament, which vote for military budgets.

**Method:**
1. Download voting records from parliament.uk, europarl.europa.eu
2. Use Airflow to update automatically every day
3. Use AI to categorize votes (pro-peace vs. pro-military)
4. Create a leaderboard of MPs by voting pattern
5. Share with constituents

**Tools:**
- Apache Airflow (automate downloads)
- LLM (categorize votes)
- Spreadsheet or Tableau (visualize)

**Result:** Public pressure on MPs' voting records

---

## Part 5: Checklist Before Publishing

**Before you publish anything using AI, ask:**

- [ ] Have I verified every fact against the original source?
- [ ] Have I checked that AI didn't introduce errors?
- [ ] Have I removed any sensitive information (names of activists, locations of safe houses)?
- [ ] Have I encrypted my working files?
- [ ] Have I used only local AI tools (no cloud API)?

---

## Part 6: Resources & Links

### Tools
- **OLLAMA** - https://ollama.ai (run models locally)
- **LLaMA Factory** - https://github.com/hiyouga/LLaMA-Factory (train models)
- **OpenRefine** - https://openrefine.org (clean data)
- **Dolt** - https://www.dolthub.com (version-controlled databases)
- **Apache Airflow** - https://airflow.apache.org (automate tasks)

### Privacy Tools
- **VeraCrypt** - Encrypt your hard drive (Windows/Mac)
- **LUKS** - Linux disk encryption
- **Signal** - Encrypted messaging
- **ProtonMail** - Encrypted email
- **Tor Browser** - Anonymous browsing

### AI Safety
- **MIT AI Policy for the World** - https://aiindex.stanford.edu/
- **Bellingcat Verification Handbook** - https://www.bellingcat.com/resources/how-tos/

### Data Sources
- **SIPRI Arms Database** - https://www.sipri.org/databases
- **ACLED** - https://acleddata.com (conflict data)
- **GDELT Project** - https://www.gdeltproject.org (news analysis)

---

## Closing: Trust People, Not AI

AI is a tool. A hammer can build a house or destroy one. It depends on the hand holding it.

Use AI to save time. Use the time you save to:
- **Talk to people**
- **Understand your issue deeply**
- **Organize action**
- **Build trust in your coalition**

The strength of your campaign comes from people. Technology serves the people, not the other way around.

---

## Questions? Issues?

Share your experience:
- Open an issue on GitHub
- Email us with your workflow
- Join our community calls

**Your insights help us improve this guide for everyone.**
