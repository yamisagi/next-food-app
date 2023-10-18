import React from 'react';

const OrderModal = ({ isOpen, children, setIsOpen }) => {
  return (
    isOpen && (
      <div
        className='modal'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div
          className='absolute inset-0 bg-black bg-opacity-50'
          onClick={() => setIsOpen(false)}
        />
        <div className='relative  p-8'>{children}</div>
      </div>
    )
  );
};

export default OrderModal;
