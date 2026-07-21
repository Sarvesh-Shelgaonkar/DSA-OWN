# 06 · Interview Q&A — Rapid Fire

> A consolidated question bank you can rehearse. Answers are short enough to *say out loud*.
> Grouped by theme. Use this as flash-cards before an interview.

---

## A. Project & Architecture

**Q: Describe your project in 30 seconds.**
> MyDSA is a MERN single-page app for learning DSA — roadmap, curated problems, patterns, puzzles,
> an AI resume/interview coach, and system-design notes. It's offline-first with localStorage, adds
> accounts via JWT-in-httpOnly-cookie (email/password + Google), and syncs progress across devices
> with a merge engine so nothing is ever lost.

**Q: Why a SPA and not server-rendered pages?**
> The app is highly interactive (editors, filters, dashboards) and works offline; a client-rendered
> SPA fits that. The trade-off is SEO/first paint, which we address with meta tags, a sitemap, and
> code-splitting.

**Q: Why decouple frontend and backend?**
> The front end is a static bundle on a CDN (cheap, fast, cacheable); the API is a stateless service
> that scales independently. They can be deployed, scaled, and reasoned about separately.

**Q: How do you keep the app fast?**
> Route-based code splitting (`React.lazy`), lazy PDF parsing, optimistic UI, debounced sync,
> in-memory caches for fetched notes, and CDN-cached static assets.

---

## B. Authentication & Authorization

**Q: Authentication vs authorization?**
> Authentication = *who you are* (verify the JWT). Authorization = *what you can do* (every DB query
> is scoped to the verified `userId`).

**Q: Why JWT over server sessions?**
> Stateless — any API instance verifies the token with a shared secret, so we scale horizontally
> without a shared session store or sticky sessions.

**Q: Biggest JWT downside?**
> Can't revoke before expiry. Mitigations: short-lived tokens + refresh tokens, or a Redis blocklist.
> We currently clear the cookie on logout and use a 30-day expiry.

**Q: How do you store passwords?**
> Never in plain text — `bcrypt` with a per-password salt and 12 work-factor rounds; slow by design
> to resist brute force.

**Q: How does Google Sign-In stay secure?**
> The server verifies Google's signed ID token with `verifyIdToken`, checking signature, issuer, and
> that the audience equals our own Client ID. The browser is never trusted to assert identity.

**Q: What stops one user reading another's data?**
> Every query filters by `req.userId` from the verified token, and `UserData.user` is unique — no
> way to reference another user's document (prevents IDOR).

**Q: How do you avoid user enumeration?**
> Login returns the same "invalid email or password" for both wrong email and wrong password.

---

## C. Cookies & Sessions

**Q: Why an httpOnly cookie instead of localStorage for the token?**
> httpOnly cookies are invisible to JavaScript, so an XSS bug can't steal the token. localStorage is
> readable by any script.

**Q: What is SameSite and why does it change in production?**
> SameSite controls whether the cookie is sent cross-site (CSRF defense). In dev the API is
> same-origin via Vite's proxy, so `Lax` works. In prod the API is a different host, so we need
> `None` + `Secure` (HTTPS) for the cookie to be sent.

**Q: What CORS settings are required for cookies?**
> `credentials: true` on the server, a specific origin (not `*`), and `credentials: 'include'` on
> the client fetch.

**Q: Why `trust proxy`?**
> Behind a hosting proxy that terminates TLS, Express must trust `X-Forwarded-Proto` to know the
> request is HTTPS; otherwise it won't send a `Secure` cookie.

**Q: How does logout work?**
> Clear the cookie using the *same* attributes it was set with, so the browser matches and deletes it.

---

## D. Database & Data Modeling

**Q: Why MongoDB?**
> Progress is nested JSON keyed by problem id — a document store maps to it 1:1 with no joins.

**Q: Why separate `User` and `UserData`?**
> Identity is small and security-sensitive (read on every auth check); progress is larger and written
> often. Splitting keeps auth lean and isolates credentials from frequent writes.

**Q: Why store progress as objects/maps instead of arrays?**
> O(1) lookup/update by problem id and clean key-by-key merging during sync.

**Q: What indexes and why?**
> `email` (login lookups), `googleId` (Google linking), unique `user` on UserData (one doc per user +
> fast fetch). Indexes turn scans into log-time lookups.

**Q: How do you validate writes?**
> The `PUT /api/data` handler only accepts a fixed field allow-list and type-checks each — the client
> owns the shape but can't inject arbitrary fields.

---

## E. Sync & Consistency

**Q: How does cross-device sync work?**
> On login: pull cloud, **merge** with local (union of solved/bookmarks, max of counters, latest
> timestamps), write back both ways. While active: debounced push. On tab close: keepalive flush.

**Q: Why merge instead of overwrite?**
> Overwriting would lose work done on the other device. A union merge keeps everything and is
> **idempotent**, so repeated syncs are safe.

**Q: How do you avoid spamming the API?**
> Poll for changes every 2.5s, debounce 1s of quiet before pushing, and skip the push entirely if a
> snapshot shows nothing changed.

---

## F. System Design

**Q: How would you scale this to millions of users?**
> Static front end on a multi-region CDN; stateless API pool behind a load balancer; MongoDB replica
> set (+ sharding if needed); Redis for hot reads and a token blocklist; a message queue + workers for
> slow AI calls; metrics/logging/tracing for observability.

**Q: Where's the single point of failure and how do you remove it?**
> Any single API box or single DB node. Fix: multiple API instances + DB replica set with failover.
> Third-party (Gemini) is isolated with graceful degradation.

**Q: What's your caching strategy and its risk?**
> CDN + hashed filenames for static assets, in-memory cache for notes, Redis for hot data. Risk is
> staleness, so user-mutable data uses short/no TTL while static content is cached hard.

**Q: How do you protect a paid third-party API?**
> Rate limiting (20/15min), server-side calls only (key never reaches the browser), and graceful
> fallback when quota/key is unavailable.

---

## G. Frontend Engineering

**Q: How do you manage global state without Redux?**
> React Context for the few truly global things (auth, theme, timer) and custom hooks for feature
> logic. Keeps the bundle small and the code simple.

**Q: How do you handle theming (light/dark)?**
> CSS variables as semantic design tokens toggled by a class on the root; components reference tokens,
> not hard-coded colors, so both themes stay consistent.

**Q: How do you handle loading/error/empty states?**
> Skeleton loaders (with reserved height to avoid layout shift), explicit error messages with retry,
> and meaningful empty states instead of blank screens.

**Q: Accessibility measures?**
> Semantic HTML, keyboard navigation, visible focus rings, ARIA on menus/dialogs/tabs, sufficient
> contrast, and reduced-motion support.

---

## H. "Tell me about a hard problem you solved"

Pick any from [07-problems-and-decisions.md](./07-problems-and-decisions.md) — e.g. the
**cross-device merge** (avoiding data loss) or the **cookie SameSite/CORS** puzzle across dev vs
prod. Structure the answer as **Situation → Problem → Options → Decision → Result**.

Continue to **[07-problems-and-decisions.md »](./07-problems-and-decisions.md)**
