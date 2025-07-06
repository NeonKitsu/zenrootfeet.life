
import React, { useState } from 'react';

const affirmations = [
  "This feeling is temporary and it will pass.",
  "I am safe in this present moment.",
  "I can handle whatever comes my way.",
  "I choose to respond with peace.",
  "I am grounded and centered.",
  "I release what I cannot control.",
  "I am doing the best I can, and that is enough.",
  "Even when things are hard, I am resilient."
];

const AffirmationGenerator: React.FC = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);

  const getNewAffirmation = () => {
    let newAffirmation = currentAffirmation;
    while (newAffirmation === currentAffirmation) {
        newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
    setCurrentAffirmation(newAffirmation);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200 min-h-[250px] flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold text-stone-800 mb-4">A Soothing Reminder</h4>
        <p className="text-stone-700 text-2xl italic">"{currentAffirmation}"</p>
      </div>
      <div className="mt-8">
        <button onClick={getNewAffirmation} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
          Show Me Another
        </button>
      </div>
    </div>
  );
};

export default AffirmationGenerator;
