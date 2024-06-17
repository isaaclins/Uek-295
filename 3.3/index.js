// Erforderliche Module einbinden
const express = require('express');
const path = require('path');

// Express-Anwendung initialisieren
const app = express();

// Port definieren
const port = 3000;

// Array mit Namen erstellen
const names = [
    'Max',
    'Sophia',
    'Liam',
    'Emma',
    'Noah',
    'Olivia',
    'William',
    'Ava',
    'James',
    'Isabella',
    'Logan',
    'Mia',
    'Benjamin',
    'Charlotte',
    'Mason',
    'Amelia',
    'Elijah',
    'Harper',
    'Oliver',
    'Evelyn'
];

// Routen definieren

// Route für die aktuelle Zeit
app.get('/now', (request, response) => {
    const now = new Date()
    response.send(now.toString());
});

// Route für Weiterleitung zu einer anderen Website
app.get('/zli', (request, response) => {
    response.redirect("https://www.zli.ch")
});

// Route für einen zufälligen Namen
app.get('/name', (request, response) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    response.send(randomName);
});

// Route für eine HTML-Seite
app.get('/html', (request, response) => {
    // Pfad zur HTML-Datei auf dem Server
    const htmlFilePath = path.join(__dirname, 'resources/examplesite.html');

    // Senden der HTML-Datei als Antwort
    response.sendFile(htmlFilePath);
});

// Route für ein Bild
app.get('/image', (request, response) => {
    // Pfad zum Bild auf dem Server
    const imagePath = path.join(__dirname, 'resources/monkey.gif');

    // Senden des Bildes als Antwort
    response.sendFile(imagePath);
});

// Route für den Teekessel-Status
app.get('/teapot', (request, response) => {
    // Senden des Status 418 (I'm a teapot) als Antwort
    response.status(418).send('I\'m a teapot');
});

// Route für den Browser-Agenten
app.get('/user-agent', (request, response) => {
    // Lesen des Browser-Agenten aus dem Request und Zurückgeben als Antwort
    const userAgent = request.headers['user-agent'];
    response.send(`User-Agent: ${userAgent}`);
});

// Route für den Status Forbidden
app.get('/secret', (request, response) => {
    // Senden des Status 403 (Forbidden) als Antwort
    response.sendStatus(403);
});

// Route für eine XML-Datei
app.get('/xml', (request, response) => {
    // Pfad zur XML-Datei auf dem Server
    const xmlFilePath = path.join(__dirname, 'resources/data.xml');

    // Senden der XML-Datei als Antwort
    response.sendFile(xmlFilePath);
});

// Route für persönliche Informationen
app.get('/me', (request, response) => {
    // JSON-Objekt mit den gewünschten Eigenschaften erstellen
    const me = {
        Vorname: 'Isaac',
        Nachname: 'Lins',
        Alter: 17,
        Wohnort: 'Zürich',
        Augenfarbe: 'Grün/braun'
    };

    // Senden des JSON-Objekts als Antwort
    response.json(me);
});

// Server starten und auf Port hören
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
