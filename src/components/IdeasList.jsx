import React from "react";

const IdeasList = (props) => {
  return (
    <ul className='mb-2 w-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
      {props.ideas.map((idea, index) => {
        return (
          <li
            key={index}
            className='block w-full px-4 py-2 border-b border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:text-white'
          >
            {idea}
          </li>
        );
      })}
    </ul>
  );
};

export default IdeasList;
