# Everymoji for Windows

Everymoji ist ein kleiner Windows-Begleiter fuer alle, die Emojis nicht nur gelegentlich anklicken, sondern sie wirklich staendig benutzen, in Chats, Notizen, Posts, Mails oder einfach ueberall dort, wo ein bisschen Gefuehl, Ton oder Humor in einen Satz soll.

Die App wurde nicht als aufgeblasenes Produkt gebaut, sondern als liebevoll gemachtes Werkzeug fuer echten Alltag: schnell, direkt, huebsch, praesent und angenehm. Ein Emoji-Picker, der nicht im Weg steht, sondern genau dann da ist, wenn man ihn braucht und genau dort einfuegt, wo der Cursor gerade wartet.

Everymoji soll sich weniger wie Software und mehr wie ein kleines gutes Helferlein anfuehlen.

## Download

Release v1.0.1:

- Release-Seite: https://github.com/SebazzProductions/Everymoji-for-Windows/releases/tag/v1.0.1
- Direkter EXE-Download: https://github.com/SebazzProductions/Everymoji-for-Windows/releases/download/v1.0.1/Everymoji-1.0.1-portable.exe

Die Windows-Version kommt als portable EXE. Herunterladen, starten, benutzen. Kein Installer-Zirkus, keine unnötigen Huerden.

Und ganz wichtig fuer alle, die sowas wirklich benutzen statt nur kurz auszuprobieren: Favoriten und zuletzt verwendete Emojis bleiben erhalten. In der Portable-Version werden diese Daten direkt neben der EXE gespeichert, damit Everymoji auch beim Mitnehmen wirklich dein kleines Emoji-Zuhause bleibt.

Hinweis fuer Windows: Beim ersten Start kann SmartScreen oder Windows selbst wegen eines "unbekannten" oder unsignierten Herausgebers warnen. Das ist bei kleinen Indie-Releases ohne Code-Signing-Zertifikat erstmal normal. Ich komme eher aus der Ecke signierter Android-Software und nicht aus klassischer Windows-Distribution mit teuren Signing-Zertifikaten, deshalb bitte davon nicht irritieren lassen.

## Features

- Schneller, suchbarer Emoji-Picker fuer Windows
- Klick zum Auswaehlen, Doppelklick zum direkten Senden
- Kategorien, Favoriten und zuletzt verwendete Emojis
- Hautton-Auswahl fuer unterstuetzte Emojis
- Globaler Hotkey fuer einen sofortigen Zugriff
- Mehrere Themes inklusive Accessibility-Varianten
- Portable EXE fuer einen unkomplizierten Start

## Warum es existiert

Viele kleine Tools loesen ein Problem technisch, aber fuehlen sich dabei komplett seelenlos an. Everymoji sollte das Gegenteil werden: eine schlanke App, die leicht wirkt, schnell reagiert und trotzdem sichtbar mit Liebe gebaut wurde.

Nicht ueberladen. Nicht generisch. Nicht “auch noch ein Tool”.

Sondern etwas, das man oeffnet und sofort merkt: Das hier wurde fuer echte Nutzung gemacht.

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

Das erzeugt eine portable EXE im dist-Ordner.

## Stack

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- koffi fuer die Windows-API-Integration

## Projektgedanke

Everymoji ist aus dem Wunsch entstanden, etwas Kleines zu bauen, das sich erstaunlich gut anfuehlt. Kein riesiges Produktversprechen, kein unnötiger Overhead, sondern ein fokussiertes Tool mit Charakter, Tempo und einer klaren Idee.

Wenn jemand die App startet, ein Emoji in Sekunden findet und es ohne Reibung genau dort landet, wo es hin soll, dann ist das Ziel erreicht.

Und wenn man dabei noch ein kleines bisschen merkt, dass hier Herz drinsteckt, dann umso besser.
