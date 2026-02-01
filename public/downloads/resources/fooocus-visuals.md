# Genera Infografiche e Visualizzazioni con Fooocus AI

## Introduzione
Fooocus è un tool gratuito per generare immagini AI realistiche senza bisogno di GPU potente. Perfetto per creare infografiche su speculazione immobiliare, mappe "prima/dopo" o satire visive per campagne.

**Prerequisiti:**
- Computer con almeno 8GB RAM
- Nessuna GPU richiesta (usa CPU)
- Connessione internet stabile

**Tempo stimato:** 15 minuti setup, poi secondi per immagine.

## Passo 1: Installa Fooocus
1. Vai su [GitHub Fooocus](https://github.com/lllyasviel/Fooocus).
2. Scarica il repository: clicca "Code" > "Download ZIP" o usa Git se installato (`git clone https://github.com/lllyasviel/Fooocus.git`).
3. Estrai la cartella.

## Passo 2: Avvia Fooocus
- Su Windows: doppio clic su `run.bat` (o `run_cpu.bat` se no GPU).
- Su Mac/Linux: apri terminale nella cartella, esegui `python entry_with_update.py` (assicurati Python installato).

Aspetta il download iniziale (5-10 minuti). Si apre una finestra browser su localhost:7860.

## Passo 3: Genera la Prima Immagine
1. Nella interfaccia web:
   - **Prompt:** "Mappa interattiva di Torino Aurora quartiere, con frecce rosse che mostrano aumento prezzi immobiliari da 1000€/mq a 3000€/mq dopo sgombero centri sociali, stile infografica realistica"
   - **Negative Prompt:** "sfocato, distorto, testo illegibile"
   - **Aspect Ratio:** 16:9 per infografica
   - **Style:** Realistic o Photographic
2. Clicca "Generate". Aspetta 30-60 secondi.

## Passo 4: Personalizza per Campagne
- **Mappe Speculative:** Prompt: "Mappa quartiere povero trasformato in lusso, con icone euro e case demolite"
- **Confronti Bilanci:** "Grafico a torta: 70% spesa polizia, 10% welfare, testo 'Priorità Capitale: Controllo > Solidarietà'"
- **Satire:** "Politico sorridente che ringrazia per gentrificazione, sfondo quartiere distrutto"

Salva immagini in alta risoluzione (clicca "Save" > "High Quality").

## Passo 5: Integrazione con Altri Tool
-- Usa immagini generate per video FFmpeg (vedi FFmpeg).
- Combina con dati scraping per visualizzazioni accurate.

## Passo 6: Ottimizzazioni
- Per velocità: usa modelli più leggeri (opzioni in interfaccia).
- Batch: genera multiple immagini con prompt variati.
- Privacy: lavora offline dopo download modelli.

## Troubleshooting
- Errore memoria: chiudi altri programmi.
- Non si avvia: verifica Python versione 3.10+.
- Immagini brutte: aggiungi dettagli al prompt, usa "high detail, realistic".

## Risorse Ulteriori
- [Fooocus Wiki](https://github.com/lllyasviel/Fooocus/wiki)
- Tutorial YouTube: cerca "Fooocus AI image generation"
- Comunità: Reddit r/StableDiffusion

Scarica preset prompt per campagne: [fooocus-prompts.txt](https://github.com/tuo-repo/fooocus-prompts.txt)

Per supporto, segnala su nostro GitHub.</content>
<parameter name="filePath">/home/arbogaste/Documenti/attack/AI_marxist/boycottwithai/public/downloads/resources/fooocus-visuals.md