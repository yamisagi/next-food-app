'use client';

import React, { useState, useEffect } from 'react';

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addOrder = (order) => {
    setOrder((prev) => [...prev, order]);
    setTotal((prev) => prev + Number(order.price) * order.quantity);
  };

  useEffect(() => {
    const total = order.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
    setTotal(total);
  }, [order]);

  const resetOrder = () => {
    setOrder([]);
    setTotal(0);
  };

  return (
    <OrderContext.Provider value={{ order, addOrder, total, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
