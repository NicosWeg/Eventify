📌 Phase 0 — Planning (DONE)
- Define problem & MVP scope
- Create system architecture diagram
- Write initial README
- Freeze MVP scope

📌 Phase 1 — Project Setup (DONE)
- Create GitHub repository
- Initialize project folders (backend / frontend / scraper / docs)
- Add TODO.md
- Initial commit

📌 Phase 2 — Backend Setup (DONE)
- Initialize Node.js project
- Install core dependencies (express, dotenv, cors, helmet)
- Setup basic Express server
- Configure environment variables
- Add global error handler

📌 Phase 3 — Database & ORM (PARTIALLY DONE - Switched to Supabase)
- Install and initialize Supabase client (replaced Prisma)
- Design database schema (User, Event, Registration) in Supabase
- Setup Supabase connection
- Test database connection
- Note: No PostgreSQL; using Supabase for simplicity

📌 Phase 4 — Authentication (PARTIALLY DONE)
- Implement Google OAuth (email/password not implemented)
- Generate JWT tokens via Supabase
- Create auth middleware
- Protect private routes
- Test auth flow with Postman
- Fix: Handle anonymous login in backend/frontend

📌 Phase 5 — Events API (PARTIALLY DONE)
- Create Event model in Supabase
- Implement GET /events (requires auth)
- Implement GET /events/:id (missing)
- Seed sample events manually via scraper
- Validate API responses
- Fix: Frontend fetches lack auth headers

📌 Phase 6 — Event Registration (NOT DONE)
- Create Registration model in Supabase
- Implement POST /events/:id/register
- Prevent duplicate registrations
- Fetch user registered events
- Test registration logic

📌 Phase 7 — Scraper API Endpoint (NOT DONE)
- Create POST /scraper/push-event
- Secure endpoint with secret header
- Validate incoming event data
- Prevent duplicate event insertion
- Update scraper to use API instead of direct DB insert

📌 Phase 8 — Telegram Scraper (PARTIALLY DONE - Needs fixes)
- Setup Python scraper project
- Connect to Telegram API
- Read messages from selected channels
- Extract event information
- Send events to backend API (currently direct to DB)
- Schedule scraper execution
- Fixes: Add error handling, make channel configurable, prevent duplicates, update deprecated code

📌 Phase 9 — Frontend Setup (DONE)
- Initialize React (Vite)
- Setup Tailwind CSS
- Setup API client (custom fetches)
- Configure routing

📌 Phase 10 — Frontend Pages (PARTIALLY DONE)
- Create Login page (Google OAuth, anonymous placeholder)
- Create Register page (missing)
- Create Events list page
- Create Event detail page (broken - shows first event only)
- Create Profile page (missing)
- Handle loading & error states
- Fixes: Fix login flow bugs, add auth to fetches, implement specific event routing

📌 Phase 11 — Integration & Testing (NOT DONE)
- Connect frontend to backend (fix auth issues)
- End-to-end testing of user flow
- Fix bugs and edge cases (e.g., network failures, invalid data)
- Add unit tests (scraper parsing, backend routes)
- Add integration tests (API chain)
- Add E2E tests (UI flows)

📌 Phase 12 — Deployment (NOT DONE)
- Deploy Supabase database
- Deploy backend API (fix start script)
- Deploy frontend
- Deploy scraper job (e.g., via cron/Docker)
- Add live URLs to README

📌 Phase 13 — Final Polish (NOT DONE)
- Improve UI spacing & readability
- Add empty states
- Update README with screenshots
- Record short demo video

📌 Phase 14 — Post-MVP (Optional)
- Add filters (date/location)
- Add search
- Organizer accounts
- Notifications

📌 Immediate Fixes (PRIORITY - Do First)
- Backend: Fix start script (points to non-existent app.js)
- Frontend: Fix login flow (res.ok undefined), add CursorLight component, add auth headers to fetches
- Scraper: Add env validation, error handling, make channel configurable, prevent duplicates, use API endpoint
- General: Update .gitignore for session files, add requirements.txt usage, define Supabase schema