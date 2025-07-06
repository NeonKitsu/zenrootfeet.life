
import React, { useState, useEffect, useCallback } from 'react';

const phases = [
  { name: 'Inhale', duration: 4, instruction: 'Breathe in through your nose for 4 seconds...' },
  { name: 'Hold', duration: 7, instruction: 'Hold your breath for 7 seconds...' },
  { name: 'Exhale', duration: 8, instruction: 'Exhale slowly through your mouth for 8 seconds...' },
];

const Breathing478Exercise: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [countdown, setCountdown] = useState(phases[0].duration);

  const startAnimation = () => setIsAnimating(true);
  const stopAnimation = () => {
    setIsAnimating(false);
    setPhaseIndex(0);
    setCountdown(phases[0].duration);
  };

  const tick = useCallback(() => {
    if (!isAnimating) return;

    setCountdown(prev => {
      if (prev > 1) {
        return prev - 1;
      } else {
        setPhaseIndex(currentPhaseIndex => {
          const nextPhaseIndex = (currentPhaseIndex + 1) % phases.length;
          setCountdown(phases[nextPhaseIndex].duration);
          return nextPhaseIndex;
        });
        return 0; // Will be set correctly in the next render
      }
    });
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [tick]);
  
  const currentPhase = phases[phaseIndex];
  let circleSize = 'scale-100';
  if(isAnimating) {
    if (phaseIndex === 0) circleSize = 'scale-110';
    if (phaseIndex === 2) circleSize = 'scale-90';
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200">
      <div className="flex items-center justify-center w-48 h-48 mx-auto mb-6 rounded-full bg-amber-100 transition-transform duration-[4000ms] ease-in-out" style={{ transitionDuration: `${currentPhase.duration}s`, transform: circleSize }}>
        <div className="flex items-center justify-center w-40 h-40 rounded-full bg-amber-200">
           {isAnimating && <span className="text-5xl font-bold text-amber-800">{countdown}</span>}
           {!isAnimating && <span className="text-5xl font-bold text-amber-800">😮‍💨</span>}
        </div>
      </div>
      <h4 className="text-2xl font-bold text-stone-800">{isAnimating ? currentPhase.name : 'Ready for 4-7-8?'}</h4>
      <p className="text-stone-600 mt-2 h-12">{isAnimating ? currentPhase.instruction : 'Press start to begin this calming breathing exercise.'}</p>
      <div className="mt-6">
        {isAnimating ? (
          <button onClick={stopAnimation} className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">
            Stop
          </button>
        ) : (
          <button onClick={startAnimation} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Breathing478Exercise;
