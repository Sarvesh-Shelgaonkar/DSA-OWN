import React, { useEffect } from 'react';
import InterviewBankView from '../components/InterviewBankView';
import { systemDesignBank } from '../data/systemDesign';

const SystemDesign = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = 'System Design — MyDSA';
    return () => {
      document.title = prev;
    };
  }, []);

  return <InterviewBankView bank={systemDesignBank} />;
};

export default SystemDesign;
