import { puzzles } from '../src/data/puzzles.js';
import { puzzleSources, puzzleIndexUrl } from '../src/data/puzzleSources.js';

// Run manually or in CI; external availability should not block local builds.
const missing = puzzles.filter((puzzle) => !puzzleSources[puzzle.id]);
if (missing.length) {
  console.error('Missing article links:', missing.map((puzzle) => puzzle.id).join(', '));
  process.exitCode = 1;
}
const urls = [...new Set([puzzleIndexUrl, ...Object.values(puzzleSources)])];
let cursor = 0;
let failures = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(20000),
        headers: { 'User-Agent': 'MyDSA-LinkChecker/1.0' },
      });
      await response.body?.cancel();
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      failures++;
      console.error(`${url}: ${error.message}`);
    }
  }
}));
console.log(`${urls.length - failures}/${urls.length} unique puzzle links available; ${missing.length} puzzles missing article links.`);
if (failures) process.exitCode = 1;
