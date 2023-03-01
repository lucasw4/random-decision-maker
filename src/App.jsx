import React, { useState } from "react";
import IdeasList from "./components/IdeasList";
import Status from "./components/Status";
import WheelOfFortune from "./components/WheelOfFortune";
import { generateRandomIndex } from "./helpers/helpers";

const segmentColors = [
  "#8c3b1a",
  "#9143e2",
  "#4bae37",
  "#db40d6",
  "#569d4a",
  "#592db1",
  "#8c9e2a",
  "#505dd8",
  "#de821d",
  "#6982e1",
  "#e24720",
  "#4794cd",
  "#d4403e",
  "#45a889",
  "#a630a6",
  "#356d23",
  "#dc68da",
  "#71751c",
  "#a46adc",
  "#b58f3a",
  "#70398e",
  "#8a9550",
  "#e3449f",
  "#2e774f",
  "#dd3b6c",
  "#4e5b1e",
  "#c571ba",
  "#85602c",
  "#425092",
  "#c97441",
  "#957fc3",
  "#90343d",
  "#d0719a",
  "#833e68",
  "#d67171",
  "#a02a6c",
];

function App() {
  const [ideas, setIdeas] = useState([]);
  const [randomIdea, setRandomIdea] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [availableColors, setAvailableColors] = useState(segmentColors);
  const [error, setError] = useState({ show: false, message: "" });
  const [spinCount, setSpinCount] = useState(0);

  function getRandomColor(segmentColors) {
    const index = generateRandomIndex(segmentColors);
    const color = availableColors[index];
    const remainingColors = [
      ...availableColors.slice(0, index),
      ...availableColors.slice(index + 1),
    ];
    setAvailableColors(remainingColors);
    return color;
  }

  const handleAddIdeas = function (event) {
    event.preventDefault();
    const newIdea = event.target.elements.idea.value.trim();

    if (ideas.length <= 24) {
      setIdeas((prev) => {
        const newIdeas = [...prev];
        newIdeas.push({
          name: newIdea,
          color: getRandomColor(availableColors),
        });
        return newIdeas;
      });
      event.target.reset();
    } else {
      console.log("Error, trying to add too many ideas");
      setError({
        show: true,
        message: "Adding too many ideas! 24 max!",
      });
    }
  };

  const handleRemoveIdeas = function (ideaIndex) {
    const newIdeas = ideas.filter((_, index) => index !== ideaIndex);
    setIdeas(newIdeas);
  };

  const handleRandomIdea = function () {
    const randomIndex = generateRandomIndex(ideas);
    setRandomIdea({ idea: ideas[randomIndex].name, index: randomIndex });
    return randomIndex;
  };

  const handleSpin = function () {
    if (spinning) {
      return;
    }

    setSpinning(true);

    const winningIndex = handleRandomIdea();

    const randomOffset = Math.random() * 8 + 1.2;

    const percentage = 360 / ideas.length;
    const angle = percentage * winningIndex + percentage / randomOffset;
    let rotation = 360 - angle;

    let randomSpinCount = Math.floor(Math.random() * 3) + 5;

    console.log(randomSpinCount);

    let spins = spinCount + randomSpinCount;

    let spinAmount = rotation + 270 + spins * 360;

    document.getElementById(
      "pie-container"
    ).style.transform = `rotate(${spinAmount}deg)`;

    setSpinCount(spins);

    setTimeout(() => {
      setIsOpen(true);
      setSpinning(false);
    }, 5100);
  };

  return (
    <div>
      <nav className='flex items-center justify-start bg-gray-900 p-4 pl-48'>
        <div className='text-white text-3xl font-bold'>decide.</div>
      </nav>
      <div className='App dark:bg-gray-900 h-screen flex justify-center items-center'>
        {ideas.length >= 1 && (
          <WheelOfFortune
            ideas={ideas}
            onSpin={handleSpin}
            spinning={spinning}
            isOpen={isOpen}
          />
        )}
        <div>
          {ideas.length === 0 && (
            <Status error={error.show} message={error.message} />
          )}
          {error.show && <Status error={error.show} message={error.message} />}
          <div className='max-w-lg w-96 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <form onSubmit={handleAddIdeas}>
              <label
                for='idea'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Add an idea
              </label>
              <div className='relative'>
                <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    stroke='white'
                    strokeWidth={1.5}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    width='22px'
                    height='22px'
                  >
                    <path
                      d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <input
                  id='idea'
                  className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
                  placeholder='Add an idea'
                  required
                />
                <button
                  type='submit'
                  className='text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Add
                </button>
              </div>
            </form>
            <div className='h-[17rem] overflow-y-auto '>
              <IdeasList ideas={ideas} onClick={handleRemoveIdeas} />
            </div>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 h-[100%] w-[100%] bg-black/60"
              : "hidden"
          }
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={
            isOpen
              ? "fixed z-50 top-[40%] left-1/2 right-1/2 flex justify-center"
              : "hidden"
          }
        >
          <div
            id='alert-additional-content-3'
            className='flex flex-col items-center justify-center content-center min-w-[30rem] min-h-[8rem] p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 drop-shadow-2xl backdrop-filter backdrop-brightness-50'
            role='alert'
          >
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Info</span>
              <h3 className='text-3xl font-medium'>{randomIdea.idea}</h3>
            </div>
            <div className='flex'>
              <button
                type='button'
                className='text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white mt-3 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800'
                onClick={() => setIsOpen(false)}
                aria-label='Close'
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
