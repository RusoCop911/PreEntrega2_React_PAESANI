import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
  totalItems: 0,
  isCartVisible: false,
};

const CartContext = createContext(initialState);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + action.payload.quantity,
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
