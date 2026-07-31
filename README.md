# MyDSA

Full-stack **MERN** learning platform for DSA, system design, and software-engineering interview prep.

**Live:** [https://learn-dsa-201425.onrender.com](https://learn-dsa-201425.onrender.com)  
**API:** [https://mydsa-api-sarvesh.onrender.com](https://mydsa-api-sarvesh.onrender.com)

> Built & owned by [Sarvesh Shelgaonkar](https://github.com/Sarvesh-Shelgaonkar).  
> Interview-ready deep dive: [`docs/`](./docs/README.md)

---

## What it is

MyDSA turns scattered interview prep into one signed-in workspace:

- Curated **DSA problems**, roadmap, patterns, sheets, company sets
- **Engineering hub** — DSA library, system design, AI engineering, DevOps, revision
- **Interview banks** + optional **Gemini AI** resume coach
- **Accounts** (email/password + Google) with **cross-device progress sync**

**Auth-gated:** Home / Login / Signup are public. All learning content opens **only after sign-in**.

---

## Tech stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind, React Router |
| Auth (client) | `RequireAuth` route guard, JWT in localStorage + cookie |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB Atlas (`User` + `UserData`) |
| Auth (server) | JWT (httpOnly cookie + Bearer), bcrypt, Google Identity |
| Deploy | Render Static Site + Render Web Service |

---

## Features

- Email/password signup & login, Google Sign-In, account linking
- JWT session (`httpOnly` cookie + Bearer fallback)
- Progress, bookmarks, revision — **localStorage + MongoDB merge sync**
- Engineering tracks (DSA / HLD-LLD / AI / DevOps)
- Filters, dashboard stats, streaks, code playground
- Rate-limited API, credentialed CORS, SPA rewrite for deep links

---

## Quick start (local)

### 1. Clone & install

```bash
git clone https://github.com/Sarvesh-Shelgaonkar/DSA-OWN.git
cd DSA-OWN
npm install
cd server && npm install && cd ..
```

### 2. Environment files

**Root `.env`** (from `.env.example`):

```env
VITE_GOOGLE_CLIENT_ID=your-oauth-client-id.apps.googleusercontent.com
# VITE_API_URL=   # leave empty locally — Vite proxies /api → :4000
```

**`server/.env`** (from `server/.env.example`):

```env
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb+srv://.../mydsa?retryWrites=true&w=majority
JWT_SECRET=long-random-secret
CLIENT_ORIGIN=http://localhost:5173,http://localhost:5174,http://localhost:5175
GOOGLE_CLIENT_ID=same-as-vite-client-id
# GEMINI_API_KEY=   # optional
```

Never commit real `.env` files (they are gitignored).

### 3. Run

```bash
# Terminal 1 — API
cd server && npm run dev

# Terminal 2 — frontend
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

---

## Deploy on Render (two services)

You need **both** a Static Site (frontend) and a Web Service (API).

### A) API — Web Service

| Setting | Value |
|---------|--------|
| Root Directory | `server` |
| Build | `npm install` |
| Start | `npm start` |

Env: `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV=production`, `CLIENT_ORIGIN=https://your-frontend.onrender.com`, `GOOGLE_CLIENT_ID`

### B) Frontend — Static Site

| Setting | Value |
|---------|--------|
| Root Directory | *(blank)* |
| Build | `npm install && npm run build` |
| Publish | `dist` |

Env: `VITE_API_URL=https://your-api.onrender.com/api`, `VITE_GOOGLE_CLIENT_ID=...`

**Redirects/Rewrites (SPA):** `/*` → `/index.html` (**Rewrite**)  
so `/login`, `/engineering`, etc. don’t 404 on refresh.

**Google Cloud Console** → OAuth client → Authorized JavaScript origins:

- `http://localhost:5173`
- `https://your-frontend.onrender.com`

---

## Project structure

```text
DSA-OWN/
├── src/                 # React SPA
│   ├── pages/           # Routes (Home, Dashboard, Engineering, …)
│   ├── components/      # UI + RequireAuth, Navbar, Footer
│   ├── context/         # Auth, Theme, Timer
│   ├── hooks/           # useCloudSync, useDsaStats, …
│   ├── data/            # Problems, roadmap, interview banks
│   └── lib/             # api.js, merge helpers
├── server/              # Express API
│   └── src/
│       ├── routes/      # auth, data, interview
│       ├── models/      # User, UserData
│       ├── middleware/  # requireAuth
│       └── utils/       # JWT + cookie options
├── public/              # Static assets + Engineering content JSON
├── docs/                # Architecture + interview Q&A (read this)
├── .env.example
└── server/.env.example
```

---

## Auth model (short)

| Concern | How |
|---------|-----|
| Who are you? | Signup/login/Google → signed JWT |
| Session | Cookie `mydsa_token` (httpOnly) + optional Bearer in `localStorage` |
| What can you do? | `requireAuth` + every DB query scoped to `req.userId` |
| Frontend gate | `RequireAuth` wraps all routes except `/`, `/login`, `/signup` |
| Sync | Pull → union-merge with localStorage → push |

Deep explanations + interview answers: **[`docs/`](./docs/README.md)**

---

## Docs map (interview prep)

| Doc | Topic |
|-----|--------|
| [docs/README.md](./docs/README.md) | Overview & glossary |
| [01-architecture.md](./docs/01-architecture.md) | System design of MyDSA |
| [02-authentication-and-authorization.md](./docs/02-authentication-and-authorization.md) | AuthN / AuthZ |
| [03-cookies-and-sessions.md](./docs/03-cookies-and-sessions.md) | Cookies, SameSite, CORS |
| [04-data-storage-and-sync.md](./docs/04-data-storage-and-sync.md) | MongoDB + merge engine |
| [05-system-design-concepts.md](./docs/05-system-design-concepts.md) | Scaling & trade-offs |
| [06-interview-qa.md](./docs/06-interview-qa.md) | Rapid-fire Q&A |
| [07-problems-and-decisions.md](./docs/07-problems-and-decisions.md) | Real bugs & decisions |
| [08-put-this-on-your-resume.md](./docs/08-put-this-on-your-resume.md) | Resume bullets |
| [09-deployment-and-env.md](./docs/09-deployment-and-env.md) | Render, env vars, SPA rewrites |

---

## License

See [`LICENSE`](./LICENSE).

---

**Made by Sarvesh Shelgaonkar** — read the docs, then defend every line in an interview.
