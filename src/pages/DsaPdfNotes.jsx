import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/index.jsx';

const resources = [
  {
    name: "150 DSA Questions PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/150-DSA-questions%202.pdf"
  },
  {
    name: "Handwritten Notes PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/Data_Structure_Handwritten_Notes_%EF%BF%BD_1735369811.pdf"
  },
  {
    name: "DSA Questions PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/DSA_1741283310.pdf"
  },
  {
    name: "DSA README & Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/README.md"
  }
];

const DsaPdfNotes = () => (
  <div className="container-page max-w-4xl pt-24 pb-16">
    <SectionHeading
      eyebrow="DSA resources"
      title="DSA PDFs & Sheets"
      description="Question sheets, handwritten notes, and references for offline study and deep understanding."
    />

    {/* Read topic-wise notes in-app */}
    <Link
      to="/dsa-notes"
      className="card group mb-8 flex items-center justify-between gap-4 border-primary/30 bg-primary/5 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-2xl">📚</span>
        <div>
          <p className="font-semibold text-fg">Topic-wise Questions &amp; Theory</p>
          <p className="text-sm text-fg-muted">
            Arrays, Strings, Linked Lists, Trees, DP &amp; more — read in-app, beautifully formatted.
          </p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
        Read <Icon name="arrowRight" size={16} />
      </span>
    </Link>

    <ul className="space-y-3">
      {resources.map((res) => (
        <li key={res.name}>
          <a
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center justify-between gap-4 p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-fg-muted">
                <Icon name="book" size={18} />
              </span>
              <span className="font-medium text-fg">{res.name}</span>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary">
              View <Icon name="external" size={15} />
            </span>
          </a>
        </li>
      ))}
    </ul>

    <div className="mt-14 rounded-2xl border border-dashed border-border bg-surface/50 p-8 text-center">
      <p className="text-fg-muted">More DSA sheets and PDFs will be added soon — stay curious and keep learning.</p>
    </div>
  </div>
);

export default DsaPdfNotes;
