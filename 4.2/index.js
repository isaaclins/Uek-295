const express = require('express'); // Importiere das Express-Framework
const path = require('path'); // Importiere das path-Modul
const axios = require('axios'); // Importiere das axios-Modul für HTTP-Anfragen

// Express-Anwendung initialisieren
const app = express();

// Port definieren
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware zum Parsen von URL-codierten Daten
app.use(express.json()); // Middleware zum Parsen von JSON-Daten

// Array mit Namen erstellen
const names = [
    'Max'
];

app.use(express.urlencoded({ extended: true })); // Middleware zum Parsen von URL-codierten Daten

// Routen definieren

// Route für die aktuelle Zeit
app.get('/now', async (req, res) => {
    const timezone = req.query.tz || 'Etc/UTC'; // Zeitzone aus der Anfrage oder Standardwert 'Etc/UTC'
    try {
      const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`); // HTTP-Anfrage an die World Time API
      res.json(response.data); // Antwort als JSON senden
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch time data' }); // Fehlermeldung senden, wenn die Zeit nicht abgerufen werden kann
    }
});

// Route für Weiterleitung zu einer anderen Website
app.get('/zli', (request, response) => {
    response.redirect("https://www.zli.ch"); // Weiterleitung zur Website des Zürcher Lehrbetriebsverbands
});

// Route für einen zufälligen Namen
app.get('/name', (request, response) => {
    const randomIndex = Math.floor(Math.random() * names.length); // Zufälliger Index im Bereich der Namen
    const randomName = names[randomIndex]; // Zufälliger Name aus dem Array
    response.send(randomName); // Name als Antwort senden
});

app.post('/names', (request, response) => {
    const newName = request.body.name; // Neuer Name aus dem Anfragekörper extrahieren

    if (newName && newName.trim() !== '') { // Überprüfen, ob der Name gültig ist
        names.push(newName.trim()); // Neuen Namen zum Array hinzufügen
        response.status(201).send(`Name ${newName.trim()} hinzugefügt`); // Erfolgsantwort senden
    } else {
        response.status(400).send('Ungültiger Name'); // Fehlerantwort senden, wenn der Name ungültig ist
    }
});

// Route für das Löschen eines Namens
app.delete('/names', (request, response) => {
    const nameToRemove = request.body.name; // Zu entfernender Name aus dem Anfragekörper extrahieren

    if (nameToRemove && nameToRemove.trim() !== '') { // Überprüfen, ob der Name gültig ist
        const index = names.indexOf(nameToRemove); // Index des Namens im Array finden
        if (index !== -1) { // Überprüfen, ob der Name im Array vorhanden ist
            names.splice(index, 1); // Namen aus dem Array entfernen
            response.sendStatus(204); // Erfolgreiche Aktion, keine Inhaltsantwort erforderlich
        } else {
            response.status(404).send('Name nicht gefunden'); // Fehlerantwort senden, wenn der Name nicht gefunden wird
        }
    } else {
        response.status(400).send('Ungültiger Name'); // Fehlerantwort senden, wenn kein Name bereitgestellt wird
    }
});

// Route für eine HTML-Seite
app.get('/html', (request, response) => {
    const htmlFilePath = path.join(__dirname, 'resources/examplesite.html'); // Pfad zur HTML-Datei auf dem Server
    response.sendFile(htmlFilePath); // HTML-Datei als Antwort senden
});

// Route für ein Bild
app.get('/image', (request, response) => {
    const imagePath = path.join(__dirname, 'resources/monkey.gif'); // Pfad zum Bild auf dem Server
    response.sendFile(imagePath); // Bild als Antwort senden
});

// Route für den Teekessel-Status
app.get('/teapot', (request, response) => {
    response.status(418).send('I\'m a teapot'); // Status 418 (I'm a teapot) als Antwort senden
});

// Route für den Browser-Agenten
app.get('/user-agent', (request, response) => {
    const userAgent = request.headers['user-agent']; // Browser-Agent aus der Anfrage lesen
    response.send(`User-Agent: ${userAgent}`); // Browser-Agent als Antwort senden
});

// Route für den Status Forbidden
app.get('/secret', (request, response) => {
    response.sendStatus(403); // Status 403 (Forbidden) als Antwort senden
});

// Route für eine XML-Datei
app.get('/xml', (request, response) => {
    const xmlFilePath = path.join(__dirname, 'resources/data.xml'); // Pfad zur XML-Datei auf dem Server
    response.sendFile(xmlFilePath); // XML-Datei als Antwort senden
});

// Route für persönliche Informationen
app.get('/me', (request, response) => {
    const me = { // JSON-Objekt mit den gewünschten Eigenschaften erstellen
        Vorname: 'Isaac',
        Nachname: 'Lins',
        Alter: 17,
        Wohnort: 'Zürich',
        Augenfarbe: 'Grün/braun'
    };

    response.json(me); // JSON-Objekt als Antwort senden
});

app.get('/secret2', (req, res) => {
    const authHeader = req.headers.authorization || ''; // Authorization-Header aus der Anfrage lesen oder leeren String verwenden
    if (authHeader === 'Basic aGFja2VyOjEyMzQ=') { // Überprüfen, ob der Authorization-Header korrekt ist
        res.sendStatus(200); // Erfolgsantwort senden
    } else {
        res.sendStatus(401); // Fehlerantwort senden, wenn die Autorisierung fehlschlägt
    }
});

app.get('/chuck', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random'); // HTTP-Anfrage an die Chuck Norris API
        const joke = response.data.value; // Witz aus der API-Antwort extrahieren
        const name = req.query.name || 'Chuck Norris'; // Name aus der Anfrage oder Standardwert 'Chuck Norris'
        const personalizedJoke = joke.replace('Chuck Norris', name); // Witz personalisieren
        res.send(personalizedJoke); // Personalisierter Witz als Antwort senden
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch joke' }); // Fehlermeldung senden, wenn der Witz nicht abgerufen werden kann
    }
});

// Server starten und auf Port hören
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Konsolenausgabe, wenn der Server gestartet wird
});
