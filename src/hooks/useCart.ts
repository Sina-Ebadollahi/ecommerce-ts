

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleCartIncrement = (productID: number) => {
    dispatch({type: 'INCREMENT_CART', payload: productID});
    navigate(`/Cart`);
  }
  const handleCartDecrement = (productID: number) => {
    dispatch({type: 'DECREMENT_CART', payload: productID});

  }
  return{
      handleCartIncrement,
      handleCartDecrement,
  }
}
