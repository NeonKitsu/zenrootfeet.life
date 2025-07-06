
import React from 'react';
import { Link } from 'react-router-dom';
import { PillarCardProps } from '../../types';

const PillarCard: React.FC<PillarCardProps> = ({ slug, title, description, emoji }) => {
  return (
    <Link to={slug} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200">
      <div className="flex items-start">
        <span className="text-4xl mr-4">{emoji}</span>
        <div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
          <p className="text-stone-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PillarCard;