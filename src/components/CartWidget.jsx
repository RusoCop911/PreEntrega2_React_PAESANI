import React from 'react';
import { useCart } from '../context/CartContext'; 
import './CSS/CartWidget.css';

const CartWidget = () => {
  const { state, dispatch } = useCart();
  const { totalItems } = state;

  const toggleCart = () => {
    console.log("Botón del carrito clickeado"); 
    dispatch({ type: 'TOGGLE_CART' }); 
  };
  
  return (
    <div className="cart-widget">
      <button onClick={toggleCart} className="cart-icon">🛒</button>
      <div className="cart-widget-number">{totalItems}</div>
    </div>
  );
};

export default CartWidget;
