# 07 · Real Problems We Hit & The Decisions We Made

> Interviewers love "tell me about a bug/decision." These are real ones from building MyDSA,
> written as **Situation → Problem → Options → Decision → Result** so you can retell them.

---

## 1. Progress was trapped in one browser

- **Situation:** Everything lived in `localStorage`, so switching devices/browsers lost all progress.
- **Problem:** Users expect their solved problems, bookmarks, and streaks to follow them.
- **Options:** (a) full accounts with server storage, (b) export/import files, (c) do nothing.
- **Decision:** Add a MERN backend with accounts, but **keep localStorage as the primary store** so
  anonymous users still get a full app (offline-first). Sync on top.
- **Result:** Cross-device sync **without** sacrificing the instant, offline experience.

---

## 2. "Server wins" was deleting people's work

- **Situation:** First sync attempt just pulled the cloud copy and overwrote local.
- **Problem:** Work done offline on a second device got wiped on login.
- **Options:** server-wins, local-wins, timestamped last-write-wins, or **union merge**.
- **Decision:** A **union merge** — OR booleans, max counters, latest timestamps — which is
  **idempotent**.
- **Result:** No progress is ever lost, regardless of which device did what. (See [doc 04](./04-data-storage-and-sync.md).)

---

## 3. The cookie wouldn't stick in production

- **Situation:** Auth worked locally but the login cookie vanished once deployed.
- **Problem:** In prod the frontend and API are different origins → the cookie is **cross-site**.
- **Root causes:** `SameSite=Lax` blocks cross-site cookies; missing `Secure`; CORS not credentialed;
  Express not trusting the TLS-terminating proxy.
- **Decision:** `SameSite=None` + `Secure` in prod (Lax in dev), credentialed CORS with an exact
  `CLIENT_ORIGIN` allow-list, `credentials:'include'` on the client, and `app.set('trust proxy', 1)`.
- **Result:** Cookies flow correctly in both environments. (See [doc 03](./03-cookies-and-sessions.md).)

---

## 4. "Continue with Google" button didn't show up

- **Situation:** Google Sign-In was implemented but the button was invisible.
- **Problem:** Two parts — the frontend needs `VITE_GOOGLE_CLIENT_ID`, and Google Cloud Console must
  list the current origin under **Authorized JavaScript origins**.
- **Decision:** Load the Google Identity script, render only when the client id is present, and
  document the exact Cloud Console origin setup.
- **Result:** One-click Google login with profile picture + account linking by email.

---

## 5. AI coach must not crash the app

- **Situation:** The Gemini API returned 404 (retired model), then 429 (quota).
- **Problem:** A flaky/paid third party can't be allowed to break the page.
- **Decision:** Move to a supported model (`gemini-2.0-flash`), verify the key server-side, add
  specific error messages (quota vs config), and **degrade gracefully** — show the static interview
  banks + a friendly note when AI is unavailable.
- **Result:** The interview section is useful with or without the AI online.

---

## 6. Node version conflict from `pdfjs-dist`

- **Situation:** `pdfjs-dist@4` requires Node ≥ 20, but the server declared `>=18`.
- **Problem:** Environments on Node 18/19 couldn't satisfy both → install/runtime failures.
- **Decision:** Set `engines.node = ">=20"` in **both** root and server `package.json`.
- **Result:** One consistent, documented Node baseline across the project.

---

## 7. Keeping secrets out of the repo

- **Situation:** MongoDB URI, JWT secret, and API keys were needed to run the app.
- **Problem:** Secrets must never be committed.
- **Decision:** All secrets live in **gitignored `.env`** files; `.env.example` documents the keys
  with placeholders; the server reads them via `process.env`.
- **Result:** Safe to open-source; each environment supplies its own secrets.

---

## 8. Big content (puzzles/notes) without bloating the bundle

- **Situation:** Puzzles (with images), interview banks, and notes are large.
- **Problem:** Shipping it all up front hurts initial load.
- **Decision:** Code-split those pages with `React.lazy`, lazy-import `pdfjs-dist` only when parsing,
  and cache fetched markdown in memory.
- **Result:** Small initial bundle; heavy content loads only when visited.

---

## 9. Turning study-material archives into a real feature (without copyright issues)

- **Situation:** Large ZIP archives of placement material were provided — Striver/Babbar sheets,
  handwritten topic notes, cheatsheets, and **1,225 company-wise LeetCode CSVs** for 240+ companies.
- **Problem:** Most PDFs are **third-party copyrighted** works (Striver, Babbar, Aditya Verma, etc.),
  so hosting them inside the app isn't appropriate. But there was real, reusable value in there.
- **Options:** (a) dump every PDF into the app, (b) ignore it all, (c) extract only the
  **factual, non-copyrightable data** and build a feature around it.
- **Decision:** Option (c). Facts (a problem's title, difficulty, public LeetCode URL, acceptance
  rate, topic tags, and how frequently it's asked) aren't copyrightable, so we parsed the company
  CSVs into a lightweight index (`public/companies/index.json`) plus one JSON per company, then built
  a **Companies** feature (`/companies`, `/companies/:slug`) with search, difficulty filter, and
  frequency sort. Per-company data is **lazy-loaded** so the main bundle stays small (~1.2 MB served
  on demand across 241 files).
- **Result:** A genuinely useful "top asked problems per company" browser — like the big platforms —
  without redistributing anyone's copyrighted PDFs. The copyrighted study PDFs are intentionally
  **not** bundled.

**Interview takeaway:** *"I separated copyrightable expression (the PDFs) from uncopyrightable facts
(problem lists/metadata), integrated only the facts, and lazy-loaded the data to protect bundle size."*

---

## Lessons worth stating in an interview

1. **Offline-first is a feature, not an afterthought** — it shaped the whole storage design.
2. **Never lose user data** — when in doubt, merge, and make the merge idempotent.
3. **Environment parity is subtle** — cookies/CORS behave differently across dev and prod; test both.
4. **Isolate third parties** — always have a graceful fallback for external dependencies.
5. **Security by default** — httpOnly cookies, hashing, per-user scoping, secrets in env, rate limits.

---

Back to the **[index »](./README.md)**
