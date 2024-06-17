// Importiert das express-Modul, ein minimalistisches Web-Framework für Node.js
import express from 'express';

// Importiert das node-fetch-Modul, um HTTP-Anfragen zu senden
import fetch from 'node-fetch';

// Erstellt eine Instanz der express-Anwendung
const app = express();

// Definiert den Port, auf dem der Server lauschen soll. Verwendet entweder die Umgebungsvariable PORT oder standardmäßig 3000
const PORT = process.env.PORT || 3000;

// Definiert einen Endpunkt, der die Temperatur für eine bestimmte Postleitzahl abruft
app.get('/temperature/:plz', async (req, res) => {
  // Extrahiert die Postleitzahl (plz) aus den URL-Parametern
  const plz = req.params.plz;

  // Überprüft, ob die Postleitzahl genau 4 Ziffern lang ist
  if (!/^\d{4}$/.test(plz)) {
    // Gibt einen Fehler zurück, wenn die Postleitzahl nicht 4 Ziffern lang ist
    return res.status(400).json({ error: 'Ungültige Postleitzahl. Eine Postleitzahl muss 4 Ziffern haben.' });
  }

  // Definiert die URL für die API-Anfrage mit der Postleitzahl
  const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`;

  try {
    // Sendet eine HTTP-GET-Anfrage an die definierte URL
    const response = await fetch(url);
    
    // Überprüft, ob die Anfrage erfolgreich war (Status 200-299)
    if (!response.ok) {
      // Gibt einen Fehler zurück, wenn die Anfrage nicht erfolgreich war
      return res.status(response.status).json({ error: `Fehler beim Abrufen der Daten: ${response.statusText}` });
    }

    // Parst die Antwort als JSON
    const data = await response.json();
    
    // Überprüft, ob die Temperaturdaten vorhanden sind
    if (!data.currentWeather.temperature) {
      // Gibt einen Fehler zurück, wenn keine Temperaturdaten gefunden wurden
      return res.status(404).json({ error: 'Keine Temperaturdaten gefunden' });
    }

    // Gibt die Temperaturdaten als JSON-Antwort zurück
    res.json({ temperature: data.currentWeather.temperature });
  } catch (error) {
    // Loggt den Fehler und gibt einen internen Serverfehler zurück
    console.error(error);
    res.status(500).json({ error: 'Interner Serverfehler' });
  }
});

// Startet den Server und lässt ihn auf dem definierten Port lauschen
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
