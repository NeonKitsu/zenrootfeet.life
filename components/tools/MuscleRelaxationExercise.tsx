
import React, { useState } from 'react';

const steps = [
  { title: "Get Ready", prompt: "Find a comfortable position, sitting or lying down. Take a deep breath to begin." },
  { title: "Hands", prompt: "Clench your fists tightly. Hold for 5 seconds... notice the tension." },
  { title: "Hands", prompt: "Now, release your fists completely. Feel the tension flow away. Notice the difference." },
  { title: "Shoulders", prompt: "Raise your shoulders up to your ears. Hold them there tightly." },
  { title: "Shoulders", prompt: "Let your shoulders drop completely. Enjoy the feeling of release." },
  { title: "Face", prompt: "Scrunch up your face. Clench your jaw, squint your eyes. Hold it." },
  { title: "Face", prompt: "Relax your entire face. Let your jaw hang loose. Smooth your forehead." },
  { title: "Stomach", prompt: "Tighten your abdominal muscles as if you're bracing for a punch. Hold." },
  { title: "Stomach", prompt: "Release the tension in your stomach. Let it be soft." },
  { title: "Feet", prompt: "Curl your toes downward, tensing your feet. Hold that tension." },
  { title: "Feet", prompt: "Release your toes. Feel the tension disappear from your feet." },
  { title: "Finished", prompt: "Take a final, deep breath. Notice the feeling of relaxation throughout your body. You can restart anytime." }
];

const MuscleRelaxationExercise: React.FC = () => {
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
            {stepIndex === 0 ? "Begin" : "Next Step"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MuscleRelaxationExercise;
