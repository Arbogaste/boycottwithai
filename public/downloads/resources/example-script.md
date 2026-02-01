# Script Esempio: Automatizza Azione Disruptive con Agenti AI

## Descrizione
Questo script usa CrewAI per automatizzare un'azione dal plan_2026: "Chi Guadagna dallo Sgombero?" – Mappa Speculazione Immobiliare Aurora.

Agenti:
- Researcher: Scrapa dati Comune Torino
- VisualGenerator: Crea prompt per Fooocus
- Distributor: Simula post su social (adatta con API reali)

## Installazione
1. `pip install crewai requests beautifulsoup4`
2. Ottieni API OpenAI key e inserisci in script.

## Codice
```python
import os
from crewai import Agent, Task, Crew
from crewai_tools import SerperDevTool
import requests
from bs4 import BeautifulSoup

# Imposta API
os.environ["OPENAI_API_KEY"] = "your-key-here"

# Agente ricercatore
researcher = Agent(
    role="Ricercatore OSINT",
    goal="Trova dati su speculazione Aurora Torino",
    backstory="Esperto in dati pubblici per giustizia sociale",
    tools=[SerperDevTool()]
)

# Task ricerca
task_research = Task(
    description="Cerca delibere Comune Torino su rigenerazione Aurora, proprietari immobiliari coinvolti, aumento prezzi mq",
    agent=researcher
)

# Agente visual
visual_agent = Agent(
    role="Generatore Prompt AI",
    goal="Crea prompt dettagliati per immagini Fooocus",
    backstory="Specialista in visualizzazioni per campagne"
)

task_visual = Task(
    description="Basandoti sui dati trovati, genera prompt per mappa interattiva 'Chi Guadagna' con frecce, euro, case demolite",
    agent=visual_agent,
    context=[task_research]
)

# Agente distributore (simulato)
distributor = Agent(
    role="Distributore Sociale",
    goal="Crea post virali",
    backstory="Esperto in social media per attivismo"
)

task_distribute = Task(
    description="Crea testo post X: '#ChiGuadagnaAurora [dati chiave] Link a immagine generata'",
    agent=distributor,
    context=[task_visual]
)

# Crew
crew = Crew(
    agents=[researcher, visual_agent, distributor],
    tasks=[task_research, task_visual, task_distribute]
)

# Esegui
result = crew.kickoff()
print("Risultato:", result)
```

## Come Usare
1. Modifica URL/dettagli per tua città.
2. Esegui: `python disruptive_action.py`
3. Usa output per generare immagine con Fooocus, posta manualmente.

## Estensioni
- Aggiungi tool per API social reali.
- Integra con scraping Python per dati locali.

Scarica completo: [disruptive_action.py](https://github.com/tuo-repo/disruptive_action.py)</content>
<parameter name="filePath">/home/arbogaste/Documenti/attack/AI_marxist/boycottwithai/public/downloads/resources/example-script.md