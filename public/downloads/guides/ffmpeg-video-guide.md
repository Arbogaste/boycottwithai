# Guida Completa: Monta Video Virali con FFmpeg

## Introduzione
FFmpeg è tool gratuito per editare video/audio senza GUI. Combina immagini Fooocus, audio TTS, per video satirici o informativi.

**Prerequisiti:**
- FFmpeg installato (vedi sotto)
- File immagini/audio pronti

**Tempo stimato:** 10 minuti setup, minuti per video.

## Passo 1: Installa FFmpeg
- Windows: Scarica da [ffmpeg.org](https://ffmpeg.org/download.html), aggiungi a PATH.
- Mac: `brew install ffmpeg`
- Linux: `sudo apt install ffmpeg`

Verifica: `ffmpeg -version`

## Passo 2: Crea Video da Immagini
Per slideshow:
```
ffmpeg -framerate 1 -i immagine_%d.png -c:v libx264 -r 30 output.mp4
```
- `immagine_1.png`, `immagine_2.png`, ecc.
- `-framerate 1`: 1 immagine al secondo.

## Passo 3: Aggiungi Audio
```
ffmpeg -i video_senza_audio.mp4 -i audio_tts.mp3 -c:v copy -c:a aac output_con_audio.mp4
```

## Passo 4: Effetti e Testo
Aggiungi testo:
```
ffmpeg -i input.mp4 -vf "drawtext=text='Speculazione Aurora':fontcolor=white:fontsize=50:x=100:y=100" output.mp4
```

Taglia video:
```
ffmpeg -i input.mp4 -ss 00:00:05 -t 00:00:10 output_tagliato.mp4
```

## Passo 5: Esempio Completo per Satira
1. Genera immagini con Fooocus.
2. Crea audio con TTS.
3. Monta:
```
ffmpeg -framerate 0.5 -i mappa_%d.png -i voce_satira.wav -c:v libx264 -c:a aac -shortest video_satira.mp4
```

## Passo 6: Ottimizzazioni
- Per TikTok: risoluzioni 1080x1920, durata <60s.
- Batch: script Bash/Python per automatizzare.

## Troubleshooting
- Errore codec: aggiungi `-c:v libx264 -c:a aac`
- File corrotti: verifica input.

## Risorse
- [FFmpeg Docs](https://ffmpeg.org/documentation.html)
- Tutorial: "FFmpeg for beginners"

Scarica script: [ffmpeg-batch.sh](https://github.com/tuo-repo/ffmpeg-batch.sh)</content>
<parameter name="filePath">/home/arbogaste/Documenti/attack/AI_marxist/boycottwithai/public/downloads/guides/ffmpeg-video-guide.md