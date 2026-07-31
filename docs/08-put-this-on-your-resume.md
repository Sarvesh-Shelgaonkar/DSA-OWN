# 08 · Put This Project On Your Resume (Beginner-Friendly)

> Brand new to this project? Read this file and you'll be able to **add MyDSA to your resume** and
> **talk about it confidently** — even the parts you didn't write yourself. Every point has a
> plain-English explanation and an example you can say out loud.
>
> ⚠️ **Golden rule: only claim what you actually understand.** This doc teaches you the concepts so
> your claims are honest. Read docs [01](./01-architecture.md)–[07](./07-problems-and-decisions.md)
> once and you'll genuinely understand them.

---

## 1. The 3-line summary (memorize this first)

> **MyDSA** is a full-stack (MERN) DSA + engineering interview platform. Learning content is
> **login-gated** (React `RequireAuth` + Express JWT). Signing in (email/password or Google)
> issues a **JWT in an httpOnly cookie** (Bearer fallback), and a **merge-based sync engine**
> keeps progress consistent across devices via Node/Express + MongoDB. Frontend and API deploy
> as separate Render services.

If you can say those lines and then answer "why?" for each phrase, you're 80% ready.

---

## 2. Ready-to-paste resume bullet points

Pick 3–5 that match the role. Numbers are illustrative — adjust to the truth.

### Full-stack (recommended default)
- Built **MyDSA**, a full-stack **MERN** interview-prep platform (React, Node/Express, MongoDB)
  with **auth-gated** learning content and **cross-device progress sync**.
- Implemented secure authentication using **JWT in httpOnly, SameSite, Secure cookies**, **bcrypt**
  hashing, **Google Sign-In (OAuth)** with account linking, plus a React **`RequireAuth`** route guard.
- Designed a **stateless REST API** with per-user authorization, **rate limiting**, and credentialed
  **CORS**, enabling horizontal scaling without sticky sessions.
- Engineered an **idempotent merge-sync engine** (debounced writes + optimistic UI) that reconciles
  localStorage with MongoDB so **no user progress is ever lost**.
- Deployed a **split architecture on Render** (Static Site + Web Service), including SPA rewrites,
  build-time `VITE_*` vs runtime secrets, and Google OAuth origin configuration.
- Optimized performance with **route-based code splitting (React.lazy)**, lazy loading, and CDN-cached
  static assets.

### Frontend-focused
- Developed a responsive **React SPA** with light/dark theming via CSS-variable design tokens,
  accessible components (ARIA, keyboard nav, focus states), and skeleton loaders to prevent layout shift.
- Managed global state with **React Context + custom hooks** (no heavy state libraries), keeping the
  bundle small and logic testable.
- Integrated a **Monaco-based code playground**, command palette, and client-side PDF parsing
  (`pdfjs-dist`) for an AI interview coach.

### Backend-focused
- Built a **Node/Express REST API** with Mongoose models, **JWT auth middleware**, input allow-listing,
  and graceful degradation for third-party (Google Gemini) failures.
- Modeled data in **MongoDB** with a 1:1 `User`/`UserData` split and indexes on `email`/`googleId`
  for fast, safe lookups.

---

## 3. Skills / keywords to list (ATS-friendly)

**Languages & core:** JavaScript (ES6+), HTML5, CSS3
**Frontend:** React 18, React Router, Vite, Tailwind CSS, Context API, Hooks
**Backend:** Node.js, Express, REST APIs
**Database:** MongoDB, Mongoose, indexing, data modeling
**Auth & security:** JWT, httpOnly cookies, bcrypt, OAuth (Google Sign-In), CORS, rate limiting
**Concepts:** authentication vs authorization, sessions, caching, statelessness, code splitting,
offline-first, system design, accessibility (WCAG), SEO

> Only list a keyword if you can answer *one* follow-up about it. This doc gives you that answer for each.

---

## 4. Every buzzword, explained with an example

Use this table when someone points at a resume word and asks "what's this?"

| Word on your resume | Say this (simple + example) |
|---------------------|------------------------------|
| **MERN** | "MongoDB, Express, React, Node — one JavaScript stack front to back. Example: React shows the dashboard, Express serves `/api/data`, MongoDB stores it." |
| **SPA** | "Single-page app — one HTML file, JavaScript swaps the view. Example: clicking Dashboard → Problems doesn't reload the page." |
| **JWT** | "A signed token that proves who you are. Example: after login the server signs `{uid}` and the browser sends it back on every request." |
| **httpOnly cookie** | "A cookie JavaScript can't read, so XSS can't steal the token. Example: our `mydsa_token` cookie." |
| **bcrypt** | "One-way password hashing with salt. Example: `bcrypt.hash(password, 12)` — even a DB leak can't reveal passwords." |
| **OAuth / Google Sign-In** | "Let Google verify identity. Example: Google returns a signed token; our server verifies it before logging you in." |
| **Authentication vs Authorization** | "AuthN = who you are (verify JWT). AuthZ = what you can touch (every query filtered by your user id)." |
| **Stateless API** | "Server keeps no memory of you between requests. Example: any server instance can verify your JWT, so we can add more servers freely." |
| **CORS** | "Rules letting the browser call an API on another domain. Example: we allow our frontend origin + `credentials`." |
| **Optimistic UI** | "Update the screen first, sync later. Example: marking a problem solved feels instant." |
| **Debounce** | "Wait for a pause before doing expensive work. Example: sync waits ~1s of quiet before saving." |
| **Idempotent** | "Doing it twice = same result. Example: re-running the sync merge never double-counts." |
| **Code splitting** | "Load page code only when visited. Example: `React.lazy` for the Puzzles page." |
| **Offline-first** | "App works without internet using localStorage; accounts just add sync." |

---

## 5. Mock interview — questions + example answers

**Q: Walk me through what happens when a user logs in.**
> "The browser POSTs email/password to `/api/auth/login`. The server finds the user, uses
> `bcrypt.compare` to check the password, then signs a JWT and sends it back in an httpOnly cookie.
> After that, the browser automatically attaches that cookie to every request, so the server knows
> who I am without storing a session in memory." *(Diagram in [doc 02](./02-authentication-and-authorization.md).)*

**Q: How do you keep the user logged in?**
> "The JWT lives in a cookie with a 30-day expiry. On each request, middleware verifies the token and
> sets `req.userId`. No server-side session store is needed."

**Q: Why store data in two places (localStorage + MongoDB)?**
> "Offline-first UX. localStorage makes the app instant and usable logged-out. MongoDB is the durable
> source of truth so progress follows you across devices. A sync engine merges the two."

**Q: What was the hardest part?**
> Use STAR (below).

---

## 6. STAR stories you can retell (safe, true, structured)

**S**ituation → **T**ask → **A**ction → **R**esult. These come from [doc 07](./07-problems-and-decisions.md).

**Story 1 — No data loss across devices**
> - **S:** Progress lived only in one browser; users lost it on other devices.
> - **T:** Add accounts + sync without breaking the offline experience.
> - **A:** Kept localStorage primary, added a MongoDB backend, and built an **idempotent union-merge**
>   (OR booleans, max counters, latest timestamps) that runs on login and debounced afterward.
> - **R:** Cross-device sync with **zero progress loss**, and the app still works fully offline.

**Story 2 — Cookies broke in production**
> - **S:** Login worked locally but the cookie vanished after deploying.
> - **T:** Make cookies work when frontend and API are on different domains.
> - **A:** Switched to `SameSite=None` + `Secure` in prod (Lax in dev), enabled credentialed CORS with
>   an exact origin allow-list, and set `trust proxy` for HTTPS behind the host's proxy.
> - **R:** Reliable auth in both dev and prod; learned how cross-site cookies really work.

---

## 7. A worked example: reading the code yourself

To *prove* you understand it, be able to open these files and explain 2 lines each:

| File | What to point at |
|------|------------------|
| `server/src/utils/token.js` | `signToken` (makes the JWT) + `cookieOptions` (how it's stored) |
| `server/src/middleware/auth.js` | `requireAuth` verifies the token and sets `req.userId` |
| `server/src/routes/auth.js` | `bcrypt.hash` on signup, `bcrypt.compare` on login |
| `src/hooks/useCloudSync.js` | pull → merge → push, then debounced saves |
| `src/lib/userData.js` | the actual merge rules |

**Try it:** open `token.js`, and in your own words explain *why* `httpOnly: true` matters. If you can,
you've earned the resume bullet.

---

## 8. Honesty checklist before you submit

- [ ] I can explain **every** keyword on my resume with one example.
- [ ] I can draw the **login flow** on a whiteboard.
- [ ] I can explain **authN vs authZ** in one sentence.
- [ ] I know **why** the JWT is in a cookie (not localStorage).
- [ ] I can describe the **sync merge** and why it never loses data.
- [ ] My bullet-point numbers are honest.

If all boxes are checked, you can confidently put MyDSA on your resume and defend it in an interview.

---

Back to the **[index »](./README.md)**
