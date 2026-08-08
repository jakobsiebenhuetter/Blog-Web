---
title: Supabase - die ersten Schritte
description: Ein hervorragender Service, wenn es um einer schnellen Einrichtung eines Backends auf der Cloud geht.
---

# Supabase - die ersten Schritte

- Nach dem Einrichten eines Kontos in Supabase kann man gleich loslegen ein paar Tabellen zu erstellen, welche mit einer PostGres Datenbank verwaltet wird.

Ich habe erstmal für dieses Projekt eine kommentar und User Tabelle erstellt. Es wird eine interne User Tabelle für die Authentifizierung von Supabase automatisch erstellt. Ich habe jedoch entschieden eine extra Usertabelle für mich zu erstellen, da ich dadurch etwas mehr Kontrolle über die Authentfizierungsmechanismen habe. Ich wollte nämlich das man ein Login mit dem Benutzernamen machen kann, was Supabase von Haus aus nicht unterstützt. ...
  
## Authentifizierungsarten:

### SignInAnonymously
