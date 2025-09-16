import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import correctSound from "./assets/sounds/correct.wav";
import jungleBackground from "./assets/images/jungle-bg.jpeg";
import monkeyImage from "./assets/images/monkey.png";
import bananaImage from "./assets/images/banana.png";

export default function LevelOne(props) {
  const [position, setPosition] = useState("justify-start");
  const [userInput, setUserInput] = useState("flex justify-start");
  const [disableNextButton, setDisableNextButton] = useState(true);
  const correctAnswer = "flex justify-end";

  const correctAudio = new Audio(correctSound);

  useEffect(() => {
    setPosition(userInput.replace("flex ", ""));
    if (userInput.trim() === correctAnswer) {
      setDisableNextButton(false);
      correctAudio.play();
    }
  }, [userInput]);

  return (
    <div
      className="h-screen flex bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${jungleBackground})` }}
    >
      {/* Left Column - Explanation and UI */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-10">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">
              {" "}
              🐵 Hungry Monkey 🍌
            </h1>
            <p className="text-gray-700 text-lg">
              Welcome to the jungle! Ready for a fun Tailwind CSS adventure? Help
              our monkey buddy swing through the vines to grab some delicious
              bananas! 🍌 Let's kick things off by moving the monkey to the right.
              Use Tailwind classes to guide the monkey's moves. No need to
              memorize—just have fun and learn how to style and position elements
              intuitively!
            </p>
          </div>

          {/* Explanation Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Understanding Justify-Content
          </h2>
          <p className="text-gray-700 text-md">
            The `justify-content` property aligns items horizontally and accepts
            the following values:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>flex-start</strong>: Items align to the left side.
            </li>
            <li>
              <strong>flex-end</strong>: Items align to the right side.
            </li>
            <li>
              <strong>center</strong>: Items align at the center.
            </li>
            <li>
              <strong>space-between</strong>: Items have equal spacing between
              them.
            </li>
            <li>
              <strong>space-around</strong>: Items have equal spacing around
              them.
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            For example,{" "}
            <code className="text-green-500">justify-content: flex-end;</code>{" "}
            moves Cloudy to the right.
          </p>
        </div>
      </div>

      {/* Right Column - Playground */}
      <div className="w-2/3 flex flex-col items-center justify-center gap-10">
        {/* Tailwind Code Explanation */}
        <div className="p-4 bg-gray-800 text-white rounded-md text-sm font-mono w-[90%]">
          <p>Vanilla CSS:</p>
          <code className="text-green-400">display: flex;</code>
          <br />
          <code className="text-blue-400">
            justify-content: {position.replace("justify-", "")};
          </code>
          <br />
          <br />
          <label className="text-sm">Write Tailwind classes here:</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-yellow-400 outline-none"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        {/* Jungle Playground */}
        <div
          className={`flex ${position} items-center p-6 h-80 bg-[#1F5768] rounded-lg border border-green-900 shadow-lg relative w-[90%]`}
        >
          {/* Banana (Goal) */}
          <img
            src={bananaImage}
            className="absolute right-5 w-16"
            alt="Banana"
          />

          {/* Swinging Monkey */}
          <motion.img
            src={monkeyImage}
            className="w-30 h-30 absolute"
            alt="Monkey Swinging"
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        {/* Next Button */}
        <button
          className={`bg-green-900 self-end mr-10 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 ${
            disableNextButton ? "cursor-not-allowed" : ""
          }`}
          disabled={disableNextButton}
          onClick={props.onNext}
        >
          Next Quest
        </button>
      </div>
    </div>
  );
}
