import React from 'react';
import CartButton from '../UI/CartButton';
import Wave from '../UI/Wave';

const Header = ({}) => {
  return (
    <>
      <header className='header-container'>
        <h1>Next Food</h1>
        <CartButton title='Your cart' />
      </header>
      <div className='food-img bg-food-image'>
        <Wave />
      </div>
    </>
  );
};

export default Header;
