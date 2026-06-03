---
title: "Mein aktueller Web Stack"
description: "Womit ich arbeite: JavaScript, TypeScript, Node.js – und aktuell Astro.js."
---

# Mein Web Stack

Hier ein ausführlicher Überblick über die Technologien, mit denen ich arbeite. Diese Seite wächst mit der Zeit weiter – wenn neue Tools dazukommen oder alte rausfliegen, halte ich sie hier aktuell.

## Sprachen

Die Sprache ist das erste, was man wählt. Sie bestimmt fast alles, was danach kommt: welche Frameworks zur Verfügung stehen, welche Tooling-Pipeline man braucht, welche Bibliotheken sich anbieten.

### JavaScript

**JavaScript** ist die Grundlage für alles im Web. Auch wenn ich gerne TypeScript schreibe, bleibt JS der gemeinsame Nenner: jeder Browser versteht es nativ, und am Ende kompiliert TypeScript wieder dorthin zurück.

Was ich an JS schätze:
- Die Sprache ist überall – Browser, Server, Embedded.
- Modernes JS (ES2020+) ist deutlich angenehmer als das, was man vor zehn Jahren schreiben musste.
- Async/Await macht asynchronen Code lesbar.
- Viele nützliche Hilfsfunktionen, wie in Arrays, .map, .find, .filter.

### TypeScript

**TypeScript** nutze ich, wo es geht, für mehr Sicherheit und bessere Wartbarkeit. Statische Typen fangen einen großen Teil der Bugs ab, bevor sie überhaupt zur Laufzeit kommen. Außerdem ist die IDE-Unterstützung um Welten besser – Autocomplete, Refactoring, Go-to-Definition funktionieren zuverlässig.

### CSS (und seine modernen Geschwister)

CSS hat in den letzten Jahren riesige Sprünge gemacht. Was ich aktiv einsetze:
- **CSS Grid** und **Flexbox** für Layouts – Tabellen-Hacks sind endgültig vorbei.

## Backend / Runtime

### Node.js

**Node.js** ist meine hauptsächliche Laufzeitumgebung für serverseitigen JavaScript-/TypeScript-Code. Stabil, Battle-tested, riesiges Ökosystem über npm.

Was ich typischerweise damit baue:
- HTTP-APIs (mit Express)
- Scripte
- Prototypen

## Frontend-Frameworks

### Astro

Zurzeit beschäftige ich mich intensiv mit **[Astro.js](https://astro.build/)** – einem modernen Framework für schnelle, inhaltsorientierte Websites.

> Passenderweise wurde **genau diese Website** mit Astro.js gebaut. 🚀

Astro liefert standardmäßig kein JavaScript an den Browser aus (Zero-JS by default) und lässt sich bei Bedarf mit Komponenten aus React, Vue, Svelte & Co. erweitern – ideal für einen Blog wie diesen.

Was mir an Astro gefällt:
- **Islands Architecture**: Statisches HTML als Default, JS nur dort, wo es wirklich nötig ist.
- **Markdown First Class**: `.md`- und `.mdx`-Dateien sind Komponenten erster Klasse.
- **Framework-agnostisch**: Ich kann mitten in einer Astro-Komponente eine React- oder Svelte-Komponente einbetten.
- **Schnelle Builds**: Vite unter der Haube.


## Tooling

### Build-Tools

- **vite** - modern, schnell ud leicht aufzusetzen.
- **webpack** – altbewährt, gutes Plugin-Ökosystem.

### Package Manager

- **pnpm** – schneller als npm, sparsamer mit Speicherplatz dank Content-Adressable Store.
- **npm** – wenn das Projekt keine Wahl lässt, geht auch das. Kein Beinbruch.

### Linting & Formatting

- **ESLint** mit einer schlanken Config – ich vermeide es, Hunderte Regeln zu aktivieren.
- **Prettier** für automatisches Formatieren. Einmal eingerichtet, nie wieder drüber nachdenken.

### Testing

- **Jest** - für Unit tests der Klassiker
- **PlayWright** - mein Favorit für e2e Tests

### AI Codierungsassistenten

- **Claude Code** - verwende ich sehr gerne
- **GitHub Copilot** - Für Autovervollständigung und für schnelle Analyse von Repos auf Github

## Hosting & Deployment

### Statisch

Für statische Seiten wie diese hier nutze ich **GitHub Pages**. Build im CI, Output ins Repo, fertig. Kostenlos, schnell, ausreichend für Blogs und Portfolios.

### Dynamisch

Wenn echtes Backend dazu kommt, greife ich meist zu:
- **Vercel** oder **Netlify** für JAMstack-artige Sites mit Serverless-Functions.
- **Fly.io** oder **Railway** für längerlaufende Node-Prozesse.
- **Cloudflare Workers**, wenn Edge-Latenz wirklich zählt.
