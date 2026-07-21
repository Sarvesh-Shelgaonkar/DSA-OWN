import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import InterviewBankView from '../components/InterviewBankView';
import { bankById } from '../data/interview';

const InterviewBankPage = () => {
  const { bankId } = useParams();
  const bank = bankById[bankId];

  if (!bank) return <Navigate to="/interview" replace />;

  const intro = (
    <div className="mb-8">
      <Link
        to="/interview"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
      >
        <Icon name="chevronLeft" size={16} /> All interview prep
      </Link>
    </div>
  );

  return <InterviewBankView bank={bank} intro={intro} />;
};

export default InterviewBankPage;
