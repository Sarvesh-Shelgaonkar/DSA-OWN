<!--
  MyDSA — Project Documentation & Interview Guide
  Copyright (c) 2026 Sarvesh Shelgaonkar. All Rights Reserved.
  Owner & author: Sarvesh Shelgaonkar — https://github.com/Sarvesh-Shelgaonkar
  See the LICENSE file at the repository root.
-->

# MyDSA — Project Documentation & Interview Guide

> © 2026 **Sarvesh Shelgaonkar** — owner & author of this project and repository.
> All rights reserved. See [`LICENSE`](../LICENSE) at the repo root.

Welcome. This folder explains **how the MyDSA website is built**, in plain language, and turns
every part of it into **interview-ready knowledge**. Each concept is explained twice:

- **In simple words** — so you understand the idea.
- **Interview level** — so you can answer follow-ups confidently.

MyDSA is a **full-stack MERN** platform for learning Data Structures & Algorithms and
broader engineering interviews: a structured roadmap, curated problems, an **Engineering
hub** (DSA library, system design, AI, DevOps), patterns, puzzles, an AI interview coach,
and **auth-gated** content with cross-device progress sync (email/password + Google).

**Access model:** `/`, `/login`, and `/signup` are public. Every learning route is behind
a React `RequireAuth` guard; the API still enforces JWT via `requireAuth` middleware.

---

## How to read these docs

| # | File | What it covers |
|---|------|----------------|
| 0 | **README.md** (this file) | Overview, tech stack, folder map, glossary |
| 1 | [01-architecture.md](./01-architecture.md) | Big-picture architecture, request lifecycle, diagrams |
| 2 | [02-authentication-and-authorization.md](./02-authentication-and-authorization.md) | Signup/login, Google Sign-In, JWT, authZ, password hashing |
| 3 | [03-cookies-and-sessions.md](./03-cookies-and-sessions.md) | Cookies, sessions, JWT-in-cookie, SameSite/Secure, CORS |
| 4 | [04-data-storage-and-sync.md](./04-data-storage-and-sync.md) | localStorage, MongoDB, the merge/sync engine |
| 5 | [05-system-design-concepts.md](./05-system-design-concepts.md) | How MyDSA maps to real system-design ideas + how to scale it |
| 6 | [06-interview-qa.md](./06-interview-qa.md) | Rapid-fire interview Q&A across every topic |
| 7 | [07-problems-and-decisions.md](./07-problems-and-decisions.md) | Real problems we hit and the decisions we made |
| 8 | [08-put-this-on-your-resume.md](./08-put-this-on-your-resume.md) | **New here?** Ready-to-paste resume bullets, keywords, and how to explain it all |
| 9 | [09-deployment-and-env.md](./09-deployment-and-env.md) | Render (Static + API), env vars, SPA rewrites, Google origins, cold starts |

> The diagrams use **Mermaid**, which renders automatically on GitHub and most Markdown viewers.

> 🆕 **Want to add this project to your resume?** Jump straight to
> **[08-put-this-on-your-resume.md](./08-put-this-on-your-resume.md)** — it gives you copy-paste
> bullet points, a keyword list, and simple explanations (with examples) for every concept so you can
> defend it in an interview.

---

## Tech stack (and *why* each was chosen)

| Layer | Tech | Why |
|-------|------|-----|
| UI | **React 18 + Vite** | Component model + instant dev server & fast builds |
| Styling | **Tailwind CSS** + CSS variables | Consistent design system, light/dark theming |
| Routing | **React Router** | Client-side routing for a snappy SPA |
| State | **React Context** + custom hooks | Small, dependency-free global state (auth, theme, timer) |
| Editor | **Monaco** | The same editor that powers VS Code, for the code playground |
| Backend | **Node.js + Express** | Lightweight, fast to build a REST API |
| Database | **MongoDB + Mongoose** | Flexible document model that mirrors our JSON-shaped progress data |
| Auth | **JWT + httpOnly cookies**, **bcrypt**, **Google Sign-In** | Stateless sessions, safe password storage, easy onboarding |
| AI | **Google Gemini API** | Resume analysis for the AI interview coach |

**One-line pitch for an interviewer:**
> "MyDSA is a MERN single-page app. Learning content is **login-gated** on the client and the
> API. After sign-in (email/password or Google), a JWT in an httpOnly cookie (plus Bearer
> fallback) authenticates you; localStorage + a merge-based sync engine keep progress consistent
> across devices. Frontend and API deploy separately on Render with credentialed CORS."

---

## Repository map

```
DSA-OWN/
├── src/                      # React front end
│   ├── pages/                # Route pages (Dashboard, Problems, System Design, …)
│   ├── components/           # Reusable UI (Navbar, Footer, RequireAuth, …)
│   │   └── ui/               # Design-system primitives (Icon, NotesBlock, …)
│   ├── context/              # AuthContext, ThemeProvider, TimerProvider
│   ├── hooks/                # useCloudSync, useDsaStats, useBookmarks, …
│   ├── data/                 # Static content (problems, patterns, interview banks, systemDesign)
│   └── lib/                  # api.js (fetch wrapper), userData.js (merge logic), pdf.js
├── server/                   # Express API
│   └── src/
│       ├── index.js          # App setup: CORS, cookies, rate limiting, routes
│       ├── db.js             # MongoDB connection
│       ├── models/           # Mongoose schemas: User, UserData
│       ├── routes/           # auth.js, data.js, interview.js
│       ├── middleware/       # auth.js (requireAuth)
│       └── utils/            # token.js (JWT + cookie options)
├── public/                   # Static assets (sitemap, robots, images, PDFs)
└── docs/                     # ← you are here
```

---

## Glossary (quick reference)

| Term | One-line meaning |
|------|------------------|
| **SPA** | Single-Page App — one HTML page, JS swaps views without full reloads |
| **JWT** | JSON Web Token — a signed token proving who you are |
| **Session** | A period where the server "remembers" you're logged in |
| **Cookie** | A small key/value the browser stores and sends back automatically |
| **httpOnly** | A cookie JavaScript can't read — protects the token from XSS |
| **CORS** | Rules that let a browser call an API on a different origin |
| **Hashing** | One-way scrambling of a password so it can't be reversed |
| **Middleware** | Code that runs between the request and your route handler |
| **Idempotent** | Doing it twice has the same effect as doing it once |
| **Debounce** | Wait until activity stops before running an expensive action |
| **SPA rewrite** | Static host serves `index.html` for all paths so React Router can handle deep links |
| **RequireAuth** | React route guard that redirects guests to `/login` |
| **Cold start** | Free-tier server sleeps; first request after idle is slow while it wakes |

Continue to **[01-architecture.md »](./01-architecture.md)**
