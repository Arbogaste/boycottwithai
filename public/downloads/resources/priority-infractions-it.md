# Indicatori prioritari per Procedura di Infrazione UE

Sintesi pratica: dodici indicatori prioritari, ciascuno con riferimenti normativi essenziali, dove cercare prove e checklist rapide per raccogliere un pacchetto evidenze operativo.

---

## 1) QUALITÀ DELL’ARIA (PM10 / NO₂) — PRIORITÀ MASSIMA

Normativa violata
- Direttiva 2008/50/CE
  - Art. 13 (limiti di concentrazione)
  - Art. 23 (piani di qualità dell’aria efficaci)

Condizione di violazione
- Superamento sistematico dei limiti annui/giornalieri
- Violazione pluriennale e continuativa
- Piani regionali inefficaci o solo formali

Elementi oggettivi
- Dati ufficiali ARPA / ISPRA
- Centraline certificate
- Storico superamenti > 10 anni

Prova richiesta
- Tabelle annuali dei superamenti (sorgente ufficiale)
- Mancanza di riduzione strutturale nel trend
- Misure adottate non proporzionate (solo blocchi temporanei)

Perché la Commissione UE procede subito
- Esistono precedenti e condanne della Corte di Giustizia UE
- Violazione misurabile e non interpretativa
- Nessuna giustificazione tecnica accettabile per mancata conformità

---

## 2) ACQUE REFLUE / DEPURAZIONE — ITER QUASI AUTOMATICO

Normativa violata
- Direttiva 91/271/CEE
  - Art. 3–4 (raccolta e trattamento)
  - Art. 5 (aree sensibili)

Condizione di violazione
- Agglomerati oltre soglia UE senza depurazione conforme
- Impianti non funzionanti o sottodimensionati
- Ritardi strutturali senza cantieri attivi

Elementi oggettivi
- Elenco agglomerati non conformi (fonti regionali/ARPA)
- Relazioni tecniche regionali
- Procedure amministrative già aperte

Prova richiesta
- Stato degli impianti (attivo / inattivo)
- Assenza di cronoprogramma reale e cantieri
- Scarichi diretti in acque superficiali documentati

Perché la Commissione UE procede
- Violazione tecnica, binaria (conforme / non conforme)
- Precedenti multipli e impatto ambientale diretto

---

## 3) RIFIUTI / DISCARICHE — ALTA GRAVITÀ GIURIDICA

Normativa violata
- Direttiva 2008/98/CE (rifiuti)
- Direttiva 1999/31/CE (discariche)

Condizione di violazione
- Discariche abusive non bonificate
- Mancato ripristino di siti censiti
- Piani regionali inattuati

Elementi oggettivi
- Elenchi siti contaminati
- Sentenze precedenti non eseguite
- Inadempienze regionali persistenti

Prova richiesta
- Documentazione fotografica e georeferenziata
- Atti regionali che dimostrano omissione
- Pubblicazioni/rapporti ufficiali che attestano assenza di bonifica

Perché la Commissione UE procede
- Violazione persistente nel tempo
- Responsabilità statale diretta e costi già stimati

---

## 4) MANCATO RECEPIMENTO DIRETTIVE UE — MECCANISMO AUTOMATICO

Normativa coinvolta
- Direttive con deadline scaduta (es. NIS2, energia, digitale, altre)

Condizione di violazione
- Mancanza decreto attuativo
- Recepimento parziale o formalmente errato

Elementi oggettivi
- Deadline ufficiale superata
- Assenza di normativa nazionale completa

Prova richiesta
- Confronto testuale fra direttiva e normativa italiana
- Evidenza di articoli mancanti o differenze formali

Perché la Commissione UE procede
- Violazione meccanica: la Commissione può agire d’ufficio senza valutazione politica

---

## 5) APPALTI PUBBLICI / CONCORRENZA — FORTE SE BEN DOCUMENTATO

Normativa violata
- Direttiva 2014/24/UE (appalti)
- Principi di concorrenza, trasparenza, proporzionalità

Condizione di violazione
- Affidamenti diretti reiterati senza gara
- Deroghe emergenziali fuori contesto
- Norme nazionali incompatibili con principi UE

Elementi oggettivi
- Bandi e atti di aggiudicazione
- Ripetitività dei medesimi aggiudicatari
- Mancanza di gara reale

Prova richiesta
- Atti amministrativi, contratti, determina a contrarre
- Confronto con normativa UE su procedure e soglie
- Evidenza di distorsione di concorrenza (ripetitività)

Perché la Commissione UE procede
- Impatto economico rilevante e rischio di precedenti per altri Stati



## 6) RITARDI STRUTTURALI NEI PAGAMENTI DELLA PA (ALTISSIMA PROBABILITÀ)

Normativa UE
- Direttiva 2011/7/EU — termini di pagamento per le PA (di solito 30/60 giorni). Testo: https://eur-lex.europa.eu/eli/dir/2011/7/oj

Fonti e dati
- Piattaforme nazionali (es. portali open-data del MEF o registre regionali dei crediti commerciali)
- Dataset di fatture elettroniche (SDI / Agenzia delle Entrate) — campi utili: `issue_date`, `payment_date`, `supplier_id`
- Rapporti Corte dei Conti e audit regionali

- Azioni tecniche: calcolare ritardo medio annuo e percentuale pagamenti >60 giorni; salvare CSV con `issue_date`, `payment_date`, `supplier_id`.

Checklist rapida
- [ ] Export CSV con `issue_date` / `payment_date` + `supplier_id`
- [ ] Tabella aggregata per anno/settore con `% pagamenti > 60 giorni`
- [ ] Eventuali audit / report ufficiali che confermano persistenza

---

## 7) AFFIDAMENTI DIRETTI & FRAZIONAMENTO ARTIFICIOSO (ALTISSIMA PROBABILITÀ)

Normativa UE
- Direttive 2014/24/EU e 2014/25/EU — principi di concorrenza, trasparenza e parità di trattamento. Testo: https://eur-lex.europa.eu/eli/dir/2014/24/oj

Fonti e dati
- ANAC Open Data (contratti e aggiudicazioni): https://www.anticorruzione.it/
- Albo pretorio comunale / portali di trasparenza

- Azioni tecniche: estrarre elenco CIG dal dataset ANAC, generare tabella con conteggi per CIG e lista dei top repeat offenders.

Checklist
- [ ] Tabella con CIG ripetuti e conteggi
- [ ] Confronto testi oggetto/descrizione per verificare frammentazione
- [ ] Copie delle determine/avvisi rilevanti

---

## 8) MANCATA ROTAZIONE NEGLI INCARICHI / INCARICHI FIDUCIARI (ALTA PROBABILITÀ)

Fonti e dati
- Deliberazioni e determine pubblicate, CV allegati ai bandi, storico incarichi

- [ ] Cronologia incarichi per ente/firma
- [ ] Documenti che mostrano assenza di procedure comparative

Esempio pratico
- Costruire una timeline per soggetto (nome/partita IVA) con date e oggetti di incarico; cercare pattern di rinnovi o incarichi consecutivi senza gara.

Checklist
- [ ] Cronologia incarichi per ente/firma
- [ ] Documenti che mostrano assenza di procedure comparative
- [ ] Cronologia incarichi per ente/firma
- [ ] Documenti che mostrano assenza di procedure comparative

---

## 9) RITARDI CRONICI NEI PROCEDIMENTI AMMINISTRATIVI (ALTA PROBABILITÀ)

Normativa di riferimento
- Carta dei Diritti Fondamentali UE: Art.41 (buona amministrazione), Art.47 (tutela effettiva)

Fonti e dati
- PEC/protocolli del procedimento, termini normativi nazionali o regionali

- [ ] Export protocollo/PEC con date originali
- [ ] Calcolo scostamento rispetto ai termini di legge

Azioni tecniche sintetiche
- Estrarre i timestamp da protocolli/PEC e calcolare giorni medi di evasione rispetto ai termini di legge; allegare file CSV con date.

Checklist
- [ ] Export protocollo/PEC con date originali
- [ ] Calcolo scostamento rispetto ai termini di legge
- [ ] Export protocollo/PEC con date originali
- [ ] Calcolo scostamento rispetto ai termini di legge

---

## 10) DIGITALIZZAZIONE INESISTENTE O FINTA (PNRR) (ALTA PROBABILITÀ)

Fonti e dati
- Gare/contratti PNRR pubblici, pagine di monitoraggio del PNRR, report di audit

- [ ] Contratto PNRR + descrizione deliverable
- [ ] File di log o prova di utilizzo (se assenti, documentare assenza)

Azioni pratiche
- Verificare consegne documentali e presenza di log/registri di utilizzo; se assenti, documentare la mancanza come prova.

Checklist
- [ ] Contratto PNRR + descrizione deliverable
- [ ] File di log o prova di utilizzo (se assenti, documentare assenza)
- [ ] Contratto PNRR + descrizione deliverable
- [ ] File di log o prova di utilizzo (se assenti, documentare assenza)

---

## 11) VIOLAZIONE SISTEMICA DEI TEMPI PER VALUTAZIONI AMBIENTALI (VIA/VAS) (ALTISSIMA PROBABILITÀ)

Normativa UE
- Direttiva 2011/92/EU (EIA) e Direttiva 2001/42/EC (SEA). Testi: https://eur-lex.europa.eu

Fonti e dati
- Portali regionali VIA/VAS con timeline pubblicate, pubblicazioni ufficiali, assenza di atti di sospensione

- [ ] Timeline progetto vs termini legali
- [ ] Assenza di atti formali di sospensione

Azioni pratiche
- Compilare una tabella timeline per progetto (bando, scadenze, decisione) e segnalare scostamenti rispetto ai termini legali.

Checklist
- [ ] Timeline progetto vs termini legali
- [ ] Assenza di atti formali di sospensione
- [ ] Timeline progetto vs termini legali
- [ ] Assenza di atti formali di sospensione

---

## 12) INCARICHI FIDUCIARI MASCHERATI DA "URGENZA" (MEDIA–ALTA PROBABILITÀ)

Fonti e dati
- Determine e delibere che invocano "urgenza", ripetute con testo identico o simile

- [ ] Raccolta determine che usano "urgenza" + date
- [ ] Analisi di frequenza e confronto con fatti oggettivi che giustificherebbero l'urgenza

Azioni pratiche
- Raccogliere determine che invocano "urgenza" e contare occorrenze; verificare se i fatti giustificano l'urgenza.

Checklist
- [ ] Raccolta determine che usano "urgenza" + date
- [ ] Analisi di frequenza e confronto con fatti oggettivi che giustificherebbero l'urgenza
- [ ] Raccolta determine che usano "urgenza" + date
- [ ] Analisi di frequenza e confronto con fatti oggettivi che giustificherebbero l'urgenza


---

## Note pratiche per la raccolta delle prove
- Usare fonti ufficiali (ARPA, ISPRA, portali regionali, Gazzetta Ufficiale)
- Archiviare file con metadati: fonte, data download, URL
- Preferire dati tabellari scaricabili (CSV, XLS) e centraline certificate
- Georeferenziare prove fotografiche e documenti

---

## Contribuisci
Se vuoi che prepari una versione pronta per invio (pacchetto prova + lettera all'UE) o una pagina web descrittiva, dimmi quale area vuoi prioritizzare: aria, acque reflue, rifiuti, recepimento direttive o appalti.

---