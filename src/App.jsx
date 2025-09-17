import { useEffect, useState } from "react";
import jungleBackground from "./assets/images/jungle-bg.jpeg";
import monkeyImage from "./assets/images/monkey.png";
import pandaImage from "./assets/images/panda.webp";
import hareImage from "./assets/images/hare.png";
import bananaImage from "./assets/images/banana.png";
import bambooImage from "./assets/images/bamboo.png";
import carrotImage from "./assets/images/carrot.png";
import { motion } from "framer-motion";
import correctSound from "./assets/sounds/correct.wav";
import { levels } from "./levels";

const App = (props) => {
  const correctAudio = new Audio(correctSound);

  const [currentLevel, setCurrentLevel] = useState(20);
  const [level, setLevel] = useState({});
  const [position, setPosition] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  const changeLevel = (direction) => {
    if (direction === "next") {
      if (currentLevel < levels.length - 1) {
        setCurrentLevel((prev) => prev + 1);
      } else {
        alert("Congrats! You've completed all levels! 🎉");
      }
    } else {
      if (currentLevel > 0) {
        setCurrentLevel((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    const currLevel = levels[currentLevel];
    console.log(currLevel, "curr");

    setLevel(currLevel);
    setPosition(currLevel?.initialPosition);
    setCorrectAnswer(currLevel?.targetClasses);
  }, [currentLevel]);

  useEffect(() => {
    if (!position || !correctAnswer) return;
  
    const normalize = str =>
      str
        .trim()
        .split(/\s+/)     // split by spaces
        .sort()           // sort alphabetically
        .join(" ");       // rejoin
  
    if (normalize(position) === normalize(correctAnswer)) {
      correctAudio.play();
    }
  }, [position, correctAnswer]);
  

  return (
    <div className="h-screen flex bg-cover bg-center p-0">
      {/* Left Column - Explanation and UI */}
      <div className="w-[50%] bg-[#1F5768] flex flex-col items-start justify-start gap-10 p-12">
        <h1 className="font-henny-penny font-extrabold self-center">
          🐵 Hungry Monkey 🍌
        </h1>
        <p className="text-white text-lg font-funky text-justify font-semibold">
          <div dangerouslySetInnerHTML={{ __html: level?.header }}></div>
        </p>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full">
          <div dangerouslySetInnerHTML={{ __html: level?.description }}></div>
        </div>
      </div>

      {/* Right Column - Playground */}
      <div
        className="w-[55%] flex flex-col items-start justify-start gap-10 p-12 bg-black/50"
        style={{
          backgroundImage: `url(${jungleBackground})`,
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}
      >
        <div
          id="board"
          class="sticky h-[75%] rounded-lg border border-green-900 shadow-lg w-full"
          style={{
            backgroundImage: `url(${jungleBackground})`,
            backgroundSize: "cover",
            filter: "brightness(100%)",
          }}
        >
          <div
            id="jungle"
            class={`absolute w-full h-full flex ${
              level.targetAnimal != "jungle" ? "" : position
            } p-4`}
          >
            {/* Animal(s) */}
            {level?.animals?.map((animal, index) => {
              return (
                <motion.img
                  id={animal}
                  key={index}
                  src={
                    animal === "monkey"
                      ? monkeyImage
                      : animal === "hare"
                      ? hareImage
                      : pandaImage
                  }
                  className={`w-30 h-30 object-contain relative ${level.animalClasses} ${
                    level.targetAnimal === animal ? position : ""
                  }`}
                  alt={animal}
                />
              );
            })}
          </div>
          <div
          id="foods"
            class={`absolute w-full h-full flex ${
              level.targetFood != "foods" ? "" : level?.targetClasses
            } p-4 gap-0`}
          >
            {/* Food(s) */}
            {level?.foods?.map((food, index) => {
              return (
                <img
                  id={food}
                  key={index}
                  src={
                    food === "banana"
                      ? bananaImage
                      : food === "bamboo"
                      ? bambooImage
                      : carrotImage
                  }
                  className={`relative w-16 mx-6 h-16 object-contain ${
                    level.targetFood === food ? level?.targetClasses : ""
                  }`}
                  alt={food}
                />
              );
            })}
          </div>
        </div>
        <div className="p-4 bg-gray-800 text-white rounded-md text-sm font-mono w-full">
          &lt;div&gt; id="{level?.targetAnimal}" class="flex
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-yellow-400 outline-none"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          "&lt;/div&gt;
        </div>
        {/* Level Navigation Buttons */}
        <div className="flex items-center justify-center gap-0 self-end">
          <button
            onClick={() => changeLevel("prev")}
            className="bg-green-500 text-white px-4 py-2 rounded-l-md hover:bg-red-700 transition"
          >
            <i className="fa-solid fa-play fa-flip-horizontal"></i>
          </button>
          <span className="bg-green-700 text-white px-6 py-2 font-bold">
            Level {currentLevel + 1} of {levels.length}
          </span>
          <button
            onClick={() => changeLevel("next")}
            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
          >
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
