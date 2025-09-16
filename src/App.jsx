import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';
import correctSoundFile from './assets/sounds/correct.wav';
import incorrectSoundFile from './assets/sounds/incorrect.wav';

// Game Levels
const levels = [
  {
    title: "Level 1",
    description: `Welcome to Flexy Froggy, a game where you help Froggy and friends by writing Tailwind CSS classes!
      Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:
      - justify-start: Items align to the left side of the container.
      - justify-end: Items align to the right side of the container.
      - justify-center: Items align at the center of the container.
      - justify-between: Items display with equal spacing between them.
      - justify-around: Items display with equal spacing around them.
      
      For example, 'justify-end' will move the frog to the right.`,
    correctClass: "justify-center",
    hint: "https://tailwindcss.com/docs/justify-content"
  },
  {
    title: "Level 2",
    description: `Align items to the end using Tailwind's 'items-end' utility.`,
    correctClass: "items-end",
    hint: "https://tailwindcss.com/docs/align-items"
  },
  {
    title: "Level 3",
    description: `Space items evenly using 'justify-between'.`,
    correctClass: "justify-between",
    hint: "https://tailwindcss.com/docs/justify-content"
  }
];

// Sound Effects
const correctSound = new Howl({ src: [correctSoundFile] });
const incorrectSound = new Howl({ src: [incorrectSoundFile] });

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [inputClass, setInputClass] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleClassChange = (e) => setInputClass(e.target.value);

  const handleApply = () => {
    if (inputClass.trim() === levels[currentLevel].correctClass) {
      setFeedback('🎉 Correct!');
      correctSound.play();
      setTimeout(() => {
        setCurrentLevel(prev => prev + 1);
        setInputClass('');
        setFeedback('');
        setShowHint(false);
      }, 1500);
    } else {
      setFeedback('❌ Incorrect! Try again.');
      incorrectSound.play();
    }
  };

  const playgroundClass = `flex gap-4 p-4 bg-cyan-100 rounded-md transition-all duration-500 ${inputClass}`;

  return (
    <div className="h-full flex flex-row bg-blue-50">
      {/* Left Side: Description */}
      <div className="w-1/2 p-6 overflow-y-auto bg-[#43A047] border-r border-gray-300 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-henny-penny text-white mb-4">Flexy Froggy</h1>
        <h2 className="text-2xl font-semibold text-white mb-2 m-4">
          {levels[currentLevel].title}
        </h2>
        <p className="text-base text-white whitespace-pre-line m-8">
          {levels[currentLevel].description}
        </p>
        <button
          onClick={() => setShowHint(!showHint)}
          className="mt-4 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        {showHint && (
          <p className="mt-2 text-sm text-white">
            Need help? Check out the Tailwind docs: 
            <a
              href={levels[currentLevel].hint}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              {levels[currentLevel].hint}
            </a>
          </p>
        )}
      </div>

      {/* Right Side: Playground */}
      <div className="w-1/2 p-6 bg-[#1F5768]">
        <motion.div
          id="playground"
          className={playgroundClass}
          animate={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="frog bg-green-500 w-16 h-16 rounded-full transition-transform duration-500"
            whileHover={{ scale: 1.2 }}
          ></motion.div>
          <div className="lilypad bg-green-800 w-16 h-16 rounded-full"></div>
        </motion.div>
        <input
          value={inputClass}
          onChange={handleClassChange}
          type="text"
          placeholder="Enter Tailwind classes..."
          className="mt-4 w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleApply}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Apply
        </button>
        {feedback && <p className="mt-4 text-lg font-semibold text-gray-800">{feedback}</p>}
      </div>
    </div>
  );
};

export default Game;
