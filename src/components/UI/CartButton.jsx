import React from 'react';

const CartButton = ({ title = 'Give me some name' }) => {
  return (
    <button className='button'>
      {title}
      <span className='button__count'>5</span>
    </button>
  );
};

export default CartButton;
