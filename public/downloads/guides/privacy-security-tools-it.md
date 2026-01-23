# Strumenti di Privacy e Sicurezza per Attivisti

> **Perché importa:** Gli attivisti in contesti ad alto rischio (regimi autoritari, rappresaglie aziendali) affrontano rischi gravi. Questi strumenti proteggono la tua identità, le tue comunicazioni e i tuoi dati. Usali strategicamente in base al tuo livello di minaccia.

## Anonimato e Crittografia — Concetti Base

### Quali rischi affrontano gli attivisti?
- **Sorveglianza:** Governi e aziende monitorano comunicazioni, posizione e attività online degli attivisti.
- **Ritorsioni:** Targeting diretto, molestie, arresto o danno fisico.
- **Esposizione dati:** I metadati (chi contatti, quando, dove) rivelano reti e mettono a rischio le persone.

### Principio centrale
**Non devi nascondere _cosa_ dici; devi nascondere _chi_ lo dice.**

---

## Strumenti Essenziali

### 1) Tor Browser — Anonimato sul Web
**Che cosa fa:** Instrada il tuo traffico attraverso molteplici relé crittografati, nascondendo il tuo IP e la tua posizione.

**Perché importa:**
- Impedisce al tuo ISP, amministratore di rete o sistemi di sorveglianza di vedere quali siti visiti.
- Nasconde la tua posizione dai siti web.
- Interrompe il collegamento tra la tua identità e la tua attività online.

**Quando usarlo:**
- Accedere a notizie sensibili o documenti trapelati.
- Ricercare obiettivi (aziendali, governativi) senza rivelare il tuo interesse.
- Inviare suggerimenti a giornalisti o ONG in modo anonimo.
- Leggere guide sull'attivismo o la resistenza (nei paesi ad alto rischio).

**Scarica:** https://www.torproject.org/download/

**Avvertenze:**
- Più lento della navigazione normale (per design).
- Non massimizzare la finestra del browser (rischio di fingerprinting).
- Non mescolare attività Tor e non-Tor nello stesso browser.

---

### 2) Signal — Messaggistica Crittografata
**Che cosa fa:** Messaggistica e chiamate vocali con crittografia end-to-end.

**Perché importa:**
- Nessuno, neanche Signal, può leggere i tuoi messaggi.
- Sicuro per coordinare azioni, condividere informazioni sensibili, organizzare gruppi.

**Quando usarlo:**
- Coordinamento con gruppi affinity o partner di campagna.
- Condivisione di prove o documenti sensibili con giornalisti/ONG.
- Discussione di piani o strategia dove la sorveglianza è una preoccupazione.

**Scarica:** https://signal.org/

**Migliori pratiche:**
- Usa nomi utente invece di numeri di telefono (Signal lo supporta).
- Verifica le chiavi di sicurezza dei contatti di persona quando possibile.
- Elimina le vecchie conversazioni per minimizzare i dati.

---

### 3) ProtonMail — Email Crittografata
**Che cosa fa:** Email con crittografia end-to-end per impostazione predefinita.

**Perché importa:**
- L'email è intrinsecamente insicura; ProtonMail aggiunge crittografia.
- Utile per comunicazioni una tantum senza dare la tua vera email.

**Quando usarlo:**
- Contattare giornalisti o ONG con accuse.
- Inviare prove ai corpi di controllo o avvocati.
- Creare un'identità separata per ricerca o campagne.

**Scarica:** https://protonmail.com/

**Migliori pratiche:**
- Usa una password forte e unica (tienila offline).
- Abilita l'autenticazione a due fattori.
- Imposta i messaggi per scadere (cancellazione automatica).

---

### 4) TAILS — Sistema Operativo Sicuro
**Che cosa fa:** Un sistema operativo Linux portatile che instrada tutto il traffico attraverso Tor e non lascia tracce sul tuo computer.

**Perché importa:**
- Per lavoro estremamente sensibile: giornalismo investigativo, whistleblowing, attivismo ad alto rischio.
- Si avvia da USB; nulla viene salvato sul tuo disco rigido.
- Protegge da malware e registrazione dei tasti.

**Quando usarlo:**
- Comunicazione come fonte con giornalisti.
- Accesso a database trapelati o materiali classificati.
- Lavoro in un ambiente dove i dispositivi sono fisicamente monitorati.

**Scarica:** https://tails.boum.org/

**Avvertenze:**
- Richiede l'apprendimento di alcune basi di Linux.
- L'USB può essere perquisita o confiscata.
- Più lento del sistema operativo normale.

---

### 5) KeePass / Bitwarden — Gestore di Password
**Che cosa fa:** Archivia e crittografa in modo sicuro tutte le tue password.

**Perché importa:**
- Crea password uniche e forti per ogni account (critico per la sicurezza).
- Una password principale da ricordare invece di dozzine.
- Vault crittografato che solo tu puoi accedere.

**Quando usarlo:**
- Gestione di account di ricerca, account di posta anonima, alias di social media.
- Condivisione sicura di password con membri del team affidabili (vault Bitwarden).

**Scarica:**
- KeePass (offline): https://keepass.info/
- Bitwarden (cloud + offline): https://bitwarden.com/

**Migliori pratiche:**
- La password principale deve essere estremamente forte e memorizzata (non scritta).
- Esegui il backup del tuo vault crittografato in una posizione sicura.
- Usa password diverse per account critici (accesso Tor, email, banca).

---

### 6) VeraCrypt — Crittografia del Disco
**Che cosa fa:** Crittografa l'intero disco rigido o una partizione nascosta.

**Perché importa:**
- Se il tuo computer viene confiscato, i dischi crittografati non possono essere letti senza la tua password.
- Protegge ricerca, note, documenti e tutti i tuoi file.

**Quando usarlo:**
- Archiviazione di prove, file di ricerca o materiale di campagna sensibile.
- Lavoro in un paese dove il sequestro del dispositivo è un rischio.

**Scarica:** https://www.veracrypt.fr/

**Migliori pratiche:**
- Abilita la crittografia del disco completo all'installazione (più facile).
- Oppure crea una partizione nascosta per i file più sensibili.
- Usa una passphrase forte (non solo una password).

---

### 7) Whonix — Tor + Virtual Machine
**Che cosa fa:** Una macchina virtuale che forza tutto il traffico attraverso Tor e isola il tuo sistema operativo reale dall'attività internet.

**Perché importa:**
- Combina l'anonimato di Tor con il sandboxing.
- Protegge da deanonimizzazione accidentale.
- Ambiente separato per ricerca sensibile.

**Quando usarlo:**
- Lavoro OSINT profondo o ricerca di target sensibili.
- Test di exploit o accesso a siti pericolosi in sicurezza.
- Isolamento completo dal tuo informatica normale.

**Scarica:** https://www.whonix.org/

**Avvertenze:**
- Richiede VirtualBox o KVM (virtualizzazione).
- Più lento di TAILS (doppia crittografia).
- Curva di apprendimento.

---

## Threat Modeling: Scegli i Tuoi Strumenti

### Rischio Basso (Attivismo Pubblico)
- Usa Tor Browser per ricerca online.
- Signal per coordinamento del team.
- Gestore di password standard (KeePass offline).

### Rischio Medio (Investigare Abusi o Corruzione)
- Usa TAILS per comunicazioni sensibili.
- ProtonMail per contatto giornalista/ONG.
- Signal per coordinamento di gruppo.
- VeraCrypt per archiviazione di file.
- Considera un secondo dispositivo (laptop) per lavoro sensibile.

### Rischio Alto (Contesto Autoritario o Whistleblowing)
- Usa TAILS esclusivamente per lavoro sensibile.
- Archiviazione offline (air-gapped) per file ultra-sensibili (usa VeraCrypt).
- Telefono bruciabile + Signal (o Briar per reti mesh).
- Non mescolare mai attività anonima e identificata.
- Sicurezza fisica: consegne di dead drop per prove fisiche.
- Lavora con avvocati/ONG che hanno competenze di sicurezza.

---

## Sicurezza a Livello di Rete

### VPN (Virtual Private Network)
**Che cosa fa:** Crittografa il traffico e lo instrada attraverso un server remoto.

**Perché importa:**
- Nasconde il tuo IP dai siti web e servizi.
- Protegge dall'intercettazione su WiFi pubblico.

**Avvertenze:**
- Il provider VPN può vedere il tuo traffico (scegli uno con politica no-log).
- **Non fare affidamento solo su VPN per anonimato** — usa Tor per quello.
- Utile come livello aggiuntivo insieme a Tor.

**Consigliati (politiche no-log):**
- ProtonVPN: https://protonvpn.com/
- Mullvad: https://mullvad.net/
- IVPN: https://www.ivpn.net/

---

### Briar — Messaggistica Offline e Mesh
**Che cosa fa:** Messaggistica che funziona senza internet (tramite mesh Bluetooth o Tor).

**Perché importa:**
- Per organizzarsi quando internet è censurato o non disponibile.
- I messaggi si sincronizzano quando i dispositivi si riconnettono.

**Quando usarlo:**
- Paesi ad alto rischio con blackout di internet.
- Coordinamento senza fare affidamento su servizi centralizzati.

**Scarica:** https://briarproject.org/

---

## Checklist Sicurezza Operativa (OPSEC)

- [ ] **Identità separate:** Usa account/dispositivi diversi per progetti diversi.
- [ ] **Nessuna contaminazione incrociata:** Non mescolare attività Tor e non-Tor nello stesso browser.
- [ ] **Kill switch:** Disabilita internet se VPN/Tor cade inaspettatamente.
- [ ] **Igiene dei metadati:** Rimuovi metadati dai documenti prima di condividerli (usa Exiftool o `exiftool -all=` sui file).
- [ ] **No screenshot:** Usa registrazione dello schermo/esportazione invece di screenshot (più facile da far trapelare i metadati).
- [ ] **Assumi compromesso:** Non fidarti di un singolo strumento; stratificali.
- [ ] **Aggiornamenti regolari:** Mantieni Tor, Signal e OS completamente patchati.
- [ ] **Dead drop:** Per prove fisiche, usa trasferimento sicuro di persona (mai posta o caricamento cloud).
- [ ] **Account al tramonto:** Elimina account di ricerca/anonimi quando le campagne terminano (non accumularli).

---

## Letture Ulteriori

- [EFF Security Startup Guide](https://ssd.eff.org/)
- [OWASP Privacy Guide](https://owasp.org/www-community/Privacy)
- [Amnesty International Security Handbook](https://www.amnesty.org/)
- [Front Line Defenders Manual](https://www.frontlinedefenders.org/)

---

**Ultimo aggiornamento:** Gennaio 2026  
**Stato:** Mantenuto dalla comunità; feedback e correzioni benvenuti.
