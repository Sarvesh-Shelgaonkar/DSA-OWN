const lesson = (slug, title, summary, duration, level, keyPoints) => ({
  slug,
  title,
  summary,
  duration,
  level,
  keyPoints,
});

export const ENGINEERING_TRACKS = {
  dsa: {
    id: 'dsa',
    eyebrow: 'Pattern-first problem solving',
    title: 'Data Structures & Algorithms',
    description:
      'Build the mental models behind common interview patterns, then practise them in a deliberate order.',
    icon: 'grid',
    accent: 'blue',
    sections: [
      {
        title: 'DSA introduction & warm up',
        description: 'Understand the system, the learning process, and how complexity guides every solution.',
        lessons: [
          lesson(
            'what-is-dsa-and-patterns',
            'What is DSA and Its Patterns?',
            'Understand how data structures organise information and how algorithm patterns turn repeated problem shapes into reusable solutions.',
            '16 min',
            'Beginner',
            ['Data structures versus algorithms', 'Problem shapes and reusable patterns', 'Choosing a learning order'],
          ),
          lesson(
            'how-to-solve-dsa-problems',
            'How to Solve DSA Problems Effectively',
            'A repeatable process for understanding, attempting, reviewing, and retaining a problem.',
            '18 min',
            'Beginner',
            ['Use a strict 5–10 minute first attempt', 'Separate pattern discovery from code writing', 'Turn every solution into a reusable mental model'],
          ),
          lesson(
            'solve-related-problems',
            'Solve Related Problems',
            'Turn one understood solution into durable pattern recognition with a deliberate ladder of related problems.',
            '12 min',
            'Beginner',
            ['Use same-pattern variations', 'Increase one constraint at a time', 'Review mistakes with spaced repetition'],
          ),
          lesson(
            'big-o-notation',
            'Big O Notation',
            'Reason about time and space without getting trapped by machine-specific details.',
            '14 min',
            'Beginner',
            ['Drop constants and lower-order terms', 'Analyse nested and sequential loops', 'Recognise logarithmic work'],
          ),
        ],
      },
      {
        title: 'Linear data structures',
        description: 'Build a strong base with contiguous, linked, and order-constrained data.',
        lessons: [
          lesson(
            'arrays',
            'Arrays',
            'Understand contiguous storage, random access, in-place transformations, subarrays, and mutation costs.',
            '24 min',
            'Beginner',
            ['Contiguous storage and indexing', 'In-place versus copied transformations', 'Subarray reasoning'],
          ),
          lesson(
            'strings',
            'Strings',
            'Treat strings as structured sequences while handling immutability, character counts, parsing, and substring boundaries.',
            '22 min',
            'Beginner',
            ['Character representation and immutability', 'Frequency and canonical forms', 'Substring and palindrome reasoning'],
          ),
          lesson(
            'bit-manipulation',
            'Bit Manipulation',
            'Use binary representation and bitwise operations for compact state, parity, masks, and constant-time tricks.',
            '24 min',
            'Intermediate',
            ['AND OR XOR and NOT', 'Shifts masks and bit tests', 'XOR cancellation and subset masks'],
          ),
          lesson(
            'hash-tables',
            'Hash Tables',
            'Trade a controlled amount of memory for fast lookup, counting, and grouping.',
            '18 min',
            'Beginner',
            ['Model key-to-value relationships', 'Use complements and frequency maps', 'Know average and worst-case behaviour'],
          ),
          lesson(
            'matrix',
            'Matrix',
            'Traverse and transform two-dimensional data with clear boundary, direction, and coordinate invariants.',
            '22 min',
            'Intermediate',
            ['Row and column traversal', 'Boundary-controlled simulation', 'In-place matrix transformations'],
          ),
          lesson(
            'linked-list',
            'Linked List',
            'Reason about node identity and pointer rewiring without losing access to the remaining structure.',
            '26 min',
            'Intermediate',
            ['Pointer rewiring order', 'Dummy nodes and sentinels', 'Fast and slow pointer techniques'],
          ),
          lesson(
            'stacks',
            'Stacks',
            'Use last-in-first-out order for parsing, undo, recursion simulation, and monotonic candidate tracking.',
            '22 min',
            'Intermediate',
            ['Expression and bracket parsing', 'Monotonic stack invariants', 'Simulating recursive work'],
          ),
          lesson(
            'queues',
            'Queues',
            'Use first-in-first-out order for breadth-first search, scheduling, buffering, and level processing.',
            '18 min',
            'Intermediate',
            ['FIFO processing', 'Level-order traversal', 'Circular queue implementation'],
          ),
          lesson(
            'deque',
            'Deque',
            'Insert and remove at both ends to support monotonic windows and bidirectional processing.',
            '18 min',
            'Intermediate',
            ['Double-ended operations', 'Monotonic deque', 'Sliding-window maximum'],
          ),
        ],
      },
      {
        title: 'High-frequency patterns',
        description: 'The patterns that unlock a large part of interview DSA.',
        lessons: [
          lesson('two-pointers', 'Two Pointers', 'Coordinate two indexes to remove unnecessary nested work.', '20 min', 'Intermediate', ['Opposite-direction pointers', 'Fast and slow pointers', 'Partitioning invariants']),
          lesson('prefix-sum', 'Prefix Sum', 'Precompute cumulative information to answer range questions efficiently.', '16 min', 'Intermediate', ['One-dimensional prefix sums', 'Subarray sum transformations', 'Two-dimensional prefix sums']),
          lesson('sliding-window', 'Sliding Window', 'Maintain a valid contiguous range while moving through the input once.', '24 min', 'Intermediate', ['Fixed and variable windows', 'Grow, validate, and shrink', 'Track window state incrementally']),
          lesson('kadanes-algorithm', "Kadane's Algorithm", 'Track the best subarray ending at each position to solve maximum-subarray variants in linear time.', '18 min', 'Intermediate', ['Extend versus restart decision', 'Local and global best state', 'All-negative input handling']),
          lesson('sorting', 'Sorting', 'Understand comparison sorting, stable ordering, partitioning, and when sorted structure unlocks a simpler solution.', '28 min', 'Intermediate', ['Comparison sort trade-offs', 'Merge and partition mechanics', 'Custom comparators and stability']),
          lesson('recursion-backtracking', 'Recursion & Backtracking', 'Define a state, make a choice, and restore it correctly.', '28 min', 'Intermediate', ['Base cases and state', 'Choose–explore–unchoose', 'Pruning invalid branches']),
          lesson('divide-and-conquer', 'Divide and Conquer', 'Split a problem into independent subproblems, combine their answers, and analyse the resulting recurrence.', '24 min', 'Intermediate', ['Divide solve and combine', 'Recurrence trees', 'Merge-sort and selection patterns']),
          lesson('binary-search', 'Binary Search', 'Search sorted data and monotonic answer spaces with explicit invariants.', '26 min', 'Intermediate', ['Lower and upper bounds', 'Search on answer', 'Avoid off-by-one errors']),
          lesson('intervals', 'Intervals', 'Sort and reason about overlapping ranges, boundaries, and event order.', '18 min', 'Intermediate', ['Merge overlaps', 'Sweep-line events', 'Meeting-room scheduling']),
        ],
      },
      {
        title: 'Trees & range-query structures',
        description: 'Move from linear data to hierarchical indexes and logarithmic range operations.',
        lessons: [
          lesson('binary-tree', 'Binary Tree', 'Traverse hierarchical data and combine information returned by subtrees.', '30 min', 'Intermediate', ['DFS traversal templates', 'Level-order BFS', 'Subtree return values']),
          lesson('bst-ordered-set', 'BST / Ordered Set', 'Exploit maintained ordering for search, predecessor, successor, and range operations.', '26 min', 'Intermediate', ['BST ordering invariant', 'Predecessor and successor', 'Balanced ordered-set operations']),
          lesson('tries', 'Tries', 'Represent shared string prefixes for fast lookup and search.', '18 min', 'Advanced', ['Prefix insertion and search', 'Autocomplete traversal', 'Trie plus backtracking']),
          lesson('heaps', 'Heaps', 'Efficiently maintain the next smallest or largest candidate.', '20 min', 'Intermediate', ['Top K problems', 'Two-heap balancing', 'Best-first search']),
          lesson('fenwick-tree', 'Fenwick Tree (Binary Indexed Tree)', 'Store partial aggregates for logarithmic point updates and prefix queries with compact memory.', '28 min', 'Advanced', ['Least-significant-bit navigation', 'Prefix query and point update', 'Coordinate compression']),
          lesson('segment-tree', 'Segment Tree', 'Represent ranges hierarchically for flexible queries, updates, and lazy propagation.', '34 min', 'Advanced', ['Build query and update', 'Associative merge functions', 'Lazy propagation']),
          lesson('sparse-table', 'Sparse Table', 'Precompute overlapping power-of-two ranges for constant-time immutable queries.', '26 min', 'Advanced', ['Power-of-two decomposition', 'Idempotent range queries', 'Build-time and memory trade-offs']),
        ],
      },
      {
        title: 'Problem-solving paradigms',
        description: 'Design custom structures and solve optimisation, connectivity, and mathematical problems.',
        lessons: [
          lesson('data-structure-design', 'Data Structure Design', 'Combine primitive structures to satisfy an operation contract with explicit time and space targets.', '28 min', 'Advanced', ['Operation-first design', 'Combining maps lists heaps and queues', 'Invariants and amortised analysis']),
          lesson('greedy', 'Greedy Algorithms', 'Prove when a locally optimal choice stays globally safe.', '24 min', 'Advanced', ['Exchange arguments', 'Sorting-based greedy choices', 'Recognise when greedy fails']),
          lesson('graphs', 'Graphs', 'Model connectivity, dependency, reachability, and shortest paths.', '34 min', 'Advanced', ['BFS and DFS', 'Topological sorting', 'Union Find and shortest paths']),
          lesson('dynamic-programming', 'Dynamic Programming', 'Turn repeated state exploration into a compact recurrence.', '38 min', 'Advanced', ['Define state and transition', 'Memoisation versus tabulation', 'Space optimisation']),
          lesson('maths-geometry', 'Maths / Geometry', 'Apply number theory, combinatorics, coordinates, orientation, and distance reasoning safely.', '32 min', 'Advanced', ['GCD primes and modular arithmetic', 'Combinatorics and counting', 'Orientation distance and overflow']),
          lesson('advanced-topics', 'Advanced Topics', 'Meet the techniques that appear in harder interviews and competitive programming.', '32 min', 'Advanced', ['String matching', 'Disjoint sets', 'Bitmask and meet-in-the-middle']),
        ],
      },
    ],
  },
  'system-design': {
    id: 'system-design',
    eyebrow: 'Architecture from first principles',
    title: 'System Design: HLD, LLD & Scenarios',
    description:
      'Learn the building blocks, trade-offs, and interview structure needed to design reliable systems.',
    icon: 'layers',
    accent: 'violet',
    sections: [
      {
        title: 'Interview foundation',
        description: 'A calm framework for ambiguous design questions.',
        lessons: [
          lesson('interview-framework', 'How to Approach a System Design Interview', 'Turn an open-ended prompt into a structured engineering conversation.', '22 min', 'Beginner', ['Clarify functional requirements', 'Estimate scale before choosing technology', 'Drive the discussion with trade-offs']),
          lesson('capacity-estimation', 'Back-of-the-Envelope Estimation', 'Estimate traffic, storage, bandwidth, and peak load quickly.', '18 min', 'Beginner', ['Requests per second', 'Storage growth', 'Peak versus average traffic']),
          lesson('api-data-model', 'API & Data Model Design', 'Define contracts and ownership boundaries before drawing boxes.', '24 min', 'Intermediate', ['Resource-oriented APIs', 'Schema and access patterns', 'Idempotency and pagination']),
        ],
      },
      {
        title: 'Core building blocks',
        description: 'Know what each component solves and what it costs.',
        lessons: [
          lesson('load-balancing', 'Load Balancing', 'Distribute work while preserving availability and healthy failover.', '20 min', 'Intermediate', ['Layer 4 versus Layer 7', 'Health checks', 'Sticky sessions trade-offs']),
          lesson('caching', 'Caching', 'Place caches deliberately and design safe invalidation.', '24 min', 'Intermediate', ['Cache-aside pattern', 'TTL and eviction', 'Hot keys and stampedes']),
          lesson('databases', 'Databases & Storage', 'Choose SQL, NoSQL, indexes, and partitioning from access patterns.', '30 min', 'Intermediate', ['Relational versus document models', 'Index costs', 'Replication and sharding']),
          lesson('queues-streams', 'Queues & Event Streams', 'Decouple work and build resilient asynchronous flows.', '25 min', 'Intermediate', ['Delivery semantics', 'Consumer groups', 'Retries and dead-letter queues']),
          lesson('consistency', 'Consistency, Availability & Transactions', 'Make correctness boundaries explicit in distributed systems.', '28 min', 'Advanced', ['Strong versus eventual consistency', 'Isolation and distributed transactions', 'Conflict resolution']),
        ],
      },
      {
        title: 'High-level design scenarios',
        description: 'Apply the components to realistic products.',
        lessons: [
          lesson('url-shortener', 'Design a URL Shortener', 'A compact exercise in identifiers, read-heavy traffic, and caching.', '28 min', 'Intermediate', ['Key generation', 'Read path caching', 'Expiry and abuse prevention']),
          lesson('notification-system', 'Design a Notification System', 'Fan out reliable multi-channel notifications at scale.', '34 min', 'Advanced', ['Preference and template services', 'Queue-based fan-out', 'Retries, rate limits, and observability']),
          lesson('news-feed', 'Design a Social News Feed', 'Balance fan-out cost, ranking, and freshness.', '36 min', 'Advanced', ['Fan-out on write versus read', 'Feed materialisation', 'Ranking and celebrity users']),
          lesson('payment-system', 'Design a Payment System', 'Model money movement with idempotency and auditable state.', '40 min', 'Advanced', ['Ledger as source of truth', 'Idempotent commands', 'Reconciliation and failure recovery']),
          lesson('video-streaming', 'Design Video Streaming', 'Deliver large media globally with adaptive playback.', '36 min', 'Advanced', ['Upload and transcoding pipeline', 'CDN delivery', 'Adaptive bitrate streaming']),
        ],
      },
      {
        title: 'Low-level design',
        description: 'Translate requirements into maintainable objects and APIs.',
        lessons: [
          lesson('solid-patterns', 'SOLID & Design Patterns', 'Use principles as decision tools, not vocabulary to memorise.', '28 min', 'Intermediate', ['Single responsibility', 'Composition over inheritance', 'Strategy and observer patterns']),
          lesson('parking-lot', 'Design a Parking Lot', 'Model entities, allocation rules, pricing, and extensibility.', '32 min', 'Intermediate', ['Domain model', 'Spot allocation strategy', 'Extensible pricing']),
          lesson('elevator', 'Design an Elevator System', 'Coordinate requests, scheduling, and system state.', '34 min', 'Advanced', ['State machine', 'Scheduling strategy', 'Concurrency boundaries']),
          lesson('meeting-scheduler', 'Design a Meeting Scheduler', 'Manage calendars, conflicts, rooms, and notification workflows.', '30 min', 'Intermediate', ['Availability queries', 'Conflict handling', 'Transactional booking']),
        ],
      },
    ],
  },
  interview: {
    id: 'interview',
    eyebrow: 'Communication under pressure',
    title: 'Interview Preparation',
    description:
      'Prepare behavioural stories, CS fundamentals, and a repeatable plan for the complete interview loop.',
    icon: 'user',
    accent: 'amber',
    sections: [
      {
        title: 'Behavioural interviews',
        description: 'Turn experience into clear evidence of impact.',
        lessons: [
          lesson('star-framework', 'The STAR Framework', 'Structure stories without sounding rehearsed.', '16 min', 'Beginner', ['Set concise context', 'Make your actions unmistakable', 'Quantify the result and learning']),
          lesson('leadership-stories', 'Leadership & Ownership Stories', 'Show initiative, judgment, and follow-through without relying on title.', '22 min', 'Intermediate', ['Ownership under ambiguity', 'Influencing without authority', 'Learning from failure']),
          lesson('conflict-feedback', 'Conflict, Feedback & Disagreement', 'Demonstrate maturity when people or priorities do not align.', '20 min', 'Intermediate', ['Separate people from the problem', 'Use evidence and active listening', 'Close with a durable outcome']),
          lesson('company-motivation', 'Why This Company? Why This Role?', 'Build a specific answer that connects product, role, and personal direction.', '14 min', 'Beginner', ['Company-specific evidence', 'Role fit', 'Credible growth direction']),
        ],
      },
      {
        title: 'CS fundamentals',
        description: 'High-signal concepts for technical screening and discussion.',
        lessons: [
          lesson('operating-systems', 'Operating Systems', 'Processes, threads, memory, scheduling, and concurrency.', '34 min', 'Intermediate', ['Process versus thread', 'Virtual memory', 'Deadlocks and scheduling']),
          lesson('dbms-sql', 'DBMS & SQL', 'Transactions, indexes, normalization, and query reasoning.', '38 min', 'Intermediate', ['ACID and isolation', 'B-tree indexes', 'Joins and query plans']),
          lesson('computer-networks', 'Computer Networks', 'Follow a request through DNS, TCP, TLS, HTTP, and proxies.', '36 min', 'Intermediate', ['TCP lifecycle', 'HTTP semantics', 'DNS, TLS, and load balancers']),
          lesson('git-collaboration', 'Git & Engineering Collaboration', 'Explain version control workflows and safe team practices.', '18 min', 'Beginner', ['Branching and rebasing', 'Code review hygiene', 'Recovering from mistakes']),
        ],
      },
      {
        title: 'Interview execution',
        description: 'Make preparation measurable and repeatable.',
        lessons: [
          lesson('four-week-plan', 'Four-Week Interview Plan', 'Balance DSA, design, fundamentals, and mocks without burnout.', '12 min', 'Beginner', ['Weekly focus blocks', 'Spaced revision', 'Mock interview feedback loop']),
          lesson('coding-round', 'How to Drive a Coding Round', 'Communicate assumptions, tests, complexity, and trade-offs while coding.', '20 min', 'Intermediate', ['Clarify before coding', 'State invariants', 'Test edge cases aloud']),
          lesson('system-design-round', 'How to Drive a Design Round', 'Lead the conversation from requirements to bottlenecks.', '22 min', 'Advanced', ['Prioritise requirements', 'Draw the critical path', 'Deep dive where prompted']),
        ],
      },
    ],
  },
  ai: {
    id: 'ai',
    eyebrow: 'From models to reliable products',
    title: 'AI Engineering',
    description:
      'Learn the practical path from ML foundations to RAG, agents, evaluation, and production deployment.',
    icon: 'sparkles',
    accent: 'cyan',
    sections: [
      {
        title: 'Foundations',
        description: 'The concepts behind modern AI systems.',
        lessons: [
          lesson('ml-foundations', 'ML Foundations', 'Understand training, generalisation, metrics, and data quality.', '32 min', 'Beginner', ['Train, validation, and test splits', 'Bias and variance', 'Metric selection']),
          lesson('neural-networks', 'Neural Networks & Transformers', 'Build intuition for representations, attention, and inference.', '38 min', 'Intermediate', ['Embeddings', 'Attention', 'Training versus inference']),
          lesson('python-tooling', 'Python & AI Tooling', 'Set up reproducible experiments and data workflows.', '24 min', 'Beginner', ['Virtual environments', 'Notebook-to-service workflow', 'Experiment tracking']),
        ],
      },
      {
        title: 'LLM application patterns',
        description: 'Build useful systems around foundation models.',
        lessons: [
          lesson('prompting', 'Prompt Engineering', 'Design clear instructions, context, examples, and output contracts.', '22 min', 'Beginner', ['Instruction hierarchy', 'Few-shot examples', 'Structured outputs']),
          lesson('rag', 'Retrieval-Augmented Generation', 'Ground answers in private or changing knowledge.', '34 min', 'Intermediate', ['Chunking and embeddings', 'Retrieval and reranking', 'Citation and answer generation']),
          lesson('agents', 'Agents & Tool Use', 'Use planning and tools only where deterministic workflows are insufficient.', '32 min', 'Advanced', ['Tool contracts', 'State and memory', 'Guardrails and termination']),
          lesson('fine-tuning', 'Fine-Tuning & Adaptation', 'Know when prompts and retrieval are not enough.', '28 min', 'Advanced', ['Dataset quality', 'Supervised fine-tuning', 'Evaluation before deployment']),
        ],
      },
      {
        title: 'Production AI',
        description: 'Make quality, cost, latency, and safety measurable.',
        lessons: [
          lesson('evaluation', 'Evaluation & Observability', 'Create datasets and checks that reveal regressions before users do.', '30 min', 'Advanced', ['Golden datasets', 'Model-based and human evaluation', 'Trace-level observability']),
          lesson('serving', 'Serving, Cost & Latency', 'Route, cache, batch, and stream model requests efficiently.', '28 min', 'Advanced', ['Model routing', 'Semantic caching', 'Token and latency budgets']),
          lesson('ai-safety', 'Safety & Guardrails', 'Control data exposure, unsafe outputs, and tool permissions.', '24 min', 'Advanced', ['Input and output controls', 'Prompt injection defense', 'Least-privilege tools']),
        ],
      },
    ],
  },
  devops: {
    id: 'devops',
    eyebrow: 'From container to production',
    title: 'DevOps Engineering',
    description:
      'Build reliable delivery and infrastructure skills across containers, orchestration, automation, and SRE.',
    icon: 'route',
    accent: 'emerald',
    sections: [
      {
        title: 'Platform foundation',
        description: 'Understand the environment your services run in.',
        lessons: [
          lesson('linux-networking', 'Linux & Networking', 'Operate processes, files, permissions, and network paths confidently.', '30 min', 'Beginner', ['Processes and signals', 'Filesystem and permissions', 'Ports, DNS, and routing']),
          lesson('docker', 'Docker', 'Package applications into predictable, secure container images.', '28 min', 'Beginner', ['Images and layers', 'Multi-stage builds', 'Volumes and networking']),
          lesson('kubernetes', 'Kubernetes', 'Run and reconcile container workloads across a cluster.', '38 min', 'Intermediate', ['Pods and deployments', 'Services and ingress', 'Configuration and secrets']),
          lesson('cloud-foundations', 'Cloud Foundations', 'Reason about compute, network, storage, and managed services.', '30 min', 'Intermediate', ['Regions and availability zones', 'Identity and access', 'Cost-aware architecture']),
        ],
      },
      {
        title: 'Infrastructure & delivery',
        description: 'Automate repeatable environments and safe releases.',
        lessons: [
          lesson('terraform', 'Terraform & Infrastructure as Code', 'Model infrastructure declaratively and review changes safely.', '32 min', 'Intermediate', ['State management', 'Modules', 'Plan and apply workflow']),
          lesson('cicd', 'CI/CD Pipelines', 'Turn every change into a tested, observable deployment.', '30 min', 'Intermediate', ['Build and test stages', 'Artifact promotion', 'Rollback strategy']),
          lesson('release-strategies', 'Release Strategies', 'Reduce risk with rolling, blue-green, and canary releases.', '22 min', 'Intermediate', ['Progressive delivery', 'Feature flags', 'Automated rollback signals']),
        ],
      },
      {
        title: 'Reliability & security',
        description: 'Operate systems after deployment.',
        lessons: [
          lesson('observability', 'Metrics, Logs & Traces', 'Connect symptoms to root causes with useful telemetry.', '30 min', 'Intermediate', ['Golden signals', 'Structured logs', 'Distributed tracing']),
          lesson('sre', 'SRE & Incident Response', 'Set reliability targets and respond to failure without blame.', '32 min', 'Advanced', ['SLIs, SLOs, and error budgets', 'Incident command', 'Actionable postmortems']),
          lesson('devsecops', 'DevSecOps', 'Move security checks into design, build, and runtime workflows.', '28 min', 'Advanced', ['Dependency and image scanning', 'Secrets management', 'Least privilege']),
        ],
      },
    ],
  },
  competitive: {
    id: 'competitive',
    eyebrow: 'Speed with disciplined fundamentals',
    title: 'Competitive Programming',
    description:
      'Grow from implementation basics to contest-ready graph, math, and dynamic-programming techniques.',
    icon: 'trophy',
    accent: 'rose',
    sections: [
      {
        title: 'Contest foundation',
        description: 'Write correct solutions quickly under constraints.',
        lessons: [
          lesson('complexity-constraints', 'Constraints to Complexity', 'Infer the intended solution class from limits before coding.', '16 min', 'Beginner', ['Map n to viable complexity', 'Estimate constant factors', 'Spot multiple-test-case cost']),
          lesson('implementation', 'Fast, Safe Implementation', 'Use templates, assertions, and edge-case discipline.', '20 min', 'Beginner', ['Input/output setup', 'Integer bounds', 'Local testing strategy']),
          lesson('number-theory', 'Number Theory', 'Build a toolkit for divisibility, primes, modular arithmetic, and combinatorics.', '34 min', 'Intermediate', ['GCD and extended Euclid', 'Sieve', 'Modular exponentiation']),
        ],
      },
      {
        title: 'Core contest techniques',
        description: 'Patterns used across Codeforces difficulty levels.',
        lessons: [
          lesson('greedy-proof', 'Greedy Construction', 'Find an ordering or invariant that makes local choices provably safe.', '28 min', 'Intermediate', ['Exchange arguments', 'Sorting transformations', 'Counterexample testing']),
          lesson('graph-contests', 'Graph Techniques', 'Move beyond traversal into components, DAGs, and shortest paths.', '36 min', 'Advanced', ['Components and bipartiteness', 'Topological DP', 'Shortest path variants']),
          lesson('contest-dp', 'Contest Dynamic Programming', 'Compress state and optimise transitions for strict constraints.', '40 min', 'Advanced', ['State reduction', 'Prefix optimisation', 'Bitmask DP']),
          lesson('range-queries', 'Range Queries', 'Apply Fenwick, segment, sparse, and offline techniques.', '36 min', 'Advanced', ['Static versus dynamic queries', 'Coordinate compression', 'Offline ordering']),
        ],
      },
    ],
  },
  newsletter: {
    id: 'newsletter',
    eyebrow: 'Engineering stories worth retaining',
    title: 'Engineering Newsletter',
    description:
      'Short, practical architecture breakdowns designed for weekly learning and interview revision.',
    icon: 'mail',
    accent: 'indigo',
    sections: [
      {
        title: 'Architecture stories',
        description: 'Real engineering decisions, simplified.',
        lessons: [
          lesson('zero-to-million', 'Scaling from Zero to One Million Users', 'A staged architecture journey from one server to a resilient platform.', '12 min', 'Beginner', ['Scale only after measuring', 'Separate stateless compute', 'Add cache and queues intentionally']),
          lesson('cache-stampede', 'How Cache Stampedes Take Systems Down', 'Why a popular key expiring can overload the source of truth.', '10 min', 'Intermediate', ['Request coalescing', 'Jittered TTLs', 'Stale-while-revalidate']),
          lesson('idempotency', 'Idempotency in Payment APIs', 'Make retries safe when networks and clients fail unpredictably.', '11 min', 'Intermediate', ['Idempotency keys', 'Result persistence', 'Conflict semantics']),
          lesson('database-index', 'The Index That Made the Query Slower', 'Understand selectivity, write cost, and planner choices.', '9 min', 'Intermediate', ['Index selectivity', 'Composite ordering', 'Explain plans']),
        ],
      },
      {
        title: 'Engineering practice',
        description: 'Habits that improve systems and teams.',
        lessons: [
          lesson('good-alerts', 'What Makes an Alert Actionable?', 'Design alerts around user impact and a clear response.', '8 min', 'Beginner', ['Symptom-based alerts', 'Runbook ownership', 'Noise budgets']),
          lesson('safe-migrations', 'Safe Database Migrations', 'Use expand-and-contract to change schemas without downtime.', '12 min', 'Advanced', ['Backward-compatible deploys', 'Backfill controls', 'Delayed cleanup']),
          lesson('postmortems', 'Blameless Postmortems That Actually Help', 'Convert an incident timeline into durable system improvements.', '10 min', 'Intermediate', ['Contributing conditions', 'Specific follow-ups', 'Learning over blame']),
        ],
      },
    ],
  },
};

export const getTrackLessons = (track) =>
  track?.sections.flatMap((section) =>
    section.lessons.map((item) => ({ ...item, sectionTitle: section.title })),
  ) || [];

export const getEngineeringLesson = (trackId, lessonSlug) => {
  const track = ENGINEERING_TRACKS[trackId];
  const lessons = getTrackLessons(track);
  const index = lessons.findIndex((item) => item.slug === lessonSlug);
  return {
    track,
    lesson: lessons[index],
    previous: index > 0 ? lessons[index - 1] : null,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null,
    index,
    total: lessons.length,
  };
};
