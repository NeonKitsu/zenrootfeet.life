
import React, { useState } from 'react';

const categories = [
  "Types of fruit", "Car brands", "Cities in Europe", "Things you'd find in a kitchen",
  "Animals that live in the ocean", "Movie titles", "Famous musicians", "Types of trees",
  "Colors", "Sports", "Items of clothing", "Breakfast foods", "Capital cities",
  "Musical instruments", "Things that are round", "Farm animals"
];

const CategoriesGame: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const getNewCategory = () => {
    let newCategory = currentCategory;
    while (newCategory === currentCategory) {
        newCategory = categories[Math.floor(Math.random() * categories.length)];
    }
    setCurrentCategory(newCategory);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-stone-200 min-h-[250px] flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold text-stone-800 mb-4">Your Category Is:</h4>
        <p className="text-stone-800 text-3xl font-semibold">"{currentCategory}"</p>
        <p className="text-stone-600 text-md mt-4">Mentally (or out loud), name as many things as you can that fit this category.</p>
      </div>
      <div className="mt-8">
        <button onClick={getNewCategory} className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
          New Category
        </button>
      </div>
    </div>
  );
};

export default CategoriesGame;
