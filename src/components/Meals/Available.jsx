import React from 'react';
import { DUMMY_MEALS } from '@/constants/strings';
import Card from '../UI/Card';

const Available = () => {
  return (
    <section>
      <ul className='grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-12 gap-1 gap-x-1'>
        {DUMMY_MEALS.map((meal) => (
          <Card key={meal.id}>
            <li key={meal.id} className='list-item'>
              <h3 className='font-semibold text-white'>{meal.name}</h3>
              <p className='text-white/70'>{meal.description}</p>
              <p className='text-white font-bold'>{meal.price}</p>
            </li>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Available;
