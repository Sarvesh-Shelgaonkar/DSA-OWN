/**
 * Resume / HR interview bank.
 * Original content written for MyDSA. Rendered by InterviewBankView.
 * Block types are documented in src/components/ui/NotesBlock.jsx.
 */

export const resumeBank = {
  id: 'resume',
  slug: 'resume',
  eyebrow: 'Interview prep',
  title: 'Resume & HR Interview',
  short: 'Resume',
  icon: 'user',
  accent: 'text-primary',
  description:
    'Every question interviewers actually ask off your resume — from "tell me about yourself" to the hard follow-ups on your projects — with a framework and a ready-to-say answer for each.',
  tagline: 'Walk in able to defend every single line on your resume.',
  sections: [
    {
      id: 'golden-rules',
      title: 'Golden rules before you start',
      icon: 'bolt',
      blocks: [
        { type: 'p', text: 'A resume interview is simple: the interviewer picks lines from your resume and keeps asking "why", "how", and "what if" until you either run out of depth or prove real ownership. Your job is to make every bullet defensible.' },
        {
          type: 'ul',
          items: [
            'Never write anything you cannot explain for 3 minutes. If you list Docker, expect "what problem did Docker solve for you?"',
            'Quantify impact. "Reduced API latency by 40% (800ms → 480ms)" beats "improved performance".',
            'Use STAR for behavioural answers: Situation, Task, Action, Result. Keep 60–90 seconds.',
            'Own your work honestly. "I built X, my teammate handled Y, I integrated both" is a strong answer, not a weak one.',
            'Every project should have a one-line pitch, a 30-second version, and a 3-minute deep dive ready.',
          ],
        },
        { type: 'tip', text: 'Before the interview, print your resume and write 3 possible questions next to every single bullet. If you cannot, rewrite the bullet.' },
      ],
    },
    {
      id: 'tell-me-about-yourself',
      title: 'Tell me about yourself',
      icon: 'user',
      blocks: [
        { type: 'p', text: 'The most common opener and the one candidates fumble most. It is not your life story — it is a 60–90 second trailer that steers the interview toward your strengths.' },
        { type: 'h', text: 'The Present → Past → Future framework' },
        {
          type: 'ol',
          items: [
            'Present: who you are right now (role / year / focus) in one line.',
            'Past: 1–2 relevant experiences or projects that built your skills, with a concrete result.',
            'Future: why you are excited about this role / company specifically.',
          ],
        },
        { type: 'answer', text: 'I\'m a final-year CS student focused on backend and DSA. Most recently I built a full-stack learning platform where I designed a Node/Express + MongoDB API with JWT auth and cut a slow dashboard query from 2s to under 300ms by adding the right indexes. Before that I interned where I shipped a feature used by real users, which taught me to write code others can maintain. I enjoy backend systems, and this role excites me because it\'s exactly that kind of API and scale work.' },
        { type: 'tip', text: 'End on the role. That invites the interviewer to go "great, tell me more about that project" — steering them to ground you\'ve prepared.' },
        {
          type: 'qa',
          items: [
            { q: 'Should I mention hobbies?', a: 'Only one line, only if it shows a relevant trait (e.g. competitive chess → strategy). Keep it technical-first.' },
            { q: 'How long should it be?', a: '60–90 seconds. If you go past 2 minutes you will lose them.' },
          ],
        },
      ],
    },
    {
      id: 'projects',
      title: 'Project deep-dive questions',
      icon: 'layers',
      blocks: [
        { type: 'p', text: 'This is where most resume interviews are won or lost. Expect the interviewer to pick your "biggest" project and drill for 10+ minutes. Prepare a story: problem → your design → trade-offs → result → what you\'d do differently.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Walk me through this project.', a: 'Give the 60-second version: the problem it solves, the stack, your specific role, and one measurable outcome. Do not narrate every file.' },
            { level: 'Easy', q: 'Why did you choose this tech stack?', a: 'Tie each choice to a requirement: "MongoDB because the data was document-shaped and schema-flexible; React because the UI was highly interactive." Avoid "because it was popular".' },
            { level: 'Medium', q: 'What was the hardest bug/challenge and how did you solve it?', a: 'Pick a real one. Describe how you reproduced it, formed a hypothesis, and verified the fix — the process matters more than the bug.' },
            { level: 'Medium', q: 'How does data flow from the UI to the database?', a: 'Trace one concrete request end to end: component → API call → route → validation → DB query → response → state update. Concrete beats abstract.' },
            { level: 'Hard', q: 'How would you scale this to 1 million users?', a: 'Talk bottlenecks: add caching (Redis) for hot reads, database indexes and read replicas, stateless servers behind a load balancer, a CDN for static assets, and async processing (queues) for heavy work.' },
            { level: 'Hard', q: 'What would you do differently if you rebuilt it?', a: 'Show growth: "I\'d add automated tests from day one, extract config to env vars, and add proper error monitoring." Never say "nothing".' },
            { level: 'Hardest', q: 'Prove this is actually your work — explain a specific design decision and its alternative.', a: 'Pick one real decision, state the alternative you rejected, and why. E.g. "I used JWT in httpOnly cookies over localStorage to reduce XSS token theft, trading off some CSRF handling which I covered with SameSite." Depth = credibility.' },
          ],
        },
        { type: 'tip', text: 'If you used a tutorial or template, say what you added or changed. "I followed a starter but redesigned the auth flow and added rate limiting" is honest and impressive.' },
      ],
    },
    {
      id: 'skills',
      title: 'Skills & "why did you list this?"',
      icon: 'check',
      blocks: [
        { type: 'p', text: 'Anything in your skills section is fair game. Interviewers love to test whether you actually know a listed tool or just padded the resume.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Rate yourself out of 10 in X.', a: 'Be honest and calibrated. 7 is confident-but-humble. If you say 9/10, expect deep questions. Add "I\'d say 7 — comfortable building with it, still learning advanced internals."' },
            { level: 'Medium', q: 'You listed Git — explain merge vs rebase.', a: 'Merge preserves history and creates a merge commit; rebase rewrites commits onto a new base for a linear history. Rebase shared branches carefully — never rebase pushed public history.' },
            { level: 'Hard', q: 'You know React — what happens on a re-render and how do you prevent unnecessary ones?', a: 'A state/prop change re-runs the component and diffs the virtual DOM. Prevent waste with memoization (React.memo, useMemo, useCallback), stable keys, and lifting state only as high as needed.' },
          ],
        },
        { type: 'tip', text: 'Split skills honestly into "Proficient" and "Familiar". Interviewers respect the candidate who says "I\'ve used Kafka in one project, so familiar not expert" far more than a bluffer.' },
      ],
    },
    {
      id: 'behavioural',
      title: 'Behavioural & HR questions (STAR)',
      icon: 'heart',
      blocks: [
        { type: 'p', text: 'These test attitude, teamwork, and self-awareness. Answer with real, specific stories using STAR (Situation, Task, Action, Result). Have 3–4 flexible stories ready that you can adapt to many questions.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What are your strengths?', a: 'Pick 2 relevant strengths, each with a one-line proof. "I\'m persistent — I debugged a race condition over two days instead of hacking around it."' },
            { level: 'Easy', q: 'What is your biggest weakness?', a: 'Give a real, non-fatal weakness plus what you\'re doing about it. "I used to over-engineer early; now I ship a simple version first, then iterate." Avoid clichés like "I\'m a perfectionist".' },
            { level: 'Medium', q: 'Tell me about a conflict with a teammate.', a: 'STAR: describe the disagreement, that you listened to their view, proposed a data-backed compromise, and the positive outcome. Show maturity, not that you "won".' },
            { level: 'Medium', q: 'Tell me about a time you failed.', a: 'Own a real failure, focus 70% on what you learned and changed afterwards. Growth mindset is the whole point.' },
            { level: 'Hard', q: 'Why should we hire you over other candidates?', a: 'Map your top 2–3 strengths directly to their job description, back each with proof, and show genuine interest in their product. Confidence without arrogance.' },
            { level: 'Hard', q: 'Where do you see yourself in 5 years?', a: 'Show ambition aligned with growth: "Becoming a strong engineer who owns systems and mentors juniors." Avoid naming a title that implies you\'ll leave.' },
          ],
        },
        { type: 'tip', text: 'Prepare stories for: a challenge you overcame, a leadership/initiative moment, a failure, and a teamwork/conflict situation. Almost every behavioural question maps to one of these.' },
      ],
    },
    {
      id: 'why-questions',
      title: 'Why this company / role / gaps',
      icon: 'target',
      blocks: [
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Why do you want to work here?', a: 'Show you researched them: mention a specific product, value, or tech they use, and connect it to your goals. Generic answers ("great culture") signal no prep.' },
            { level: 'Medium', q: 'Why are you leaving / why this role over higher studies?', a: 'Frame it forward-looking and positive — what you\'re moving toward, not what you\'re escaping. Never bad-mouth a past employer.' },
            { level: 'Medium', q: 'There\'s a gap / low CGPA on your resume. Explain.', a: 'Be honest and brief, then pivot to evidence of ability: projects, internships, or upward trend. Do not over-apologise.' },
            { level: 'Hard', q: 'This role is below your qualification — won\'t you get bored?', a: 'Reframe: emphasise what you want to learn there and the impact you can have. Show the role is a deliberate choice, not a fallback.' },
          ],
        },
      ],
    },
    {
      id: 'ask-them',
      title: 'Questions YOU should ask them',
      icon: 'sparkles',
      blocks: [
        { type: 'p', text: 'When they ask "do you have any questions?", saying "no" is a red flag. Good questions show genuine interest and let you evaluate them. Ask 2–3.' },
        {
          type: 'ul',
          items: [
            'What does a typical day/week look like for this role?',
            'How is success measured in the first 3–6 months?',
            'What are the biggest technical challenges the team is facing right now?',
            'How does the team handle code reviews and testing?',
            'What growth or mentorship opportunities exist here?',
            'What do you personally enjoy most about working here? (asked to the interviewer)',
          ],
        },
        { type: 'tip', text: 'Avoid leading with salary/leave/WFH in a technical round. Save compensation for HR/offer stage unless they bring it up.' },
      ],
    },
    {
      id: 'closing',
      title: 'Closing & etiquette',
      icon: 'award',
      blocks: [
        {
          type: 'ul',
          items: [
            'Thank the interviewer and restate genuine interest in one line.',
            'Send a short thank-you email within 24 hours if you have their contact.',
            'If you didn\'t know something, it\'s fine to say "I don\'t know, but here\'s how I\'d find out."',
            'Keep energy up till the end — the last impression sticks.',
          ],
        },
        { type: 'answer', text: 'Thank you for your time — this was a great conversation and it\'s made me even more excited about the role. I\'d love the chance to contribute to the team.' },
      ],
    },
  ],
};

export default resumeBank;
