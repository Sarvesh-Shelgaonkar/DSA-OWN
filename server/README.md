# MyDSA API

Express + MongoDB backend that adds **accounts** and **cross-device sync** to MyDSA.
The frontend still works fully **without** this server (anonymous mode, localStorage);
the API only kicks in once a user signs up or logs in.

## Endpoints

| Method | Path               | Auth | Purpose                                   |
| ------ | ------------------ | ---- | ----------------------------------------- |
| GET    | `/api/health`      | –    | Health check                              |
| POST   | `/api/auth/signup` | –    | Create account (name, email, password)    |
| POST   | `/api/auth/login`  | –    | Sign in                                   |
| POST   | `/api/auth/logout` | –    | Clear the session cookie                  |
| GET    | `/api/auth/me`     | ✅   | Current user                              |
| GET    | `/api/data`        | ✅   | Fetch the user's synced data              |
| PUT    | `/api/data`        | ✅   | Replace the user's synced data (merged)   |
| POST   | `/api/interview/analyze` | – | AI resume analysis (needs `GEMINI_API_KEY`) |

Auth uses a signed JWT stored in an **httpOnly** cookie. Passwords are hashed with bcrypt.

## AI Resume Interview Coach (optional)

The `/interview` page can analyse an uploaded resume with **Google Gemini** and return
tailored interview questions. To enable it:

1. Get a **free** API key at <https://aistudio.google.com/app/apikey>.
2. Add `GEMINI_API_KEY=<your key>` to `server/.env` (and to Render's env vars in production).

If the key is missing, the endpoint returns `503` and the frontend gracefully falls back
to the built-in static question banks — so the feature never breaks the app.

## 1. Create a free MongoDB database (Atlas)

1. Sign up at <https://www.mongodb.com/cloud/atlas> and create a **free M0 cluster**.
2. **Database Access** → add a database user (username + password).
3. **Network Access** → add IP `0.0.0.0/0` (allow from anywhere) so Render can connect.
4. **Database → Connect → Drivers** → copy the connection string. It looks like:
   `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/mydsa?retryWrites=true&w=majority`
   (add `/mydsa` before the `?` to name the database).

## 2. Run locally

```bash
cd server
cp .env.example .env      # then fill in MONGODB_URI + JWT_SECRET
npm install
npm run dev               # starts on http://localhost:4000
```

Generate a strong secret: `openssl rand -hex 32`.

In another terminal, start the frontend from the repo root (`npm run dev`). Vite
proxies `/api` → `http://localhost:4000`, so login/sync just work in dev.

## 3. Deploy on Render

**API (new Web Service):**

- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables:
  - `MONGODB_URI` = your Atlas string
  - `JWT_SECRET` = a long random string
  - `NODE_ENV` = `production`
  - `CLIENT_ORIGIN` = your frontend URL, e.g. `https://dsa-own.onrender.com`
  - `GEMINI_API_KEY` = your free Gemini key (optional — enables the AI resume coach)

**Frontend (existing static site):**

- Add env var `VITE_API_URL` = `https://<your-api>.onrender.com/api` and redeploy.

Because the frontend and API are on different hosts, the auth cookie is set with
`SameSite=None; Secure` in production (handled automatically). Make sure both are
served over HTTPS (Render does this by default).

## Data model

- `User` — name, email, passwordHash, avatar
- `UserData` (1 per user) — `progress`, `bookmarks`, `revision`, `timers`,
  `puzzlesReviewed`, `username`

On login the client **merges** any anonymous localStorage data into the account,
so nothing solved before signing up is lost.
