# adesso-BackendTask

## Übersicht

Dieses Backend wurde mit Express.js entwickelt und stellt eine REST-API zur Verfügung, die Text-Nachrichten empfangen und verarbeiten kann. Es dient als Backend für die entsprechende Frontend-Anwendung.


## Technologien

- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **dotenv** - Umgebungsvariablen Management
- **Jest** - Testing Framework
- **Supertest** - HTTP-Testing

## Installation

1. **Repository klonen und ins Verzeichnis wechseln:**
   ```bash
   cd adesso-BackendTask
   ```

2. **Dependencies installieren:**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren:**
   - Die `.env` Datei ist bereits konfiguriert mit `PORT=5000`
   - Bei Bedarf können weitere Umgebungsvariablen hinzugefügt oder geändert werden

## Verwendung

### Server starten

**Produktionsmodus:**
```bash
npm start
```

**Entwicklungsmodus (mit Auto-Reload):**
```bash
npm run dev
```

Der Server läuft standardmäßig auf `http://localhost:5000`

### API Endpoints

#### POST /api/text
Empfängt Text-Nachrichten und gibt eine Bestätigung zurück.

**Request Body:**
```json
{
  "text": "Ihre Nachricht hier"
}
```

**Response:**
```json
{
  "reply": "Empfangen: Ihre Nachricht hier"
}
```

#### GET /api/status
Überprüft den Server-Status.

**Response:**
```json
{
  "status": "Server läuft"
}
```

## Tests

**Alle Tests ausführen:**
```bash
npm test
```

Die Test-Suite überprüft:
- POST `/api/text` Endpoint Funktionalität
- GET `/api/status` Endpoint Funktionalität
- Korrekte Response-Formate und Status-Codes

