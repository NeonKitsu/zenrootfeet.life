
import React, { useState } from 'react';

const steps = [
  {
    title: '5️⃣ Things You Can See',
    prompt: "Look around you and find five things you can see. Acknowledge them in your mind. Don't judge, just notice. Ready for the next step?",
  },
  {
    title: '4️⃣ Things You Can Touch',
    prompt: "Now, bring your awareness to four things you can feel. The texture of your clothes, the chair beneath you, the air on your skin...",
  },
  {
    title: '3️⃣ Things You Can Hear',
    prompt: 'Listen carefully. What are three things you can hear? The hum of a fan, distant traffic, your own breathing... what else?',
  },
  {
    title: '2️⃣ Things You Can Smell',
    prompt: "What are two things you can smell? Maybe the coffee on your desk, or the scent of rain outside. Take a gentle sniff.",
  },
  {
    title: '1️⃣ Thing You Can Taste',
    prompt: "Finally, focus on one thing you can taste. The lingering taste of your last meal, or simply the natural taste of your own mouth.",
  },
  {
    title: '🧘 You are Present',
    prompt: 'You have arrived in the present moment. Take a deep breath. You can restart this exercise any time you feel overwhelmed.',
  },
];

const FiveSensesExercise: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => {
    setStepIndex(prev => (prev + 1) % steps.length);
  };
  
  const handleReset = () => {
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex];
  const isFinished = stepIndex === steps.length - 1;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200 min-h-[350px] flex flex-col justify-between">
      <div>
        <h4 className="text-3xl font-bold text-stone-800 mb-4">{currentStep.title}</h4>
        <p className="text-stone-600 text-lg">{currentStep.prompt}</p>
      </div>
      <div className="mt-8">
        {isFinished ? (
           <button onClick={handleReset} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
            Restart
          </button>
        ) : (
          <button onClick={handleNext} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
            I'm Ready
          </button>
        )}
      </div>
    </div>
  );
};

export default FiveSensesExercise;