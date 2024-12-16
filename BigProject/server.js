const express = require('express');
const bodyParser = require('body-parser'); // Pentru parsarea datelor trimise

const app = express();
const PORT = 3000;

// Middleware pentru parsarea datelor JSON și `application/x-www-form-urlencoded`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint POST pentru primirea datelor
app.post('/rezerva', (req, res) => {
    const { np, email, date, time, persoane } = req.body;

    // Afișează datele primite în consolă (doar pentru debug)
    console.log(`Nume Prenume: ${np}`);
    console.log(`Email/Telefon: ${email}`);
    console.log(`Data: ${date}`);
    console.log(`Ora: ${time}`);
    console.log(`Persoane: ${persoane}`);

    // Trimite răspuns către client
    res.status(200).send('Rezervarea a fost primită cu succes!');
});

// Pornește serverul
app.listen(PORT, () => {
    console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
