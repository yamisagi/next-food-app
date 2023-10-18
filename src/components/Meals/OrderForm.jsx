import React, { useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import OrderContext from '@/context/orderContext';

const OrderForm = ({ setModalIsOpen, meal }) => {
  const { addOrder, order } = useContext(OrderContext);
  console.log(order);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    const order = {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity: Number(amount),
    };
    addOrder(order);
    setModalIsOpen(false);
  };
  return (
    <div>
      <form
        className='flex flex-col mx-auto justify-center items-center z-20 relative
          bg-cream/80 rounded-lg shadow-lg p-6 w-96 h-96'
        onSubmit={handleFormSubmit}
      >
        <p className='text-2xl font-bold text-center mb-4'>{meal.name}</p>
        <Input
          input={{
            id: 'amount',
            type: 'number',
            placeholder: 'How many?',
            label: 'Amount',
            min: '1',
            defaultValue: '1',
          }}
        />
        <div className='flex justify-evenly items-center w-full mt-4'>
          <Button title='Add' />
          <Button title='Close' />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
