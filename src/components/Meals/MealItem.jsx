'use client';
import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const MealItem = ({ meal, setModalIsOpen }) => {
  return (
    <Card key={meal.id}>
      <li key={meal.id} className='list-item'>
        <h3 className='font-semibold text-white'>{meal.name}</h3>
        <p className='text-white/70'>{meal.description}</p>
        <p className='text-white font-bold'>{meal.price.toFixed(2)}$</p>
        <div>
          <Button title='Add to Cart' onClick={() => setModalIsOpen(true)} />
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
