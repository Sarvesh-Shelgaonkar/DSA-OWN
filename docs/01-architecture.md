# 01 · Architecture

> How all the pieces fit together, in plain words + interview-level detail.

---

## 1. The 30-second mental model

MyDSA has **three moving parts**:

1. **The browser (React SPA)** — everything you see. It can run *fully offline* using the browser's `localStorage`.
2. **The API (Node + Express)** — a small REST server that handles login and saving your data.
3. **The database (MongoDB)** — where a signed-in user's data lives so it survives across devices.

**In simple words:** the website works on its own; the server is only needed when you want an
**account** and **sync across devices**.

```mermaid
flowchart LR
    U[User's Browser<br/>React SPA] -->|static files| CDN[Static Host / CDN]
    U -->|/api requests<br/>with cookie| API[Express API]
    API --> DB[(MongoDB)]
    API -->|resume text| GEM[Google Gemini API]
    U -->|Google ID token| GIS[Google Identity Services]

    subgraph Client
      U
    end
    subgraph Server
      API
      DB
    end
```

---

## 2. Why this architecture? (interview answer)

> "I chose a **decoupled SPA + REST API**. The front end is a static bundle that can be served
> from any CDN, so it's cheap and fast globally. The API is stateless — it keeps no session in
> memory — which means I can run multiple copies behind a load balancer without sticky sessions.
> State lives in two tiers: **localStorage** for instant, offline-first UX, and **MongoDB** as the
> durable source of truth for logged-in users."

**Key properties:**
- **Offline-first** — core features never depend on the network.
- **Stateless API** — horizontally scalable (no server memory of sessions).
- **Progressive enhancement** — accounts add sync on top of a fully working anonymous app.

---

## 3. Request lifecycle (what happens on a click)

### 3a. Loading a page (e.g. `/problems`)

```mermaid
sequenceDiagram
    participant B as Browser
    participant H as Static Host
    B->>H: GET /problems
    H-->>B: index.html + JS bundle (SPA fallback)
    B->>B: React Router renders <ProblemsPage/>
    B->>B: hooks read localStorage (solved, bookmarks…)
    Note over B: No server call needed for anonymous users
```

Because it's an SPA, the server returns the **same `index.html`** for any route; React Router then
renders the correct page on the client. That's why the sitemap lists real URLs but they all resolve
to one HTML file.

### 3b. A logged-in action (e.g. mark a problem solved)

```mermaid
sequenceDiagram
    participant B as Browser
    participant API as Express API
    participant DB as MongoDB
    B->>B: update localStorage instantly (optimistic UI)
    B->>API: PUT /api/data (cookie sent automatically)
    API->>API: requireAuth verifies JWT from cookie
    API->>DB: upsert UserData for this user
    DB-->>API: saved document
    API-->>B: 200 { data }
```

**Interview point — optimistic UI:** we update the screen *first*, then sync in the background
(debounced). The user never waits on the network. If the request fails, the next sync retries.

---

## 4. Layers of the front end

```mermaid
flowchart TD
    Pages[Pages<br/>route-level screens] --> Components[Reusable Components]
    Components --> UI[UI primitives<br/>Icon, NotesBlock, cards]
    Pages --> Hooks[Custom Hooks<br/>useDsaStats, useBookmarks, useCloudSync]
    Hooks --> Lib[lib/<br/>api.js, userData.js]
    Pages --> Context[Context<br/>Auth, Theme, Timer]
    Lib --> API[(Express API)]
```

- **Pages** = screens tied to a route (`/dashboard`, `/system-design`, …).
- **Components** = reusable building blocks (Navbar, cards, tables).
- **Hooks** = the *logic* (reading stats, syncing) kept separate from the *view*.
- **Context** = truly global state (who's logged in, current theme).
- **lib/** = plumbing (the `fetch` wrapper, the merge algorithm).

**Why separate hooks from components? (interview)**
> "Keeping business logic in hooks makes components dumb and reusable, makes the logic unit-testable
> in isolation, and avoids duplicating the same `localStorage` reads across pages."

---

## 5. Performance decisions

| Technique | What it does | Where |
|-----------|--------------|-------|
| **Code splitting** (`React.lazy`) | Secondary pages load on demand → smaller initial bundle | `App.jsx` |
| **Route-based chunks** | Heavy pages (Puzzles, PDF) are separate JS files | build output |
| **Debounced sync** | Batches writes so we don't spam the API | `useCloudSync` |
| **Optimistic UI** | Instant feedback, network in background | progress hooks |
| **CDN-friendly static build** | Cacheable assets, fast global loads | Vite build |
| **Lazy PDF parsing** | `pdfjs-dist` imported only when needed | `lib/pdf.js` |

**Core Web Vitals framing:** code-splitting improves **LCP** (less JS to parse up front),
reserved skeleton heights prevent **CLS** (layout shift), and debouncing keeps the main thread free
for good **INP** (interaction responsiveness).

---

## 6. Where to look in the code

| To understand… | Read… |
|----------------|-------|
| App routes & lazy loading | `src/App.jsx` |
| API setup (CORS, cookies, rate limit) | `server/src/index.js` |
| Auth endpoints | `server/src/routes/auth.js` |
| Data sync endpoints | `server/src/routes/data.js` |
| The sync engine | `src/hooks/useCloudSync.js`, `src/lib/userData.js` |
| JWT & cookie config | `server/src/utils/token.js` |

Continue to **[02-authentication-and-authorization.md »](./02-authentication-and-authorization.md)**
