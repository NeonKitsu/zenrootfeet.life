import React, { useState, useEffect } from 'react';

const prompts = [
  "What is one simple pleasure you experienced today?",
  "Who is someone you felt grateful for today, and why?",
  "What is a skill or ability you are thankful to have?",
  "Describe a beautiful thing you saw recently.",
  "What is something you own that you are truly grateful for?",
  "What part of your body are you grateful for today?",
  "What is a piece of knowledge you're grateful to have learned?"
];

const GratitudeJournal: React.FC = () => {
  const [entry, setEntry] = useState('');
  const [todaysEntries, setTodaysEntries] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');

  const getStorageKey = () => `gratitude_${new Date().toDateString()}`;

  const getNewPrompt = () => {
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(newPrompt);
  };
  
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem(getStorageKey());
      if (savedEntries) {
        setTodaysEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error("Could not load gratitude entries from local storage", error);
    }
    getNewPrompt();
  }, []);

  const handleSave = () => {
    if (entry.trim() === '') return;
    try {
      const updatedEntries = [...todaysEntries, entry.trim()];
      setTodaysEntries(updatedEntries);
      localStorage.setItem(getStorageKey(), JSON.stringify(updatedEntries));
      setEntry('');
    } catch (error) {
      console.error("Could not save gratitude entry to local storage", error);
      alert("Sorry, there was an error saving your entry.");
    }
  };

  const handleDelete = (indexToDelete: number) => {
    try {
      const updatedEntries = todaysEntries.filter((_, index) => index !== indexToDelete);
      setTodaysEntries(updatedEntries);
      localStorage.setItem(getStorageKey(), JSON.stringify(updatedEntries));
    } catch (error) {
      console.error("Could not delete gratitude entry from local storage", error);
      alert("Sorry, there was an error deleting your entry.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-stone-800">Today's Gratitude</h4>
        <p className="text-stone-600 mt-2 italic">"{prompt}"</p>
        <button onClick={getNewPrompt} className="text-sm text-amber-800 hover:underline mt-1">Get another prompt</button>
      </div>
      
      <div className="mt-6">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Type something you're grateful for..."
          className="w-full p-3 bg-stone-700 text-white placeholder-stone-400 border border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition"
          rows={4}
        />
        <button onClick={handleSave} className="w-full mt-3 px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
          Add to Journal
        </button>
      </div>

      {todaysEntries.length > 0 && (
        <div className="mt-8">
          <h5 className="font-bold text-stone-700 text-center">What I'm Grateful For Today:</h5>
          <ul className="mt-3 list-disc list-inside bg-stone-50 p-4 rounded-lg text-stone-600 space-y-2">
            {todaysEntries.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="flex-1 pr-2">{item}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-4 text-stone-500 hover:text-red-600 transition-colors p-1 rounded-full flex-shrink-0"
                  aria-label={`Delete entry: ${item}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GratitudeJournal;