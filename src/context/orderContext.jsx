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
    console.log(order);
    const total = order.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
    setTotal(total);
  }, [order]);

  const resetOrder = () => {
    setOrder([]);
    setTotal(0);
  };

  const removeOrder = (id) => {
    console.log(id);
    const itemToRemove = order.findIndex((item) => item.id === id);
    setOrder((prev) => {
      const copy = [...prev];
      copy.splice(itemToRemove, 1);
      return copy;
    });
  };

  const decrementOrder = (id) => {
    const newOrderList = order.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setOrder(newOrderList);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addOrder,
        total,
        resetOrder,
        removeOrder,
        decrementOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
