'use client';

import React, { useContext } from 'react';
import OrderContext from '@/context/orderContext';

const CartButton = ({ title = 'Give me some name' }) => {
  const { order } = useContext(OrderContext);
  return (
    <button className='button'>
      {title}
      <span className='button__count'>
        {order.length > 0 ? order.length : 0}
      </span>
    </button>
  );
};

export default CartButton;
