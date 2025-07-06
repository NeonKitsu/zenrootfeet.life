
import React, { useState } from 'react';

const prompts = [
  "Stand up and stretch your arms towards the sky. Take three deep, slow breaths, reaching a little higher on each inhale.",
  "Slowly roll your shoulders up towards your ears, and then let them drop completely. Repeat this three times.",
  "For one minute, walk slowly around your space. Focus only on the sensation of your feet making contact with the floor.",
  "Gently roll your neck from side to side. Notice any areas of tension and breathe into them without forcing anything.",
  "Place a hand on your heart and a hand on your belly. For one minute, just feel the gentle rhythm of your breath.",
  "Find a wall and place your hands on it. Gently push, feeling the strength in your arms and shoulders. Hold for 30 seconds.",
  "Clench your fists tightly for five seconds, and then release them completely, noticing the difference in sensation.",
  "Wiggle your toes and roll your ankles. Bring some awareness and movement to your feet."
];

const MindfulMovement: React.FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  const getNewPrompt = () => {
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(newPrompt);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200 min-h-[250px] flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold text-stone-800 mb-4">Your Mindful Prompt</h4>
        <p className="text-stone-600 text-lg italic">"{currentPrompt}"</p>
      </div>
      <div className="mt-8">
        <button onClick={getNewPrompt} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
          Give Me Another
        </button>
      </div>
    </div>
  );
};

export default MindfulMovement;
