const TRACK_WRITING = {
  dsa: {
    context:
      'Algorithmic problem solving is the practice of turning constraints into structure. The goal is not to remember one implementation; it is to identify the state, invariant, and operation that make the implementation inevitable.',
    validation:
      'Validate the idea with a hand trace before coding. Record what changes after each operation, what must remain true, and why the algorithm cannot miss a valid answer.',
    tradeoff:
      'Compare the optimised approach with a direct baseline. State time complexity, auxiliary space, input assumptions, and the condition that makes the optimisation correct.',
    deliverable: 'Write a complete program, test edge cases, and explain the invariant without referring to the code.',
  },
  'system-design': {
    context:
      'System design begins with requirements and access patterns. Components are useful only when they solve a measured bottleneck or enforce a required correctness boundary.',
    validation:
      'Trace the critical request path and at least one failure path. At each boundary, define ownership, timeout, retry behaviour, observability, and the source of truth.',
    tradeoff:
      'Every scaling decision changes cost, operational complexity, latency, consistency, or failure behaviour. Make the chosen trade-off explicit and tie it back to a requirement.',
    deliverable: 'Draw the minimum viable architecture, estimate its capacity, and defend one deliberate trade-off.',
  },
  interview: {
    context:
      'Interview preparation is a communication discipline. A correct idea has limited value if the interviewer cannot follow the assumptions, decision process, evidence, and result.',
    validation:
      'Practise aloud and use a timer. Remove background that does not change the decision, replace vague claims with evidence, and end with reflection.',
    tradeoff:
      'A strong answer balances completeness with signal. Include enough context to understand the problem, then spend most of the time on your reasoning and contribution.',
    deliverable: 'Record a concise answer, review it once, and rewrite the opening and closing for clarity.',
  },
  ai: {
    context:
      'AI engineering treats model behaviour as one component of a larger product system. Data quality, evaluation, latency, cost, safety, and fallback behaviour are part of the design from the beginning.',
    validation:
      'Create representative examples before changing the system. Measure the new behaviour against the same evaluation set and inspect regressions, not only average improvement.',
    tradeoff:
      'More capable models and more flexible agent loops usually increase latency, cost, and unpredictability. Add complexity only when a measured quality gap justifies it.',
    deliverable: 'Define a small evaluation set, a baseline, a failure taxonomy, and one measurable improvement.',
  },
  devops: {
    context:
      'DevOps is the engineering of safe, repeatable change. Infrastructure, delivery, and operations should make desired state visible and recovery predictable.',
    validation:
      'Test the change in the smallest realistic environment, observe health during rollout, and verify rollback before treating the automation as complete.',
    tradeoff:
      'Automation reduces repeated manual work but introduces a new system that needs ownership, security, observability, and maintenance.',
    deliverable: 'Document desired state, release steps, health signals, rollback conditions, and ownership.',
  },
  competitive: {
    context:
      'Competitive programming rewards fast proof and reliable execution. Constraints narrow the solution space; an invariant or observation then turns that solution into code.',
    validation:
      'Construct tests that attack the proof: minimum input, maximum input, repeated values, adversarial order, and the smallest counterexample to a tempting wrong approach.',
    tradeoff:
      'The shortest implementation is not always the safest. Prefer a template you can prove and debug within contest time.',
    deliverable: 'Write the observation, proof, complexity, implementation, and five adversarial tests.',
  },
  newsletter: {
    context:
      'Engineering stories are valuable when they preserve the constraints behind a decision. The reusable lesson is rarely the tool itself; it is the reasoning that made the tool appropriate.',
    validation:
      'Summarise the story as problem, constraint, decision, trade-off, and result. If one part is missing, the architecture is not yet transferable.',
    tradeoff:
      'A solution that worked at one company may be unnecessary elsewhere. Separate scale-dependent choices from principles that hold across systems.',
    deliverable: 'Create a five-box architecture sketch and a one-paragraph decision record.',
  },
};

const EXAMPLES = {
  'what-is-dsa-and-patterns': 'Compare storing values in an array, map, stack, and heap, then connect each structure to the operation it makes efficient.',
  'how-to-solve-dsa-problems': 'Use Two Sum: begin with the O(n²) pair check, identify repeated lookup, then introduce a map that stores values already seen.',
  'solve-related-problems': 'After Two Sum, solve sorted Two Sum, Three Sum, and subarray-sum variants while recording what stayed the same and what changed.',
  'big-o-notation': 'For a loop whose index doubles, list the values 1, 2, 4, 8… until n. The number of steps is the exponent needed to reach n, so the work is logarithmic.',
  arrays: 'Rotate an array and compare three choices: an extra array, repeated shifting, and reverse-based in-place rotation.',
  strings: 'Group anagrams using sorted strings and frequency signatures, then compare runtime and memory.',
  'bit-manipulation': 'Find the unique value when every other value appears twice by using XOR cancellation.',
  'hash-tables': 'Group anagrams by a canonical key and explain why the key must represent character frequency or sorted order.',
  matrix: 'Rotate a square matrix by transposing it and reversing each row while tracking coordinate changes.',
  'linked-list': 'Reverse a linked list while preserving the next node before rewiring the current pointer.',
  stacks: 'Use a monotonic stack to find the next greater element and explain why every item is pushed and popped at most once.',
  queues: 'Perform level-order tree traversal by processing exactly the queue size captured at the start of each level.',
  deque: 'Maintain decreasing values in a deque so the front always gives the maximum of the current window.',
  'two-pointers': 'In a sorted array, move the left pointer when the sum is too small and the right pointer when it is too large.',
  'sliding-window': 'Find the longest substring without repeated characters by growing the right edge and moving the left edge past a duplicate.',
  'prefix-sum': 'Convert a range-sum query into prefix[right + 1] − prefix[left], then extend the idea to count subarrays with a target sum.',
  'kadanes-algorithm': 'At each value, choose whether to extend the previous subarray or restart, while preserving the best answer seen globally.',
  sorting: 'Trace merge sort and quicksort on the same input, then compare stability, worst-case time, and extra memory.',
  'divide-and-conquer': 'Count inversions by dividing the array and counting cross-half inversions during merge.',
  'binary-search': 'Find the first position whose value is at least a target while maintaining a half-open search interval.',
  intervals: 'Sort meeting intervals by start time, merge overlaps, and state exactly when a new merged interval must begin.',
  'recursion-backtracking': 'Generate all valid parentheses while pruning any prefix with more closing than opening brackets.',
  'binary-tree': 'Compute tree height with postorder recursion, then use the returned heights to detect an unbalanced subtree.',
  'bst-ordered-set': 'Find the predecessor and successor of a target by using the BST ordering invariant.',
  heaps: 'Maintain the largest K elements seen so far with a min-heap of size K.',
  graphs: 'Model course prerequisites as a directed graph and use indegrees to produce a topological order.',
  tries: 'Insert words character by character, then walk the shared prefix to implement autocomplete.',
  'fenwick-tree': 'Apply point updates and prefix-sum queries while tracing index movement through the least-significant set bit.',
  'segment-tree': 'Store range sums in a segment tree, update one value, and recompute only nodes on its root path.',
  'sparse-table': 'Precompute range minima for powers of two and answer a query with two overlapping blocks.',
  'data-structure-design': 'Design an O(1) LRU cache by combining a hash map with a doubly linked list.',
  greedy: 'Schedule the maximum number of non-overlapping meetings by selecting the next meeting with the earliest finishing time.',
  'dynamic-programming': 'For coin change, define dp[x] as the minimum coins needed for amount x and derive transitions from smaller amounts.',
  'maths-geometry': 'Use cross products to determine point orientation while guarding against integer overflow.',
  'advanced-topics': 'Use a disjoint-set structure to add edges and detect whether two vertices are already connected.',

  'interview-framework': 'Design a notification platform by clarifying channels, scale, delivery guarantees, preferences, and success metrics before drawing services.',
  'capacity-estimation': 'Estimate daily active users, actions per user, peak RPS, payload size, and one year of storage for a photo-sharing service.',
  'api-data-model': 'Design create, read, and paginate APIs for comments while keeping author, post, and moderation ownership explicit.',
  'load-balancing': 'Trace a request through DNS and a Layer 7 load balancer, then remove one unhealthy application instance.',
  caching: 'Add cache-aside reads to a product page and handle a hot key immediately after its TTL expires.',
  databases: 'Choose an index for orders filtered by customer and sorted by creation time; explain its write and storage cost.',
  'queues-streams': 'Accept an image upload synchronously, then queue transcoding, thumbnail generation, and notification work.',
  consistency: 'Compare inventory reservation with social-like counts to show why they need different consistency guarantees.',
  'url-shortener': 'Generate short identifiers, cache popular redirects, and partition the mapping store by identifier.',
  'notification-system': 'Fan out an event to email, push, and SMS workers while respecting preferences, rate limits, and retry policies.',
  'news-feed': 'Combine precomputed feeds for ordinary users with read-time fan-out for celebrity accounts.',
  'payment-system': 'Use an idempotency key and append-only ledger so a retried charge cannot move money twice.',
  'video-streaming': 'Upload one source video, transcode multiple bitrates, store segments, and serve them through a CDN.',
  'solid-patterns': 'Replace a growing payment-method conditional with a strategy interface and independent implementations.',
  'parking-lot': 'Model floors, spots, vehicles, tickets, allocation strategy, and pricing without coupling them to one vehicle type.',
  elevator: 'Represent elevator motion and door state explicitly, then route hall requests through a scheduling policy.',
  'meeting-scheduler': 'Find a shared free interval and reserve it atomically so simultaneous booking attempts cannot conflict.',

  'star-framework': 'Answer a production-incident question with two sentences of context, a clear personal action sequence, measurable recovery, and one learning.',
  'leadership-stories': 'Describe a reliability improvement you initiated before it became an outage, including how you aligned other teams.',
  'conflict-feedback': 'Explain a design disagreement by presenting both constraints, the experiment or evidence used, and the decision that followed.',
  'company-motivation': 'Connect one company product decision, one responsibility in the role, and one direction in your own growth.',
  'operating-systems': 'Follow a program from process creation through virtual-memory translation, scheduling, blocking I/O, and context switching.',
  'dbms-sql': 'Analyse a slow join with an execution plan, add an appropriate index, and explain the transaction isolation needed around updates.',
  'computer-networks': 'Trace opening an HTTPS page through DNS lookup, TCP connection, TLS negotiation, HTTP request, and response caching.',
  'git-collaboration': 'Recover a feature branch after upstream changes using fetch, rebase, conflict resolution, tests, and a safe force push.',
  'four-week-plan': 'Build a weekly calendar with focused DSA, design, fundamentals, behavioural practice, mocks, and recovery blocks.',
  'coding-round': 'Solve a medium problem while stating assumptions, baseline, invariant, complexity, and edge-case tests before implementation.',
  'system-design-round': 'Drive a 45-minute design from requirements through APIs, data model, critical path, bottleneck, and one deep dive.',

  'ml-foundations': 'Train a binary classifier, choose precision or recall from business cost, and diagnose overfitting using validation curves.',
  'neural-networks': 'Trace tokens through embeddings, self-attention, feed-forward layers, and next-token prediction.',
  'python-tooling': 'Move a notebook experiment into a versioned package with configuration, tests, data contracts, and tracked runs.',
  prompting: 'Turn a vague extraction prompt into instructions, schema, examples, refusal rules, and automated checks.',
  rag: 'Chunk a policy handbook, retrieve candidate passages, rerank them, and generate an answer with source citations.',
  agents: 'Give an agent a search tool and a database tool with strict schemas, budgets, and a deterministic termination condition.',
  'fine-tuning': 'Compare prompt changes, RAG, and supervised fine-tuning for a domain-specific classification task.',
  evaluation: 'Build a golden dataset covering typical, edge, adversarial, and abstention cases; score every release against it.',
  serving: 'Route simple queries to a smaller model, cache stable answers, stream long responses, and cap token budgets.',
  'ai-safety': 'Test a document assistant against prompt injection embedded in retrieved content and limit every tool to least privilege.',

  'linux-networking': 'Diagnose a service that is running but unreachable using process status, listening ports, DNS, routes, firewall, and logs.',
  docker: 'Build a small, non-root runtime image with a multi-stage Dockerfile and an explicit health check.',
  kubernetes: 'Deploy a stateless API with requests, limits, probes, a service, rolling updates, and a controlled rollback.',
  'cloud-foundations': 'Place a public load balancer in front of private application instances and a managed database across availability zones.',
  terraform: 'Create a reusable network module, store state remotely, review the plan, and handle drift safely.',
  cicd: 'Build once, test the artifact, scan it, promote it between environments, and deploy with an automated health gate.',
  'release-strategies': 'Send five percent of traffic to a canary and automatically stop when latency or error rate crosses its budget.',
  observability: 'Follow one failing request through a trace, correlate it with structured logs, and confirm impact in service-level metrics.',
  sre: 'Define an availability SLO, calculate its error budget, and use the budget to decide release pace.',
  devsecops: 'Scan dependencies and images, issue short-lived credentials, sign artifacts, and enforce admission policies.',

  'complexity-constraints': 'Read n = 200,000 and reject quadratic work before exploring sorting, hashing, or linear scans.',
  implementation: 'Use a stable contest template, isolate each test case, protect integer bounds, and print only required output.',
  'number-theory': 'Precompute primes with a sieve and answer repeated factorisation questions efficiently.',
  'greedy-proof': 'Sort candidates by the choice criterion, then use an exchange argument to replace the first differing choice in any optimal answer.',
  'graph-contests': 'Condense strongly connected components and run dynamic programming on the resulting DAG.',
  'contest-dp': 'Reduce a two-dimensional state by observing that each transition depends only on the previous row.',
  'range-queries': 'Coordinate-compress values, process point updates with a Fenwick tree, and answer prefix queries in logarithmic time.',

  'zero-to-million': 'Begin with one application and database, then add stateless replicas, caching, asynchronous work, and partitioning only as measurements demand.',
  'cache-stampede': 'Let a popular key expire under load, observe the database spike, then add request coalescing, TTL jitter, and stale serving.',
  idempotency: 'Retry the same payment request with one idempotency key and return the stored result without executing the charge again.',
  'database-index': 'Compare query plans before and after a low-selectivity index, then replace it with a composite index matching the access pattern.',
  'good-alerts': 'Replace a CPU-only page with an alert on sustained user-visible errors and attach an owner and runbook.',
  'safe-migrations': 'Add a nullable column, deploy dual-compatible code, backfill gradually, enforce the constraint, and remove the old path later.',
  postmortems: 'Build a factual incident timeline, identify contributing conditions, and create owned actions that change the system.',
};

const SNIPPETS = {
  'binary-search': `int lowerBound(int[] nums, int target) {
    int left = 0, right = nums.length;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}`,
  'sliding-window': `int left = 0;
for (int right = 0; right < values.length; right++) {
    add(values[right]);
    while (!windowIsValid()) {
        remove(values[left++]);
    }
    recordAnswer(left, right);
}`,
  'dynamic-programming': `int[] dp = new int[target + 1];
Arrays.fill(dp, INF);
dp[0] = 0;
for (int amount = 1; amount <= target; amount++) {
    for (int choice : choices) {
        if (choice <= amount) {
            dp[amount] = Math.min(dp[amount], dp[amount - choice] + 1);
        }
    }
}`,
  caching: `value = cache.get(key)
if value is missing:
    value = database.read(key)
    cache.set(key, value, ttl_with_jitter)
return value`,
  idempotency: `begin transaction
  existing = find request by idempotency_key
  if existing: return existing.result
  result = execute business operation
  save idempotency_key and result
commit`,
  docker: `FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html`,
  kubernetes: `readinessProbe:
  httpGet:
    path: /ready
    port: 8080
livenessProbe:
  httpGet:
    path: /health
    port: 8080`,
  rag: `question
  → query embedding
  → candidate retrieval
  → reranking
  → context assembly
  → grounded generation
  → cited answer`,
};

const conceptParagraph = (trackId, lesson, point, index) => {
  const track = TRACK_WRITING[trackId] || TRACK_WRITING.dsa;
  const openings = [
    `${point} is a core part of ${lesson.title} because it determines how the solution behaves when the input or system changes.`,
    `Treat ${point.toLowerCase()} as a decision you should be able to justify, not a phrase to memorise.`,
    `The practical value of ${point.toLowerCase()} appears when the straightforward approach becomes slow, unsafe, expensive, or difficult to operate.`,
  ];
  return {
    title: point,
    body: `${openings[index % openings.length]} ${track.context}`,
    application: `${track.validation} For this concept, describe the condition where “${point}” applies and one case where it does not.`,
  };
};

export const getEngineeringDocument = (trackId, lesson) => {
  const track = TRACK_WRITING[trackId] || TRACK_WRITING.dsa;
  const example = EXAMPLES[lesson.slug] || `Build a small example for ${lesson.title}, state the starting conditions, apply each key idea, and verify the result against the original requirement.`;
  const concepts = lesson.keyPoints.map((point, index) => conceptParagraph(trackId, lesson, point, index));
  const questions = [
    `What problem does ${lesson.title} solve, and what is the simplest valid baseline?`,
    `How would you explain ${lesson.keyPoints[0].toLowerCase()} using a concrete example?`,
    `Which assumption or constraint would make you choose a different approach?`,
    `What failure mode or edge case is easiest to miss?`,
    `How would you verify the solution before shipping or submitting it?`,
  ];

  return {
    introduction: [
      lesson.summary,
      track.context,
      `By the end of this document, you should be able to explain ${lesson.keyPoints.join(', ').toLowerCase()}, apply the idea to a fresh example, and defend the important trade-offs.`,
    ],
    concepts,
    example,
    tradeoff: track.tradeoff,
    deliverable: track.deliverable,
    questions,
    snippet: SNIPPETS[lesson.slug] || null,
    checklist: [
      `I can define ${lesson.title} without using tool names as the explanation.`,
      `I can explain ${lesson.keyPoints[0].toLowerCase()} with a small example.`,
      'I can state the main trade-off, failure mode, or complexity.',
      'I can recognise when this approach should not be used.',
      'I can complete the practice deliverable without reading the document.',
    ],
  };
};
