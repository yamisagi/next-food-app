import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const OrderModal = ({ isOpen, children, setIsOpen }) => {
  const modalRootRef = useRef(null);

  useEffect(() => {
    if (document) {
      modalRootRef.current = document.getElementById('modal');
    }
  }, []);

  return (
    isOpen &&
    ReactDOM.createPortal(
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
        <div className='relative p-8'>{children}</div>
      </div>,
      modalRootRef.current
    )
  );
};

export default OrderModal;
