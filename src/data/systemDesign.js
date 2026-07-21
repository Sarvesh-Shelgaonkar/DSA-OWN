/**
 * System Design knowledge hub.
 * Original content written for MyDSA (standard, well-known system-design
 * concepts explained in our own words). Rendered by InterviewBankView.
 *
 * The HLD/LLD problem catalogs below are lists of common, universally-known
 * interview topics (e.g. "Design a URL shortener") — used here as a study
 * checklist, not copied from any proprietary material.
 */

export const systemDesignBank = {
  id: 'system-design',
  slug: 'system-design',
  eyebrow: 'Interview prep',
  title: 'System Design',
  short: 'SD',
  icon: 'layers',
  accent: 'text-primary',
  description:
    'A practical, interview-focused System Design guide — a repeatable framework, the core building blocks (scaling, load balancing, caching, databases, messaging), reliability and single points of failure, plus HLD and LLD problem checklists to practice.',
  tagline: 'Frameworks, core concepts, and a full HLD + LLD practice checklist.',
  sections: [
    {
      id: 'framework',
      title: 'How to approach any design',
      icon: 'target',
      blocks: [
        { type: 'p', text: 'Interviewers care far more about a clear, structured approach than about you memorising one specific architecture. Use the same repeatable framework for every question so you never freeze.' },
        {
          type: 'ol',
          items: [
            'Clarify requirements — split into functional (what the system does) and non-functional (scale, latency, availability, consistency). Ask, don\'t assume.',
            'Estimate scale — daily active users, read:write ratio, QPS, storage growth per year, and peak vs average traffic. This drives every later decision.',
            'Define the API — a few clear endpoints (or method signatures) pin down the contract before you draw boxes.',
            'High-level design — client → load balancer → services → data stores, plus cache, queue, and CDN where they earn their place.',
            'Deep dive — pick the 1–2 hardest parts (data model, sharding, the hot path) and go deep. This is where senior signal shows.',
            'Address bottlenecks & failures — scaling, single points of failure, consistency trade-offs, and how you monitor it all.',
          ],
        },
        { type: 'tip', text: 'Say your assumptions out loud and write them down. A design that is correct for stated assumptions beats a "perfect" design built on guesses.' },
        {
          type: 'qa',
          items: [
            { q: 'Functional vs non-functional requirements?', a: 'Functional = features/behaviour (e.g. "users can shorten a URL"). Non-functional = qualities/constraints (e.g. "99.9% availability, <100ms redirect, 100M URLs/day"). Non-functional requirements shape the architecture.' },
            { q: 'Why estimate scale early?', a: 'Numbers decide whether you need sharding, caching, a CDN, or async processing. "10 QPS" and "1M QPS" are completely different systems.' },
          ],
        },
      ],
    },
    {
      id: 'estimation',
      title: 'Back-of-the-envelope estimation',
      icon: 'chart',
      blocks: [
        { type: 'p', text: 'You are not expected to be exact — you are expected to reason with round numbers and show the calculation.' },
        {
          type: 'table',
          head: ['Quantity', 'Handy number'],
          rows: [
            ['Seconds in a day', '~86,400 ≈ 10^5'],
            ['1 million writes/day', '~12 writes/sec average'],
            ['Read:write ratio (typical social app)', '~100:1'],
            ['L1/memory reference', '~ nanoseconds'],
            ['SSD random read', '~100 microseconds'],
            ['Round trip within a data centre', '~0.5 ms'],
            ['Round trip across continents', '~150 ms'],
          ],
        },
        {
          type: 'ul',
          items: [
            'QPS = daily requests ÷ 86,400. Multiply by a peak factor (2–10×) for peak QPS.',
            'Storage/year = objects/day × object size × 365 (then multiply by replication factor).',
            'Bandwidth = QPS × payload size.',
            'Cache size = follow the 80/20 rule — cache the ~20% of data that serves ~80% of reads.',
          ],
        },
      ],
    },
    {
      id: 'building-blocks',
      title: 'Core building blocks',
      icon: 'grid',
      blocks: [
        { type: 'p', text: 'Almost every design is assembled from the same handful of components. Know what each one is for and its trade-offs.' },
        {
          type: 'table',
          head: ['Component', 'Purpose', 'Watch out for'],
          rows: [
            ['DNS', 'Maps domain → IP; can route by geo/latency', 'TTL too high slows failover'],
            ['Load balancer', 'Spreads traffic across servers; health checks', 'Itself must be HA'],
            ['CDN', 'Serves static/media content close to users', 'Cache invalidation, cost'],
            ['App servers', 'Stateless business logic; scale horizontally', 'Keep session state out of them'],
            ['Cache', 'Fast in-memory reads (Redis/Memcached)', 'Invalidation, stampede'],
            ['Database', 'Durable source of truth (SQL/NoSQL)', 'The usual bottleneck'],
            ['Message queue', 'Decouples producers/consumers; async work', 'Ordering, duplicates, lag'],
            ['Object storage', 'Blobs/files (S3/GCS); very durable', 'Not for low-latency queries'],
          ],
        },
        { type: 'answer', text: 'A clean default architecture: clients hit a CDN for static assets and a load balancer for API calls; the LB spreads requests across stateless app servers; app servers read through a cache and fall back to a replicated database; heavy or slow work (emails, thumbnails, feeds) is pushed onto a message queue and handled by background workers.' },
      ],
    },
    {
      id: 'scalability',
      title: 'Scalability & performance',
      icon: 'gauge',
      blocks: [
        {
          type: 'table',
          head: ['Approach', 'Meaning', 'Trade-off'],
          rows: [
            ['Vertical scaling', 'Bigger machine (more CPU/RAM)', 'Simple, but a hard ceiling + SPOF'],
            ['Horizontal scaling', 'More machines behind an LB', 'No ceiling, but needs statelessness'],
            ['Stateless services', 'No per-user state on the server', 'Enables easy horizontal scaling'],
            ['Read replicas', 'Copies that serve reads', 'Replication lag → stale reads'],
            ['Sharding', 'Split data across nodes by a key', 'Cross-shard queries + hot shards'],
          ],
        },
        {
          type: 'ul',
          items: [
            'Prefer horizontal scaling for the web/app tier — keep it stateless so any server can handle any request.',
            'Push session/state into a shared store (Redis, DB), not local memory.',
            'Add read replicas before sharding; shard only when a single primary can no longer hold the write load.',
            'Choose a shard key that spreads load evenly — a bad key creates a "hot" shard that becomes the bottleneck.',
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'Load balancing algorithms?', a: 'Round-robin (even rotation), least-connections (send to the least busy), IP-hash / consistent hashing (sticky routing). Consistent hashing minimises reshuffling when a node is added or removed.' },
            { q: 'How do you keep app servers stateless?', a: 'Store sessions in Redis/DB, keep uploaded files in object storage, and never rely on data that lives only on one server\'s local disk or memory.' },
          ],
        },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & storage',
      icon: 'grid',
      blocks: [
        {
          type: 'table',
          head: ['Aspect', 'SQL (relational)', 'NoSQL'],
          rows: [
            ['Schema', 'Fixed, structured', 'Flexible / schemaless'],
            ['Scaling', 'Vertical + read replicas; sharding is harder', 'Built for horizontal scale'],
            ['Transactions', 'Strong ACID', 'Often eventual/limited'],
            ['Best for', 'Relationships, complex queries, money', 'High write volume, large scale, flexible data'],
            ['Examples', 'PostgreSQL, MySQL', 'DynamoDB, Cassandra, MongoDB'],
          ],
        },
        { type: 'answer', text: 'Pick SQL when you need strong consistency and relational queries (payments, orders, anything with money). Pick NoSQL when you need massive write throughput, huge scale, or a flexible schema (feeds, logs, catalogs). Many real systems use both — this is called polyglot persistence.' },
        {
          type: 'ul',
          items: [
            'Replication: primary handles writes; replicas serve reads and act as failover. Async replication is fast but can lose the last few writes on failure.',
            'Sharding strategies: range-based (simple, can create hotspots), hash-based (even spread, hard range scans), and directory/consistent-hashing.',
            'Indexing speeds reads but slows writes and uses space — index what you query, not everything.',
            'Denormalise in NoSQL to avoid joins; accept some duplication for read speed.',
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'What is the CAP theorem?', a: 'Under a network partition (P) you must choose between Consistency (every read sees the latest write) and Availability (every request gets a response). You cannot have both during a partition. CP systems reject requests to stay correct; AP systems stay up but may return stale data.' },
            { q: 'ACID vs BASE?', a: 'ACID (Atomicity, Consistency, Isolation, Durability) = strong guarantees, typical of SQL. BASE (Basically Available, Soft state, Eventually consistent) = relaxed guarantees for scale, typical of NoSQL.' },
            { q: 'Strong vs eventual consistency?', a: 'Strong: reads always reflect the latest write (needed for balances, inventory). Eventual: replicas converge after a short delay (fine for likes, view counts, feeds).' },
          ],
        },
      ],
    },
    {
      id: 'caching',
      title: 'Caching',
      icon: 'bolt',
      blocks: [
        { type: 'p', text: 'Caching is the highest-leverage way to cut latency and database load — but its hard problems are invalidation and stampedes.' },
        {
          type: 'table',
          head: ['Strategy', 'How it works', 'Trade-off'],
          rows: [
            ['Cache-aside', 'App checks cache, then DB on miss, then fills cache', 'Most common; first read is a miss'],
            ['Read-through', 'Cache library loads from DB on miss', 'Simple app code; cache does the work'],
            ['Write-through', 'Write to cache and DB together', 'Consistent, but slower writes'],
            ['Write-back', 'Write to cache, flush to DB later', 'Fast writes, risk of data loss'],
          ],
        },
        {
          type: 'ul',
          items: [
            'Eviction policies: LRU (least recently used) is the common default; also LFU and TTL-based expiry.',
            'Cache stampede/thundering herd: many requests miss the same expired key at once and hammer the DB. Fix with a mutex/lock on refresh, staggered (jittered) TTLs, or early background refresh.',
            'Invalidation: use TTLs, event-driven purges on writes, or versioned keys so stale data ages out.',
            'Cache the read-heavy 20% of data; don\'t cache everything.',
          ],
        },
      ],
    },
    {
      id: 'messaging',
      title: 'Messaging & async processing',
      icon: 'reset',
      blocks: [
        { type: 'p', text: 'Queues decouple a fast request path from slow work. The user gets an instant response; the heavy lifting happens in the background.' },
        {
          type: 'ul',
          items: [
            'Use a queue for anything slow or spiky: sending email/SMS, image/video processing, fan-out of feeds/notifications, analytics.',
            'Delivery guarantees: at-most-once, at-least-once (most common — design consumers to be idempotent), exactly-once (hard, expensive).',
            'Make consumers idempotent so replays/duplicates are safe (use a dedupe key).',
            'Use a Dead Letter Queue (DLQ) for messages that repeatedly fail, so one "poison" message doesn\'t block the pipeline.',
            'Watch consumer lag — if consumers fall behind producers, the queue grows without bound. Auto-scale consumers on lag.',
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'Kafka vs RabbitMQ / SQS?', a: 'Kafka = high-throughput distributed log, great for streaming and replay, ordered per partition. RabbitMQ / SQS = traditional message brokers, great for task queues and routing. Choose based on throughput, ordering, and replay needs.' },
            { q: 'How do you scale a queue safely?', a: 'Partition the topic and add consumers in a consumer group; ensure replication (e.g. Kafka RF≥3) so a broker failure doesn\'t lose messages.' },
          ],
        },
      ],
    },
    {
      id: 'reliability',
      title: 'Reliability & Single Points of Failure',
      icon: 'lock',
      blocks: [
        { type: 'p', text: 'A Single Point of Failure (SPOF) is any component whose failure takes the whole system (or a critical part) down. Removing SPOFs is one of the first things interviewers probe.' },
        { type: 'answer', text: 'For every component, ask four questions: (1) What breaks if this fails? (2) How do I detect the failure (health checks, metrics, alerts)? (3) How do I recover (automatic vs manual failover)? (4) What does the fix cost (money, complexity, consistency)?' },
        {
          type: 'table',
          head: ['SPOF', 'Primary fix', 'Signal to watch'],
          rows: [
            ['Single server', 'Multiple instances across AZs + auto-scaling', 'Instance health checks'],
            ['Single availability zone', 'Deploy across 2–3 AZs', 'Per-AZ health'],
            ['Single region', 'Multi-region active-passive / active-active', 'Regional error rate'],
            ['Load balancer', 'Managed HA LB or a VRRP pair', 'Healthy backend count'],
            ['Single database', 'Primary + replica with auto-failover', 'Replication lag'],
            ['Single cache node', 'Redis Sentinel / Cluster + replicas', 'Cache hit rate'],
            ['Single queue broker', '3+ brokers, replication factor ≥ 3', 'Under-replicated partitions'],
            ['DNS / SSL', 'Multi-provider DNS, low TTL, auto-renew certs', 'Resolution time, cert expiry'],
            ['Third-party API', 'Fallback provider + retries + circuit breaker', 'Downstream error rate'],
          ],
        },
        {
          type: 'ul',
          items: [
            'Redundancy everywhere: no tier should have exactly one instance.',
            'Circuit breakers: stop calling a failing dependency so its slowness doesn\'t cascade upstream (Closed → Open → Half-Open).',
            'Timeouts + retries with exponential backoff and jitter on every network call — inner timeouts shorter than outer ones.',
            'Bulkheads: isolate resources (separate thread pools/connection pools) so one slow dependency can\'t starve everything.',
            'Graceful degradation: serve a reduced experience (cached/stale data) instead of a hard error.',
            'Observability: metrics, logs, and traces — you can\'t fix a SPOF you can\'t see. Practise failures with chaos testing.',
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is high availability, and how is it usually expressed?', a: 'The ability to stay operational; expressed as "nines" — 99.9% ≈ 8.7 hours downtime/year, 99.99% ≈ 52 minutes/year. Achieved via redundancy and automatic failover.' },
            { level: 'Medium', q: 'Design around a database primary that can fail.', a: 'Add a synchronous/near-sync standby replica, automate failover (managed DB or Patroni/Orchestrator), route reads to replicas, monitor replication lag, and validate backups with periodic test restores.' },
            { level: 'Hard', q: 'A slow downstream service is causing cascading outages. Fix it.', a: 'Add explicit timeouts, wrap calls in a circuit breaker with a fallback, isolate with bulkheads, shed load / rate-limit, and make the path async where strong consistency isn\'t required so callers don\'t block on it.' },
          ],
        },
      ],
    },
    {
      id: 'hld-catalog',
      title: 'HLD practice checklist (32)',
      icon: 'route',
      blocks: [
        { type: 'p', text: 'High-Level Design questions focus on distributed architecture, scale, and data flow. Master the 7 anchors first — they share patterns that unlock the rest.' },
        { type: 'tip', text: 'Anchors to master first: Uber · Hotel booking · Instagram · Twitter · YouTube · WhatsApp · Search autocomplete.' },
        { type: 'h', text: 'Infrastructure & core' },
        { type: 'ul', items: ['Design a URL shortener', 'Design a web crawler', 'Design a rate limiter', 'Design a distributed cache (Redis)', 'Design a content delivery network (CDN)', 'Design a distributed job scheduler', 'Design a logging & metrics pipeline'] },
        { type: 'h', text: 'Communication & feeds' },
        { type: 'ul', items: ['Design a notification system', 'Design a chat app (WhatsApp)', 'Design Slack', 'Design a news feed (Facebook / Twitter)'] },
        { type: 'h', text: 'Social media' },
        { type: 'ul', items: ['Design Twitter / X', 'Design Instagram', 'Design TikTok', 'Design Pinterest', 'Design Reddit'] },
        { type: 'h', text: 'Video & media streaming' },
        { type: 'ul', items: ['Design YouTube', 'Design Netflix', 'Design Spotify'] },
        { type: 'h', text: 'Location & ride-sharing' },
        { type: 'ul', items: ['Design Uber', 'Design a food delivery app (Swiggy / Zomato)', 'Design Google Maps'] },
        { type: 'h', text: 'Booking & inventory' },
        { type: 'ul', items: ['Design a hotel booking system (Booking.com)', 'Design a flight booking system', 'Design movie ticket booking (BookMyShow)', 'Design a restaurant reservation system'] },
        { type: 'h', text: 'Storage & search' },
        { type: 'ul', items: ['Design Google Drive / Dropbox', 'Design Pastebin', 'Design a search autocomplete system', 'Design a trending topics system'] },
        { type: 'h', text: 'E-commerce & payments' },
        { type: 'ul', items: ['Design an e-commerce platform (Amazon)', 'Design a payment system / wallet (PhonePe)'] },
      ],
    },
    {
      id: 'lld-catalog',
      title: 'LLD practice checklist (50)',
      icon: 'code',
      blocks: [
        { type: 'p', text: 'Low-Level Design focuses on OOP, class diagrams, design patterns, and clean, extensible code. Master the 7 anchors first.' },
        { type: 'tip', text: 'Anchors to master first: Parking lot · Elevator · Chess · BookMyShow · Uber · Cache · RBAC.' },
        { type: 'h', text: 'Core OOP & real-world systems' },
        { type: 'ul', items: ['Design a parking lot', 'Design a vending machine', 'Design an ATM', 'Design a library management system', 'Design an elevator system', 'Design a traffic light system', 'Design a meeting-room scheduler'] },
        { type: 'h', text: 'Games & simulations' },
        { type: 'ul', items: ['Design Snake and Ladder', 'Design Tic-Tac-Toe', 'Design Chess'] },
        { type: 'h', text: 'Social & communication apps' },
        { type: 'ul', items: ['Design Splitwise', 'Design a chat application (WhatsApp-like)', 'Design a discussion platform (Reddit-like)', 'Design LinkedIn (LLD)', 'Design a calendar application', 'Design an online voting system'] },
        { type: 'h', text: 'Platform & marketplace apps' },
        { type: 'ul', items: ['Design a URL shortener', 'Design BookMyShow', 'Design BookMyShow seat locking', 'Design Uber', 'Design a food delivery app', 'Design an online hotel booking system', 'Design an airline management system', 'Design a restaurant management system', 'Design a car rental system', 'Design an order management system', 'Design CricBuzz', 'Design Truecaller', 'Design a stock exchange system', 'Design a learning management system'] },
        { type: 'h', text: 'Infrastructure & core systems' },
        { type: 'ul', items: ['Design a cache', 'Design a rate limiter', 'Design a logging framework', 'Design a notification system', 'Design a payment system (LLD)', 'Design a file system', 'Design a task scheduler', 'Design search autocomplete', 'Design an API throttling system', 'Design an inventory management system'] },
        { type: 'h', text: 'Design patterns & advanced LLD' },
        { type: 'ul', items: ['Design a feature-flag system', 'Design a distributed ID generator (Snowflake-like)', 'Design a circuit breaker', 'Design retry-with-backoff', 'Design a metrics & monitoring system', 'Design an authentication system', 'Design role-based access control (RBAC)', 'Design a web crawler (LLD)', 'Design a recommendation engine (LLD)', 'Design an event-driven producer–consumer system'] },
      ],
    },
    {
      id: 'frontend-sd',
      title: 'Frontend system design',
      icon: 'info',
      blocks: [
        { type: 'p', text: 'Frontend system-design rounds test how you structure large client apps: rendering strategy, state, performance, networking, and reliability in the browser.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'CSR vs SSR vs SSG?', a: 'CSR renders in the browser (fast navigations, slower first paint, weaker SEO). SSR renders HTML on the server per request (better first paint + SEO, more server cost). SSG pre-builds pages at deploy time (fastest, best for mostly-static content). Many apps mix them.' },
            { level: 'Medium', q: 'How do you make a large frontend fast?', a: 'Code-split and lazy-load routes/heavy components, cache API data, use a CDN for assets, optimise images/fonts, virtualise long lists, debounce expensive work, and minimise re-renders/bundle size. Track Core Web Vitals (LCP, CLS, INP).' },
            { level: 'Medium', q: 'How do you manage client state at scale?', a: 'Separate server-cache state (data fetched from APIs) from UI state. Keep state as local as possible; lift only what\'s shared. Normalise cached entities and invalidate them on writes.' },
            { level: 'Hard', q: 'How do you make the UI resilient to flaky networks?', a: 'Optimistic updates with rollback, retries with backoff, request de-duplication, offline caching (service worker), skeleton/loading and error states, and graceful degradation when a feature\'s API is down.' },
          ],
        },
        { type: 'tip', text: 'Common frontend SD topics: communication protocols (HTTP/1.1 vs 2 vs 3, WebSockets, SSE, long-polling), caching (HTTP cache, service workers), security (XSS, CSRF, CSP), and observability (logging, monitoring, error tracking).' },
      ],
    },
  ],
};

export default systemDesignBank;
