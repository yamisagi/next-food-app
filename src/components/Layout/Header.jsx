import React from 'react';
import CartButton from '../UI/CartButton';
import Wave from '../UI/Wave';
import Link from 'next/link';


const Header = () => {
  return (
    <>
      <header className='header-container'>
        <h1>Next Food</h1>
        <Link href='/cart'>
          <CartButton title='Your cart'/>
        </Link>
      </header>
      <div className='food-img bg-food-image'>
        <Wave />
      </div>
    </>
  );
};

export default Header;
