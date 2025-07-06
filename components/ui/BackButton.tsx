
import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  text: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, text }) => {
  return (
    <div className="mb-8">
      <Link
        to={to}
        className="inline-flex items-center text-amber-800 hover:text-amber-700 font-semibold transition-colors group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {text}
      </Link>
    </div>
  );
};

export default BackButton;
