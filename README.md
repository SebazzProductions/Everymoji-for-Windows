# Everymoji for Windows

Everymoji ist ein kleiner Begleiter für alle, die Emojis nicht nur gelegentlich anklicken, sondern sie wirklich ständig benutzen – in Chats, Notizen, Posts, Mails oder einfach überall dort, wo ein bisschen Gefühl, Ton oder Humor in einen Satz soll.

Die App wurde nicht als aufgeblasenes Produkt gebaut, sondern als liebevoll gemachtes Werkzeug für echten Alltag: schnell, direkt, hübsch, präsent und angenehm. Ein Emoji-Picker, der nicht im Weg steht, sondern genau dann da ist, wenn man ihn braucht – und genau dort einfügt, wo der Cursor gerade wartet.

Everymoji soll sich weniger wie Software und mehr wie ein kleines gutes Helferlein anfühlen.

## Für jeden

Everymoji ist als kleines Geschenk gedacht, nicht als Geschäft. Kostenlos, ohne Konto, ohne Tracking, ohne Haken – und auf **Windows** wie auf **Linux**, damit wirklich jede und jeder das gleiche kleine Helferlein hat, ganz gleich womit man arbeitet.

- 🪟 **Windows** → https://github.com/SebazzProductions/Everymoji-for-Windows
- 🐧 **Linux** → https://github.com/SebazzProductions/Everymoji-for-Linux

Gleiche App, gleiche Idee, gleiche Sorgfalt. Nur der Weg, wie das Emoji an deinen Cursor kommt, ist auf jedem System nativ gelöst.

## Download

Everymoji für Windows kommt als portable EXE. Herunterladen, starten, benutzen. Kein Installer-Zirkus, keine unnötigen Hürden.

- Releases: https://github.com/SebazzProductions/Everymoji-for-Windows/releases/latest
- Direkter EXE-Download (v1.0.1): https://github.com/SebazzProductions/Everymoji-for-Windows/releases/download/v1.0.1/Everymoji-1.0.1-portable.exe

Favoriten und zuletzt verwendete Emojis bleiben erhalten: In der Portable-Version werden diese Daten direkt neben der EXE gespeichert, damit Everymoji auch beim Mitnehmen wirklich dein kleines Emoji-Zuhause bleibt.

**Hinweis (Windows SmartScreen):** Beim ersten Start kann Windows wegen eines „unbekannten" oder unsignierten Herausgebers warnen. Das ist bei kleinen Indie-Releases ohne teures Code-Signing-Zertifikat ganz normal – einfach auf „Weitere Informationen" → „Trotzdem ausführen".

## So kommt das Emoji an deinen Cursor

Everymoji legt das gewählte Emoji in die Zwischenablage und fügt es dann direkt in das zuletzt aktive Fenster ein – genau dort, wo der Cursor wartet. Kein Einrichten nötig, es funktioniert sofort. Der globale Hotkey **Alt+E** blendet den Picker jederzeit ein und aus.

## Features

- Schneller, suchbarer Emoji-Picker
- Klick zum Auswählen, Doppelklick zum direkten Senden
- Kategorien, Favoriten und zuletzt verwendete Emojis
- Hautton-Auswahl für unterstützte Emojis
- Globaler Hotkey für sofortigen Zugriff
- Mehrere Themes inklusive Accessibility-Varianten
- Fügt genau dort ein, wo der Cursor gerade wartet

## Bedienung

- **Klick** wählt ein Emoji aus, **Doppelklick** sendet es direkt an den Cursor.
- **Rechtsklick** auf ein Emoji schaltet es als Favorit an oder aus.
- `/` springt in die Suche, `Esc` leert sie.
- Kategorien, Favoriten und zuletzt verwendete Emojis oben umschaltbar.
- Hautton-Auswahl erscheint bei Emojis, die sie unterstützen.
- Themes oben rechts durchschalten.

## Warum es existiert

Viele kleine Tools lösen ein Problem technisch, fühlen sich dabei aber komplett seelenlos an. Everymoji sollte das Gegenteil werden: eine schlanke App, die leicht wirkt, schnell reagiert und trotzdem sichtbar mit Liebe gebaut wurde.

Nicht überladen. Nicht generisch. Nicht „auch noch ein Tool".

Sondern etwas, das man öffnet und sofort merkt: Das hier wurde für echte Nutzung gemacht – und für echte Menschen.

## Entwicklung

Voraussetzungen: Node.js 20+, npm und Windows, wenn du die native Einfüge-Funktion direkt testen willst.

```bash
npm install        # Abhängigkeiten
npm run dev        # Entwicklungsmodus
npm run typecheck  # Typecheck
npm run build:win  # portable EXE im dist-Ordner
```

## Stack

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- koffi für die native Windows-Einfüge-Integration

## Projektgedanke

Everymoji ist aus dem Wunsch entstanden, etwas Kleines zu bauen, das sich erstaunlich gut anfühlt. Kein riesiges Produktversprechen, kein unnötiger Overhead, sondern ein fokussiertes Tool mit Charakter, Tempo und einer klaren Idee.

Wenn jemand die App startet, ein Emoji in Sekunden findet und es ohne Reibung genau dort landet, wo es hin soll, dann ist das Ziel erreicht.

Und wenn man dabei noch ein kleines bisschen merkt, dass hier Herz drinsteckt, dann umso besser.
