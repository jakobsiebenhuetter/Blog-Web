---
title: "Claude Code - goal Modus"
description: "Der /goal Befehl von Claude. Meine Erfahrungen"

---

# Das kommt von Content Collection

# Projekt Goal

## Beschreibung
### Todo Webapp bauen mit Claude Code und den Befehl "/goal" testen

## Was ist der Goal Modus und was macht er ?



Der /goal Befehl ist wirklich dazu gedacht, solange Claude arbeiten zu lassen, bis die Aufgabe erledigt ist. Ohne Rücksicht auf Verluste. Also eher eine brutale Methode.

Ich habe mir vorgenommen, erst mal nur vibe zu coden um zu sehen, wie gut das funktioniert und wie schnell ich damit sein werde

Mein erster Prompt, welches ich mir von Gemini habe optimieren lassen für den goal Modus:

/goal Erstelle eine moderne, inhaltsstarke Homepage (Landingpage) im Stil von Todoist unter Verwendung von Next.js (App Router), TypeScript und Tailwind CSS.

Befolge dabei strikt folgende Sicherheits-, Architektur- und Qualitäts-Vorgaben:

1. Security-First Setup (Supply-Chain-Schutz): 
   - Nutze pnpm statt npm als Paketmanager.
   - Erstelle als allererstes eine `.npmrc` im Projektordner mit:
     ignore-scripts=true
     min-release-age=10080
   - Erzwinge die Nutzung der Lockfile (pnpm-lock.yaml).

2. Projekt-Initialisierung & Zero-Placeholder-Regel:
   - Initialisiere ein sauberes Next.js-Projekt mit App Router und TypeScript über pnpm (Nutze stabile Versionen).
   - Entferne sämtlichen Demo-Code vollständig.
   - REGEL: Schreibe keinen Platzhalter-Code, keine auskommentierten Funktionen und keine unvollständigen Typen (kein 'any'). Jede Komponente muss voll funktionsfähig sein.

3. Architektur, Layout & Komponenten-Struktur:
   - Erstelle eine responsive, fixierte SaaS-Navigationsleiste (oben) und ein minimalistisches Landingpage-Layout im Todoist-Stil.
   - Nutze für UI-Komponenten (Buttons, Inputs, Dropdowns) die "Shadcn UI"-Philosophie (primitive Radix-Komponenten gestylt mit Tailwind), um maximale Zugänglichkeit (ARIA) zu garantieren.
   - Richte dynamische Routen für Blog-Artikel unter `app/blog/[slug]` und Kategorien unter `app/category/[slug]` ein.

4. Content-Infrastruktur & Interaktives Widget:
   - Verwende lokale MDX-Dateien oder typisierte JSON-Strukturen für die Blog-Artikel, optimiert für schnelles statisches Rendern.
   - Integriere ein interaktives Demo-Checklisten-Widget auf der Startseite: Nutzer müssen Aufgaben hinzufügen, per Drag-and-Drop verschieben und mit einer flüssigen visuellen Animation (z. B. Durchstreichen und Verblassen) als erledigt markieren können (nutze hierfür Framer Motion). Speichere den Zustand im LocalStorage, damit er beim Neuladen bleibt.

5. Core Web Vitals & SEO-Exzellenz:
   - Optimiere die Seite auf einen Lighthouse-Score von >95 in allen Kategorien.
   - Nutze die Next.js Metadata-API für vollständige Open-Graph/Twitter-Tags, Robots.txt, Sitemap.xml und dynamisch generierte strukturierte JSON-LD Daten für Blogartikel (Schema.org `Article` & `WebSite`).
   - Verwende strikt `next/image` für alle Bilder mit korrekten Aspect-Ratios und `next/font` für die Schriftarten (lokal geladen, kein Google-CDN-Call wegen DSGVO).

Bitte erstelle zuerst einen strukturierten Meilenstein-Plan, der zeigt, wie du die Sicherheitsvorkehrungen zuerst triffst, und arbeite ihn dann autonom ab.


Nachdem Claude Code mit dem programmieren fertig wurde (Dauer ~20 min.) hat er mir eine schöne erste Website, ähnlich wie Todoist gebaut, was noch fehlt ist noch eine Möglichkeit sich einzuloggen.

## Next step - Login/Signup einbauen (Dauer ~15 min.)

**Login-Goal + Zusatzwünsche:** „Loginsystem einbauen" → (nach Rückfragen) eigenes jose-basiertes Auth mit
   SQLite und geschütztem `/dashboard`. Ergänzt: „ein spezieller fantasievoller Button, der zur Login-Seite
   weiterleitet; ein Logo erstellen; beim Klick ein Backdrop mit Logo + Spinner, bis die Login-Seite geladen ist."

## Next step PWA bauen lassen, wird aber nicht verwendet - obsolet (Dauer ~10 min.)

**PWA-/Sync-Goal:** „Erstelle alles Besprochene — installierbare PWA (Android + Desktop) + geräteübergreifende
   Sync — beurteile selbst was sinnvoll ist, und schreibe am Ende eine Zusammenfassung in ein `.md`."

### Das Hosting zum testen
- Ich habe Cloudflare als Tunnel verwendet für das lokale Hosting

Damit ich meinen Rechner, als Server für das Hosting testweise verwenden kann, habe ich den Dienst von Cloudflare für den Tunnel verwendet, damit ich auch außerhalb meines Netzwerks ohne Probleme auf die Website zugreifen kann.
Mit diesem Befehl kann man nach lokaler Installation von Clouflare einen Tunnel für die jeweilige Website herstellen. Befehl siehe auf dem Bild im Terminal.



### Meine Bewertung des Zwischenstandes der Todo Webapp
Die ersten Ergebnisse würde ich als sehr gut bewerten. Bugs habe ich auf die Schnelle auch keine gefunden. Ein paar wenige Schnönheitsfehler gab es nur, wenn man in der Demo Version der Todos, die Tasks als erledigt markiert. Da kommt es vor, dass manchmal die als erledigt markierten Tasks nicht abgespeichert werden. Ein bis Zwei kleine Schönheitsfehler gab es auch beim Design. Welche ich aber mit einem Prompt sicher korrigieren lassen kann. Ansonsten, waren die Ergebnisse sehr zufriedenstellend.
Derzeit wurde die Applikation nicht konkret getestet. 

### Verbesserungen und Meinung
Ich bin zu dem Schluss gekommen, dass der Befehl /goal für diese Art von Projekt nicht die Beste Wahl ist. Abgesehen davon das die API Kosten schnell in die Höhe gehen können. Mit normalen Prompts und Claude im plan Modus, kann man sicherlich bessere Ergebnisse erzielen.

Der goal Befehl ist für meine Zwecke, in diesem Projekt ungeeignet, wenn man jetzt eine ganze Applikation damit bauen möchte.
Zum Abschluss werde ich die Android App auch noch mit dem /goal Befehl ausführen, aber das wird es dann gewesen sein.
Was immer wichtig ist, ist es CLaude Code immer den passenden Kontext zu geben bzw. gutes Context Engineering. Beispielsweise auch mit MCP Tools, wie den MCP für die Chrome DEV Tools. Ob das aber im Laufe dieses Projekts gemacht wird, wird sich noch herausstellen. Ich werde das Projekt jedoch auf Eis legen, weil mich Vibe Coding stört. Mir ist es lieber wenn ich Ahnung von der Technologie habe und werde daher meine zukünftigen Projekte nicht mehr vibe coden.

Die Android App habe ich mir von Claude Code bauen lassen und im Emulator lief es ganz gut. Den Emulator hat Claude Code zum steuern der App bedient um sich durchzuklicken.

Ich habe dann per link die .apk Datei auf meinem Smartphone heruntergeladen installiert und gestartet. Das Login Fenster ist aufgetaucht aber einloggen konnte ich mich nicht. ich weiß nicht wieso. Ich habe es nur vibe gecodet. Dann hat Claude später noch selbstständig irgendwelche Fehler in der Android App gefixt und geschrieben jetzt sollte es funktionieren. Seit dem habe ich es nicht wieder ausprobiert, werde es aber machen.


## Next step Android App bauen lassen, welche sich mit der Webapp synchronisiert ?
- ist erst mal auf Eis gelegt **...**


