
import React, { useState, useEffect, useCallback, useMemo } from 'react';

type FocusObject = 'candle' | 'enso' | 'shape';

const EnsoCircle = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M 50,5 A 45,45 0 1 1 49.9,5.001" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" transform="rotate(-90 50 50)" />
  </svg>
);

const Candle = () => (
    <div className="flex flex-col items-center">
        <div className="w-4 h-8 bg-yellow-400 rounded-t-full rounded-b-sm animate-flicker" style={{boxShadow: '0 0 10px #fef08a, 0 0 20px #facc15'}} />
        <div className="w-6 h-16 bg-stone-200 rounded-sm" />
    </div>
);

const Shape = () => (
    <div className="w-24 h-24 bg-amber-800 rounded-full" />
);


const FocusObject: React.FC = () => {
  const [duration, setDuration] = useState(5); // in minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [selectedObject, setSelectedObject] = useState<FocusObject>('candle');
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
      alert("Meditation session complete! 🙏");
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const focusComponent = useMemo(() => {
    switch(selectedObject) {
        case 'candle': return <Candle />;
        case 'enso': return <EnsoCircle />;
        case 'shape': return <Shape />;
        default: return null;
    }
  }, [selectedObject]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200">
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-600 mb-2">1. Choose Your Focus Object</label>
        <div className="flex justify-center space-x-2">
            <button onClick={() => setSelectedObject('candle')} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${selectedObject === 'candle' ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>🕯️ Candle</button>
            <button onClick={() => setSelectedObject('enso')} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${selectedObject === 'enso' ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>⭕ Ensō</button>
            <button onClick={() => setSelectedObject('shape')} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${selectedObject === 'shape' ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>Shape</button>
        </div>
      </div>

      <div className="my-8 w-full h-40 bg-stone-50 rounded-lg flex items-center justify-center p-4">
        {focusComponent}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-600 mb-2">2. Set Duration</label>
        <div className="flex justify-center space-x-2">
          {[1, 5, 10, 15].map(d => (
            <button key={d} onClick={() => setDuration(d)} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${duration === d ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>
              {d}m
            </button>
          ))}
        </div>
      </div>
      
      <p className="text-5xl font-mono font-bold text-stone-800 my-4">{formatTime(timeLeft)}</p>

      <div className="flex justify-center space-x-4 mt-4">
        {!isActive ? (
          <button onClick={() => setIsActive(true)} disabled={timeLeft === 0} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Start
          </button>
        ) : (
          <button onClick={() => setIsActive(false)} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
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

export default FocusObject;
