📌 Phase 0 — Planning (DONE)

 Define problem & MVP scope

 Create system architecture diagram

 Write initial README

 Freeze MVP scope

📌 Phase 1 — Project Setup

 Create GitHub repository

 Initialize project folders (backend / frontend / scraper / docs)

 Add TODO.md

 Initial commit

📌 Phase 2 — Backend Setup (Node.js)

 Initialize Node.js project

 Install core dependencies (express, dotenv, cors, helmet)

 Setup basic Express server

 Configure environment variables

 Add global error handler

📌 Phase 3 — Database & ORM

 Install and initialize Prisma

 Design database schema (User, Event, Registration)

 Setup PostgreSQL connection

 Run initial migration

 Test database connection

📌 Phase 4 — Authentication

 Implement user registration (email + password)

 Hash passwords securely

 Implement user login

 Generate JWT tokens

 Create auth middleware

 Protect private routes

 Test auth flow with Postman

📌 Phase 5 — Events API

 Create Event model

 Implement GET /events

 Implement GET /events/:id

 Seed sample events manually

 Validate API responses

📌 Phase 6 — Event Registration

 Create Registration model

 Implement POST /events/:id/register

 Prevent duplicate registrations

 Fetch user registered events

 Test registration logic

📌 Phase 7 — Scraper API Endpoint

 Create POST /scraper/push-event

 Secure endpoint with secret header

 Validate incoming event data

 Prevent duplicate event insertion

📌 Phase 8 — Telegram Scraper

 Setup Python scraper project

 Connect to Telegram API

 Read messages from selected channels

 Extract event information

 Send events to backend API

 Schedule scraper execution

📌 Phase 9 — Frontend Setup

 Initialize React (Vite)

 Setup Tailwind CSS

 Setup API client (Axios)

 Configure routing

📌 Phase 10 — Frontend Pages

 Create Login page

 Create Register page

 Create Events list page

 Create Event detail page

 Create Profile page

 Handle loading & error states

📌 Phase 11 — Integration & Testing

 Connect frontend to backend

 End-to-end testing of user flow

 Fix bugs and edge cases

📌 Phase 12 — Deployment

 Deploy PostgreSQL database

 Deploy backend API

 Deploy frontend

 Deploy scraper job

 Add live URLs to README

📌 Phase 13 — Final Polish

 Improve UI spacing & readability

 Add empty states

 Update README with screenshots

 Record short demo video

📌 Phase 14 — Post-MVP (Optional)

 Add filters (date/location)

 Add search

 Organizer accounts

 Notifications