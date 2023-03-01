import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const WheelOfFortune = ({ spinning, onSpin, ideas, isOpen }) => {
  function handleSpinClick() {
    if (spinning) {
      return;
    }

    onSpin();
  }

  let pieClasses;

  const data = ideas.map((idea) => {
    return {
      title: idea.name,
      value: 100 / ideas.length,
      color: idea.color,
    };
  });

  return (
    <div className='relative flex justify-center items-center w-96 h-96 mx-5'>
      {!spinning && !isOpen && (
        <button
          className='absolute z-10 px-4 py-2 font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-full text-sm text-center mr-2 mb-2 '
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={handleSpinClick}
        >
          Spin
        </button>
      )}
      <svg
        aria-hidden='true'
        fill='none'
        stroke='white'
        strokeWidth={2}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-7'
        height='25px'
        width='25px'
      >
        <path
          d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <div
        className='relative flex justify-center items-center w-96 h-96 mx-5 transition-transform ease-in-out duration-[5000ms]'
        style={pieClasses}
        id='pie-container'
      >
        <PieChart
          data={data}
          lineWidth={20}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: "5px",
            fontFamily: "sans-serif",
            fill: "#fff",
          }}
          labelPosition={100}
          radius={40}
          animate={spinning}
          style={pieClasses}
        />
      </div>
    </div>
  );
};

export default WheelOfFortune;
