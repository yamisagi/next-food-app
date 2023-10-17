import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button';
import Wave from '../UI/Wave';
import strings from '@/constants/strings';
const Header = ({}) => {
  return (
    <>
      <header className='header-container'>
        <h1>Next Food</h1>
        <Button title='Your cart' />
      </header>
      <div className='food-img bg-food-image'>
        <Wave />
      </div>
    </>
  );
};

export default Header;
