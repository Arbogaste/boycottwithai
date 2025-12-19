# Guida Completa: Crea Agenti AI Automatizzati con CrewAI per Campagne

## Introduzione
CrewAI permette agenti AI che collaborano: uno scrapa dati, uno genera prompt, uno distribuisce. Perfetto per automatizzare azioni disruptive.

**Prerequisiti:**
- Python installato
- API key OpenAI o simili (gratuita trial)

**Tempo stimato:** 30 minuti setup.

## Passo 1: Installa CrewAI
```
pip install crewai
```

## Passo 2: Ottieni API Key
- Vai su [OpenAI](https://platform.openai.com/), crea account, genera key.
- O usa modelli locali come Ollama.

## Passo 3: Scrivi Agente Base
Crea `agente.py`:
```python
from crewai import Agent, Task, Crew
from crewai_tools import SerperDevTool  # Per ricerca web

# Agente ricercatore
researcher = Agent(
    role="Ricercatore Dati Pubblici",
    goal="Trova dati su speculazione immobiliare Aurora",
    backstory="Esperto in OSINT per giustizia sociale",
    tools=[SerperDevTool()]
)

# Task
task = Task(
    description="Cerca delibere Comune Torino su rigenerazione Aurora",
    agent=researcher
)

# Crew
crew = Crew(agents=[researcher], tasks=[task])
result = crew.kickoff()
print(result)
```

Esegui: `python agente.py`

## Passo 4: Aggiungi Agenti Multipli
```python
# Agente visual
visual_agent = Agent(
    role="Generatore Visual",
    goal="Crea prompt per Fooocus basati su dati",
    tools=[]
)

# Task chain
task1 = Task(description="Ricerca dati", agent=researcher)
task2 = Task(description="Genera prompt visual", agent=visual_agent, context=[task1])

crew = Crew(agents=[researcher, visual_agent], tasks=[task1, task2])
```

## Passo 5: Automatizza Distribuzione
Aggiungi agente per social:
```python
social_agent = Agent(
    role="Distributore",
    goal="Posta su X/TikTok",
    tools=[TwitterTool()]  # Implementa o usa API
)
```

## Passo 6: Esempi per Azioni
- Agente per satire: genera testo, TTS, monta video.
- Monitora RSS per allerte automatiche.

## Sicurezza
- Non condividere API keys.
- Testa in locale prima deploy.

## Risorse
- [CrewAI Docs](https://docs.crewai.com/)
- Tutorial: "Building AI Agents with CrewAI"

Scarica template: [crewai-template.py](https://github.com/tuo-repo/crewai-template.py)</content>
<parameter name="filePath">/home/arbogaste/Documenti/attack/AI_marxist/boycottwithai/public/downloads/guides/crewai-agents-guide.md