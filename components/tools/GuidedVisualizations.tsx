
import React, { useState, useEffect, useCallback } from 'react';

const themes = {
  forest: {
    name: "Calm Forest 🌳",
    prompts: [
      "Picture a tall, ancient forest. You are standing at the edge of a path.",
      "Sunlight filters through the leaves, dappling the ground in front of you.",
      "You feel the soft, cool moss under your feet. Take a deep, cleansing breath.",
      "The air smells of pine and damp earth. It is fresh and clean.",
      "Listen to the gentle rustle of leaves and the distant sound of a bird.",
      "You feel safe, calm, and deeply connected to the peace of the forest."
    ]
  },
  lake: {
    name: "Peaceful Lake 💧",
    prompts: [
      "Imagine a vast, still lake at dawn. The world is quiet.",
      "The water is like glass, reflecting the soft colors of the morning sky.",
      "You are sitting comfortably on the shore, feeling the smooth stones beneath you.",
      "A gentle breeze ripples the surface for a moment, then it is still again.",
      "There is nothing to do, nowhere to be. Just this moment of perfect calm.",
      "Feel any tension you hold melt away, like mist off the water."
    ]
  },
  space: {
    name: "Empty Space ✨",
    prompts: [
      "You are floating safely and effortlessly in the vast, quiet emptiness of space.",
      "Distant stars twinkle like tiny diamonds on black velvet.",
      "There is no up or down, just a feeling of weightless freedom.",
      "A profound silence surrounds you. It is peaceful and calming.",
      "Your body is completely relaxed, your mind is open and clear.",
      "Breathe in the stillness, breathe out any thoughts. Just be."
    ]
  }
};

type ThemeKey = keyof typeof themes;

const GuidedVisualizations: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey | null>(null);
  const [duration, setDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = useCallback(() => {
    setIsActive(false);
    setTimeLeft(duration * 60);
    setPromptIndex(0);
  }, [duration]);

  useEffect(() => {
    handleReset();
  }, [duration, handleReset, selectedTheme]);

  useEffect(() => {
    let countdownInterval: ReturnType<typeof setInterval> | null = null;
    let promptInterval: ReturnType<typeof setInterval> | null = null;

    if (isActive && timeLeft > 0) {
      countdownInterval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      promptInterval = setInterval(() => {
        if (selectedTheme) {
          setPromptIndex(prev => (prev + 1) % themes[selectedTheme].prompts.length);
        }
      }, 20000); // Change prompt every 20 seconds
    } else if (timeLeft === 0 && isActive) {
      alert("Visualization complete! 🙏");
      handleReset();
    }

    return () => {
      if (countdownInterval) clearInterval(countdownInterval);
      if (promptInterval) clearInterval(promptInterval);
    };
  }, [isActive, timeLeft, selectedTheme, handleReset]);

  const startVisualization = () => {
    if (selectedTheme) {
      setIsActive(true);
    } else {
      alert("Please select a theme first.");
    }
  };
  
  const currentPrompt = selectedTheme ? themes[selectedTheme].prompts[promptIndex] : "Select a theme to begin your journey.";

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200">
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-600 mb-2">1. Select a Theme</label>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(themes).map(key => (
            <button key={key} onClick={() => setSelectedTheme(key as ThemeKey)} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${selectedTheme === key ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>
              {themes[key as ThemeKey].name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-600 mb-2">2. Set Duration</label>
        <div className="flex justify-center space-x-2">
          {[3, 5, 10].map(d => (
            <button key={d} onClick={() => setDuration(d)} disabled={isActive} className={`px-4 py-2 rounded-lg transition-colors ${duration === d ? 'bg-amber-800 text-white' : 'bg-stone-200 hover:bg-stone-300'} disabled:opacity-50`}>
              {d}m
            </button>
          ))}
        </div>
      </div>
      
      <div className="my-8 bg-stone-100 p-6 rounded-lg min-h-[120px] flex items-center justify-center">
        <p className="text-xl text-stone-700 italic">"{currentPrompt}"</p>
      </div>
      
      <p className="text-5xl font-mono font-bold text-stone-800 mb-6">{formatTime(timeLeft)}</p>
      
      <div className="flex justify-center space-x-4">
        {!isActive ? (
          <button onClick={startVisualization} disabled={!selectedTheme} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
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

export default GuidedVisualizations;
