import { useState, useEffect } from "react";
import correctSound from "./assets/sounds/correct.wav";
import wrongSound from "./assets/sounds/incorrect.wav";

export default function LevelOne() {
    const [position, setPosition] = useState("justify-start");
    const [message, setMessage] = useState("Cloudy is lost! Help it find its spot.");
    const [userInput, setUserInput] = useState("flex justify-start");
    const correctAnswer = "flex justify-end";
  
    const correctAudio = new Audio(correctSound);
    const wrongAudio = new Audio(wrongSound);
  
    useEffect(() => {
      setPosition(userInput.replace("flex ", ""));
      if (userInput.trim() === correctAnswer) {
        setMessage("Woohoo! Cloudy reached the Sun ☀️ and is feeling warm!");
        correctAudio.play();
      } else if (userInput.trim() === "flex justify-center") {
        setMessage("Hmm! Cloudy is still lost in the middle. Try again!");
        // correctAudio.play();
      } else if (userInput.trim() === "flex justify-start") {
        setMessage("Oh no! Cloudy is stuck in a storm 🌧️! Try again!");
        // wrongAudio.play();
      } else {
        setMessage("Hmm... Cloudy is floating aimlessly. Try a proper alignment!");
        // wrongAudio.play();
      }
    }, [userInput]);
  
    return (
      <div className="h-screen flex bg-gradient-to-b from-blue-400 to-blue-200 p-8">
        {/* Left Column - Explanation and UI */}
        <div className="w-1/2 flex flex-col justify-center gap-10">
          {/* Quest Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">☁️ Puff n' Code! ☀️</h1>
            <p className="text-gray-700 text-lg">
              Meet Cloudy, a happy little cloud on a mission to learn Tailwind CSS! 🌥️
              Help Cloudy navigate different weather challenges by using Tailwind utility classes.
              Instead of memorizing, you'll <strong>intuitively learn</strong> how to position elements, style them, and make layouts responsive.
              Let's start by moving Cloudy to the right so it can bask in the sunlight!
            </p>
          </div>
  
          {/* Explanation Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Justify-Content</h2>
            <p className="text-gray-700 text-md">
              The `justify-content` property aligns items horizontally and accepts the following values:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>flex-start</strong>: Items align to the left side.</li>
              <li><strong>flex-end</strong>: Items align to the right side.</li>
              <li><strong>center</strong>: Items align at the center.</li>
              <li><strong>space-between</strong>: Items have equal spacing between them.</li>
              <li><strong>space-around</strong>: Items have equal spacing around them.</li>
            </ul>
            <p className="mt-2 text-gray-700">For example, <code className="text-green-500">justify-content: flex-end;</code> moves Cloudy to the right.</p>
          </div>
  
          {/* Next Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Next ➡️</button>
        </div>
        
        {/* Right Column - Playground */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-10">
          {/* Tailwind Code Explanation */}
          <div className="p-4 bg-gray-800 text-white rounded-md text-sm font-mono">
            <div className="bg-gray-800 p-4 text-white rounded-lg shadow-lg w-full max-w-xl">
              <p>Vanilla CSS:</p>
              <code className="text-green-400">display: flex;</code><br />
              <code className="text-blue-400">justify-content: {position.replace('justify-', '')};</code>
              <br /><br />
              <label className="text-sm">Write Tailwind classes here:</label>
              <input
                type="text"
                className="w-full p-2 mt-2 rounded bg-gray-700 text-yellow-400 outline-none"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>
          </div>
        
          <div className={`flex ${position} p-4 items-center w-full max-w-xl h-40 bg-blue-300 rounded-lg border border-blue-500 shadow-lg transition-all duration-500 relative`}>
            {/* Sun (Right) */}
            <span className="absolute right-5 text-8xl">☀️</span>
            
            {/* Storm (Left) */}
            <span className="absolute left-5 text-8xl">🌩️</span>
            {/* Cloudy */}
            <div className="w-24 h-16 bg-white rounded-full shadow-md animate-bounce relative">
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xl">☁️</span>
            </div>
          </div>
  
          {/* Message Display */}
          <p className="text-lg font-semibold text-white bg-black p-2 rounded-md">{message}</p>
  
          {/* Hint Button */}
          <div>
            <a href="https://tailwindcss.com/docs/justify-content" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">Need a hint? 📖</a>
          </div>
        </div>
      </div>
    );
}
