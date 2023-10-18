import React from 'react';

const Input = ({ input }) => {
  return (
    <>
      <label htmlFor={input.id} className='text-pinky  font-semibold text-lg'>
       {input.label}
      </label>
      <input
        {...input}
        className='bg-pinky/50 p-2 mt-2 mb-5 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-pinky/50 focus:ring-offset-2 focus:ring-offset-pinky/50 placeholder:text-red-950/50
    w-3/4 focus:placeholder:opacity-0'
      />
    </>
  );
};

export default Input;
