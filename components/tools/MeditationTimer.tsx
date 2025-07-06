
import React, { useState, useEffect, useCallback } from 'react';

const MeditationTimer: React.FC = () => {
  const [duration, setDuration] = useState(5); // in minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };
  
  const handleReset = useCallback(() => {
    setIsActive(false);
    setTimeLeft(duration * 60);
  }, [duration]);
  
  useEffect(() => {
    handleReset();
  }, [duration, handleReset]);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      // Optional: Play a sound
      alert("Meditation session complete! 🙏");
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200">
      <div className="mb-6">
        <label htmlFor="duration" className="block text-sm font-medium text-stone-600 mb-2">
          Set Duration (minutes)
        </label>
        <div className="flex justify-center space-x-2">
          {[1, 5, 10, 15, 30].map(d => (
            <button key={d} onClick={() => setDuration(d)} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${duration === d ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>
              {d}m
            </button>
          ))}
        </div>
      </div>
      <div className="my-8">
        <p className="text-7xl font-mono font-bold text-stone-800">{formatTime(timeLeft)}</p>
      </div>
      <div className="flex justify-center space-x-4">
        {!isActive ? (
          <button onClick={handleStart} disabled={timeLeft === 0} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Start
          </button>
        ) : (
          <button onClick={handlePause} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
            Pause
          </button>
        )}
        <button onClick={handleReset} className="px-8 py-3 bg-stone-500 text-white font-semibold rounded-lg shadow-md hover:bg-stone-600 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default MeditationTimer;