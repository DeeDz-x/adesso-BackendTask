// backend/server.test.js
const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.post('/api/text', (req, res) => res.json({ reply: `Empfangen: ${req.body.text}` }));

test('POST /api/text', async () => {
  const res = await request(app).post('/api/text').send({ text: 'Hallo' });
  expect(res.body.reply).toBe('Empfangen: Hallo');
});
