/**
 * Interview question banks registry.
 * Each bank is rendered by InterviewBankView at /interview/:bankId.
 */
import { resumeBank } from './resume';
import { sqlBank } from './sql';
import { osBank } from './os';
import { cnBank } from './cn';

export const interviewBanks = [resumeBank, sqlBank, osBank, cnBank];

export const bankById = Object.fromEntries(interviewBanks.map((b) => [b.slug, b]));

/** Count total prepared questions in a bank (levels + qa + answer blocks). */
export function countQuestions(bank) {
  let n = 0;
  for (const section of bank.sections) {
    for (const block of section.blocks) {
      if (block.type === 'levels' || block.type === 'qa') n += block.items.length;
      else if (block.type === 'answer') n += 1;
    }
  }
  return n;
}
