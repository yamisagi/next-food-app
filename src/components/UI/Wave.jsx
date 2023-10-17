import React from 'react';

const Wave = () => {
  return (
    <div className='w-full absolute -bottom-4 left-0'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='rgb(185 28 28)'
          fillOpacity='1'
          d='M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,197.3C672,213,768,203,864,186.7C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
