import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { ReactComponent as Triangle } from "../triangle-down.svg";

const WheelOfFortune = ({ spinning, onSpin, ideas }) => {
  function handleSpinClick() {
    if (spinning) {
      return;
    }

    console.log("Spin clicked");

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
      <button
        className='absolute z-10 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full '
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        onClick={handleSpinClick}
      >
        Spin
      </button>
      <Triangle className='absolute top-4' />
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
