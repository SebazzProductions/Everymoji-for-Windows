# Everymoji for Windows

Everymoji ist ein kleines Desktop-Werkzeug fuer Menschen, die Emojis wirklich oft benutzen und dabei nicht jedes Mal durch Browser-Tabs, Messenger-Picker oder Betriebssystem-Menues stolpern wollen.

Die App ist bewusst leicht, direkt und liebevoll gebaut: Ein fokussierter Emoji-Picker, schnelle Suche, Kategorien, Favoriten, Verlauf, Hauttoene und ein unkompliziertes Einfuegen genau dort, wo der Cursor gerade wartet. Die Idee dahinter ist nicht Feature-Masse, sondern ein Werkzeug, das sich angenehm anfuehlt und im Alltag einfach da ist, wenn man es braucht.

## Download

Release v1.0.0:

- Release-Seite: https://github.com/SebazzProductions/Everymoji-for-Windows/releases/tag/v1.0.0
- Direkter EXE-Download: https://github.com/SebazzProductions/Everymoji-for-Windows/releases/download/v1.0.0/Everymoji-1.0.0-portable.exe

Die Windows-Version ist als portable EXE gedacht. Kein Installer, keine Umwege.

## Features

- Suchbarer Emoji-Picker fuer Windows
- Klick zum Auswaehlen, Doppelklick zum Sofort-Senden
- Kategorien, Favoriten und zuletzt verwendete Emojis
- Hautton-Auswahl fuer unterstuetzte Emojis
- Globaler Hotkey zum Oeffnen
- Mehrere umschaltbare Themes inklusive Accessibility-Varianten

## Entwicklung

### Voraussetzungen

- Node.js 20+
- npm
- Windows, wenn du die native Einfuege-Funktion direkt testen willst

### Installation

```bash
npm install
```

### Entwicklungsmodus

```bash
npm run dev
```

### Typecheck

```bash
npm run typecheck
```

### Windows-Build

```bash
npm run build:win
```

Das erzeugt eine portable EXE in dist.

## Stack

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- koffi fuer die Windows-API-Integration

## Projektgedanke

Everymoji soll sich nicht wie eine generische Utility anfuehlen, sondern wie ein kleines Werkzeug mit Charakter. Schnell genug fuer den taeglichen Einsatz, visuell bewusst gestaltet und trotzdem schlicht genug, um nie im Weg zu stehen.

Wenn du die App einfach nur startest, ein Emoji suchst und es sofort an die richtige Stelle schicken kannst, dann macht sie genau das, was sie soll.
