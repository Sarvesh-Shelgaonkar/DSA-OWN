Title: TicketWise – Backend Concepts Deep Dive

Source: https://reliable-babka-9cbcbc.netlify.app/

---

[1. Event-Driven Architecture](https://reliable-babka-9cbcbc.netlify.app/#c1)
[2. Background Job Processing](https://reliable-babka-9cbcbc.netlify.app/#c2)
[3. Horizontal vs Vertical Scaling](https://reliable-babka-9cbcbc.netlify.app/#c11)
[4. Load Balancing](https://reliable-babka-9cbcbc.netlify.app/#c12)
[5. Monolith vs Microservices](https://reliable-babka-9cbcbc.netlify.app/#c22)
[6. Serverless Architecture](https://reliable-babka-9cbcbc.netlify.app/#c23)
[7. API Gateway](https://reliable-babka-9cbcbc.netlify.app/#c21)
[8. Reverse Proxy](https://reliable-babka-9cbcbc.netlify.app/#c30)
[9. Atomic Operations](https://reliable-babka-9cbcbc.netlify.app/#c5)
[10. Race Conditions](https://reliable-babka-9cbcbc.netlify.app/#c6)
[11. Transactions](https://reliable-babka-9cbcbc.netlify.app/#c7)
[12. Optimistic Locking](https://reliable-babka-9cbcbc.netlify.app/#c19)
[13. Pessimistic Locking](https://reliable-babka-9cbcbc.netlify.app/#c20)
[14. Database Indexing](https://reliable-babka-9cbcbc.netlify.app/#c8)
[15. Caching](https://reliable-babka-9cbcbc.netlify.app/#c9)
[16. Connection Pooling](https://reliable-babka-9cbcbc.netlify.app/#c10)
[17. Sharding](https://reliable-babka-9cbcbc.netlify.app/#c28)
[18. Replication](https://reliable-babka-9cbcbc.netlify.app/#c29)
[19. Queue Systems](https://reliable-babka-9cbcbc.netlify.app/#c15)
[20. Dead Letter Queue](https://reliable-babka-9cbcbc.netlify.app/#c16)
[21. Retry Mechanism](https://reliable-babka-9cbcbc.netlify.app/#c17)
[22. Exponential Backoff](https://reliable-babka-9cbcbc.netlify.app/#c18)
[23. Pub/Sub Architecture](https://reliable-babka-9cbcbc.netlify.app/#c46)
[24. Message Broker](https://reliable-babka-9cbcbc.netlify.app/#c47)
[25. Rate Limiting](https://reliable-babka-9cbcbc.netlify.app/#c3)
[26. Debouncing vs Throttling](https://reliable-babka-9cbcbc.netlify.app/#c4)
[27. Stateless vs Stateful](https://reliable-babka-9cbcbc.netlify.app/#c13)
[28. Webhooks](https://reliable-babka-9cbcbc.netlify.app/#c14)
[29. REST API Principles](https://reliable-babka-9cbcbc.netlify.app/#c38)
[30. API Validation](https://reliable-babka-9cbcbc.netlify.app/#c39)
[31. API Versioning](https://reliable-babka-9cbcbc.netlify.app/#c50)
[32. Auth vs Authorization](https://reliable-babka-9cbcbc.netlify.app/#c34)
[33. OAuth](https://reliable-babka-9cbcbc.netlify.app/#c35)
[34. RBAC](https://reliable-babka-9cbcbc.netlify.app/#c36)
[35. Middleware](https://reliable-babka-9cbcbc.netlify.app/#c37)
[36. Password Storage](https://reliable-babka-9cbcbc.netlify.app/#c40)
[37. XSS](https://reliable-babka-9cbcbc.netlify.app/#c41)
[38. CSRF](https://reliable-babka-9cbcbc.netlify.app/#c42)
[39. SQL Injection](https://reliable-babka-9cbcbc.netlify.app/#c43)
[40. Idempotency](https://reliable-babka-9cbcbc.netlify.app/#c25)
[41. Memory Leak](https://reliable-babka-9cbcbc.netlify.app/#c44)
[42. Worker Threads](https://reliable-babka-9cbcbc.netlify.app/#c45)
[43. Cold Start](https://reliable-babka-9cbcbc.netlify.app/#c24)
[44. CI/CD](https://reliable-babka-9cbcbc.netlify.app/#c31)
[45. Observability](https://reliable-babka-9cbcbc.netlify.app/#c32)
[46. Structured Logging](https://reliable-babka-9cbcbc.netlify.app/#c33)
[47. Eventual Consistency](https://reliable-babka-9cbcbc.netlify.app/#c26)
[48. CAP Theorem](https://reliable-babka-9cbcbc.netlify.app/#c27)
[49. Distributed Systems](https://reliable-babka-9cbcbc.netlify.app/#c48)
[50. Consistency vs Availability](https://reliable-babka-9cbcbc.netlify.app/#c49)

Every backend concept you need for interviews — explained with depth, diagrams, code, and real TicketWise examples. No other doc needed.
In a traditional architecture, when Service A wants to notify Service B, it directly calls Service B — tight coupling. If B is down, A fails. In event-driven architecture, A emits an event to a bus/queue, and any number of subscribers pick it up asynchronously.

## Why Event-Driven?
You save the ticket to MongoDB, then emit the event. What if the server crashes between these two steps? Ticket exists in DB but no event fires — it'll be stuck in "NEW" forever. Fix: A reconciliation cron job that re-emits events for tickets stuck in "NEW" for more than 5 minutes.
Calling a third-party AI API synchronously inside an Express route is dangerous. It blocks the HTTP response cycle. If Gemini takes 10 seconds, the user waits 10 seconds — or the request times out at 30s, leaving the ticket in a broken state.
By using Inngest, the Express route returns 201 Created instantly. The heavy lifting (AI analysis, DB update, email) happens in a background function with built-in retries. If Gemini fails, Inngest retries with exponential backoff — without the user ever knowing.
The request-response cycle must be fast (ideally under 200ms). Any task that's slow — AI calls, sending emails, generating PDFs, processing images — must be moved off this cycle into a background worker.

## The TicketWise onTicketCreated Function (Inngest)
```
// This runs OUTSIDE the Express request cycle // It's triggered by the "ticket/created" event inngest.createFunction( { id: "on-ticket-created", retries: 3 }, { event: "ticket/created" }, async ({ event, step }) => { // Step 1: AI Analysis (retried independently if it fails) const aiResult = await step.run("analyze-ticket", async () => { return await analyzeWithGemini(event.data.ticket); }); // Step 2: Update DB with AI results await step.run("update-ticket", async () => { await Ticket.findByIdAndUpdate(event.data.ticketId, { priority: aiResult.priority, relatedSkills: aiResult.skills, status: "IN_PROGRESS" }); }); // Step 3: Find best moderator (atomic assignment) const moderator = await step.run("assign-moderator", async () => { return await findBestModerator(aiResult.skills); }); // Step 4: Send email (retried independently if SMTP fails) await step.run("send-email", async () => { await sendEmail(moderator.email, event.data.ticket); }); } );
```


```
// This runs OUTSIDE the Express request cycle // It's triggered by the "ticket/created" event inngest.createFunction( { id: "on-ticket-created", retries: 3 }, { event: "ticket/created" }, async ({ event, step }) => { // Step 1: AI Analysis (retried independently if it fails) const aiResult = await step.run("analyze-ticket", async () => { return await analyzeWithGemini(event.data.ticket); }); // Step 2: Update DB with AI results await step.run("update-ticket", async () => { await Ticket.findByIdAndUpdate(event.data.ticketId, { priority: aiResult.priority, relatedSkills: aiResult.skills, status: "IN_PROGRESS" }); }); // Step 3: Find best moderator (atomic assignment) const moderator = await step.run("assign-moderator", async () => { return await findBestModerator(aiResult.skills); }); // Step 4: Send email (retried independently if SMTP fails) await step.run("send-email", async () => { await sendEmail(moderator.email, event.data.ticket); }); } );
```

Each step.run() is independently retried. If the email step fails (SMTP down), only that step retries — the AI analysis and DB update are NOT re-run. This is called durable execution. Without this, you'd re-call Gemini every time an email fails!

```
step.run()
```

Rate limiting is a server-side control that limits how many requests a specific client (identified by IP, user ID, or API key) can make within a time window. Without it, a single bad actor can flood your server with thousands of requests, taking it down for everyone.

```
const rateLimit = require('express-rate-limit'); // Login rate limiter — strict (prevent brute force) const loginLimiter = rateLimit({ windowMs: 60 * 1000, // 1 minute window max: 5, // 5 attempts per IP per minute message: { error: 'Too many login attempts. Try again in 1 minute.' }, standardHeaders: true, // Returns RateLimit-* headers legacyHeaders: false }); // General API limiter — lenient const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, // 15 minutes max: 100 // 100 requests per 15 min }); app.post('/api/auth/login', loginLimiter, authController.login); app.use('/api', apiLimiter);
```


```
const rateLimit = require('express-rate-limit'); // Login rate limiter — strict (prevent brute force) const loginLimiter = rateLimit({ windowMs: 60 * 1000, // 1 minute window max: 5, // 5 attempts per IP per minute message: { error: 'Too many login attempts. Try again in 1 minute.' }, standardHeaders: true, // Returns RateLimit-* headers legacyHeaders: false }); // General API limiter — lenient const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, // 15 minutes max: 100 // 100 requests per 15 min }); app.post('/api/auth/login', loginLimiter, authController.login); app.use('/api', apiLimiter);
```

In-memory rate limiting doesn't work across multiple server instances. If you have 3 servers, each one has its own counter — a client can make 5 requests to each, totalling 15. Use Redis as a shared store so all instances share the same counter. Use rate-limiter-flexible with a Redis client.

```
rate-limiter-flexible
```


```
// DEBOUNCE — waits 300ms of silence before executing function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; } // THROTTLE — executes at most once per 300ms function throttle(fn, limit) { let inThrottle = false; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; } // Usage const searchTickets = debounce(fetchFromDB, 300); searchInput.addEventListener('input', (e) => searchTickets(e.target.value));
```


```
// DEBOUNCE — waits 300ms of silence before executing function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; } // THROTTLE — executes at most once per 300ms function throttle(fn, limit) { let inThrottle = false; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; } // Usage const searchTickets = debounce(fetchFromDB, 300); searchInput.addEventListener('input', (e) => searchTickets(e.target.value));
```

An atomic operation is one that, from the outside world, appears to happen instantaneously. No other process can see an intermediate state. This is crucial when multiple workers are competing to do the same thing.
Worker 1 queries: "Find unassigned ticket" → gets Ticket #42. Worker 2 queries: "Find unassigned ticket" → also gets Ticket #42. Worker 1 assigns to moderator_A. Worker 2 assigns to moderator_B. Both succeed. Ticket #42 is now assigned to two moderators. This is a race condition.

## The Fix: Atomic findOneAndUpdate
```
// WRONG — two separate operations (not atomic) const ticket = await Ticket.findById(ticketId); if (!ticket.assignedTo) { // Race condition window here! ticket.assignedTo = moderatorId; // Another worker can assign between these await ticket.save(); } // CORRECT — single atomic operation // The filter { assignedTo: null } is checked AND the update happens in one DB operation const updatedTicket = await Ticket.findOneAndUpdate( { _id: ticketId, assignedTo: null }, // Only update if STILL unassigned { assignedTo: moderatorId, status: 'IN_PROGRESS' }, { new: true } ); if (!updatedTicket) { // Another worker got there first — this is expected, not an error console.log('Ticket already assigned by another worker'); return; }
```


```
// WRONG — two separate operations (not atomic) const ticket = await Ticket.findById(ticketId); if (!ticket.assignedTo) { // Race condition window here! ticket.assignedTo = moderatorId; // Another worker can assign between these await ticket.save(); } // CORRECT — single atomic operation // The filter { assignedTo: null } is checked AND the update happens in one DB operation const updatedTicket = await Ticket.findOneAndUpdate( { _id: ticketId, assignedTo: null }, // Only update if STILL unassigned { assignedTo: moderatorId, status: 'IN_PROGRESS' }, { new: true } ); if (!updatedTicket) { // Another worker got there first — this is expected, not an error console.log('Ticket already assigned by another worker'); return; }
```

MongoDB's findOneAndUpdate is atomic at the document level. The check (assignedTo: null) and the write happen as a single operation inside the DB engine. Even if 100 workers send this query simultaneously, only one will match the filter and update successfully. The rest get null back — clean failure.

```
findOneAndUpdate
```


```
assignedTo: null
```


```
null
```

A race condition occurs when the outcome of an operation depends on the unpredictable timing/ordering of concurrent processes. It's called a "race" because two or more operations are literally racing to complete first, and whoever wins changes the final state.

## Solutions Summary
```
findOneAndUpdate
```

A transaction groups multiple database operations into a single all-or-nothing unit. If any operation fails, the entire transaction rolls back — as if nothing happened.

## ACID Properties
```
// MongoDB transaction example const session = await mongoose.startSession(); session.startTransaction(); try { // Both operations must succeed together await User.findByIdAndUpdate( userId, { $inc: { balance: -amount } }, // Deduct from payer { session } ); await Order.create([{ userId, items, total: amount, status: 'CONFIRMED' }], { session }); await session.commitTransaction(); // Both succeed → commit } catch (err) { await session.abortTransaction(); // Either fails → rollback both throw err; } finally { session.endSession(); }
```


```
// MongoDB transaction example const session = await mongoose.startSession(); session.startTransaction(); try { // Both operations must succeed together await User.findByIdAndUpdate( userId, { $inc: { balance: -amount } }, // Deduct from payer { session } ); await Order.create([{ userId, items, total: amount, status: 'CONFIRMED' }], { session }); await session.commitTransaction(); // Both succeed → commit } catch (err) { await session.abortTransaction(); // Either fails → rollback both throw err; } finally { session.endSession(); }
```

MongoDB supports multi-document transactions only on replica sets or sharded clusters, not standalone instances. For development, ensure you're using a replica set (even a single-node one). Mongoose requires starting a session and passing it to every operation.
Without an index, MongoDB performs a collection scan — it reads every single document to find matches. With an index, it uses a B-tree data structure to jump directly to the matching documents. The difference: O(n) vs O(log n).

```
// Ticket schema — index frequently queried fields const ticketSchema = new Schema({ title: { type: String, required: true }, status: { type: String, enum: ['NEW','IN_PROGRESS','DONE'], index: true }, priority: { type: String, enum: ['low','medium','high'], index: true }, relatedSkills:{ type: [String], index: true }, // Array index for $elemMatch createdBy: { type: ObjectId, ref: 'User', index: true }, assignedTo: { type: ObjectId, ref: 'User', index: true } }); // Compound index for the assignment query // "Find moderators with matching skills having lowest workload" userSchema.index({ role: 1, skills: 1, activeTickets: 1 }); // User email — automatically indexed because of unique:true email: { type: String, unique: true } // unique creates an index
```


```
// Ticket schema — index frequently queried fields const ticketSchema = new Schema({ title: { type: String, required: true }, status: { type: String, enum: ['NEW','IN_PROGRESS','DONE'], index: true }, priority: { type: String, enum: ['low','medium','high'], index: true }, relatedSkills:{ type: [String], index: true }, // Array index for $elemMatch createdBy: { type: ObjectId, ref: 'User', index: true }, assignedTo: { type: ObjectId, ref: 'User', index: true } }); // Compound index for the assignment query // "Find moderators with matching skills having lowest workload" userSchema.index({ role: 1, skills: 1, activeTickets: 1 }); // User email — automatically indexed because of unique:true email: { type: String, unique: true } // unique creates an index
```


```
status: "NEW"
```


```
role + skills
```

Every index slows down writes because the index B-tree must be updated on every insert/update/delete. Only index fields that appear in find(), sort(), or aggregation $match stages. Use explain("executionStats") to check if your queries use indexes.

```
find()
```


```
sort()
```


```
$match
```


```
explain("executionStats")
```

Caching stores expensive computation results (DB queries, AI responses, API calls) in fast storage (memory, Redis) so future requests get the answer instantly. The fundamental trade-off is speed vs freshness.

```
// Redis cache with TTL (Time To Live) const redis = require('redis'); const client = redis.createClient(); async function getTickets(userId) { const cacheKey = `tickets:user:${userId}`; // 1. Try cache first const cached = await client.get(cacheKey); if (cached) return JSON.parse(cached); // HIT // 2. Cache miss — query DB const tickets = await Ticket.find({ createdBy: userId }); // 3. Store in cache with 5 min TTL await client.setEx(cacheKey, 300, JSON.stringify(tickets)); return tickets; } // IMPORTANT: Invalidate cache when ticket is updated async function updateTicket(ticketId, userId, data) { await Ticket.findByIdAndUpdate(ticketId, data); await client.del(`tickets:user:${userId}`); // Invalidate cache }
```


```
// Redis cache with TTL (Time To Live) const redis = require('redis'); const client = redis.createClient(); async function getTickets(userId) { const cacheKey = `tickets:user:${userId}`; // 1. Try cache first const cached = await client.get(cacheKey); if (cached) return JSON.parse(cached); // HIT // 2. Cache miss — query DB const tickets = await Ticket.find({ createdBy: userId }); // 3. Store in cache with 5 min TTL await client.setEx(cacheKey, 300, JSON.stringify(tickets)); return tickets; } // IMPORTANT: Invalidate cache when ticket is updated async function updateTicket(ticketId, userId, data) { await Ticket.findByIdAndUpdate(ticketId, data); await client.del(`tickets:user:${userId}`); // Invalidate cache }
```

Opening a new database connection is expensive: it involves TCP handshake, authentication, and session setup — taking 50–100ms. A connection pool maintains a set of pre-established connections that are reused, reducing this to near-zero overhead.

```
// Mongoose automatically uses connection pooling await mongoose.connect(MONGODB_URI, { maxPoolSize: 10, // Max 10 simultaneous connections minPoolSize: 2, // Keep 2 warm connections always ready maxIdleTimeMS: 30000, // Close idle connections after 30s serverSelectionTimeoutMS: 5000 // Fail fast if no server available }); // Mongoose shares this pool across all queries automatically // You never call "new connection" for each request
```

```
// Mongoose automatically uses connection pooling await mongoose.connect(MONGODB_URI, { maxPoolSize: 10, // Max 10 simultaneous connections minPoolSize: 2, // Keep 2 warm connections always ready maxIdleTimeMS: 30000, // Close idle connections after 30s serverSelectionTimeoutMS: 5000 // Fail fast if no server available }); // Mongoose shares this pool across all queries automatically // You never call "new connection" for each request
```

With maxPoolSize: 10, if 10 requests arrive simultaneously, each gets a connection from the pool instantly. The 11th request waits until one is returned. This is far better than creating 10 new connections (which takes 500ms–1s total) or serializing all requests through one connection.

```
maxPoolSize: 10
```

If TicketWise gets 10,000 tickets/minute, Inngest buffers the events — Express doesn't crash. The bottleneck is Gemini API rate limits. Configure Inngest's concurrency setting to process only N tickets/second. Horizontal scaling + queue buffering = graceful degradation.
A load balancer sits in front of your servers and distributes incoming requests so no single server gets overwhelmed. It also provides health checking — if a server dies, traffic is automatically routed to healthy ones.
The algorithm that finds the moderator with the fewest active tickets is a form of "Least Connections" load balancing — applied at the application level rather than the network level. This ensures no single moderator is overloaded while others sit idle.

```
// JWT is STATELESS — the token carries its own state // Server verifies signature without hitting the DB const payload = { _id: user._id, role: user.role, // 'user' | 'moderator' | 'admin' iat: Date.now(), exp: Date.now() + 7 * 24 * 3600 * 1000 // 7 days }; const token = jwt.sign(payload, JWT_SECRET); // Verification middleware — no DB call needed const authMiddleware = (req, res, next) => { const token = req.headers.authorization?.split(' ')[1]; const decoded = jwt.verify(token, JWT_SECRET); // Cryptographic verify req.user = decoded; next(); };
```


```
// JWT is STATELESS — the token carries its own state // Server verifies signature without hitting the DB const payload = { _id: user._id, role: user.role, // 'user' | 'moderator' | 'admin' iat: Date.now(), exp: Date.now() + 7 * 24 * 3600 * 1000 // 7 days }; const token = jwt.sign(payload, JWT_SECRET); // Verification middleware — no DB call needed const authMiddleware = (req, res, next) => { const token = req.headers.authorization?.split(' ')[1]; const decoded = jwt.verify(token, JWT_SECRET); // Cryptographic verify req.user = decoded; next(); };
```

Deleting a JWT on the frontend doesn't invalidate it on the backend. A stolen token works until expiry. Enterprise fix: Redis token blacklist on logout + short-lived access tokens (15min) paired with rotating refresh tokens (7 days). Store refresh token in httpOnly cookie to prevent XSS theft.
A webhook is a reverse API call. Instead of your server polling "did the payment succeed yet?", the payment provider calls your server when the payment is done. You register a URL with the provider; they call it with event data.

```
// Webhook endpoint — Razorpay calls THIS when payment completes app.post('/webhook/razorpay', (req, res) => { // ALWAYS verify the webhook signature first const signature = req.headers['x-razorpay-signature']; const expectedSig = crypto .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET) .update(JSON.stringify(req.body)) .digest('hex'); if (signature !== expectedSig) { return res.status(401).json({ error: 'Invalid signature' }); } // Process the event if (req.body.event === 'payment.captured') { await Order.findOneAndUpdate( { razorpayOrderId: req.body.payload.payment.entity.order_id }, { status: 'PAID' } ); } res.json({ received: true }); // Must respond quickly (Razorpay retries if you don't) });
```

```
// Webhook endpoint — Razorpay calls THIS when payment completes app.post('/webhook/razorpay', (req, res) => { // ALWAYS verify the webhook signature first const signature = req.headers['x-razorpay-signature']; const expectedSig = crypto .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET) .update(JSON.stringify(req.body)) .digest('hex'); if (signature !== expectedSig) { return res.status(401).json({ error: 'Invalid signature' }); } // Process the event if (req.body.event === 'payment.captured') { await Order.findOneAndUpdate( { razorpayOrderId: req.body.payload.payment.entity.order_id }, { status: 'PAID' } ); } res.json({ received: true }); // Must respond quickly (Razorpay retries if you don't) });
```


```
// Exponential backoff calculation function retryDelay(attempt, baseDelay = 1000) { // attempt 0 → 1s, attempt 1 → 2s, attempt 2 → 4s, attempt 3 → 8s const delay = baseDelay * Math.pow(2, attempt); // Add jitter to prevent all workers retrying at the same time const jitter = Math.random() * 1000; return Math.min(delay + jitter, 30000); // Cap at 30s } // Inngest automatically handles this with the retries option inngest.createFunction( { id: "on-ticket-created", retries: 3 }, // 3 retries with exp backoff { event: "ticket/created" }, handler );
```


```
// Exponential backoff calculation function retryDelay(attempt, baseDelay = 1000) { // attempt 0 → 1s, attempt 1 → 2s, attempt 2 → 4s, attempt 3 → 8s const delay = baseDelay * Math.pow(2, attempt); // Add jitter to prevent all workers retrying at the same time const jitter = Math.random() * 1000; return Math.min(delay + jitter, 30000); // Cap at 30s } // Inngest automatically handles this with the retries option inngest.createFunction( { id: "on-ticket-created", retries: 3 }, // 3 retries with exp backoff { event: "ticket/created" }, handler );
```


```
// OPTIMISTIC LOCKING with version field const ticketSchema = new Schema({ title: String, status: String, __v: { type: Number, default: 0 } // Mongoose auto-adds this }); // Check AND increment version atomically const result = await Ticket.findOneAndUpdate( { _id: ticketId, __v: currentVersion }, // Only update if version matches { $set: { status: 'DONE' }, $inc: { __v: 1 } }, // Increment version { new: true } ); if (!result) { // Someone else updated this ticket — fetch fresh and retry throw new Error('Stale data — please refresh and try again'); }
```


```
// OPTIMISTIC LOCKING with version field const ticketSchema = new Schema({ title: String, status: String, __v: { type: Number, default: 0 } // Mongoose auto-adds this }); // Check AND increment version atomically const result = await Ticket.findOneAndUpdate( { _id: ticketId, __v: currentVersion }, // Only update if version matches { $set: { status: 'DONE' }, $inc: { __v: 1 } }, // Increment version { new: true } ); if (!result) { // Someone else updated this ticket — fetch fresh and retry throw new Error('Stale data — please refresh and try again'); }
```

An API Gateway is a server that acts as the front door to all your microservices. It handles cross-cutting concerns — authentication, rate limiting, routing, logging — in one place, so each service doesn't have to implement them.
Don't start with microservices. Start as a monolith. Split when: (1) a specific feature needs to scale independently, (2) different teams own different features, (3) you need different tech stacks for different features (e.g., Python for ML), (4) a buggy service crashes everything. TicketWise's AI integration is a good candidate since it has different scaling needs than the CRUD operations.
In serverless (AWS Lambda, Vercel Functions, Cloudflare Workers), you write functions. The cloud provider handles all infrastructure — spinning up containers on demand, scaling, load balancing. You pay per invocation, not per server-hour.

When a Lambda function hasn't been called for a while, its container is deallocated. The next invocation must: download the code, start the Node.js runtime, run initialization code, then handle the request. This takes 100ms–2s. It's called a "cold start".
1. Provisioned concurrency — keep N containers warm (costs money). 2. Scheduled warm-up ping — ping the function every 5 minutes so it's never deallocated. 3. Minimize bundle size — smaller code = faster initialization. 4. Move DB connection outside handler — connections persist between warm invocations. Inngest functions run on serverless but don't have cold start issues because Inngest manages the execution environment.
An operation is idempotent if performing it multiple times has the same effect as performing it once. This is critical for retry safety — if a request fails mid-flight (network timeout), you don't know if it succeeded. Retrying an idempotent endpoint is safe; retrying a non-idempotent one can cause double charges, duplicate tickets, etc.

```
// NON-idempotent — creates a new ticket on every call app.post('/tickets', async (req, res) => { const ticket = await Ticket.create(req.body); res.json(ticket); // Retry = duplicate ticket! }); // IDEMPOTENT — deduplicate using client-provided idempotency key app.post('/tickets', async (req, res) => { const idempotencyKey = req.headers['x-idempotency-key']; // Check if we've seen this key before const existing = await Ticket.findOne({ idempotencyKey }); if (existing) return res.json(existing); // Return same response // First time — create ticket with the key const ticket = await Ticket.create({ ...req.body, idempotencyKey }); res.json(ticket); });
```


```
// NON-idempotent — creates a new ticket on every call app.post('/tickets', async (req, res) => { const ticket = await Ticket.create(req.body); res.json(ticket); // Retry = duplicate ticket! }); // IDEMPOTENT — deduplicate using client-provided idempotency key app.post('/tickets', async (req, res) => { const idempotencyKey = req.headers['x-idempotency-key']; // Check if we've seen this key before const existing = await Ticket.findOne({ idempotencyKey }); if (existing) return res.json(existing); // Return same response // First time — create ticket with the key const ticket = await Ticket.create({ ...req.body, idempotencyKey }); res.json(ticket); });
```

Eventual Consistency: In distributed systems, all nodes will have the same data — eventually. Not instantly. If you write to Node A and immediately read from Node B, you might get stale data. But given enough time with no new writes, all nodes converge.
Any distributed system can only guarantee two of these three properties simultaneously:
In practice, network partitions are unavoidable in distributed systems. So you must choose: CP (consistent but might be unavailable during partitions) or AP (always available but might return stale data).

```
// MongoDB Replica Set — reads can go to secondaries await mongoose.connect(MONGODB_URI, { // All writes go to primary // Heavy reads can go to secondaries for load distribution readPreference: 'secondaryPreferred' // Read from secondary if available }); // Shard key — determines which shard a document lives on // Poor choice: _id (random distribution, but no range queries) // Good choice: companyId (all company data on same shard = local joins)
```


```
// MongoDB Replica Set — reads can go to secondaries await mongoose.connect(MONGODB_URI, { // All writes go to primary // Heavy reads can go to secondaries for load distribution readPreference: 'secondaryPreferred' // Read from secondary if available }); // Shard key — determines which shard a document lives on // Poor choice: _id (random distribution, but no range queries) // Good choice: companyId (all company data on same shard = local joins)
```

A reverse proxy sits between clients and your servers. Unlike a forward proxy (which hides the client), a reverse proxy hides your servers. Clients think they're talking to Nginx, but Nginx forwards requests to your actual Express app.

```
# nginx.conf — Reverse proxy for TicketWise server { listen 443 ssl; server_name ticketwise.com; # SSL termination — Nginx handles HTTPS, Express gets plain HTTP ssl_certificate /etc/ssl/cert.pem; ssl_certificate_key /etc/ssl/key.pem; # Load balance across 3 Express instances location /api/ { proxy_pass http://express_cluster; proxy_set_header X-Real-IP $remote_addr; # Forward real client IP } # Serve static files directly (don't hit Node.js) location /static/ { root /var/www/ticketwise; expires 30d; # Cache static assets } } upstream express_cluster { server 127.0.0.1:3001; server 127.0.0.1:3002; server 127.0.0.1:3003; }
```


```
# nginx.conf — Reverse proxy for TicketWise server { listen 443 ssl; server_name ticketwise.com; # SSL termination — Nginx handles HTTPS, Express gets plain HTTP ssl_certificate /etc/ssl/cert.pem; ssl_certificate_key /etc/ssl/key.pem; # Load balance across 3 Express instances location /api/ { proxy_pass http://express_cluster; proxy_set_header X-Real-IP $remote_addr; # Forward real client IP } # Serve static files directly (don't hit Node.js) location /static/ { root /var/www/ticketwise; expires 30d; # Cache static assets } } upstream express_cluster { server 127.0.0.1:3001; server 127.0.0.1:3002; server 127.0.0.1:3003; }
```

Never hit the real Gemini API in CI. It costs money, is slow, and produces non-deterministic results. Use Jest mocks: mock the analyzeWithGemini function to return a fixed JSON. Test your logic's reaction to perfect AI responses AND to garbage/failed responses.

```
analyzeWithGemini
```

Observability is the ability to understand your system's internal state from its external outputs. It has three pillars:

```
// STRUCTURED LOGGING — machine-readable JSON logs const winston = require('winston'); const logger = winston.createLogger({ format: winston.format.json(), // JSON format — searchable in ELK transports: [new winston.transports.Console()] }); // BAD: unstructured log console.log(`Ticket 12345 assigned to user 67890`); // GOOD: structured log — filter by ticketId, userId, duration in Kibana logger.info('ticket.assigned', { ticketId: '12345', moderatorId: '67890', duration: 2341, // ms from creation to assignment priority: 'high', timestamp: new Date().toISOString() });
```


```
// STRUCTURED LOGGING — machine-readable JSON logs const winston = require('winston'); const logger = winston.createLogger({ format: winston.format.json(), // JSON format — searchable in ELK transports: [new winston.transports.Console()] }); // BAD: unstructured log console.log(`Ticket 12345 assigned to user 67890`); // GOOD: structured log — filter by ticketId, userId, duration in Kibana logger.info('ticket.assigned', { ticketId: '12345', moderatorId: '67890', duration: 2341, // ms from creation to assignment priority: 'high', timestamp: new Date().toISOString() });
```

Authentication (AuthN): Verifying identity — "Are you who you say you are?" (JWT, password check)
Authorization (AuthZ): Controlling access — "Are you allowed to do this?" (RBAC check)

```
// TicketWise RBAC — role-based access in the controller const getTickets = async (req, res) => { let query = {}; switch (req.user.role) { case 'user': // Users only see their own tickets query = { createdBy: req.user._id }; break; case 'moderator': // Moderators see tickets assigned to them query = { assignedTo: req.user._id }; break; case 'admin': // Admins see all tickets — no filter query = {}; break; default: return res.status(403).json({ error: 'Forbidden' }); } const tickets = await Ticket.find(query).populate('createdBy assignedTo', '-password'); res.json(tickets); };
```


```
// TicketWise RBAC — role-based access in the controller const getTickets = async (req, res) => { let query = {}; switch (req.user.role) { case 'user': // Users only see their own tickets query = { createdBy: req.user._id }; break; case 'moderator': // Moderators see tickets assigned to them query = { assignedTo: req.user._id }; break; case 'admin': // Admins see all tickets — no filter query = {}; break; default: return res.status(403).json({ error: 'Forbidden' }); } const tickets = await Ticket.find(query).populate('createdBy assignedTo', '-password'); res.json(tickets); };
```

OAuth allows "Login with Google/GitHub" without you ever handling their password. Your app gets an access token to read their profile.

```
https://yourapp.com/auth/google/callback?code=abc123
```


```
// Middleware chain: Request → Auth → Validate → Controller → Response // 1. Auth middleware — verify JWT const authMiddleware = (req, res, next) => { try { const token = req.headers.authorization?.split(' ')[1]; if (!token) throw new Error('No token'); req.user = jwt.verify(token, JWT_SECRET); next(); // Pass to next middleware } catch { res.status(401).json({ error: 'Unauthorized' }); // Don't call next() — chain stops here } }; // 2. Role check middleware — factory function const requireRole = (...roles) => (req, res, next) => { if (!roles.includes(req.user.role)) { return res.status(403).json({ error: 'Forbidden' }); } next(); }; // 3. Validation middleware (Zod) const validateTicket = (req, res, next) => { const result = TicketSchema.safeParse(req.body); if (!result.success) { return res.status(400).json({ errors: result.error.flatten() }); } req.body = result.data; // Replace with validated/sanitized data next(); }; // Usage — middleware chain app.post('/api/tickets', authMiddleware, // Must be logged in requireRole('user', 'admin'), // Only users and admins can create validateTicket, // Validate request body ticketController.create // Finally, the actual logic );
```


```
// Middleware chain: Request → Auth → Validate → Controller → Response // 1. Auth middleware — verify JWT const authMiddleware = (req, res, next) => { try { const token = req.headers.authorization?.split(' ')[1]; if (!token) throw new Error('No token'); req.user = jwt.verify(token, JWT_SECRET); next(); // Pass to next middleware } catch { res.status(401).json({ error: 'Unauthorized' }); // Don't call next() — chain stops here } }; // 2. Role check middleware — factory function const requireRole = (...roles) => (req, res, next) => { if (!roles.includes(req.user.role)) { return res.status(403).json({ error: 'Forbidden' }); } next(); }; // 3. Validation middleware (Zod) const validateTicket = (req, res, next) => { const result = TicketSchema.safeParse(req.body); if (!result.success) { return res.status(400).json({ errors: result.error.flatten() }); } req.body = result.data; // Replace with validated/sanitized data next(); }; // Usage — middleware chain app.post('/api/tickets', authMiddleware, // Must be logged in requireRole('user', 'admin'), // Only users and admins can create validateTicket, // Validate request body ticketController.create // Finally, the actual logic );
```


```
/tickets/123
```


```
/getTicket?id=123
```


```
// Validation with Zod — schema-first validation const { z } = require('zod'); const CreateTicketSchema = z.object({ title: z.string() .min(5, 'Title must be at least 5 characters') .max(200, 'Title too long'), description: z.string().min(20, 'Describe the issue in more detail'), priority: z.enum(['low', 'medium', 'high']).optional() }); // Zod gives TypeScript types AND runtime validation type CreateTicket = z.infer<typeof CreateTicketSchema>; // Free TypeScript type!
```


```
// Validation with Zod — schema-first validation const { z } = require('zod'); const CreateTicketSchema = z.object({ title: z.string() .min(5, 'Title must be at least 5 characters') .max(200, 'Title too long'), description: z.string().min(20, 'Describe the issue in more detail'), priority: z.enum(['low', 'medium', 'high']).optional() }); // Zod gives TypeScript types AND runtime validation type CreateTicket = z.infer<typeof CreateTicketSchema>; // Free TypeScript type!
```

## Password Storage (bcrypt)
```
// NEVER store plain text. NEVER use MD5/SHA1 for passwords. const bcrypt = require('bcrypt'); // Hashing — on signup (cost factor 10 = ~100ms on modern hardware) // bcrypt automatically adds salt — no need to generate it yourself const hashedPassword = await bcrypt.hash(plainPassword, 10); // Verification — on login const isMatch = await bcrypt.compare(plainPassword, hashedPassword); // Returns true/false. Uses constant-time comparison (prevents timing attacks).
```


```
// NEVER store plain text. NEVER use MD5/SHA1 for passwords. const bcrypt = require('bcrypt'); // Hashing — on signup (cost factor 10 = ~100ms on modern hardware) // bcrypt automatically adds salt — no need to generate it yourself const hashedPassword = await bcrypt.hash(plainPassword, 10); // Verification — on login const isMatch = await bcrypt.compare(plainPassword, hashedPassword); // Returns true/false. Uses constant-time comparison (prevents timing attacks).
```

## XSS — Cross-Site Scripting
```
// Attack: Attacker stores malicious JS in ticket description "Please help: <script>document.cookie='stolen='+ document.cookie</script>" // Prevention 1: Sanitize ALL user input before storing/displaying const sanitizeHtml = require('sanitize-html'); const safe = sanitizeHtml.sanitize(userInput); // Strips <script> tags // Prevention 2: HTTP-only cookies (can't be accessed by JavaScript) res.cookie('refreshToken', token, { httpOnly: true, // JS can't read this cookie — XSS can't steal it secure: true, // HTTPS only sameSite: 'strict' // CSRF protection });
```


```
// Attack: Attacker stores malicious JS in ticket description "Please help: <script>document.cookie='stolen='+ document.cookie</script>" // Prevention 1: Sanitize ALL user input before storing/displaying const sanitizeHtml = require('sanitize-html'); const safe = sanitizeHtml.sanitize(userInput); // Strips <script> tags // Prevention 2: HTTP-only cookies (can't be accessed by JavaScript) res.cookie('refreshToken', token, { httpOnly: true, // JS can't read this cookie — XSS can't steal it secure: true, // HTTPS only sameSite: 'strict' // CSRF protection });
```

## CSRF — Cross-Site Request Forgery
```
// Attack: Malicious site tricks logged-in user's browser into making requests // User visits evil.com → evil.com makes POST to ticketwise.com/delete/ticket/123 // Browser sends cookies automatically → request appears legitimate // Prevention: CSRF tokens (server generates, client must include) const csrf = require('csurf'); app.use(csrf({ cookie: true })); // Or use SameSite cookies — browser won't send cookies cross-origin sameSite: 'strict' // Most effective CSRF prevention
```


```
// Attack: Malicious site tricks logged-in user's browser into making requests // User visits evil.com → evil.com makes POST to ticketwise.com/delete/ticket/123 // Browser sends cookies automatically → request appears legitimate // Prevention: CSRF tokens (server generates, client must include) const csrf = require('csurf'); app.use(csrf({ cookie: true })); // Or use SameSite cookies — browser won't send cookies cross-origin sameSite: 'strict' // Most effective CSRF prevention
```

## SQL Injection (& NoSQL Injection)
```
// SQL Injection Attack // username = "admin'--" → query becomes: SELECT * FROM users WHERE name='admin'--' ... // Prevention: Always use parameterized queries (never string concat) // Bad: db.query(`SELECT * FROM users WHERE name='${req.body.username}'`); // DANGEROUS // Good (parameterized): db.query('SELECT * FROM users WHERE name = $1', [req.body.username]); // MongoDB NoSQL Injection — attacker sends object instead of string // Attack: { "password": { "$gt": "" } } → bypasses password check const user = await User.findOne({ email: req.body.email.toString(), // Force string type password: req.body.password.toString() }); // Or use Mongoose schema validation — rejects non-string values automatically
```


```
// SQL Injection Attack // username = "admin'--" → query becomes: SELECT * FROM users WHERE name='admin'--' ... // Prevention: Always use parameterized queries (never string concat) // Bad: db.query(`SELECT * FROM users WHERE name='${req.body.username}'`); // DANGEROUS // Good (parameterized): db.query('SELECT * FROM users WHERE name = $1', [req.body.username]); // MongoDB NoSQL Injection — attacker sends object instead of string // Attack: { "password": { "$gt": "" } } → bypasses password check const user = await User.findOne({ email: req.body.email.toString(), // Force string type password: req.body.password.toString() }); // Or use Mongoose schema validation — rejects non-string values automatically
```

## Memory Leaks
A memory leak happens when your program allocates memory it no longer needs but never releases. Node.js's garbage collector frees memory when no references remain. A leak is when references are accidentally kept alive.

```
// Common memory leak patterns // 1. Global accumulation — adding to a global array forever const requestLog = []; // LEAK: grows forever app.use((req) => requestLog.push(req.url)); // Fix: use Redis with TTL, or limit size // 2. Event listener accumulation function attachListener() { emitter.on('data', handler); // LEAK: listeners pile up if called repeatedly // Fix: emitter.once() or emitter.removeListener() when done } // 3. Unclosed DB connections / streams const cursor = Ticket.find().cursor(); // Fix: always call cursor.close() in finally block
```


```
// Common memory leak patterns // 1. Global accumulation — adding to a global array forever const requestLog = []; // LEAK: grows forever app.use((req) => requestLog.push(req.url)); // Fix: use Redis with TTL, or limit size // 2. Event listener accumulation function attachListener() { emitter.on('data', handler); // LEAK: listeners pile up if called repeatedly // Fix: emitter.once() or emitter.removeListener() when done } // 3. Unclosed DB connections / streams const cursor = Ticket.find().cursor(); // Fix: always call cursor.close() in finally block
```

## Worker Threads
Node.js is single-threaded. CPU-intensive work (image processing, PDF generation, heavy computation) blocks the event loop — every other request waits. Worker threads run on separate OS threads without blocking.

```
// Main thread — offload heavy work to worker const { Worker } = require('worker_threads'); app.post('/generate-report', (req, res) => { const worker = new Worker('./workers/reportGenerator.js', { workerData: { ticketIds: req.body.ids } }); worker.on('message', (report) => res.json(report)); worker.on('error', (err) => res.status(500).json({ error: err.message })); });
```


```
// Main thread — offload heavy work to worker const { Worker } = require('worker_threads'); app.post('/generate-report', (req, res) => { const worker = new Worker('./workers/reportGenerator.js', { workerData: { ticketIds: req.body.ids } }); worker.on('message', (report) => res.json(report)); worker.on('error', (err) => res.status(500).json({ error: err.message })); });
```

Pub/Sub (Publish-Subscribe) is the pattern where publishers emit events to a topic/channel, and any number of subscribers receive them. Neither knows about the other directly.
Distributed Systems are multiple independent computers working together to appear as one system. Challenges include: network partitions, clock skew, partial failures, and the impossibility of global "now".

```
// Versioning strategies // 1. URL versioning (most common, most visible) app.use('/api/v1', v1Router); app.use('/api/v2', v2Router); // 2. Header versioning (cleaner URLs) app.use((req, res, next) => { const version = req.headers['api-version'] || 'v1'; req.apiVersion = version; next(); }); // Why version? Breaking changes happen: // - Rename a field: userId → createdBy // - Change response shape: { ticket } → { data: { ticket } } // - Remove a field, add required fields // Without versioning, old clients break when you deploy // TicketWise: /api/v1/tickets (current) // /api/v2/tickets (future — adds pagination, different shape)
```


```
// Versioning strategies // 1. URL versioning (most common, most visible) app.use('/api/v1', v1Router); app.use('/api/v2', v2Router); // 2. Header versioning (cleaner URLs) app.use((req, res, next) => { const version = req.headers['api-version'] || 'v1'; req.apiVersion = version; next(); }); // Why version? Breaking changes happen: // - Rename a field: userId → createdBy // - Change response shape: { ticket } → { data: { ticket } } // - Remove a field, add required fields // Without versioning, old clients break when you deploy // TicketWise: /api/v1/tickets (current) // /api/v2/tickets (future — adds pagination, different shape)
```

The first bottleneck is the Gemini API rate limits. Because I used Inngest, Express itself doesn't crash — it returns 201 Created instantly and buffers events. I'd configure Inngest's concurrency settings to process N tickets/second, letting the rest queue up. Second bottleneck: MongoDB connection pool. Fix: read replicas for read scaling, increase pool size. The system degrades gracefully — tickets get processed with some delay, not lost.
Because each Inngest step is tracked independently, if the "send-email" step throws, Inngest retries just that step with exponential backoff — it does NOT re-run the AI analysis or DB update. If all retries fail, the event goes to a Dead Letter Queue where an admin can inspect the failure and manually re-trigger the email. The ticket is assigned correctly even if the email fails.
MongoDB's findOneAndUpdate with the filter { _id: ticketId, assignedTo: null }. The check AND the update are atomic at the document level. Even if 100 workers send this query simultaneously, only one matches the filter — the rest get null back and stop processing. This eliminates the race condition completely without needing distributed locks.

```
findOneAndUpdate
```


```
{ _id: ticketId, assignedTo: null }
```

Three layers of defense: (1) The system prompt strictly instructs Gemini to return only JSON. (2) The response goes through a regex parser that extracts JSON even if wrapped in markdown backticks. (3) The parsed result is validated against a Zod schema — if any required field is missing or wrong type, the parsing fails. On failure, the ticket status is set to AI_FAILED, the raw output is saved for debugging, and the ticket is flagged for manual admin review. Prompt injection can't bypass this because the validation happens on my server, not inside the AI.

```
AI_FAILED
```

Current TicketWise just deletes the token client-side — a stolen token is still valid until expiry. Enterprise fix: (1) Short-lived access tokens (15 min) + long-lived refresh tokens (7 days). (2) Refresh tokens stored server-side in Redis. (3) On logout, delete the refresh token from Redis — they can't get a new access token. (4) Store the refresh token in an httpOnly cookie to prevent XSS theft. (5) Access token can be blacklisted in Redis with a TTL matching its remaining expiry.
MongoDB Aggregation Pipeline: (1) $match — filter by status: "DONE" and date range (start of month to now). (2) $group — group by assignedTo, use $sum: 1 to count. (3) $lookup — join with User collection to get moderator name and email. (4) $sort — sort by count descending. This runs in one DB query with no application-side processing and is much faster than multiple find() calls.

```
$match
```


```
status: "DONE"
```


```
$group
```


```
assignedTo
```


```
$sum: 1
```


```
$lookup
```


```
$sort
```


```
find()
```

Jest mocking. I mock the analyzeWithGemini function: jest.mock('./analyzeWithGemini'). Test 1: mock returns valid JSON → assert ticket status becomes "IN_PROGRESS", moderator is assigned, email is called once. Test 2: mock throws an error (simulates Gemini timeout) → assert ticket status becomes "AI_FAILED", email is NOT called, error is logged. Test 3: mock returns garbage text → assert JSON parsing fails gracefully. Never hit real Gemini in CI — it costs money, is slow, and returns non-deterministic results that break assertions.

```
analyzeWithGemini
```


```
jest.mock('./analyzeWithGemini')
```

