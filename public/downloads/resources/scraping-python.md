# Risorsa Completa: Scraping Dati Pubblici con Python per Azioni Civili

## Introduzione
Questo documento ti insegna a raccogliere dati pubblici (come bilanci comunali, delibere, prezzi immobiliari) usando Python. È legale se i dati sono pubblici e non violi termini di servizio. Usa per esporre speculazione o spese militari.

**Prerequisiti:**
- Computer con Windows/Mac/Linux
- Connessione internet
- Nessuna conoscenza pregressa richiesta

**Tempo stimato:** 30-60 minuti per setup, poi minuti per script.

## Passo 1: Installa Python
1. Vai su [python.org](https://www.python.org/downloads/) e scarica Python 3.10+.
2. Durante installazione, seleziona "Add Python to PATH".
3. Apri terminale (cmd su Windows, Terminal su Mac/Linux) e verifica: `python --version` (dovrebbe mostrare 3.x.x).

## Passo 2: Installa Librerie Necessarie
Apri terminale e installa:
```
pip install requests beautifulsoup4 pandas openpyxl
```
- `requests`: per scaricare pagine web
- `beautifulsoup4`: per estrarre dati HTML
- `pandas`: per gestire dati tabulari
- `openpyxl`: per salvare in Excel

## Passo 3: Scrivi il Primo Script
Crea un file `scraper.py` con un editor di testo (Notepad++ o VS Code).

Copia questo codice base per scaricare una pagina:
```python
import requests
from bs4 import BeautifulSoup

url = "https://www.comune.torino.it/trasparenza/bilanci"  # Esempio: sito trasparenza Comune Torino
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Trova tutti i link ai PDF bilanci
links = soup.find_all('a', href=True)
pdf_links = [link['href'] for link in links if link['href'].endswith('.pdf')]

print("PDF trovati:", pdf_links)
```

Salva e esegui: `python scraper.py`

## Passo 4: Estrai Dati da PDF
Per bilanci PDF, installa:
```
pip install PyPDF2
```

Aggiungi al codice:
```python
import PyPDF2

# Scarica un PDF
pdf_url = "https://www.comune.torino.it/trasparenza/bilanci/bilancio2025.pdf"
pdf_response = requests.get(pdf_url)

with open('bilancio.pdf', 'wb') as f:
    f.write(pdf_response.content)

# Estrai testo
with open('bilancio.pdf', 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = ""
    for page in reader.pages:
        text += page.extract_text()

print(text[:500])  # Primo 500 caratteri
```

## Passo 5: Salva Dati in Excel
Usa pandas per organizzare:
```python
import pandas as pd

# Esempio dati estratti (sostituisci con parsing reale)
data = {
    'Categoria': ['Polizia', 'Welfare', 'Militare'],
    'Spesa': [1000000, 500000, 2000000]
}

df = pd.DataFrame(data)
df.to_excel('spese_comune.xlsx', index=False)
print("Dati salvati in spese_comune.xlsx")
```

## Passo 6: Automatizza e Gestisci Errori
Aggiungi loop e try-except:
```python
for pdf_url in pdf_links[:5]:  # Primi 5 PDF
    try:
        # Codice di download ed estrazione
        print(f"Elaborato: {pdf_url}")
    except Exception as e:
        print(f"Errore su {pdf_url}: {e}")
```

## Passo 7: Esempi Avanzati
- **Prezzi Immobiliari:** Scrapa siti come Immobiliare.it (controlla TOS).
- **Delibere:** Cerca "delibere comunali" su Google, scarica PDF.
- **Bilanci Militari:** Siti governo per dati SIPRI.

## Sicurezza e Legalità
- Usa proxy se necessario: `pip install requests[socks]` e configura Tor.
- Non sovraccaricare siti: aggiungi `time.sleep(1)` tra richieste.
- Dati pubblici sono liberi, ma evita hacking.

## Risorse Ulteriori
- [BeautifulSoup Docs](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [Pandas Tutorial](https://pandas.pydata.org/docs/getting_started/intro_tutorials/)
- Corso gratuito: [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)

Scarica questo script completo: [scraper_completo.py](https://github.com/tuo-repo/scraper_completo.py)

Per aiuto, unisciti al nostro forum o apri issue su GitHub.</content>
<parameter name="filePath">/home/arbogaste/Documenti/attack/AI_marxist/boycottwithai/public/downloads/resources/scraping-python.md