import React, { useEffect, useState } from "react";
import IdeasList from "./components/IdeasList";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [randomIdea, setRandomIdea] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddIdeas = function (event) {
    event.preventDefault();
    const newIdea = event.target.elements.idea.value.trim();
    setIdeas([...ideas, newIdea]);
    event.target.reset();
  };

  const handleRandomIdea = function (event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setRandomIdea(ideas[randomIndex]);
  };

  const clickHandler = function (event) {
    handleRandomIdea(event);
    setIsOpen(true);
  };

  return (
    <div className='App dark:bg-gray-900 h-screen flex justify-center items-center'>
      <div className='max-w-lg w-96 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <form onSubmit={handleAddIdeas}>
          <label
            for='idea'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Add an idea
          </label>
          <div className='relative'>
            <input
              id='idea'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
              placeholder='Add an idea'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Add
            </button>
          </div>
        </form>
        <div className='h-[17rem] overflow-y-auto '>
          <IdeasList ideas={ideas} />
        </div>

        <div className='relative flex justify-center top-7'>
          <button
            onClick={clickHandler}
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5'
          >
            Pick Idea
          </button>
        </div>
      </div>
      <div
        className={isOpen ? "fixed h-screen w-screen bg-black/40" : "hidden"}
      ></div>
      <div
        className={
          isOpen
            ? "fixed z-50 top-1/2 left-1/2 right-1/2 flex justify-center"
            : "hidden"
        }
      >
        <div
          id='alert-additional-content-3'
          class='flex flex-col items-center justify-center content-center min-w-[30rem] min-h-[8rem] p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 drop-shadow-2xl backdrop-filter backdrop-brightness-50'
          role='alert'
        >
          <div class='flex items-center'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 mr-2'
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
            <span class='sr-only'>Info</span>
            <h3 class='text-3xl font-medium'>{randomIdea}</h3>
          </div>
          <div class='flex'>
            <button
              type='button'
              class='text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white mt-3 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800'
              onClick={() => setIsOpen(false)}
              aria-label='Close'
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
