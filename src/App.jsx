import React from 'react';
import { CartProvider } from './context/CartContext';
import Router from './Router/Router';
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <Router />
      <Cart /> 
    </CartProvider>
  );
}

export default App;
