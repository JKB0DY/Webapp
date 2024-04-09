# Besondere Lernleistung - Readme

Willkommen zur Readme meiner Besonderen Lernleistung

## Einleitung

Dieses Repository enthält die Besondere Lernleistung im Rahmen meines Abiturs. Ziel des Projekts war die Entwicklung einer Web-Plattform zur Verbesserung der Verwaltung und Kommunikation im Bereich Veranstaltungstechnik an unserer Schule.

## Requirements
- [Docker (bzw. Docker Desktop)](https://www.docker.com/products/docker-desktop/)
- [Node Js](https://nodejs.org/en)

## Installation

Um die Web-Plattform lokal zu testen, führe bitte die folgenden Schritte aus:

1. Klone das Repository auf einen lokalen Rechner:

   ```bash
   git clone https://github.com/JKB0DY/Webapp.git
   ```

2. Navigiere in das Verzeichnis der heruntergeladenen Dateien.

3. Installiere die erforderlichen Abhängigkeiten aller Bereiche und initialisiere die Datenbank:

   ```bash
   npm run install:all:first
   ```

4. Starte alle Services:

   ```bash
   npm run start:dev
   ```

Um die Anwendung zu beenden, muss nur `Strg` + `C` gedrückt werden und dann mit `J` + `Enter` bzw. `Y` + `Enter` bestätigt werden.


## Plattform erklärt

Nun ist auf http://localhost:3333 die API erreichbar, auf http://localhost:5555 befindet sich ein Datenbank-Viewing-Tool namens Prisma Studio, und auf http://localhost:4200 ist die Web-Anwendung erreichbar.

An der linken Seite sind die zwei Bereiche der Plattform verlinkt. Diese können von jeder anderen Seite aus angeklickt werden und leiten auf entsprechende Übersichtsseiten weiter. Um von Seiten auf vorherige Seiten zurückzugelangen, empfehle ich, den Browser-internen Zurück-Button zu nutzen.

Um Tests zu vereinfachen, ist der Login-Screen aktuell so konfiguriert, dass wenn eine E-Mail-Adresse eingegeben wird, die noch nicht in der Datenbank ist, diese mit einem entsprechenden Passwort in die Datenbank eingepflegt wird. Danach funktioniert der Login-Prozess ganz normal.


Viel Spaß
