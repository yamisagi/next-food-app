'use client';
import React from 'react';
import { DUMMY_MEALS } from '@/constants/strings';
import MealItem from './MealItem';
import OrderModal from '../UI/OrderModal';
import OrderForm from './OrderForm';

const Available = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <section>
      <ul className='grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-12 gap-1 gap-x-1'>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} setModalIsOpen={setModalIsOpen} />
        ))}
      </ul>
      <OrderModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <OrderForm setModalIsOpen={setModalIsOpen} />
      </OrderModal>
    </section>
  );
};

export default Available;
