import React from "react";

const IdeasList = (props) => {
  return (
    <ul className='mb-2 w-full text-sm font-medium text-gray-200  border  rounded-lg   bg-gray-700   border-gray-600   '>
      {props.ideas.map((idea, index) => {
        return (
          <li
            key={index}
            className='flex justify-between w-full px-4 py-2 border-b  focus:outline-none focus:ring-2   border-gray-600  '
          >
            {idea.name}
            <button
              type='button'
              className='flex justify-center items-center w-5 h-5 hover:text-purple-600 hover:drop-shadow-lg'
              onClick={() => props.onClick(index)}
            >
              <small className='text-2xl font-bold'>-</small>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IdeasList;
