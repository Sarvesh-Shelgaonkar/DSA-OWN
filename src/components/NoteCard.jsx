import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './ui/Icon';

const NoteCard = ({ resource }) => {
  const isExternal = resource.link.startsWith('http');

  const cardContent = (
    <>
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 text-2xl">
          {resource.emoji}
        </span>
        <div className="min-w-0">
          <h2 className="font-bold text-fg transition-colors group-hover:text-primary">{resource.title}</h2>
          {resource.tag && (
            <span className="mt-1 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-2xs font-semibold uppercase tracking-wide text-primary">
              {resource.tag}
            </span>
          )}
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">{resource.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {isExternal ? 'View on GitHub' : 'Open'}
          <Icon name={isExternal ? 'external' : 'arrowRight'} size={15} />
        </span>
      </div>
    </>
  );

  const className =
    'card group flex h-full flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md';

  if (isExternal) {
    return (
      <a href={resource.link} target="_blank" rel="noopener noreferrer" className={className}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={resource.link} className={className}>
      {cardContent}
    </Link>
  );
};

export default NoteCard;
