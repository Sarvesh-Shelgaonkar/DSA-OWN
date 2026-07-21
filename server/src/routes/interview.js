import { Router } from 'express';

const router = Router();

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const buildPrompt = (resumeText, role) => `You are an expert technical interviewer and career coach.
Analyse the candidate's resume below and produce a realistic interview prep pack${
  role ? ` for the target role: "${role}"` : ''
}.

Rules:
- Base every question on the ACTUAL content of the resume (their projects, skills, experience, education).
- Give concise, model answers in clear, simple English that the candidate can actually say.
- Cover a full difficulty range: easy (warm-ups), medium, hard, and hardest (deep/edge-case/system-design style).
- Be honest and specific, not generic.

Return ONLY valid JSON matching exactly this shape (no markdown, no commentary):
{
  "summary": "2-3 sentence read of the resume from an interviewer's perspective",
  "strengths": ["3-5 strengths to lead with"],
  "gaps": ["3-5 weak spots or things to prepare for"],
  "questions": {
    "easy": [{"q": "question", "a": "model answer"}],
    "medium": [{"q": "question", "a": "model answer"}],
    "hard": [{"q": "question", "a": "model answer"}],
    "hardest": [{"q": "question", "a": "model answer"}]
  },
  "projectDeepDives": [{"project": "project name from resume", "questions": [{"q": "question", "a": "model answer"}]}],
  "questionsToAsk": ["3-5 smart questions the candidate should ask the interviewer"],
  "tips": ["3-5 tailored preparation tips"]
}

Aim for 3-5 items in each questions bucket and 2-3 project deep-dives with 3-4 questions each.

RESUME:
"""
${resumeText}
"""`;

router.post('/analyze', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'AI analysis is not configured on the server (missing GEMINI_API_KEY).' });
  }

  const resumeText = String(req.body?.resumeText || '').slice(0, 20000).trim();
  const role = String(req.body?.role || '').slice(0, 120).trim();

  if (resumeText.length < 40) {
    return res.status(400).json({ error: 'Resume text is too short to analyse.' });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000);

    const gRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(resumeText, role) }] }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.6, maxOutputTokens: 4096 },
      }),
    }).finally(() => clearTimeout(timeout));

    if (!gRes.ok) {
      const detail = await gRes.text().catch(() => '');
      console.error('[interview] gemini error', gRes.status, detail.slice(0, 500));
      if (gRes.status === 429) {
        return res.status(429).json({
          error:
            'The AI is rate-limited or the API key has no available quota. Check your Google AI Studio plan/billing, then try again.',
        });
      }
      if (gRes.status === 400 || gRes.status === 403) {
        return res.status(502).json({ error: 'The AI service rejected the request (check the API key). Using the question banks below still works.' });
      }
      return res.status(502).json({ error: 'The AI service returned an error. Please try again in a moment.' });
    }

    const data = await gRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || '';
    if (!text) return res.status(502).json({ error: 'The AI service returned an empty response.' });

    let analysis;
    try {
      analysis = JSON.parse(text);
    } catch {
      // Occasionally the model wraps JSON in prose/fences — extract the JSON object.
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) return res.status(502).json({ error: 'Could not parse the AI response. Please try again.' });
      analysis = JSON.parse(match[0]);
    }

    return res.json({ analysis });
  } catch (err) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'The AI service timed out. Please try again.' });
    }
    console.error('[interview] analyze failed', err);
    return res.status(500).json({ error: 'Something went wrong analysing your resume.' });
  }
});

export default router;
