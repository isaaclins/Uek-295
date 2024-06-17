// Funktion zur Simulation der Verzögerung
function simuliereVerzoegerung(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Funktion zur Addition nach Verzögerung
async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    const summe = a + b;
    console.log(`Das Ergebnis ist: ${summe}`);
}

// Beispielaufruf
addiereNachVerzoegerung(3, 7, 2000);
