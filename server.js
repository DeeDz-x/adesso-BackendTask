const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/api/text', (req, res) => {   
    console.log('Anfrage empfangen:', req.body);
    const { text } = req.body;
    console.log('Empfangen:', text);
    res.json({ reply: `Empfangen: ${text}` });
});

app.get('/check', (req, res) => {
    res.send('Backend-Server läuft!');
});

app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
