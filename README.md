# Project Name - Eventify - FROZEN MVP SCOPE

## Problem
People want to find out about offline events, but it’s all scattered across Telegram channels. That can take some time and energy, which is not the best way.

## Solution
A web platform that collects events from Telegram and allows users to register via the official Google form of organizers or registering via the website itself, which then users can set reminders. And to manage attendance.

## MVP Features
- User authentication (Google OAuth / Anonymous)
- Event listing (scraped from Telegram)
- Event detail page
- Event registration (planned)
- User profile with registered events (planned)

## Non-Goals (Important)
- No chat system
- No payments
- No recommendations (yet)

## Tech Stack
- Frontend: React + Vite + Vanilla CSS
- Backend: Node.js + Express + Supabase
- Database: Supabase (replaced PostgreSQL for simplicity)
- Scraper: Python (Telethon)

## High-Level Architecture
Scraper → Direct to Supabase (to be updated to API) → Backend API → Frontend.
Note: Currently, scraper inserts directly into DB; future: via secure backend endpoint.

## Current Status
- Backend: Basic server with auth middleware and event fetching (bugs: start script, missing auth in frontend fetches).
- Frontend: Login page, main events list, event detail (bugs: login flow, routing).
- Scraper: Telegram scraping with parsing (bugs: error handling, duplicates, deprecated code).
- Database: Supabase tables assumed (events, sign_in_logs, etc.) - define schema.
- Known Issues: See TODO.md for details.

## How to Run

### Prerequisites
- Node.js (v18+)
- Python (3.8+)
- Supabase account (for DB)
- Telegram API credentials (for scraper)

### Backend
1. cd backend
2. npm install
3. Create .env with:
   - SUPABASE_URL=your_url
   - SUPABASE_SERVICE_ROLE_KEY=your_key
   - CLIENT_URL=http://localhost:5173
   - PORT=5000
4. npm run dev (or fix start script to "node src/server.js")

### Frontend
1. cd frontend/sign-up-page
2. npm install
3. Create .env with:
   - VITE_SUPABASE_URL=your_url
   - VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_key
   - VITE_API_URL=http://localhost:5000
4. npm run dev

### Scraper
1. cd scraper
2. pip install -r requirements.txt
3. Create .env with:
   - API_ID=your_telegram_api_id
   - API_HASH=your_telegram_api_hash
   - SUPABASE_URL=your_url
   - SUPABASE_SERVICE_ROLE_KEY=your_key
4. python scraper.py

## Troubleshooting
- Backend start fails: Change "start" script to "node src/server.js".
- Frontend login broken: Fix googleSign.js return value and App.jsx logic.
- Events not loading: Add auth headers in fetches.js.
- Scraper crashes: Add try-except in scraper.py, check env vars.
- DB issues: Ensure Supabase tables exist (events: id, message_id, content, date, time, location, views).

## Future Improvements
- Complete MVP (registration, profiles)
- Add tests
- Deployment
- Filters, search, notifications