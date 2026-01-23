# Privacy & Security Tools for Activists

> **Why this matters:** Activists in high-risk contexts (authoritarian regimes, corporate retaliation) face serious risks. These tools protect your identity, communications, and data. Use them strategically based on your threat level.

## Anonymity & Encryption Basics

### What risks do activists face?
- **Surveillance:** Governments and corporations monitor activists' communications, location, and online activity.
- **Retaliation:** Direct targeting, harassment, arrest, or physical harm.
- **Data exposure:** Metadata (who you contact, when, where) can reveal networks and put people at risk.

### Core principle
**You don't need to hide _what_ you say; you need to hide _who_ is saying it.**

---

## Essential Tools

### 1) Tor Browser — Anonymity on the Web
**What it does:** Routes your traffic through multiple encrypted relays, hiding your IP and location.

**Why it matters:**
- Prevents your ISP, network admin, or surveillance systems from seeing what sites you visit.
- Hides your location from websites.
- Breaks the link between your identity and your online activity.

**When to use:**
- Accessing sensitive news or leaked documents.
- Researching targets (corporate, government) without revealing your interest.
- Submitting tips to journalists or NGOs anonymously.
- Reading guides on activism or resistance (in high-risk countries).

**Download:** https://www.torproject.org/download/

**Caveats:**
- Slower than normal browsing (by design).
- Don't maximize your browser window (fingerprinting risk).
- Don't mix Tor with non-Tor activity (use separate profiles/browsers).

---

### 2) Signal — Encrypted Messaging
**What it does:** End-to-end encrypted messaging and voice calls.

**Why it matters:**
- No one, not even Signal, can read your messages.
- Safe for coordinating actions, sharing sensitive information, organizing groups.

**When to use:**
- Coordinating with affinity groups or campaign partners.
- Sharing evidence or sensitive documents with journalists/NGOs.
- Discussing plans or strategy where surveillance is a concern.

**Download:** https://signal.org/

**Best practices:**
- Use usernames instead of phone numbers (Signal supports this).
- Verify contacts' security keys in person when possible.
- Delete old conversations to minimize data.

---

### 3) ProtonMail — Encrypted Email
**What it does:** Email with end-to-end encryption by default.

**Why it matters:**
- Email is inherently insecure; ProtonMail adds encryption.
- Useful for one-off communications without giving your real email.

**When to use:**
- Contacting journalists or NGOs with allegations.
- Submitting evidence to oversight bodies or lawyers.
- Creating a separate identity for research or campaigns.

**Download:** https://protonmail.com/

**Best practices:**
- Use a strong, unique password (and keep it offline).
- Enable two-factor authentication.
- Set messages to expire (auto-delete).

---

### 4) TAILS — Secure Operating System
**What it does:** A portable Linux OS that routes all traffic through Tor and leaves no trace on your computer.

**Why it matters:**
- For extremely sensitive work: investigative journalism, whistleblowing, high-risk activism.
- Boots from USB; nothing is saved to your hard drive.
- Protects against malware and keystroke logging.

**When to use:**
- Communicating as a source to journalists.
- Accessing leaked databases or classified materials.
- Working in an environment where devices are physically monitored.

**Download:** https://tails.boum.org/

**Caveats:**
- Requires learning some Linux basics.
- USB may be searched or confiscated.
- Slower than normal OS.

---

### 5) KeePass / Bitwarden — Password Manager
**What it does:** Securely stores and encrypts all your passwords.

**Why it matters:**
- Creates unique, strong passwords for every account (critical for security).
- One master password to remember instead of dozens.
- Encrypted vault that only you can access.

**When to use:**
- Managing research accounts, anonymous email accounts, social media aliases.
- Sharing passwords securely with trusted team members (Bitwarden vaults).

**Download:**
- KeePass (offline): https://keepass.info/
- Bitwarden (cloud + offline): https://bitwarden.com/

**Best practices:**
- Master password must be extremely strong and memorized (not written).
- Back up your encrypted vault in a safe location.
- Use different passwords for critical accounts (Tor access, email, banking).

---

### 6) VeraCrypt — Disk Encryption
**What it does:** Encrypts your entire hard drive or a hidden partition.

**Why it matters:**
- If your computer is confiscated, encrypted drives cannot be read without your password.
- Protects research, notes, documents, and all your files.

**When to use:**
- Storing evidence, research files, or sensitive campaign materials.
- Working in a country where device seizure is a risk.

**Download:** https://www.veracrypt.fr/

**Best practices:**
- Enable full-disk encryption at installation (easiest).
- Or create a hidden partition for the most sensitive files.
- Use a strong passphrase (not just a password).

---

### 7) Whonix — Tor + Virtual Machine
**What it does:** A virtual machine that forces all traffic through Tor and isolates your real OS from internet activity.

**Why it matters:**
- Combines Tor's anonymity with sandboxing.
- Protects against accidental deanonymization.
- Separate environment for sensitive research.

**When to use:**
- Deep OSINT work or researching sensitive targets.
- Testing exploits or accessing dangerous sites safely.
- Full isolation from your normal computing.

**Download:** https://www.whonix.org/

**Caveats:**
- Requires VirtualBox or KVM (virtualization).
- Slower than TAILS (double encryption).
- Learning curve.

---

## Threat Modeling: Choose Your Tools

### Low Risk (Public Activism)
- Use Tor Browser for online research.
- Signal for team coordination.
- Standard password manager (KeePass offline).

### Medium Risk (Investigating Abuse or Corruption)
- Use TAILS for sensitive communications.
- ProtonMail for journalist/NGO contact.
- Signal for group coordination.
- VeraCrypt for file storage.
- Consider a second device (laptop) for sensitive work.

### High Risk (Authoritarian Context or Whistleblowing)
- Use TAILS exclusively for sensitive work.
- Air-gapped (offline) storage for ultra-sensitive files (use VeraCrypt).
- Burner phone + Signal (or Briar for mesh networks).
- Never mix anonymous and identified activity.
- Physical security: dead drops for physical evidence.
- Work with lawyers/NGOs who have security expertise.

---

## Network-Level Security

### VPN (Virtual Private Network)
**What it does:** Encrypts traffic and routes it through a remote server.

**Why it matters:**
- Hides your IP from websites and services.
- Protects against eavesdropping on public WiFi.

**Caveats:**
- VPN provider can see your traffic (choose one with no-log policy).
- **Do not rely on VPN alone for anonymity** — use Tor for that.
- Useful as additional layer alongside Tor.

**Recommended (no-log policies):**
- ProtonVPN: https://protonvpn.com/
- Mullvad: https://mullvad.net/
- IVPN: https://www.ivpn.net/

---

### Briar — Offline & Mesh Messaging
**What it does:** Messaging that works without internet (via Bluetooth mesh or Tor).

**Why it matters:**
- For organizing when internet is censored or unavailable.
- Messages sync when devices reconnect.

**When to use:**
- High-risk countries with internet shutdowns.
- Coordination without relying on centralized services.

**Download:** https://briarproject.org/

---

## Operational Security (OPSEC) Checklist

- [ ] **Separate identities:** Use different accounts/devices for different projects.
- [ ] **No cross-contamination:** Don't mix Tor and non-Tor activity in the same browser.
- [ ] **Kill switches:** Disable internet if VPN/Tor drops unexpectedly.
- [ ] **Metadata hygiene:** Strip metadata from documents before sharing (use Exiftool or `exiftool -all=` on files).
- [ ] **No screenshots:** Use screen recording/export instead of taking screenshots (easier to leak metadata).
- [ ] **Assume compromise:** Don't trust any single tool; layer them.
- [ ] **Regular updates:** Keep Tor, Signal, and OS fully patched.
- [ ] **Dead drops:** For physical evidence, use in-person secure transfer (never mail or cloud upload).
- [ ] **Sunset accounts:** Delete research/anonymous accounts when campaigns end (don't accumulate).

---

## Further Reading

- [EFF Security Startup Guide](https://ssd.eff.org/)
- [OWASP Privacy Guide](https://owasp.org/www-community/Privacy)
- [Amnesty International Security Handbook](https://www.amnesty.org/)
- [Front Line Defenders Manual](https://www.frontlinedefenders.org/)

---

**Last updated:** January 2026  
**Status:** Community-maintained; feedback and corrections welcome.
