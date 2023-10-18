'use client';

import Button from '@/components/UI/Button';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import OrderContext from '@/context/orderContext';
import Link from 'next/link';

const Cart = () => {
  const router = useRouter();
  const { order, total, resetOrder, removeOrder, decrementOrder } =
    useContext(OrderContext);

  return (
    <div className='flex flex-col min-h-screen justify-center items-center w-full'>
      <div className='bg-white p-4 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl text-center font-bold mb-4'>Your Cart</h2>
        <ul>
          {order.length === 0 && (
            <li className='flex justify-center items-center mb-2'>
              <div className='flex items-center'>
                <Link href='/'>
                  <p>No items in cart, click here to add some!</p>
                </Link>
              </div>
            </li>
          )}
          {order.map((item) => {
            return (
              <li
                key={item.id}
                className='flex justify-between px-5 items-center mb-2'
              >
                <div className='flex items-center'>
                  <span>{item.name}</span>
                </div>
                <div className='flex items-center justify-between w-1/3'>
                  <div>
                    <span>{item.quantity}</span>
                  </div>
                  <div>
                    <span >x</span>
                    <span className='font-bold mx-2'>{item.price}$</span>
                  </div>
                  {item.quantity > 1 && (
                    <Button
                      title='-'
                      className='w-20'
                      onClick={() => decrementOrder(item.id)}
                    />
                  )}
                  {item.quantity === 1 && (
                    <Button
                      title='X'
                      className='w-20'
                      onClick={() => removeOrder(item.id)}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        {order.length > 0 && (
          <div className='flex justify-between items-center mt-4'>
            <span className='font-bold'>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        )}
        <div className='flex justify-evenly items-center w-full mt-4'>
          <Button
            title='Order'
            onClick={() => {
              router.push('/');
              resetOrder();
            }}
          />
          <Button title='Cancel' onClick={() => router.push('/')} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
