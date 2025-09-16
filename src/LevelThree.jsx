import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import correctSound from "./assets/sounds/correct.wav";
import jungleBackground from "./assets/images/jungle-bg.jpeg";
import monkeyImage from "./assets/images/monkey.png";
import bananaImage from "./assets/images/banana.png";

export default function LevelThree() {
  const [wrapStyle, setWrapStyle] = useState("flex-nowrap");
  const [gapStyle, setGapStyle] = useState("gap-0");
  const [userInput, setUserInput] = useState("flex flex-nowrap gap-0");
  const [disableNextButton, setDisableNextButton] = useState(true);
  const correctAnswer = "flex flex-wrap gap-4";

  const correctAudio = new Audio(correctSound);

  useEffect(() => {
    const inputClasses = userInput.split(" ");
    setWrapStyle(inputClasses.includes("flex-wrap") ? "flex-wrap" : "flex-nowrap");
    setGapStyle(inputClasses.find(cls => cls.startsWith("gap-")) || "gap-0");

    if (userInput.trim() === correctAnswer) {
      setDisableNextButton(false);
      correctAudio.play();
    }
  }, [userInput]);

  return (
    <div className="h-screen flex bg-cover bg-center p-8" style={{ backgroundImage: `url(${jungleBackground})` }}>
      {/* Left Column - Explanation and UI */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-10">
        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
          <h1 className="text-3xl font-bold text-gray-800 mb-5"> 🍌 Jungle Banana Hunt 🐵</h1>
          <p className="text-gray-700 text-lg">
            The monkey needs to collect all the bananas! 🍌 But they're scattered all over!
            Use <strong>flex-wrap</strong> to arrange them neatly, and <strong>gap</strong> to add spacing.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Flex-Wrap & Gap</h2>
          <p className="text-gray-700 text-md">Use these properties to organize bananas efficiently:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>flex-nowrap</strong>: Keeps items in a single row (default).</li>
            <li><strong>flex-wrap</strong>: Moves items to new lines when necessary.</li>
            <li><strong>gap-x / gap-y</strong>: Adds spacing between items.</li>
          </ul>
        </div>
      </div>

      {/* Right Column - Playground */}
      <div className="w-2/3 flex flex-col items-center justify-center gap-10">
        <div className="p-4 bg-gray-800 text-white rounded-md text-sm font-mono w-[90%]">
          <p>Vanilla CSS:</p>
          <code className="text-green-400">display: flex;</code><br />
          <code className="text-blue-400">flex-wrap: {wrapStyle.replace('flex-', '')};</code><br />
          <code className="text-yellow-400">gap: {gapStyle.replace('gap-', '')}rem;</code>
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
        <div className={`flex ${wrapStyle} ${gapStyle} p-6 h-80 bg-[#1F5768] rounded-lg border border-green-900 shadow-lg relative w-[90%] flex-wrap`}>  
          {[...Array(6)].map((_, i) => (
            <motion.img 
              key={i}
              src={bananaImage} 
              className="w-16 h-16" 
              alt="Banana"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
          
          {/* Monkey */}
          <motion.img 
            src={monkeyImage} 
            className="w-28 h-28 absolute bottom-0 left-5" 
            alt="Monkey"
            animate={{ x: disableNextButton ? 0 : 100 }}
            transition={{ duration: 1 }}
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
