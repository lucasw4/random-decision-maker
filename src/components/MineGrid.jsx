import React from "react";

const MineGrid = (props) => {
  return (
    <div className='w-96 h-96 grid grid-cols-4 gap-4 px-4'>
      {props.ideas.map((idea, i) => (
        <div
          key={i}
          className='border-2 border-gray-400 rounded-lg p-4 text-center hover:bg-gray-100 cursor-pointer'
          onClick={props.clickHandler}
        >
          <span role='img' aria-label='mine'>
            💣
          </span>
        </div>
      ))}
    </div>
  );
};

export default MineGrid;
