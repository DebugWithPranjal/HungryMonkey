import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import correctSound from "./assets/sounds/correct.wav";
import jungleBackground from "./assets/images/jungle-bg.jpeg";
import monkeyImage from "./assets/images/monkey.png";
import bananaImage from "./assets/images/banana.png";

export default function LevelTwo() {
  const [position, setPosition] = useState("justify-start items-start");
  const [userInput, setUserInput] = useState("flex justify-start items-start");
  const [disableNextButton, setDisableNextButton] = useState(true);
  const correctAnswer = "flex justify-end items-end";

  const correctAudio = new Audio(correctSound);

  useEffect(() => {
    setPosition(userInput.replace("flex ", ""));
    if (userInput.trim() === correctAnswer) {
      setDisableNextButton(false);
      correctAudio.play();
    }
  }, [userInput]);

  return (
    <div className="h-screen flex bg-cover bg-center p-8" style={{ backgroundImage: `url(${jungleBackground})` }}>
      {/* Left Column - Explanation and UI */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-10">
        {/* Quest Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">🐵 Jungle Swing 🍌</h1>
          <p className="text-gray-700 text-lg">
            Help the monkey swing across the jungle vines to grab the banana! 🍌
            Use Tailwind classes to position the monkey correctly.
          </p>
        </div>

        {/* Explanation Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Flexbox</h2>
          <p className="text-gray-700 text-md">
            Use <strong>justify-content</strong> to position elements <em>horizontally</em> and <strong>align-items</strong> for <em>vertical alignment</em>.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>justify-start</strong>: Align left</li>
            <li><strong>justify-center</strong>: Align center</li>
            <li><strong>justify-end</strong>: Align right</li>
            <li><strong>items-start</strong>: Align at top</li>
            <li><strong>items-center</strong>: Align at center</li>
            <li><strong>items-end</strong>: Align at bottom</li>
          </ul>
        </div>
      </div>

      {/* Right Column - Playground */}
      <div className="w-2/3 flex flex-col items-center justify-center gap-10">
        {/* Tailwind Code Explanation */}
        <div className="p-4 bg-gray-800 text-white rounded-md text-sm font-mono w-[90%]">
          <p>Vanilla CSS:</p>
          <code className="text-green-400">display: flex;</code><br />
          <code className="text-blue-400">justify-content: {position.split(" ")[0].replace('justify-', '')};</code><br />
          <code className="text-blue-400">align-items: {position.split(" ")[1].replace('items-', '')};</code>
          <br /><br />
          <label className="text-sm">Write Tailwind classes here:</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-yellow-400 outline-none"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        {/* Jungle Playground */}
        <div className={`flex ${position} p-6 h-80 bg-[#1F5768] rounded-lg border border-green-900 shadow-lg relative w-[90%]`}>  
         
          {/* Banana (Goal) */}
          <img src={bananaImage} className="absolute right-5 bottom-5 w-16" alt="Banana" />
          
          {/* Swinging Monkey */}
          <motion.img 
            src={monkeyImage} 
            className="w-30 h-30 relative" 
            alt="Monkey Swinging"
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Next Button */}
        <button 
          className={`bg-green-900 self-end mr-10 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 ${disableNextButton ? 'cursor-not-allowed' : ''}`}
          disabled={disableNextButton}
        >
          Next Quest
        </button>
      </div>
    </div>
  );
}
