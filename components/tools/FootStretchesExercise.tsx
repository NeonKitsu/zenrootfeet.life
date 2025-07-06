
import React, { useState } from 'react';

const steps = [
  { title: "Get Ready", prompt: "Sit comfortably in a chair with your feet flat on the floor. Take a moment to arrive." },
  { title: "Ankle Rotations", prompt: "Lift one foot off the floor. Slowly rotate your ankle 5 times clockwise, then 5 times counter-clockwise. Switch feet." },
  { title: "Toe Yoga: Spreads", prompt: "With your foot flat on the floor, try to spread your toes as wide as possible. Hold for 5 seconds, then relax. Repeat 3 times." },
  { title: "Toe Yoga: Lifts", prompt: "Keeping your heel down, lift only your big toe. Then, try to lift the other four toes while keeping the big toe down. This is tricky!" },
  { title: "Towel Curls", prompt: "Imagine a small towel under your foot. Use your toes to scrunch it towards you. Relax and repeat 5 times." },
  { title: "Calf Stretch", prompt: "Stand facing a wall. Place your hands on it and step one foot back, keeping your leg straight and heel on the floor. Hold for 30 seconds. Switch legs." },
  { title: "Plantar Fascia Stretch", prompt: "While seated, cross one leg over the other. Gently pull your toes back towards your shin until you feel a stretch in your arch. Hold for 20 seconds. Switch feet." },
  { title: "Finished", prompt: "Great job! Your feet thank you. Notice how they feel now. You can restart anytime." }
];

const FootStretchesExercise: React.FC = () => {
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
            {stepIndex === 0 ? "Begin Stretches" : "Next Step"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FootStretchesExercise;