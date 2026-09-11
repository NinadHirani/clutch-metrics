# Clutch Metrics · Halftime Tactical Intelligence Hub

**Engineered & Crafted by Ninad Hirani**  
*Client Scope: Commissioned for a private US client (individual soccer coach/analyst, non-corporate)*  
*Build Signature: `NH-CLUTCH-2026.1-TACTICAL-CORE`*

Clutch Metrics is a high-performance tactical soccer telemetry and shot-tracking cockpit engineered by **Ninad Hirani** for a private US-based client (an individual tactical practitioner and sideline coach, rather than an enterprise or company entity). It was custom-tailored to provide instantaneous, mobile-ready pitch telemetry, an Expected Goals (xG) mathematical model, automated turnover tracking, and AI-driven halftime strategic adjustments under intense sideline pressure.

---

## 🇺🇸 Client & Project Background
- **Client**: Private US Client (Individual sports practitioner & tactical coach, independent freelance contract)
- **Principal Engineer & Architect**: Ninad Hirani
- **Core Directive**: Deliver an ultra-responsive, mobile-ready sideline tactical application allowing direct touch-to-pitch attempt tracking, live expected goals (xG) telemetry, and immediate halftime tactical WhatsApp/SMS briefings without corporate bloated systems or complex account requirements.
- **Architecture**: Progressive Web App (PWA) with client-side zero-latency persistence, interactive pitch coordinate mapping, and one-click guest demo mode.

---

## Key Features

### ⚽ Spatial Shot Telemetry & Interactive Pitch
- **Interactive Click-to-Place**: Tap directly on the virtual pitch to record an attempt with pinpoint $(x, y)$ coordinates.
- **Automatic Zone Detection**: Coordinates map dynamically to key pitch sectors (Center Box, Left/Right Box, Outside Box, Far Range).
- **Interactive Dot Inspection**: Click any shot dot on the pitch to inspect player contributions, outcome, calculated xG, and quickly edit or delete events.

### 📐 Expected Goals (xG) Statistical Model
- Real-time probability calculation based on distance to goal, shooting angle, zone, and shot type (e.g. Through Ball, Set Piece, Mistake turnover, Rebound).
- Real-time **Match xG KPI comparison** (`Total xG`, Team vs. Opponent xG).
- Individual xG tracking per event and in attacking logs.

### 📋 Match Configuration & Opponent Management
- Custom Team Name and designated Opponent Name (e.g. `CB South vs North Penn FC`).
- Match Period tracking (`1st Half`, `2nd Half`, `Extra Time`, `Full Time`).
- Safe **New Match / Reset Pitch** controls to clear the board for kickoff.

### 📊 Full Export & Tactical Sharing Suite
- **Export CSV**: High-fidelity telemetry spreadsheet containing minutes, players, coordinates, outcomes, and xG tagged with the Ninad Hirani verification header.
- **Copy Halftime Briefing**: One-click formatted tactical summary ready to paste into coach WhatsApp or SMS chat.
- **JSON Backup**: Raw match state backup.
- **Printable Tactical Sheet**: Formatted printer-friendly tactical sheet for sideline review.

### 🤖 AI Tactical Halftime Intel
- Automated 3-pillar tactical synthesis:
  1. Offensive distribution & conversion efficiency
  2. Opponent counter-attack threat & conceded xG
  3. Defensive turnovers & transition errors
- Actionable halftime directives customized to current match state.

### ⚡ Live Demo Match (Guest Mode)
- One-click exploration from the login screen loading a realistic competitive match dataset with shots, goals, assists, turnovers, and player rankings without requiring a Firebase account.

### ★ Ninad Hirani Official Provenance Stamp
- Certified interactive gold creator seal and provenance certificate verifying the original architecture by Ninad Hirani.

---

## Quick Start (Local Run)

1. Open `index.html` in any modern web browser or run a lightweight local static server:
   ```bash
   npx serve .
   ```
2. Click **⚡ Explore Live Demo Match (Guest Mode)** to immediately experience all features, or sign in via Firebase.

---

## Deployment (GitHub Pages & Firebase)

1. Push this repository to GitHub.
2. In your GitHub repo, navigate to **Settings > Pages**.
3. Select branch `main` and root `/`.
4. Your site will be live at:
   `https://<your-username>.github.io/clutch-metrics/`
