import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const WheelOfFortune = ({ spinning, onSpin, ideas }) => {
  function handleSpinClick() {
    if (spinning) {
      return;
    }

    onSpin();
  }

  function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  const segmentColors = [
    "#EF4444",
    "#EA580C",
    "#16A34A",
    "#059669",
    "#0369A1",
    "#4338CA",
    "#7E22CE",
    "#BE123C",
    "#BE185D",
    "#CA8A04",
    "#14B8A6",
    "#34D399",
    "#8B5CF6",
    "#7F1D1D",
    "#7C2D12",
    "#78350F",
    "#713F12",
    "#365314",
    "#14532D",
    "#064E3B",
    "#134E4A",
    "#164E63",
    "#0C4A6E",
    "#1E3A8A",
    "#312E81",
  ];

  const colors = [];

  const data = ideas.map((idea) => {
    let pickColor;
    let randomColor = segmentColors[generateRandomIndex(segmentColors)];

    if (!colors.includes(randomColor)) {
      pickColor = randomColor;
      colors.push(randomColor);
    }

    return {
      title: idea,
      value: 100 / ideas.length,
      color: pickColor,
    };
  });

  return (
    <div className='relative flex justify-center items-center w-96 h-96 mx-5'>
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
        animate={false}
      />
      <button
        className='absolute z-10 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full'
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        onClick={handleSpinClick}
      >
        Spin
      </button>
    </div>
  );
};

export default WheelOfFortune;
