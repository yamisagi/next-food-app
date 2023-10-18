'use client';
import React, { useContext } from 'react';
import Card from '@/components/UI/Card';
import Button from '@/components/UI/Button';
import OrderContext from '@/context/orderContext';
import OrderModal from '../UI/OrderModal';
import OrderForm from './OrderForm';
const MealItem = ({ meal }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
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
      <OrderModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <OrderForm setModalIsOpen={setModalIsOpen} meal={meal} />
      </OrderModal>
    </Card>
  );
};

export default MealItem;
