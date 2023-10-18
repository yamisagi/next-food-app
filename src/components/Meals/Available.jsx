'use client';
import React from 'react';
import { DUMMY_MEALS } from '@/constants/strings';
import MealItem from './MealItem';


const Available = () => {
  return (
    <section>
      <ul className='grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-12 gap-1 gap-x-1'>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>      
    </section>
  );
};

export default Available;
