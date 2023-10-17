import React from 'react';

const Button = ({ title = 'Give me some name' }) => {
  return (
    <button className='cart-button'>
      {title}
      <span className='cart-button__count'>5</span>
    </button>
  );
};

export default Button;
