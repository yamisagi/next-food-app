import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const OrderForm = ({ setModalIsOpen }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        className='flex flex-col mx-auto justify-center items-center z-20 relative
          bg-cream/80 rounded-lg shadow-lg p-6 w-96 h-96'
        onSubmit={handleFormSubmit}
      >
        <Input
          input={{
            id: 'amount',
            type: 'number',
            placeholder: 'How many?',
            label: 'Amount',
            min: '1',
          }}
        />
        <Button
          title='Add'
          onClick={() => {
            setModalIsOpen(false);
          }}
        />
      </form>
    </div>
  );
};

export default OrderForm;
