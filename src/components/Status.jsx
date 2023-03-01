import React from "react";

const Status = (props) => {
  return (
    <div className='bg-gray-900 w-full flex justify-center pb-4'>
      {props.error === true ? (
        <div
          className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative ${
            props.isMobile ? "w-72" : "w-96"
          } flex justify-center`}
          role='alert'
        >
          <strong className='font-bold'>Error:</strong>
          <span className='block sm:inline'>{props.message}</span>
        </div>
      ) : (
        <div
          className={`bg-gray-800 border border-green-300 text-green-400 px-4 py-3 rounded-lg relative ${
            props.isMobile ? "w-72" : "w-96"
          } flex justify-center`}
          role='alert'
        >
          <strong className='font-bold text-xl'>
            Add some ideas to get started...
          </strong>
        </div>
      )}
    </div>
  );
};

export default Status;
