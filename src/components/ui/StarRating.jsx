import React, { useState } from 'react';
import Icon from './Icon';

/**
 * Accessible 0–5 star rating. Click a star to set; click the same star again to clear.
 */
const StarRating = ({ value = 0, onChange, size = 18, readOnly = false, label = 'Confidence rating' }) => {
  const [hover, setHover] = useState(0);
  const active = hover || value;

  if (readOnly) {
    return (
      <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Icon
            key={n}
            name={n <= value ? 'starFilled' : 'star'}
            size={size}
            className={n <= value ? 'text-medium' : 'text-fg-subtle'}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5" role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(value === n ? 0 : n)}
          className="rounded p-0.5 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Icon
            name={n <= active ? 'starFilled' : 'star'}
            size={size}
            className={n <= active ? 'text-medium' : 'text-fg-subtle'}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
