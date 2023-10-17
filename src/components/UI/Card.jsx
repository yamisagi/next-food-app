import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='bg-red-400 text-white/90 shadow-lg rounded-lg overflow-hidden w-96 p-4 mx-auto text-center z-20 relative'>
      {children}
    </div>
  );
};

export default Card;
